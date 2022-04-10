var express = require('express');
var router = express.Router();
const User = require('../models/user');

router.get('/:email/:password', (req, res) => {
  User.find({
    email: req.params.email
  }).then((result) => {
    res.send(result);
  }).catch((err) => {
    console.log(err);
  });
});

module.exports = router;
