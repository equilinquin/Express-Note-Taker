const path = require('path');
const fs = require('fs');

module.exports = app => {
  app.get("/api/notes", function(reg, res) {
    res.sendFile(path.join(__dirname, "../db/db.json"));
  });

  app.post("/api/notes", function(req, res) {
    let newArr = [];
    const newData = fs.readFileSync("./db/db.json");
    if (newData.length > 0) {
      newArr = JSON.parse(newData);
    }
    const newNote = {
      id: newArr.length + 1,
      title: req.body.title,
      text: req.body.text
    };
    newArr.push(newNote);
    fs.writeFile("./db/db.json", JSON.stringify(newArr), () => {
      console.log("You added a new Note!");
    });
    res.json(newNote);
  });

  app.delete("/api/notes/:id", function(req, res) {
    const deleteNote = req.params.id - 1;
    const newNotes = [];
    let notes = fs.readFileSync("./db/db.json");
    notes = JSON.parse(notes);
    notes.splice(deleteNote, 1);
    for (let i = 0; i < notes.length; i++) {
      notes[i].id = i + 1;
      newNotes.push(notes[i]);
    }
    fs.writeFile("./db/db.json", JSON.stringify(newNotes), () => {
      console.log("You deleted a note.");
    });
    res.json(newNotes);
  });
};

