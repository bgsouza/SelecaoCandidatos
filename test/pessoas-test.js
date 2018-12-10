const assert = require('assert');
const PessoasControler = require('../api/controller/pessoasController')

describe("Pessoas teste", function() {
    it("Criando pessoa com sucesso", async function() {
        const controller = new PessoasControler();
        const fake = {"id":1,"nome":"Pessoa Teste","profissao":"Teste","localizacao":"E","nivel":1};

        var result = await controller.create(fake);
        assert.equal(result.status, true);
        assert.equal(result.msg, '[PESSOA] cadastrado com sucesso');
    });

    it("CRiando pessoa com dados faltantes: falha", async function() {
        const controller = new PessoasControler();
        const fake = {"id":1,"nome":"Pessoa Teste","profissao":"Teste"};

        var result = await controller.create(fake);
        assert.equal(result.status, false);
    });
});

