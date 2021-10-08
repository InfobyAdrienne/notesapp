"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const notesApp = new NotesApp();

  var textBoxElement = document.getElementById("textbox");

  document.getElementById("add-note-button").onclick = function () {
    myFunction();
  };

  // let = getNotes = () => {
  //   for (let i = 0; < notesApp.length; ++ i) {
  //     notesApp.addNotes()
  //   }
  // }

  function myFunction() {
    notesApp.addNotes(textBoxElement.value);
    document.getElementById("all-notes").innerHTML +=
      "<li>" + notesApp.abbreviateNote(textBoxElement.value) + "</li>";
  }

  document.getElementById("all-notes").addEventListener("click", showFullNotes);

  function showFullNotes() {
    document.getElementById("all-notes").innerHTML = "<li>" + notesApp.allNotes() + "</li>";
    // window.location = "./full-note-display.html";  
    // document.getElementById("all-notes").innerHTML = notesApp.allNotes();
  }
});
