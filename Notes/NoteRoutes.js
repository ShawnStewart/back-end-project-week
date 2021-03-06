const express = require('express');
const NoteController = require('./NoteController');

const NoteRouter = express.Router();
const { getNotes, getNote, createNote, deleteNote, updateNote } = NoteController;

NoteRouter.get('/', getNotes);
NoteRouter.get('/:id', getNote);
NoteRouter.post('/', createNote);
NoteRouter.delete('/:id', deleteNote);
NoteRouter.put('/:id', updateNote);

module.exports = NoteRouter;