const fs = require("fs");
const chalk = require("chalk");

// Adding
const addNote = (title, body) => {
  const notes = loadNotes();

  const duplicateNote = notes.find(note => note.title === title);

  debugger
  
  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body
    });

    saveNote(notes);
    console.log(chalk.bgGreen.black("Note added successfuly"));
  } else {
    console.log(chalk.bgRed.black("Note title already exist!"));
  }
};

// Removing
const removeNote = title => {
  const notes = loadNotes();

  const notesToKeep = notes.filter(note => note.title != title);

  if (notes.length > notesToKeep.length) {
    saveNote(notesToKeep);
    console.log(chalk.bgGreen.black("Note removed successfuly"));
  } else {
    console.log(chalk.bgRed.black("Note doesn't exist"));
  }
};

// listing
const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.blue.inverse("Your Notes:"));
  notes.forEach(note => console.log(note.title));
};

// read
const readNote = title => {
  const notes = loadNotes();
  const noteToRead = notes.find(note => note.title === title);

  if (noteToRead) {
    console.log(chalk.yellow(noteToRead.title));
    console.log(chalk.blue(noteToRead.body));
  } else {
    console.log(chalk.bgRed.black("Note doesn't exist"));
  }
};

const saveNote = notes => {
  const notesJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", notesJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = JSON.parse(dataBuffer);
    return dataJSON;
  } catch (e) {
    return [];
  }
};

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote
};
