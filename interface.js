"use strict";

document.addEventListener("DOMContentLoaded", () => {
  var entryBox = document.getElementById("textbox");

  // random number for id of note
  // var id = Math.floor(Math.random() * 100000000 + 1);
  const idGenerator = () =>{
    return Math.floor(Math.random() * 1000000)
}

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
      id: idGenerator(),
      timestamp: new Date().getTime(),
    };

    notesData.push(noteObject);

    console.log(notesData)

    // Save the new note in localStorage
    localStorage.setItem("data", JSON.stringify(notesData));

    // After a new note has been added to localStorage, show all notes 
    showAllNotes();
  }

  function removeElementsByClass(){
    const elements = document.getElementsByClassName("notes");
    while(elements.length > 0){
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
      let notesContainer = document.createElement("li");
      containerDiv.appendChild(notesContainer);

      let entryDetails = `
      <div class="notes">
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

      containerDiv.insertAdjacentHTML("afterbegin", entryDetails);
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
        console.log(noteId);
        noteId.push(event.target.id)
        console.log(noteId);
        noteId = Number(noteId.join(''));
        console.log(noteId);
        // deleteNote()
        noteId = [];
      });


    }
  };

  function deleteNote() {
    console.log("clicked");
    
    console.log(noteId)

    // TO-DO: the id of the clicked note can be found
    // Need a way to getItem and removeItem from local storage using the found id 

    var notes = JSON.parse(localStorage.getItem("data"));

    console.log(notes)

    var noteToDelete = notes.find(item => item.id === noteId);

    console.log(noteToDelete)

    var index = notes.indexOf(noteToDelete);

    console.log(index) 

    //remove object with that index from array

    notes.splice(index, 1);

    localStorage.setItem('data', JSON.stringify(notes));

    // showAllNotes()

    noteId = [];

    console.log(notes)

    // location.reload()

  }

});
