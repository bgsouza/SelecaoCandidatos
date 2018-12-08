const express = require('express');
const router = express.Router();
const pessoasController = require('../controller/pessoasController')

const _pessoasControler = new pessoasController();

router.post('/', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    const response = _pessoasControler.create(req.body);
    res.status(200).json(response);
});

module.exports = router;