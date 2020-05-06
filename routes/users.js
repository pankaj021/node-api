const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.send("USERS ROUTE GET");
})

router.post('/:adhaarParam', (req, res, next) => {
    console.log("req.params:::::::::::", req.params);
    res.send("USERS ROUTE POST");
})

module.exports = router;