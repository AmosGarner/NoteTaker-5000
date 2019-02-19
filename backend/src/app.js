var express = require("express"),
  app = express(),
  port = process.env.PORT || 3000;

var routes = require("./routes/notesRoutes");
routes(app);

app.listen(port);
