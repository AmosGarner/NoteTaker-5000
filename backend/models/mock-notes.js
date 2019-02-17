const Note = require('./note');

module.exports = JSON.stringify(
  [
    new Note(1, 'Note 1', "This is note 1's body"),
    new Note(1, 'Note 2', "This is note 2's body"),
    new Note(1, 'Note 3', "This is note 3's body"),
    new Note(1, 'Note 4', "This is note 4's body"),
    new Note(1, 'Note 5', "This is note 5's body")
  ]
);
