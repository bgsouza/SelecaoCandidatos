const express = require('express');
const router = express.Router();
const indexControler = require('../controller/indexControler')

const _indexController = new indexControler();
/* GET home page. */
router.get('/', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(_indexController.getHome());
    //next()
});

module.exports = router;