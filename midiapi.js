// MIDITools-JS
// Created for GeckoGames usage
//
// https://github.com/geckogames/miditools-js
//
window.addEventListener("load", function () {
    var MIDIInterface = function () {
        this.promise = navigator.requestMIDIAccess();
        this.promise.then(function (acc) {
            window.midi.access = acc;
            window.midi.internalFunctionAccessGranted();
        }, function () {
            window.midiStart(false);
        });
        this.internalFunctionAccessGranted = function () {
            var it = this.access.inputs.entries();
            var cango = true;
            while(cango) {
                var input = it.next();
                if(input.value) {
                    var isstr = true;
                    var i = 0;
                    while(isstr) {
                        if(typeof input.value[i] !== "string") {
                            isstr = false;
                            this.input = input.value[i];
                            this.internalFunctionInputReady();
                        }
                        i++;
                    }
                } else {
                    cango = false;
                }
            }
            window.midiStart(true);
        };
        this.internalFunctionInputReady = function () {
            this.input.onmidimessage = function (msg) {
                if(msg.data[0] === 144) {
                    if(notevent) notevent({note: msg.data[1], velocity: msg.data[2], on: true});
                    if(notevents[msg.data[1]]) notevents[msg.data[1]]({note: msg.data[1], velocity: msg.data[2], on: true});
                } else if(msg.data[0] === 128) {
                    if(notevent) notevent({note: msg.data[1], velocity: msg.data[2], on: false});
                    if(notevents[msg.data[1]]) notevents[msg.data[1]]({note: msg.data[1], velocity: msg.data[2], on: false});
                }
            };
        };
        var notevent;
        var notevents = [];
        this.noteEvent = function (evt, noteid) {
            if(noteid) {
                notevents[noteid] = evt;
            } else {
                notevent = evt;
            }
        };
    };
    window.midi = new MIDIInterface();
});
