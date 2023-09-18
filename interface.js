"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const notesApp = new NotesApp();

  var textBoxElement = document.getElementById("textbox");

  document.getElementById("add-note-button").addEventListener("click", newNote);

  // randomnumber for key id of note

  function newNote() {
    let containerDiv = document.querySelector("ul");
    let notesContainer = document.createElement("li");

     // random number for id of note
    var randomid = Math.floor((Math.random() * 100000000) + 1)

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

    // Save the name in localStorage
    localStorage.setItem(randomid, entry);
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
