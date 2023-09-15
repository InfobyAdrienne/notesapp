"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const notesApp = new NotesApp();

  var textBoxElement = document.getElementById("textbox");

  document.getElementById("add-note-button").addEventListener("click", newNote);

  function newNote() {
    let containerDiv = document.querySelector("ul");
    let notesContainer = document.createElement("li");
  
    containerDiv.appendChild(notesContainer);
    
    let entry = document.getElementById('textbox').value 
    
    let entryDetails = 
      `<li>
      <a href="#">
          <p id="single-sticky-note">${entry}</p>
      </a>
      </li>`
    
    containerDiv.insertAdjacentHTML('beforeend', entryDetails);
    document.getElementById("textbox").value = "";
  }


  document.getElementById("all-notes").addEventListener("click", showFullNote);

  // showing the full note in a new window
  function showFullNote() {
    document.getElementById("all-notes").innerHTML =
      "<ul>" + notesApp.allNotes().join("<br>") + "</ul>";
    // window.location.href = "./full-note-display.html";
    // document.getElementById("all-notes").innerHTML = notesApp.allNotes();
  }
});
