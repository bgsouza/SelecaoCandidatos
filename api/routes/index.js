const express = require('express');
const router = express.Router();
const indexControler = require('../controller/indexControler')

const _indexController = new indexControler();
/* GET home page. */
router.get('/', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ a: 1 }, null, 3));
});

module.exports = router;