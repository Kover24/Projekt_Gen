var expect = require('chai').expect;
var app = require('../scripts');

describe('utility functions test', function ()
{
    it('newNumber() true', function ()
    {
        expect(app.newNumber()).to.eql(true);
    });
    it('surrender()', function ()
    {
        expect(app.surrender()).to.eql(false);
    });
    
    
});