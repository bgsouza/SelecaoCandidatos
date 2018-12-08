const candidaturasService = require('../services/candidaturasService');

class CandidaturasController {

    constructor() {
      this.candidaturasService = new candidaturasService();
    }

    list() {}

    create(candidatura) {
        return this.candidaturasService.save('create', candidatura);
    }
}

module.exports = CandidaturasController