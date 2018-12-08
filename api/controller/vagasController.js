const vagaService = require('../services/vagasService');

class VagasController {

    constructor() {
      this._vagaService = new vagaService();
    }

    list() {}

    create(vaga) {
        return this._vagaService.save('create', vaga);
    }

    update() {}
    delete() {}
}

module.exports = VagasController