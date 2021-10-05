'use strict';

function testCircleRadiusDefaultsTo10() {
  const circle = new Circle();

  if (circle.radius !== 10) {
    throw new Error("Circle size is not 10");
  } else {
    console.log('Test passed')
  }

};

testCircleRadiusDefaultsTo10();

// function testNotesShowOnPage() {
//   const notes = [];
// if ()

// }

// function testNoteCharLengthBelow21() {
//   const note = new Note();

//   if (note.length > 20) {
//     throw new Error("Test note > 20 char");
//   } else {
// 		console.log('Test passed')
// 	}
// };




/*
let note = 'Test note > 20 char. this string should fail';
  if (note.length > 20) {
    throw new Error("Title is more than 20 characters");
 } else 
   console.log('Passed test')
 };
*/



