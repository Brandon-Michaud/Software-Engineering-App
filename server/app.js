var express = require('express');
var indexRouter = require('./routes/index');
var getUserRouter = require('./routes/getUser');
var testServerRouter = require('./routes/testServer')
var apiRouter = require('./routes/api')

var app = express();

app.use('/', indexRouter);
app.use('/user/:email/:password', getUserRouter);
app.use('/testServer', testServerRouter);
app.use('/api', apiRouter);

app.get('/test', (req, res) => {
  res.send('it works');
})

// Set the listening port
const PORT = 9000;

// Listen on the defined port and log the port to the console
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});