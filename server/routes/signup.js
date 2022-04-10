var express = require('express');
var router = express.Router();
const User = require('../models/user');

router.get('/:email/:password', (req, res) => {
  const user = new User({
    email: req.params.email,
    password: req.params.password
  });

  user.save().then((result) => {
      res.send(result);
  }).catch((err) => {
      console.log(err);
  });
});

module.exports = router;