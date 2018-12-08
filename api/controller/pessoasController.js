const pessoasService = require('../services/pessoasService');

class PessoasController {

    constructor() {
      this.pessoasService = new pessoasService();
    }

    list() {}

    create(vaga) {
        return this.pessoasService.save('create', vaga);
    }

    update() {}
    delete() {}
}

module.exports = PessoasController