const assert = require('assert');
const VagasControler = require('../api/controller/vagasController')

describe("Ranking teste", function() {
    it("Obtendo com sucesso", async function() {
        const controller = new VagasControler();
        const fake = 1;

        var result = await controller.ranking(fake);
        assert.equal(Array.isArray(result), true);
    });

    it("Obtendo ranking de vaga inválida: falha", async function() {
        const controller = new VagasControler();
        const fake = "laranja";

        var result = await controller.ranking(fake);
        assert.equal(result.status, false);
    });

    it("Obtendo ranking de vaga inexistente: falha", async function() {
        const controller = new VagasControler();
        const fake = 9999;

        var result = await controller.ranking(fake);
        assert.equal(result.status, false);
    });
});

