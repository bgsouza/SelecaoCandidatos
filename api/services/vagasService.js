const fs = require('fs')
const Vaga = require('../model/Vaga');
const JsonDB = require('../adpters/jsonBD');
const routeService = require('./routeService');
const scoreService = require('./scoreService');
const resultadoBusca = require('../model/dto/ResultadoBusca');
const _ = require('underscore');

class VagasService {

    constructor() {
        this.jsonDB = new JsonDB('vagas');
        this._routeService = new routeService();
        this._scoreService = new scoreService();
    }

    validateArgs(vaga) {
        let r = {status: true, err:[]}
        if(vaga.empresa == undefined || null) { r.err.push("Empresa não informada")}
        if(vaga.titulo == undefined || null) { r.err.push("Titulo não informado")}
        if(vaga.descricao == undefined || null) {r.err.push("Descricão não informada")}
        if(vaga.localizacao == undefined || null) {r.err.push("Localização não informada")}
        if(vaga.nivel == undefined || null) {r.err.push("Nível não informado")};

        if(r.err.length > 0) {
            r.status = false;
            r.err = r.err.map(erro => { return `[VAGA]: ${erro}`; })
        }
        return r;
    }

    list() {
        return this.vagas;
    }

    save(action, data) {
        let v = this.validateArgs(data);
        let r = {status: true, msg: ''}
        if(!v.status) {
            r.status = v.status;
            r.msg = v.err.join('\n');
            return r;
        }
        
        let vaga = new Vaga(data.empresa, data.titulo, data.descricao, data.localizacao, data.nivel);
        switch(action) {
            case "create":
                let id = this.jsonDB.lastId() + 1;
                vaga.id = id;
                try {
                    this.jsonDB.append(vaga);
                    r.msg = '[VAGA] cadastrado com sucesso'
                } catch(e) {
                    r.status = false;
                    r.msg = e.toString();
                }
                break;
            
            case "update":
                break;
        }

        return r;
    }

    ranking(id, r) {
        // Obtem vaga
        const dadosVaga = this.jsonDB.find('vagas', {id: id});
        // Obtem candidatos
        const dadosCandidatura = this.jsonDB.find('candidaturas', {id_vaga: id});
        
        // Obtem dados dos candidatos
        const dadosPessoas = this.jsonDB.findBy('pessoas', 'id', dadosCandidatura.map((i, acc) => { return i.id_pessoa}));

        if(dadosPessoas.length == 0) {
            r.status = false;
            r.msg = "[VAGAS] Não há candidaturas"
            return r;
        }
        //Mapeia Rotas
        const candidatosScore = this._routeService.mapRoutes(dadosVaga[0].localizacao, dadosPessoas)
        let candidatos = []
        candidatosScore.forEach(c => {
            let score = this._scoreService.calc(dadosVaga[0].nivel, c.nivel, c.d);
            candidatos.push( new resultadoBusca(c.nome, c.profissao, c.localizacao, c.nivel, score) )
        });
        
        //Sort
        return _.sortBy(candidatos,'score');
    }

    delete() {}
}

module.exports = VagasService;