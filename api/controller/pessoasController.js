const pessoasService = require('../services/pessoasService');

class PessoasController {

    constructor() {
      this._pessoasService = new pessoasService();
    }

    list() {}

    create(pessoa) {
        return this._pessoasService.save('create', pessoa);
    }
}

module.exports = PessoasController