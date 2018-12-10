const assert = require('assert');
const VagasControler = require('../api/controller/vagasController')

describe("Vagas teste", function() {
    it("Criando Vaga com sucesso", async function() {
        const controller = new VagasControler();
        const fake = {"id":1,"empresa":"Teste","titulo":"Teste","descricao":"Vaga Test","localizacao":"B","nivel":5};

        var result = await controller.create(fake);
        assert.equal(result.status, true);
        assert.equal(result.msg, '[VAGA] cadastrado com sucesso');
    });

    it("Criando Vaga com dados faltantes: falha", async function() {
        const controller = new VagasControler();
        const fake = {"id":1,"titulo":"Teste","descricao":"Vaga Test","nivel":5};

        var result = await controller.create(fake);
        assert.equal(result.status, false);
    });
});

