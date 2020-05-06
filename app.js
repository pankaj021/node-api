const express = require('express');
const bodyParser = require('body-parser');
const morgon = require('morgan')

const indexRouter = require('./routes')
const userRouter = require('./routes/users')

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

app.use('/', indexRouter)
app.use('/users', userRouter)

app.use((err, req, res, next) => {
  console.log("Error middleware, since it has 4 params::::", err);
})

module.exports = app;
