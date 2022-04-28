const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// This is represents all of the data we wish to collect about users
const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: false
    },
    age: {
        type: Number,
        required: false
    },
    height: {
        type: Number,
        required: false
    },
    weight: {
        type: Number,
        required: false
    },
    activity: {
        type: Number,
        required: false
    },
    foods: {
        type: Array,
        required: false,
        "default": []
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;