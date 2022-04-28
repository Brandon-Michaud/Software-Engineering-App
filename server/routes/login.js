var express = require('express');
var router = express.Router();
const User = require('../models/user');

// This route queries the user database for the email, ensures the passwore matches, and then responds with the user object
router.get('/:email/:password', (req, res) => {
  User.find({
    email: req.params.email
  }).then((result) => {
    if (result[0].password === req.params.password) {
      res.send(result[0]);
    }
    else {
      res.send("Incorrect Password")
    }
  }).catch((err) => {
    console.log(err);
  });
});

module.exports = router;
