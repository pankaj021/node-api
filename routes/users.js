const express = require('express');
const router = express.Router();
const UserModel = require('../model/User');

router.get('/', async(req, res, next) => { // READ
    console.log("Finding all users from User collection......");
    const allUsers = await UserModel.find();
    res.send(allUsers);
})

router.get('/:userId', async(req, res, next) => { // READ by id
    console.log("Finding one user from User collection......");
    const user = await UserModel.findById(req.params.userId)
    res.send(user);
})

router.post('/', async(req, res, next) => { //CREATE
    console.log("Inserts one user document in User collection......");
    const now = new Date();
    const userDoc = new UserModel({
        ...req.body,
        "createdAt": now,
        "updateAt": now
    })
    const createdUser = await userDoc.save();
    console.log("user is created in User collection......", createdUser);
    res.send(createdUser);
})

router.put('/:userId', async(req, res, next) => { // full UPDATE
    console.log("Updates one user document in User collection......");
    const now = new Date();
    const updatedUser = await UserModel.findByIdAndUpdate({
        _id: req.params.userId
    }, {
        ...req.body,
        "updateAt": now
    }, {new: true});
    res.send(updatedUser);
})

router.patch('/:userId', async(req, res, next) => {
    console.log("Patches one user document in User collection......");
    const now = new Date();
    const updatedUser = await UserModel.findByIdAndUpdate({
        _id: req.params.userId
    }, {
        ...req.body,
        "updateAt": now
    }, {new: true})
    res.send(updatedUser)
})

router.delete('/:userId', async(req, res, next) => { // DELETE
    console.log("deleting one user document from User collection......");
    const deletedUser = await UserModel.findByIdAndDelete(req.params.userId)
    res.send(deletedUser)
})

module.exports = router;