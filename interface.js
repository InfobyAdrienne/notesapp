"use strict";

import('https://unpkg.com/@joeattardi/emoji-button@4.6.0/dist/index.js')

document.addEventListener("DOMContentLoaded", () => {
  const notesApp = new NotesApp();

  var textBoxElement = document.getElementById("textbox");

  document.getElementById("add-note-button").addEventListener("click", newNote);
  
  // being able to type text in the text area, click add and have it show up
  function newNote() {
    notesApp.addNotes(textBoxElement.value);
    document.getElementById("all-notes").innerHTML +=
      "<ul>" + notesApp.abbreviateNote(textBoxElement.value) + "</ul>";
    document.getElementById("textbox").value = ""
  }

  document.getElementById("all-notes").addEventListener("click", showFullNote);

  // showing the full note in a new window
  function showFullNote() {
    document.getElementById("all-notes").innerHTML = "<ul>" + notesApp.allNotes().join("<br>") + "</ul>";
    // window.location.href = "./full-note-display.html";  
    // document.getElementById("all-notes").innerHTML = notesApp.allNotes();
  }

  // Be able to select emojis using the emoji-button
  const picker = new EmojiButton();

  const button = document.getElementById('emoji-button');

  const textbox = document.getElementById('textbox');

  picker.on('emoji', selection => {
    // `selection` object has an `emoji` property containing the selected emoji
    textbox.value += selection.emoji
  });
  
  button.addEventListener('click', () => {
    picker.togglePicker(button);
  });
});
