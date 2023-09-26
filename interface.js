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

    let entryDetails = `<li>
        <a href="#">
          <p id="single-sticky-note">
          ${lastElement.value}
          </p>
          <i id="delete-note" class="fa fa-trash-o"></i>
          </a>
      </li>`;

    containerDiv.insertAdjacentHTML("afterbegin", entryDetails);
    document.getElementById("textbox").value = "";
  }

  // Display all the notes from localStorage
  function showAllNotes() {
    let notes = JSON.parse(localStorage.getItem("data")).reverse();

    notes.forEach((element) => {

      let containerDiv = document.querySelector("ul");
      let notesContainer = document.createElement("li");
      containerDiv.appendChild(notesContainer);

      let entryDetails = `
      <li>
        <a href="#">
          <p id="single-sticky-note">
          ${element.value}
          </p>
          <i id="delete-note" class="fa fa-trash-o"></i>
          </a>
      </li>`;

      containerDiv.insertAdjacentHTML("beforeend", entryDetails);
      document.getElementById("textbox").value = "";
    });
  }

    // .slice(0, 17).concat("...")

    // notesObj.forEach(function (element, index) {
    //   html += `
    //       <div class="note">
    //           <p class="note-counter">Note ${index + 1}</p>
    //           <h3 class="note-title"> ${element.title} </h3>
    //           <p class="note-text"> ${element.text}</p>
    //           <button id="${index}"onclick="deleteNote(this.id)" class="note-btn">Delete Note</button>
    //           <button id="${index}"onclick="editNote(this.id)" class="note-btn edit-btn">Edit Note</button>
    //       </div>
    //           `;
    // });

    // let notesElm = document.getElementById("notes");

    // if (notesObj.length != 0) {
    //   notesElm.innerHTML = html;
    // } else {
    //   notesElm.innerHTML = `No Notes Yet! Add a note using the form above.`;
    // }

  // getElementsByClassName returns an array of elements
  var deleteIcons = document.getElementsByClassName("fa fa-trash-o")

  // iterate over the array of elements to add an event to each one
  // figure out event listener for dynamically created element 
  for (var i = 0; i < deleteIcons.length; i++) {
    deleteIcons[i].addEventListener("click", deleteNote);
  }

  function deleteNote() {
    console.log("clicked");
  }

});
