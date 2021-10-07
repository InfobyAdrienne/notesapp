"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const notesApp = new NotesApp();

  var textBoxElement = document.getElementById("textbox");

  document.getElementById("add-note-button").onclick = function () {
    myFunction();
  };

  function myFunction() {
    notesApp.addNotes(textBoxElement.value);
    document.getElementById("all-notes").innerHTML +=
      "<li>" + textBoxElement.value.slice(0, 20) + "</li>";
  }

  document.getElementById("all-notes").addEventListener("click", showFullNotes);

  function showFullNotes() {
    window.location = "./full-note-display.html";  
    // document.getElementById("all-notes").innerHTML = notesApp.allNotes();
  }
});
