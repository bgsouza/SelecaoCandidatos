const express = require('express');
const router = express.Router();
const candidaturasController = require('../controller/candidaturasController')

const _candidaturasControler = new candidaturasController();

router.post('/', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    const response = _candidaturasControler.create(req.body);
    res.status(200).json(response);
});

module.exports = router;