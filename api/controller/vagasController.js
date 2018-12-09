const vagasService = require('../services/vagasService');

class VagasController {

    constructor() {
      this._vagasService = new vagasService();
    }

    list() {}

    create(vaga) {
        return this._vagasService.save('create', vaga);
    }

    ranking(id) {
        let r = {status: true, msg: ''}

        if(isNaN(parseInt(id))) {
            r.status = false;
            r.msg = "ID inválido";
            return r;
        }
        r = this._vagasService.ranking(parseInt(id), r);
        return r;
    }
}

module.exports = VagasController