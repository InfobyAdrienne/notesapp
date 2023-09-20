"use strict";

document.addEventListener("DOMContentLoaded", () => {
  // const notesApp = new NotesApp();

  var entryBox = document.getElementById("textbox");
    
  document.getElementById("add-note-button").addEventListener("click", newNote);

  // function for creating a new note, storing it to localStorage, 
  // and displaying it on the page
  function newNote() {
    let containerDiv = document.querySelector("ul");
    let notesContainer = document.createElement("li");
    containerDiv.appendChild(notesContainer);

    let entry = entryBox.value;

    var noteObject = {
      value: entry,
      timestamp: new Date().getTime()
    };

    let entryDetails = 
      `<li>
      <a href="#">
          <p id="single-sticky-note">${entry.slice(0, 17).concat("...")}</p>
      </a>
      </li>`
    
    containerDiv.insertAdjacentHTML('beforeend', entryDetails);
    document.getElementById("textbox").value = "";

    // random number for id of note
    var id = Math.floor((Math.random() * 100000000) + 1);
    
    // Save the note in localStorage with the key value of id
    localStorage.setItem(id, JSON.stringify(noteObject));
  }

  // TO-DO: see the existing notes when the page is refreshed 
  // function showAllNotes() {

  //   var data = JSON.parse(localStorage.getItem(noteObject));

  //   console.log(data)
  // }

  document.getElementById("all-notes").addEventListener("click", showFullNote);

  // showing the full note in a new window
  function showFullNote() {
    document.getElementById("all-notes").innerHTML =
      "<ul>" + notesApp.allNotes().join("<br>") + "</ul>";
    // window.location.href = "./full-note-display.html";
    // document.getElementById("all-notes").innerHTML = notesApp.allNotes();
  }
});
