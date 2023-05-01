const express = require('express')
const app = express()

const jsonFile = require("./chefs.json")
const port = 5000

app.get('/', (req, res) => {
  res.send("Server is running 🔥")
})

app.get('/all', (req, res) => {
  res.send(jsonFile)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})