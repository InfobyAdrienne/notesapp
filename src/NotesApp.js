// class Note {
class NotesApp {
  constructor() {
    this.notes = [];
  }

  allNotes() {
    return this.notes;
  }

  abbreviate(note) {
    return note.slice(0, 19);
  }

  addNote(newNote) {
    return this.notes.push(newNote);
  }
  
};


// console.log(addNote(newNote);


// for (let i = 0; )

// array1.forEach(element => console.log(element));

