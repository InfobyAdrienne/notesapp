"use strict";

document.addEventListener("DOMContentLoaded", () => {
  var entryBox = document.getElementById("textbox");

  // generate random number for id of note
  const idGenerator = () => {
    return Math.floor(Math.random() * 1000000);
  };

  // if there are no notes, notesData will be an empty array
  var notesData = JSON.parse(localStorage.getItem("data")) || [];

  document.getElementById("add-note-button").addEventListener("click", newNote);

  createNoteNotice();

  function createNoteNotice() {
    if (notesData.length == 0) {
      let containerDiv = document.querySelector("ul");
      let notesContainer = document.createElement("li");
      containerDiv.appendChild(notesContainer);

      let createNoteNotice = `
    <div class="notes">
    <li>
      <a>
        <p>
        Get started by creating your first entry
        </p>
      </a>
    </li>
    </div>`;
      containerDiv.insertAdjacentHTML("afterbegin", createNoteNotice);
    } else {
      showAllNotes();
    }
  }

  // function for creating a new note, storing it to localStorage
  function newNote() {
    let entry = entryBox.value;

    var noteObject = {
      value: entry,
      id: idGenerator(),
      timestamp: new Date().getTime(),
    };

    notesData.push(noteObject);

    // Save the new note in localStorage
    localStorage.setItem("data", JSON.stringify(notesData));

    // After a new note has been added to localStorage, show all notes
    showAllNotes();
  }

  function removeElementsByClass() {
    const elements = document.getElementsByClassName("notes");
    while (elements.length > 0) {
      elements[0].parentNode.removeChild(elements[0]);
    }
  }

  // Display all the notes from localStorage
  function showAllNotes() {
    // remove already displayed notes from page
    removeElementsByClass();

    let notes = JSON.parse(localStorage.getItem("data"));

    notes.forEach((element) => {
      let containerDiv = document.querySelector("ul");

      // cut down note note if it has more than 15 characters
      if (element.value.length > 15) {
        var notecontents = element.value.slice(0, 15).concat("...");
      } else {
        notecontents = element.value;
      }

      let entryDetails = `
      <div class="notes">
      <li>
        <a>
          <p class="single-sticky-note" id=${element.timestamp}>
        ${notecontents}
          </p>
          <div>
          <i class="fa fa-trash" id=${element.id}></i>
          </div>
        </a>
      </li>
      </div>`;

      containerDiv.insertAdjacentHTML("afterbegin", entryDetails);
      document.getElementById("textbox").value = "";
    });

    dynamicDeleteIcon();
    dynamicSelectIcon();
  }

  var noteId = [];
  // getElementsByClassName returns an array of elements
  function dynamicDeleteIcon() {
    var deleteIcons = document.getElementsByClassName("fa fa-trash");
    // iterate over the array of elements to add an event to each one
    for (var i = 0; i < deleteIcons.length; i++) {
      deleteIcons[i].addEventListener("click", (event) => {
        noteId.push(event.target.id);
        noteId = Number(noteId.join(""));
        deleteNote();
      });
    }
  }

  function deleteNote() {
    var notes = JSON.parse(localStorage.getItem("data"));
    var noteToDelete = notes.find((item) => item.id === noteId);
    var index = notes.indexOf(noteToDelete);
    notes.splice(index, 1);
    localStorage.setItem("data", JSON.stringify(notes));
    noteId = [];

    if (notes.length == 0) {
      location.reload();
    } else {
      showAllNotes();
    }
  }

  var noteTimestamp = [];

  function dynamicSelectIcon() {
    var selectIcons = document.getElementsByClassName("single-sticky-note");
    // iterate over the array of elements to add an event to each one
    for (var i = 0; i < selectIcons.length; i++) {
      selectIcons[i].addEventListener("click", (event) => {
        noteTimestamp.push(event.target.id);
        noteTimestamp = Number(noteTimestamp.join(""));
        // save timestamp of note to localStorage
        localStorage.setItem("notetocollect", JSON.stringify(noteTimestamp));
        loadNewPage();
      });
    }
  }

  function loadNewPage() {
    window.location.href = "full-note-display.html";
  }
});
