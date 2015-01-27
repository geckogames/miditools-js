# MIDITools-JS
MIDITools-JS is a simple script to interface with the not-mostly-supported web audio api. It is very easy to interface with MIDI devices through this API.

## Including
To include this script in your project, put it BEFORE any other script includes in your web document.

## The midiStart event
The `midiStart` event is called when MIDITools is ready to start listening for MIDI events. The only argument of midiStart is `status`. If `status` is true, than the midi is ready to listen.

## noteEvents
noteEvents are called when a note is either pressed down or released. A noteEvent callback can be created by calling `midi.noteEvent` with the first argument being the callback function and the second optional argument being the note you want the callback to be called for (default all notes). The noteEvent callback is passed an event object, containing the boolean value `on` (true if the note was pressed, false if it was released), the integer `note` (containing the MIDI note ID), and the integer `velocity` (containing the MIDI note press velocity).