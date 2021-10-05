document.addEventListener("DOMContentLoaded", () => {

  const notesapp = new NotesApp();

  document.querySelector('#add-note').addEventListener('click', () => {
    notesapp.addNote();
    document.querySelector('#all-notes').innerText = notesapp.allNotes();
  })

})