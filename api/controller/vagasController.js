const vagasService = require('../services/vagasService');

class VagasController {

    constructor() {
      this._vagasService = new vagasService();
    }

    list() {}

    create(vaga) {
        return this._vagasService.save('create', vaga);
    }

    update() {}
    delete() {}
}

module.exports = VagasController