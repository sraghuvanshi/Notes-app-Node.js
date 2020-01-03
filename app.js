const yargs = require("yargs");
const notes = require("./notes");

// adding
yargs.command({
  command: "add",
  describe: "Adds new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    },
    body: {
      describe: "Note Body",
      demandOption: true,
      type: "string"
    }
  },
  handler: function(argv) {
    notes.addNote(argv.title, argv.body);
  }
});

// remove
yargs.command({
  command: "remove",
  describe: "Remove new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    }
  },
  handler: function(argv) {
    notes.removeNote(argv.title);
  }
});

// read
yargs.command({
  command: "read",
  describe: "reading note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    }
  },
  handler: function(argv) {
    notes.readNote(argv.title);
  }
});

// list
yargs.command({
  command: "list",
  describe: "list all notes",
  handler: function() {
    notes.listNotes();
  }
});

yargs.parse();
