const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json())

app.use((req, res, next) => {
  console.log("inspecting request.....");
  console.log("req.method::::::::::::::::::", req.method);
  console.log("req.url::::::::::::::::::", req.url);
  console.log("req.query::::::::::::::::::", req.query);
  console.log("req.body:::::::::::::::::", req.body);
  next()
})

app.use((req, res, next) => {
  console.log("responding to client request.....");
  res.send("SUCCESS RESPONSE");
})

app.use((err, req, res, next) => {
  console.log("Error middleware, since it has 4 params::::", err);
})

module.exports = app;
