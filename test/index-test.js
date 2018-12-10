const assert = require('assert');
const IndexControler = require('../api/controller/indexControler')

describe("Index test", function() {
    it("call /", async function() {
        const controller = new IndexControler();
        var result = await controller.getHome();
        assert.equal(result.status, true);
        assert.equal(result.title, 'Selecao API');
    });     
});

