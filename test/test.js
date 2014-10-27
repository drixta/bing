var expect = require('chai').expect();

var API_KEY = 'vEIeDxYQ697eBKQWCSmAOQkAmdJk2c8XhU09aZn/kHE=';

describe('Bing Api', function () {
	it('Should return a query', function(done){
		var bing = require('../src/js/bingApi');
		var callback = function(res){
			expect(res).to.be.an('object');
			done();
		};
	});
});