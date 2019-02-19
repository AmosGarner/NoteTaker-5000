const NOTES = require("../mocks/mock-notes");

const getNotes = () => {
  return JSON.parse(NOTES);
};

module.exports = {
  getNotes
};
