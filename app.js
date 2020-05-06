const express = require('express');
const bodyParser = require('body-parser');
const morgon = require('morgan')

const app = express();
const logger = morgon('dev')

app.use(bodyParser.json())
app.use(logger)

app.use((req, res, next) => {
  console.log("inspecting request.....");
  console.log("req.method::::::::::::::::::", req.method);
  console.log("req.url::::::::::::::::::", req.url);
  console.log("req.query::::::::::::::::::", req.query);
  console.log("req.body:::::::::::::::::", req.body);
  next()
})

app.use('/by-paas-for-user', (req, res, next) => {
  console.log("Index route hit.........");

  switch (req.method) {
    case 'GET':
      res.send("INDEX ROUTE GET");
      break;
    case 'POST':
      res.send("INDEX ROUTE POST");
      break;
    default:
      res.send("INDEX ROUTE *");
      break;
  }
})

app.use('/users', (req, res, next) => {
  console.log("User route hit.........");

  switch (req.method) {
    case 'GET':
      res.send("USERS ROUTE GET");
      break;
    case 'POST':
      res.send("USERS ROUTE POST");
      break;
    default:
      res.send("USERS ROUTE *");
      break;
  }
})

app.use((err, req, res, next) => {
  console.log("Error middleware, since it has 4 params::::", err);
})

module.exports = app;
