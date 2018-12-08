const fs = require('fs')
const Pessoa = require('../model/Pessoa');
const JsonDB = require('../adpters/jsonBD');

class PessoasService {

    constructor() {
        this.jsonDB = new JsonDB('pessoas');
    }

    validateArgs(vaga) {
        let r = {status: true, err:[]}
        if(vaga.nome == undefined || null) { r.err.push("Nome não informado")}
        if(vaga.profissao == undefined || null) { r.err.push("Profissão não informada")}
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
        
        let pessoa = new Pessoa(data.nome, data.profissao, data.localizacao, data.nivel);
        switch(action) {
            case "create":
                let id = this.jsonDB.lastId() + 1;
                pessoa.id = id;
                try {
                    this.jsonDB.append(pessoa);
                    r.msg = '[PESSOA] cadastrado com sucesso'
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

    delete() {}
}

module.exports = PessoasService;