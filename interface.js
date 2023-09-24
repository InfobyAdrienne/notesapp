"use strict";

document.addEventListener("DOMContentLoaded", () => {
  var entryBox = document.getElementById("textbox");

  // random number for id of note
  var id = Math.floor(Math.random() * 100000000 + 1);

  let notesData = JSON.parse(localStorage.getItem("data")) || [];

  document.getElementById("add-note-button").addEventListener("click", newNote);

  showAllNotes();

  // function for creating a new note, storing it to localStorage
  function newNote() {
    let entry = entryBox.value;

    var noteObject = {
      value: entry,
      id: id,
      timestamp: new Date().getTime(),
    };

    notesData.push(noteObject);

    // Save the note in localStorage with the key value of id
    localStorage.setItem("data", JSON.stringify(notesData));

    showAllNotes();
  }

  // function to display all the notes from localStorage
  function showAllNotes() {
    let notes = localStorage.getItem("data");

    console.log(typeof notes);
    console.log(notes);

    let containerDiv = document.querySelector("ul");
    let notesContainer = document.createElement("li");
    containerDiv.appendChild(notesContainer);
    
    // TO-DO: figure out how to map through an object of arrays 
    const notesbyValues = notes.map((item) => {
      return item.value
    });

    console.log(notesbyValues);

    let entryDetails = `<li>
      <a href="#">
          <p id="single-sticky-note">
     ${notesbyValues}
      </p>
      </a>
      </li>`;

    // .slice(0, 17).concat("...")
    containerDiv.insertAdjacentHTML("beforeend", entryDetails);
    document.getElementById("textbox").value = "";

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
  }
});
