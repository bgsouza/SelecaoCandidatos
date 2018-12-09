const fs = require('fs')
const Vaga = require('../model/Vaga');
const JsonDB = require('../adpters/jsonBD');

class VagasService {

    constructor() {
        this.jsonDB = new JsonDB('vagas');
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
        //Obtem vaga
        const dadosVaga = this.jsonDB.find('vagas', {id: id});
        //Obtem candidatos
        const dadosCandidatura = this.jsonDB.find('candidaturas', {empresa: id});
        //Processa lista
        return r;
    }

    delete() {}
}

module.exports = VagasService;