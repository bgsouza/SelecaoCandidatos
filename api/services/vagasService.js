const fs = require('fs')
const Vaga = require('../model/Vaga');

class VagasService {

    constructor() {
        this.vagas = [];
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
            r.err.map(erro => { return `[VAGA]: ${erro}`; })
        }
        return r;
    }

    save(action, data) {
        let v = this.validateArgs(data);
        let r = {status: true, msg: ''}
        if(!v.status) {
            r.status = v.status;
            r.msg = v.err.join('\n');
            return r;
        }

        switch(action) {
            case "create":
                this.vagas.push(data)
                r.msg = '[VAGA] cadastrado com sucesso'
                break;
            
            case "update":
                break;
        }

        console.log('[DEBUG][VAGAS]', this.vagas)
        return r;
    }

    delete() {}

    response() {}
}

module.exports = VagasService;