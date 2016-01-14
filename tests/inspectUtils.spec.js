'use strict';

var utils = require('../lib/inspectUtils');

describe('Utils', function() {
    describe('getTypeOf', function() {
        it('Should get type of "Foo"', function() {
            var type = utils.getTypeOf('Foo');
            if (type !== 'string') {
                throw new Error('Wrong data type! ' + type);
            }
        });

        it('Should get type of []', function() {
            var type = utils.getTypeOf([]);
            if (type !== 'array') {
                throw new Error('Wrong data type! ' + type);
            }
        });

        it('Should get type of {}', function() {
            var type = utils.getTypeOf({});
            if (type !== 'object') {
                throw new Error('Wrong data type! ' + type);
            }
        });

        it('Should get type of 123', function() {
            var type = utils.getTypeOf(123);
            if (type !== 'number') {
                throw new Error('Wrong data type! ' + type);
            }
        });

        it('Should get type of null', function() {
            var type = utils.getTypeOf(null);
            if (type !== 'null') {
                throw new Error('Wrong data type! ' + type);
            }
        });

        it('Should get type of undefined', function() {
            var type = utils.getTypeOf(undefined);
            if (type !== 'undefined') {
                throw new Error('Wrong data type! ' + type);
            }
        });

        it('Should get type of /.*/', function() {
            var type = utils.getTypeOf(/.*/);
            if (type !== 'regexp') {
                throw new Error('Wrong data type! ' + type);
            }
        });
    });
});
