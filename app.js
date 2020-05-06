const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.log("middleware 1 called..........");
  next(new Error("Went wrong in middleware2"))
})

app.use((req, res, next) => {
  console.log("middleware 2 called..........");
})

app.use((err, req, res, next) => {
  console.log("middleware 3 called..........", err);
})

module.exports = app;
