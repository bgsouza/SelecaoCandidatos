var assert = require('assert');
var QueryController = require('../../api/endpoints/query');
var Logger = require('../../api/services/logger');

var client = { query: () => Promise.resolve('value')};
var logger = new Logger();

describe("Query", function() {
    it("Should return Ok when input is provided", async function() {
        var controller = new QueryController(client, logger);
        var result = await controller.query('Test');
        assert.equal(result.httpStatus, 200);
        assert.equal(result.data, 'value');
    });        

    it("Should return BadRequest when input is not provided", async function() {
        var controller = new QueryController(client, logger);
        var result = await controller.query(null);
        assert.equal(result.httpStatus, 400);
    });       
});

