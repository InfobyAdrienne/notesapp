"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const notesApp = new NotesApp();

  var textBoxElement = document.getElementById("textbox");

  document.getElementById("add-note-button").onclick = function () {
    myFunction();
  };

  function convert() {
    var input = document.getElementById('inputText').value;
    var output = emojione.shortnameToImage(input);
    document.getElementById('outputText').innerHTML = output;
  }

  function myFunction() {
    notesApp.addNotes(textBoxElement.value);
    document.getElementById("all-notes").innerHTML +=
      "<ul>" + notesApp.abbreviateNote(textBoxElement.value) + "</ul>";
      document.getElementById("textbox").value=""
  }

  document.getElementById("all-notes").addEventListener("click", showFullNote);

  // showing the full note 
  function showFullNote() {
    document.getElementById("all-notes").innerHTML = "<ul>" + notesApp.allNotes().join("<br>") + "</ul>";
    // window.location.href = "./full-note-display.html";  
    // document.getElementById("all-notes").innerHTML = notesApp.allNotes();
  }

});
