/* MIDITools-JS Test Script */
midiStart = function (status) {
    if(status) {
        console.log("MIDI Is Ready.");
        midi.noteEvent(function (e) {
            if(e.on) document.body.style.background = "#000";
            else document.body.style.background = "#fff";
        });
        midi.noteEvent(function (e) {
            if(e.on) document.body.style.background = "#0f0";
        }, 81);
    } else {
        console.log("MIDI Not Working.");
    }
};
