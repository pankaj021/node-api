const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.send("INDEX ROUTE GET");
})

router.post('/', (req, res, next) => {
    res.send("INDEX ROUTE POST");
})

module.exports = router;