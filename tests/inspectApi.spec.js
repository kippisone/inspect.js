'use strict';

var inspect = require('../inspect');
var InspectAPI = require('../lib/inspectApi');

describe('API', function() {  
    describe('Class', function() {
        it('Should instantiate an inspectAPI object', function() {
            var api = new InspectAPI('http://localhost:3000');
            inspect(api).isObject();
        });
    });
});
