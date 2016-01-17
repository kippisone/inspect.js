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

        it('Should get type of class', function() {
            var type = utils.getTypeOf(class {});
            if (type !== 'class') {
                throw new Error('Wrong data type! ' + type);
            }
        });

        it('Should get type of generator', function() {
            var type = utils.getTypeOf(function* () { yield;});
            if (type !== 'generator') {
                throw new Error('Wrong data type! ' + type);
            }
        });

        it('Should get type of function', function() {
            var type = utils.getTypeOf(function() {});
            if (type !== 'function') {
                throw new Error('Wrong data type! ' + type);
            }
        });
    });

    describe('compareValues', function() {
        var values = [
            { title: 'two objects',                 left: { foo: true },    right: { foo: true },   shoudFail: false },
            { title: 'two diffetent objects',       left: { foo: true },    right: { foo: false },  shoudFail: true },
            { title: 'two arrays',                  left: ['aa', 'bb'],     right: ['aa', 'bb'],    shoudFail: false },
            { title: 'two different arrays',        left: ['aa', 'bb'],     right: ['aa', 'cc'],    shoudFail: true },
            { title: 'two different sorted arrays', left: ['aa', 'bb'],     right: ['bb', 'aa'],    shoudFail: true },
            { title: 'an object and an array', left: { 0: 'aa', 1: 'bb' }, right: ['aa', 'bb'], shoudFail: true },
            { title: 'two strings', left: 'aaa', right: 'aaa', shoudFail: false },
            { title: 'two different strings', left: 'aaa', right: 'bbb', shoudFail: true },
            { title: 'two numbers', left: 123, right: 123, shoudFail: false },
            { title: 'two different numbers', left: 123, right: 124, shoudFail: true },
            { title: 'two booleans', left: true, right: true, shoudFail: false },
            { title: 'two different booleans', left: true, right: false, shoudFail: true },
            { title: 'two regular expressions', left: /.+/, right: /.+/, shoudFail: false },
            { title: 'two different regular expressions', left: /.+/, right: /.*/, shoudFail: true }
        ];

        values.forEach(function(t) {
            it('Should compare ' + t.title, function(done) {
                try {
                    var res = utils.compareValues(t.left, t.right);

                    if (t.shoudFail && res === true) {
                        done('Should fail, but test passed!');
                        return;
                    }

                    if (!t.shoudFail && res === false) {
                        done('Should pass, but test failed!');
                        return;
                    }

                    done();
                } catch (err) {
                    done(err);
                }
            });
        });
    });

    describe('hasDeepKey', function() {
        var obj;

        beforeEach(function() {
            obj = {
                foo: {
                    bar: {
                        bla: 'blub'
                    }
                },
                flow: 'flew'
            };                
        });
        
        it('Should check if a object has a deep prop (foo)', function() {
            if (!utils.hasDeepKey(obj, 'foo')) {
                throw 'Failed!';
            }
        });
        
        it('Should check if a object has a deep prop (foo.bar)', function() {
            if (!utils.hasDeepKey(obj, 'foo.bar')) {
                throw 'Failed!';
            }
        });
        
        it('Should check if a object has a deep prop (foo.bar.bla)', function() {
            if (!utils.hasDeepKey(obj, 'foo.bar.bla')) {
                throw 'Failed!';
            }
        });
        
        it('Should check if a object has not a deep prop (foofoo)', function() {
            if (utils.hasDeepKey(obj, 'foofoo')) {
                throw 'Failed!';
            }
        });
        
        it('Should check if a object has not a deep prop (foofoo.bar)', function() {
            if (utils.hasDeepKey(obj, 'foofoo.bar')) {
                throw 'Failed!';
            }
        });
    });

    describe('undotify', function() {
        var obj;

        beforeEach(function() {
            obj = {
                foo: {
                    bar: {
                        bla: 'blub'
                    }
                },
                flow: 'flew'
            };                
        });
        
        it('Should check if a object has a deep prop (foo)', function() {
            if (!utils.undotify(obj, 'foo')) {
                throw 'Failed!';
            }
        });
        
        it('Should check if a object has a deep prop (foo.bar)', function() {
            if (!utils.undotify(obj, 'foo.bar')) {
                throw 'Failed!';
            }
        });
        
        it('Should check if a object has a deep prop (foo.bar.bla)', function() {
            if (!utils.undotify(obj, 'foo.bar.bla')) {
                throw 'Failed!';
            }
        });
        
        it('Should check if a object has not a deep prop (foofoo)', function() {
            if (utils.undotify(obj, 'foofoo')) {
                throw 'Failed!';
            }
        });
        
        it('Should check if a object has not a deep prop (foofoo.bar)', function() {
            if (utils.undotify(obj, 'foofoo.bar')) {
                throw 'Failed!';
            }
        });
    });
});
