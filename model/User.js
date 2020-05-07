const mongoose = require('mongoose');

const UserModel = mongoose.model('User', {
    "name": String,
    "address": String,
    "createdAt": Date
});

module.exports = UserModel;
