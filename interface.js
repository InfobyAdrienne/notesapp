'use strict';

document.addEventListener("DOMContentLoaded", () => {

  const notesApp = new NotesApp();

  document.querySelector('#add-note').addEventListener('click', () => {
    notesApp.addNotes();
    document.querySelector('#all-notes').innerText += notesApp;
  })

})