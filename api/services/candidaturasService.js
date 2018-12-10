const fs = require('fs')
const Candidatura = require('../model/Candidatura');
const JsonDB = require('../adpters/jsonBD');

class CandidaturasService {

    constructor() {
        this.jsonDB = new JsonDB('candidaturas');
    }

    validateArgs(candidatura) {
        let r = {status: true, err:[]}
        if(candidatura.id_vaga == undefined || null) { r.err.push("ID da Vaga não informado")}
        if(candidatura.id_pessoa == undefined || null) { r.err.push("ID do Candidato não informado")}

        if(r.err.length > 0) {
            r.status = false;
            r.err = r.err.map(erro => { return `[CANDIDATURA]: ${erro}`; })
        }
        return r;
    }

    list() {}

    save(action, data) {
        let v = this.validateArgs(data);
        let r = {status: true, msg: ''}
        if(!v.status) {
            r.status = v.status;
            r.msg = v.err.join('\n');
            return r;
        }
        
        let candidatura = new Candidatura(data.id_vaga, data.id_pessoa);
        switch(action) {
            case "create":
                if(this.checkExists(candidatura)) {
                    r.status = false;
                    r.msg = "[CANDIDATURA] Candidato já aplicou á essa vaga"
                } else {
                    let err = [];
                    if(!this.checkVagaExists(data.id_vaga,)) {
                        err.push("[CANDIDATURA] Vagas não existe");
                    }
                    if(!this.checkPessoaExists(data.id_pessoa)) {
                        err.push( "[CANDIDATURA] Candidato não existe");
                    }
                    
                    if(err.length == 0) {
                        let id = this.jsonDB.lastId() + 1;
                        candidatura.id = id;
                        try {
                            this.jsonDB.append(candidatura);
                            r.msg = '[CANDIDATURA] cadastrado com sucesso'
                        } catch(e) {
                            r.status = false;
                            r.msg = e.toString();
                        }
                    } else {
                        r.status = false;
                        r.msg = err.join('\n');
                    }
                }
                break;
            
            case "update":
                break;
        }

        return r;
    }

    checkVagaExists(id) {
        let vaga = this.jsonDB.find('vagas', {id: id})
        return vaga.length > 0;
    }

    checkPessoaExists(id) {
        let pessoa = this.jsonDB.find('pessoas', {id: id})
        return pessoa.length > 0;
    }

    checkExists(candidatura) {
        const candidatos = this.jsonDB.get();
        let candidato = candidatos.find(data => { return data.id_vaga == candidatura.id_vaga && data.id_pessoa == candidatura.id_pessoa})
        return candidato !== undefined
    }

    delete() {}
}

module.exports = CandidaturasService;