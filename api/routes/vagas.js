const express = require('express');
const router = express.Router();
const vagasController = require('../controller/vagasController')

const _vagasControler = new vagasController();

router.post('/', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    const response = _vagasControler.create(req.body);
    res.status(200).json(response);
});

module.exports = router;