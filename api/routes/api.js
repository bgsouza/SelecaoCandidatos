const express = require('express');
const router = express.Router();
const indexControler = require('../controller/indexControler')
const vagasController = require('../controller/vagasController')
const pessoasController = require('../controller/pessoasController')
const candidaturasController = require('../controller/candidaturasController')

const _indexController = new indexControler();
const _vagasControler = new vagasController();
const _pessoasControler = new pessoasController();
const _candidaturasControler = new candidaturasController();

router.get('/', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(_indexController.getHome());
    //next()
});

router.post('/v1/vagas', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    const response = _vagasControler.create(req.body);
    res.status(200).json(response);
});

router.get('/v1/vagas/:id/candidaturas/ranking', (req, res) => {
    let id = req.params.id;
    res.setHeader('Content-Type', 'application/json');
    const response = _vagasControler.ranking(id);
    res.status(200).json(response);
});

router.post('/v1/pessoas', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    const response = _pessoasControler.create(req.body);
    res.status(200).json(response);
});

router.post('/v1/candidaturas', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    const response = _candidaturasControler.create(req.body);
    res.status(200).json(response);
});

module.exports = router;