const router = require('express').Router();
const composeNote = require('../helpers/fsPath');
var fs = require('fs');
const { notes } = require('../db/db.json');
const { v4: uuidv4 } = require('uuid');

router.get('/notes', (req, res) => {
  let results = notes;
  res.json(results);
  //fs.readFile(notes).then((data) => res.json(JSON.parse(data)));
});

router.post('/notes', (req, res) => {
  req.body.id = uuidv4();
  const newNote = composeNote(req.body, notes);
  res.json(newNote);
});

module.exports = router;
