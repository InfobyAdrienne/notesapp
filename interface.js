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

    console.log("---NEW NOTE---")
    console.log(typeof noteObject);

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
          <i id="delete-note" class="fa fa-trash-o"></i>
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
      <div id=${element.id}>
      <li>
        <a href="#">
          <p id="single-sticky-note">
          ${element.value}
          </p>
          <i id="delete-note" class="fa fa-trash-o"></i>
          </a>
      </li>
      </div>`;

      containerDiv.insertAdjacentHTML("beforeend", entryDetails);
      document.getElementById("textbox").value = "";
    });

    dynamicDeleteIcon()
  }

  // getElementsByClassName returns an array of elements
  function dynamicDeleteIcon() {
    var deleteIcons = document.getElementsByClassName("fa fa-trash-o")


  
  // iterate over the array of elements to add an event to each one
  // figure out event listener for dynamically created element 
    for (var i = 0; i < deleteIcons.length; i++) {
      deleteIcons[i].addEventListener("click", deleteNote);
      
    }
  };

  function deleteNote() {
    console.log("clicked");
    let notes = JSON.parse(localStorage.getItem("data"))

    console.log(notes)

    let index = notes.findIndex(item => item.id === 41574665);

    // console.log(index)

  }
});
