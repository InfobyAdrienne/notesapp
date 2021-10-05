// class Note {
let note = ['qwertyuiohhhhhhhhhh']

function testNoteCharLengthBelow21(note) {

  if (note[0].length > 20) {
    throw new Error("Test note > 20 char");
  } else {
		console.log('Test passed')
	}
};

console.log(testNoteCharLengthBelow21(note));

// for (let i = 0; )
// // for each note in the Notes array, print the first 20 characters

// // console.log(note.length);

// let note = 'Test note > 20 char. this string should fail';
// testNoteCharLengthBelow21();





