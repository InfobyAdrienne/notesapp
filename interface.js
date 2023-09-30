"use strict";

document.addEventListener("DOMContentLoaded", () => {
  var entryBox = document.getElementById("textbox");

  // random number for id of note
  var id = Math.floor(Math.random() * 100000000 + 1);

  // if there are no notes, notesData will be an empty array
  var notesData = JSON.parse(localStorage.getItem("data")) || [];

  document.getElementById("add-note-button").addEventListener("click", newNote);

  // if there are no notes send a message to user 
  // TO-DO: create a pop up telling user to create a note 
  if (notesData.length == 0) {
    console.log("create your first note")
  } else {
    showAllNotes();
  }

  // function for creating a new note, storing it to localStorage
  function newNote() {
    let entry = entryBox.value;

    var noteObject = {
      value: entry,
      id: id,
      timestamp: new Date().getTime(),
    };

    notesData.push(noteObject);

    console.log(notesData)

    // Save the new note in localStorage
    localStorage.setItem("data", JSON.stringify(notesData));

    displayNewNote();
  }

  // After a new note has been added to localStorage,
  // display the new note in addition to the already stored notes

  
  function displayNewNote() {
    let notes = JSON.parse(localStorage.getItem("data"));

    let lastElement = notes[notes.length - 1];

    let containerDiv = document.querySelector("ul");
    let notesContainer = document.createElement("li");
    
    containerDiv.appendChild(notesContainer);

    let entryDetails = `
    <div id=${lastElement.id}>
    <li>
        <a href="#">
          <p id="single-sticky-note">
          ${lastElement.value}
          </p>
          <i class="fa fa-trash"></i>
      </a>
      </li>
      </div>`;

    containerDiv.insertAdjacentHTML("afterbegin", entryDetails);
    document.getElementById("textbox").value = "";

    dynamicDeleteIcon()
  }


  // Display all the notes from localStorage
  function showAllNotes() {
    let notes = JSON.parse(localStorage.getItem("data")).reverse();

    notes.forEach((element) => {

      let containerDiv = document.querySelector("ul");
      let notesContainer = document.createElement("li");
      containerDiv.appendChild(notesContainer);

      let entryDetails = `
      <div>
      <li>
        <a href="#">
          <p id="single-sticky-note">
          ${element.value}
          </p>
          <div>
          <i class="fa fa-trash" id=${element.id}></i>
          </div>
        </a>
      </li>
      </div>`;

      containerDiv.insertAdjacentHTML("beforeend", entryDetails);
      document.getElementById("textbox").value = "";
    });

    dynamicDeleteIcon()
  }

  var noteId = [];
  // getElementsByClassName returns an array of elements
  function dynamicDeleteIcon() {
    var deleteIcons = document.getElementsByClassName("fa fa-trash")
  // iterate over the array of elements to add an event to each one
    for (var i = 0; i < deleteIcons.length; i++) {
      deleteIcons[i].addEventListener("click", (event) => {
        noteId.push(event.target.id)
        deleteNote()
      });
    }
  };



  function deleteNote() {
    console.log("clicked");

   noteId = Number(noteId.join(''));

    console.log(noteId)

// TO-DO: the id of the clicked note can be found
// Need a way to getItem and removeItem from local storage using the found id 
    
    noteId = [];

    // let notes = JSON.parse(localStorage.getItem("data", id));

    // showAllNotes()
  };


});
