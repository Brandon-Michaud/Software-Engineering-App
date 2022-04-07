var express = require('express');
var router = express.Router();

router.get('/server', function(req, res, next) {
    res.send('Server is working properly');
});

module.exports = router;