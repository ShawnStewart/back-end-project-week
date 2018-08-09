const mongoose = require("mongoose");
const Bcrypt = require("bcrypt");

const NoteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  contents: {
    type: String,
    required: true
  }
});

const Note = mongoose.model("notes", NoteSchema);

module.exports = Note;
