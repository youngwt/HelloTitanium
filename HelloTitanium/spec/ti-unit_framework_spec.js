// create a mock for the Ti namespace based on your own local api.jsca
Ti = require('../node_modules/tiunit/jsca.api.parser').parseFromConfig();

// add mocking capabilities for required dependencies
MockRequire = require('tiunit/mockrequire');

it("should return true", function()
{
    expect(true);
});