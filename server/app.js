var express = require('express');
var indexRouter = require('./routes/index');
var loginRouter = require('./routes/login');
var signupRouter = require('./routes/signup');
var apiRouter = require('./routes/api');
var mongoose = require('mongoose');
var app = express();

app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/signup', signupRouter);
app.use('/api', apiRouter);

// Set the listening port
const PORT = 9000;

// Listen on the defined port and log the port to the console
const dbURI = 'mongodb+srv://threeAmangos:cs3203@cluster0.t1uwn.mongodb.net/Project?retryWrites=true&w=majority';
mongoose.connect(dbURI).then((result) => {
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
}).catch((err) => {
  console.log(err);
});