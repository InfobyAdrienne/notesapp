"use strict";

let testExpect = (actual, expected) => {
  if (actual === expected) {
    console.log(`Test Passed: ${actual} + ${expected}`);
  } else {
    console.log(`Test Failed: ${actual} + ${expected}`);
  }
};

let notesApp = new NotesApp();

testExpect(notesApp.allNotes.length, 0);

notesApp = new NotesApp();
let abbreviateNote = notesApp.abbreviateNote(["Test string Test 0001"]);
testExpect(abbreviateNote[0].slice(0, 20), "Test string Test 000");

notesApp = new NotesApp();
notesApp.addNotes("Learn more JS");
notesApp.addNotes("Learn more Ruby");
let AllNotes = notesApp.allNotes()
testExpect(AllNotes[0], "Learn more JS");
testExpect(AllNotes[1], "Learn more Ruby");


//Test 2
// function testAllNotesPrint(notesapp) {
//   if (Array.isArray(notesapp)) {
//     console.log(notesapp.join("\r\n"));
//   } else {
//     throw new Error("This is not an array of notes");
//   }
// }
// testAllNotesPrint(notesapp);

//Test 3
// function testFirstNotePrints(note) {
//   if (Array.isArray(note)) {
//     console.log(note[0].slice(0, 19));
//   } else {
//     throw new Error("This is not a note");
//   }
// }
// testFirstNotePrints(note);

// Test 4
//let notesApp = new NotesApp();

//Test 4
// function testNoteCharLengthBelow21(note) {
//   if (note[0].length > 20) {
//     throw new Error("Test note > 20 char");
//   } else {
// 		console.log('Test passed')
// 	}
// };

// testNoteCharLengthBelow21(note);
