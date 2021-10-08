// class Note {
class NotesApp {
  constructor() {
    this.notes = [];
  }

  allNotes() {
    return this.notes;
  }

  abbreviateNote(note) {
    return note.slice(0, 20);
  }

  addNotes(newnote) {
    return this.notes.push(newnote); // change the new note into a string
  }
  
};


// console.log(addNote(newNote);


// for (let i = 0; )

// array1.forEach(element => console.log(element));

