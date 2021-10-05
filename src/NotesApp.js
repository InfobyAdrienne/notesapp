// class Note {
class Note {
  constructor() {
    this.notepad= [];
  }

  abbreviate(note) {
    return note.slice(0, 19)
  }
};



// if array[-1] == note

// Test 3


// function testNotesExistInNotepad() {
  
//   if (/*notepad.isArray()*/) {
//     console.log('Test passed');
//   } else {
//     throw new Error("This Notepad is empty (Empty Array)")
//   }
// };


//Test 2
var note = ["12378tgdfdwd"]

function testNotePrints(note) {
  
  if (Array.isArray(note)) {
    console.log(note[0]);
  } else {
    throw new Error("This is not an array of notes")
  }
};

testNotePrints(note)

//Test 1
var note = ['12378tgdfdwd']

function testNoteCharLengthBelow21(note) {

  if (note[0].length > 20) {
    throw new Error("Test note > 20 char");
  } else {
		console.log('Test passed')
	}
};

testNoteCharLengthBelow21(note);

// for (let i = 0; )
// // for each note in the Notes array, print the first 20 characters

// // console.log(note.length);

// let note = 'Test note > 20 char. this string should fail';
// testNoteCharLengthBelow21();

// const array1 = ['a', 'b', 'c'];

// array1.forEach(element => console.log(element));

// list = [note1, note2, note3]
// note1.length == 20

// abbrfunction = note.slice(0,19)


