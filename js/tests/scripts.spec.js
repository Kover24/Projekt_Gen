var expect = require('chai').expect;
var app = require('../scripts');

describe('utility functions test', function ()
{
    it('newNumber()', function ()
    {
        expect(app.newNumber()).to.eql(true);
    });
    
    
});