const mongoose = require('mongoose');

const UserModel = mongoose.model('User', {
    "name": String,
    "address": String,
    "gender": String,
    "createdAt": Date,
    "updateAt": Date
});

module.exports = UserModel;
