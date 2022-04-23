var express = require('express');
var router = express.Router();
const User = require('../models/user');

router.get('/:email/:password/:gender/:age/:height/:weight/:activity', (req, res) => {
  
  const user = new User({
    email: req.params.email,
    password: req.params.password,
    gender: req.params.gender,
    age: req.params.age,
    height: req.params.height,
    weight: req.params.weight,
    activity: req.params.activity
  });

  user.save().then((result) => {
      res.send(result);
  }).catch((err) => {
      console.log(err);
  });
});

module.exports = router;