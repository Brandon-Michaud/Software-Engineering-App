var express = require('express');
var router = express.Router();

router.get('/users', function(req, res, next) {
  res.send('A JSON object of users');
});

module.exports = router;
