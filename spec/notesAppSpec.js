'use strict';

function testNoteCharLengthBelow21(note) {
  if (note.length > 20) {
    throw new Error("Test note > 20 char");
  } else {
    console.log('Test passed');
	}
};


// function testNotesShowOnPage() {
//   const notes = [];
// if ()

// }

/*
let note = 'Test note > 20 char. this string should fail';
  if (note.length > 20) {
    throw new Error("Title is more than 20 characters");
 } else 
   console.log('Passed test')
 };
*/
/*
const sum = (a, b) => {
	return a + b
}

const expect = (actual, expected) => {
	if (actual === expected) {
		console.log('Test Passed')
	} else {
		console.log('Test Failed')
	}
}

expect(sum(3,5), 7) // => Test Failed
expect(sum(1,9), 10) // => Test Passed

let testExpect = (actual, expected) => {
  if (actual === expected) {
    console.log("Test Passed")
  } else {
    console.log("Test failed")
  }
};

*/