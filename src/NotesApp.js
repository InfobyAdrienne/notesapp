// class Note {
class NotesApp {
  constructor() {
    this.notes = [];
  }
  
  // showing all the notes 
  allNotes() {
    return this.notes;
  }

  // showing the sbbreviated notes 
  abbreviateNote(note) {
    return note.slice(0, 20);
  }

  // creating a new note 
  addNotes(newnote) {
    return this.notes.push(newnote); // change the new note into a string
  }


};


// console.log(addNote(newNote);


// for (let i = 0; )

// array1.forEach(element => console.log(element));

