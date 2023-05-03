const express = require("express");
var cors = require('cors')
const app = express();

const jsonFile = require("./chefs.json");
const port = 5000;

app.use(cors())

app.get("/", (req, res) => {
  res.send("Server is running 🔥");
});

app.get("/all", (req, res) => {
  res.send(jsonFile);
});

app.get("/all/:id", (req, res) => {
  const id = req.params.id;
  const recepies = jsonFile.find((each) => each.id == id);
  res.send(recepies);
});

app.get("/all/:id/recepies", (req, res) => {
  const id = req.params.id;
  const obj = jsonFile.find((each) => each.id == id);
  const allrecepies = obj.recipes.map(each=> each)
  res.send(allrecepies);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
