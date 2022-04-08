var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;

router.get('/user/:email/:password', async (req, res) => {
  try {
    const email = req.params.email;
    const password = req.parmas.password;

    const client = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser : true });
    const db = client.db('db');

    const userInfo = await db.collection('Users').findOne({ email: email });
    res.status(200).json(userInfo);

    client.close();
  } 
  catch (error) {
    res.status(500).json({ message: 'Error connecting to db', error});
  }
});

module.exports = router;
