var express = require('express');
const { ObjectId } = require('mongodb');
var router = express.Router();
const User = require('../models/user');

// This route adds a food to the array in the given user's document
router.post('/', (req, res) => {
    User.updateOne({_id: ObjectId(req.body[0]._id)}, {$push:{'foods': req.body[1]}}
      ).catch((err) => {
        console.log(err);
      });
});

module.exports = router;