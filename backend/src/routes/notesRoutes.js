const bodyParser = require("body-parser");
const cors = require("cors");
const notesController = require("../controllers/notesController");

module.exports = app => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cors());
  
  app.route("/api/v1/notes").get(notesController.list);
  app
    .route("/api/v1/note")
    .get(notesController.get)
    .post(notesController.create)
    .put(notesController.update)
    .delete(notesController.delete);
};
