const express = require("express");
const remove = require("./routes/deleteNote");
const html = require('./routes/html');
const open = require('./routes/apiNote');
const save = require('./routes/saveNote');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/index.html"));
app.use(express.static(__dirname + "/notes.html"));

require("./routes/deleteNote")(rem)
require("./routes/html")(app)
require("./routes/apiNote")(open)
require("./routes/saveNote")(save)

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });