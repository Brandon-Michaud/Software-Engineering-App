var express = require('express');
var loginRouter = require('./routes/login');
var signupRouter = require('./routes/signup');
var apiRouter = require('./routes/api');
var addFoodRouter = require('./routes/addFood');
var mongoose = require('mongoose');
var cors = require('cors')
var app = express();

// Define routers and uses
app.use(cors())
app.use(express.json({limit: '25mb'}))
app.use('/login', loginRouter);
app.use('/signup', signupRouter);
app.use('/api', apiRouter);
app.use('/addFood', addFoodRouter);

// Set the listening port
const PORT = 9000;

// Connect to the database and once connected listen on the specified port
const dbURI = 'mongodb+srv://threeAmangos:cs3203@cluster0.t1uwn.mongodb.net/Project?retryWrites=true&w=majority';
mongoose.connect(dbURI).then((result) => {
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
}).catch((err) => {
  console.log(err);
});