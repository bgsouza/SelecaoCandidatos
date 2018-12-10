const assert = require('assert');
const CandidaturasControler = require('../api/controller/candidaturasController')

describe("Candidaturas teste", function() {
    it("Candidatando com sucesso", async function() {
        const controller = new CandidaturasControler();
        const fake = {"id_vaga":3,"id_pessoa":1};

        var result = await controller.create(fake);
        assert.equal(result.status, true);
        assert.equal(result.msg, '[CANDIDATURA] cadastrado com sucesso');
    });

    it("Candidatando com dados faltantes: falha", async function() {
        const controller = new CandidaturasControler();
        const fake = {"id_vaga":3}

        var result = await controller.create(fake);
        assert.equal(result.status, false);
    });

    it("Candidatando à vaga não existente: falha", async function() {
        const controller = new CandidaturasControler();
        const fake = {"id_vaga":999, "id_pessoa": 1};

        var result = await controller.create(fake);
        assert.equal(result.status, false);
    });

    it("Candidatando pessoa não existente: falha", async function() {
        const controller = new CandidaturasControler();
        const fake = {"id_vaga":1, "id_pessoa": 9999};

        var result = await controller.create(fake);
        assert.equal(result.status, false);
    });

    it("Candidatando 2x na mesma vaga: falha", async function() {
        const controller = new CandidaturasControler();
        const fake = {"id_vaga":3,"id_pessoa":1,"id":1};

        var result = await controller.create(fake);
        assert.equal(result.status, false);
        assert.equal(result.msg, '[CANDIDATURA] Candidato já aplicou á essa vaga');
    })
});

