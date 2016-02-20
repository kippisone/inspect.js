'use strict';

var inspect = require('../inspect');

var shouldFail = function(fn, value) {
    var args = Array.prototype.slice.call(arguments, 2);
    return function(done) {
        try {
            if (args) {
                var ins = inspect(value);
                ins[fn].apply(ins, args);
            }
            else {
                inspect(value)[fn](inspect);
            }
            done(new Error('Inspection should fail, but it passed! Input was:' + value));
        } catch (err) {
            done();
        }
    };
};

var shouldThrow = function(msg, fn, value) {
    var args = Array.prototype.slice.call(arguments, 3);
    return function(done) {
        try {
            if (args) {
                var ins = inspect(value);
                ins[fn].apply(ins, args);
            }
            else {
                inspect(value)[fn](inspect);
            }
            done(new Error('Inspection should throw an error, but it passed! Input was:' + value));
        } catch (err) {
            if (err.message.indexOf(msg) !== -1) {
                done();
            }
            else {
                done(new Error('Wrong error was thrown! Expected: `' + msg + '` but error is: `' + err.stack + '`'));
            }
        }
    };
};

var shouldPass = function(fn, value) {
    var args = Array.prototype.slice.call(arguments, 2);
    return function() {
        if (args) {
            var ins = inspect(value);
            ins[fn].apply(ins, args);
        }
        else {
            inspect(value)[fn](inspect);
        }
    };
};

describe('Inspect', function() {
    describe('isString', function() {
        it('should inspect that "foo" is a string', shouldPass('isString', 'foo'));
        it('should inspect that "" is a string', shouldPass('isString', ''));
        it('should inspect that "123" is a string', shouldPass('isString', '123'));
        it('should inspect that null is not a string', shouldFail('isString', null));
        it('should inspect that undefined is not a string', shouldFail('isString', undefined));
        it('should inspect that true is not a string', shouldFail('isString', true));
        it('should inspect that false is not a string', shouldFail('isString', false));
        it('should inspect that 123 is not a string', shouldFail('isString', 123));
        it('should inspect that 1.003 is not a string', shouldFail('isString', 1.003));
        it('should inspect that NaN is not a string', shouldFail('isString', NaN));
        it('should inspect that [] is not a string', shouldFail('isString', []));
        it('should inspect that {} is not a string', shouldFail('isString', {}));
        it('should inspect that function is not a string', shouldFail('isString', function() {}));
        it('should inspect that generator is not a string', shouldFail('isString', function* () { yield;}));
        it('should inspect that class is not a string', shouldFail('isString', class {}));
        it('should inspect that /.+/ is not a string', shouldFail('isString', /.+/));
    });

    describe('isNotString', function() {
        it('Should inspect that "foo" is a string', shouldFail('isNotString', 'foo'));
        it('Should inspect that "" is a string', shouldFail('isNotString', ''));
        it('Should inspect that "123" is a string', shouldFail('isNotString', '123'));
        it('Should inspect that null is not a string', shouldPass('isNotString', null));
        it('Should inspect that undefined is not a string', shouldPass('isNotString', undefined));
        it('Should inspect that true is not a string', shouldPass('isNotString', true));
        it('Should inspect that false is not a string', shouldPass('isNotString', false));
        it('Should inspect that 123 is not a string', shouldPass('isNotString', 123));
        it('Should inspect that 1.003 is not a string', shouldPass('isNotString', 1.003));
        it('Should inspect that NaN is not a string', shouldPass('isNotString', NaN));
        it('Should inspect that [] is not a string', shouldPass('isNotString', []));
        it('Should inspect that {} is not a string', shouldPass('isNotString', {}));
        it('Should inspect that function is not a string', shouldPass('isNotString', function() {}));
        it('Should inspect that generator is not a string', shouldPass('isNotString', function* () { yield;}));
        it('Should inspect that class is not a string', shouldPass('isNotString', class {}));
        it('Should inspect that /.+/ is not a string', shouldPass('isNotString', /.+/));
    });

    describe('isArray', function() {
        it('Should inspect that "foo" is an array', shouldFail('isArray', 'foo'));
        it('Should inspect that "" is an array', shouldFail('isArray', ''));
        it('Should inspect that "123" is an array', shouldFail('isArray', '123'));
        it('Should inspect that null is not an array', shouldFail('isArray', null));
        it('Should inspect that undefined is not an array', shouldFail('isArray', undefined));
        it('Should inspect that true is not an array', shouldFail('isArray', true));
        it('Should inspect that false is not an array', shouldFail('isArray', false));
        it('Should inspect that 123 is not an array', shouldFail('isArray', 123));
        it('Should inspect that 1.003 is not an array', shouldFail('isArray', 1.003));
        it('Should inspect that NaN is not an array', shouldFail('isArray', NaN));
        it('Should inspect that [] is not an array', shouldPass('isArray', []));
        it('Should inspect that {} is not an array', shouldFail('isArray', {}));
        it('Should inspect that function is not an array', shouldFail('isArray', function() {}));
        it('Should inspect that generator is not an array', shouldFail('isArray', function* () { yield;}));
        it('Should inspect that class is not an array', shouldFail('isArray', class {}));
        it('Should inspect that /.+/ is not an array', shouldFail('isArray', /.+/));
    });

    describe('isNotArray', function() {
        it('Should inspect that "foo" is not an array', shouldPass('isNotArray', 'foo'));
        it('Should inspect that "" is an not array', shouldPass('isNotArray', ''));
        it('Should inspect that "123" is not an array', shouldPass('isNotArray', '123'));
        it('Should inspect that null is not an array', shouldPass('isNotArray', null));
        it('Should inspect that undefined is not an array', shouldPass('isNotArray', undefined));
        it('Should inspect that true is not an array', shouldPass('isNotArray', true));
        it('Should inspect that false is not an array', shouldPass('isNotArray', false));
        it('Should inspect that 123 is not an array', shouldPass('isNotArray', 123));
        it('Should inspect that 1.003 is not an array', shouldPass('isNotArray', 1.003));
        it('Should inspect that NaN is not an array', shouldPass('isNotArray', NaN));
        it('Should inspect that [] is not an array', shouldFail('isNotArray', []));
        it('Should inspect that {} is not an array', shouldPass('isNotArray', {}));
        it('Should inspect that function is not an array', shouldPass('isNotArray', function() {}));
        it('Should inspect that generator is not an array', shouldPass('isNotArray', function* () { yield;}));
        it('Should inspect that class is not an array', shouldPass('isNotArray', class {}));
        it('Should inspect that /.+/ is not an array', shouldPass('isNotArray', /.+/));
    });

    describe('isObject', function() {
        it('Should inspect that "foo" is an array', shouldFail('isObject', 'foo'));
        it('Should inspect that "" is an array', shouldFail('isObject', ''));
        it('Should inspect that "123" is an array', shouldFail('isObject', '123'));
        it('Should inspect that null is not an array', shouldFail('isObject', null));
        it('Should inspect that undefined is not an array', shouldFail('isObject', undefined));
        it('Should inspect that true is not an array', shouldFail('isObject', true));
        it('Should inspect that false is not an array', shouldFail('isObject', false));
        it('Should inspect that 123 is not an array', shouldFail('isObject', 123));
        it('Should inspect that 1.003 is not an array', shouldFail('isObject', 1.003));
        it('Should inspect that NaN is not an array', shouldFail('isObject', NaN));
        it('Should inspect that [] is not an array', shouldFail('isObject', []));
        it('Should inspect that {} is not an array', shouldPass('isObject', {}));
        it('Should inspect that function is not an array', shouldFail('isObject', function() {}));
        it('Should inspect that generator is not an array', shouldFail('isObject', function* () { yield;}));
        it('Should inspect that class is not an array', shouldFail('isObject', class {}));
        it('Should inspect that /.+/ is not an array', shouldFail('isObject', /.+/));
    });

    describe('isNotObject', function() {
        it('Should inspect that "foo" is an array', shouldPass('isNotObject', 'foo'));
        it('Should inspect that "" is an array', shouldPass('isNotObject', ''));
        it('Should inspect that "123" is an array', shouldPass('isNotObject', '123'));
        it('Should inspect that null is not an array', shouldPass('isNotObject', null));
        it('Should inspect that undefined is not an array', shouldPass('isNotObject', undefined));
        it('Should inspect that true is not an array', shouldPass('isNotObject', true));
        it('Should inspect that false is not an array', shouldPass('isNotObject', false));
        it('Should inspect that 123 is not an array', shouldPass('isNotObject', 123));
        it('Should inspect that 1.003 is not an array', shouldPass('isNotObject', 1.003));
        it('Should inspect that NaN is not an array', shouldPass('isNotObject', NaN));
        it('Should inspect that [] is not an array', shouldPass('isNotObject', []));
        it('Should inspect that {} is not an array', shouldFail('isNotObject', {}));
        it('Should inspect that function is not an array', shouldPass('isNotObject', function() {}));
        it('Should inspect that generator is not an array', shouldPass('isNotObject', function* () { yield;}));
        it('Should inspect that class is not an array', shouldPass('isNotObject', class {}));
        it('Should inspect that /.+/ is not an array', shouldPass('isNotObject', /.+/));
    });

    describe('isNull', function() {
        it('Should inspect that "foo" is an array', shouldFail('isNull', 'foo'));
        it('Should inspect that "" is an array', shouldFail('isNull', ''));
        it('Should inspect that "123" is an array', shouldFail('isNull', '123'));
        it('Should inspect that null is not an array', shouldPass('isNull', null));
        it('Should inspect that undefined is not an array', shouldFail('isNull', undefined));
        it('Should inspect that true is not an array', shouldFail('isNull', true));
        it('Should inspect that false is not an array', shouldFail('isNull', false));
        it('Should inspect that 123 is not an array', shouldFail('isNull', 123));
        it('Should inspect that 1.003 is not an array', shouldFail('isNull', 1.003));
        it('Should inspect that NaN is not an array', shouldFail('isNull', NaN));
        it('Should inspect that [] is not an array', shouldFail('isNull', []));
        it('Should inspect that {} is not an array', shouldFail('isNull', {}));
        it('Should inspect that function is not an array', shouldFail('isNull', function() {}));
        it('Should inspect that generator is not an array', shouldFail('isNull', function* () { yield;}));
        it('Should inspect that class is not an array', shouldFail('isNull', class {}));
        it('Should inspect that /.+/ is not an array', shouldFail('isNull', /.+/));
    });

    describe('isNotNull', function() {
        it('Should inspect that "foo" is an array', shouldPass('isNotNull', 'foo'));
        it('Should inspect that "" is an array', shouldPass('isNotNull', ''));
        it('Should inspect that "123" is an array', shouldPass('isNotNull', '123'));
        it('Should inspect that null is not an array', shouldFail('isNotNull', null));
        it('Should inspect that undefined is not an array', shouldPass('isNotNull', undefined));
        it('Should inspect that true is not an array', shouldPass('isNotNull', true));
        it('Should inspect that false is not an array', shouldPass('isNotNull', false));
        it('Should inspect that 123 is not an array', shouldPass('isNotNull', 123));
        it('Should inspect that 1.003 is not an array', shouldPass('isNotNull', 1.003));
        it('Should inspect that NaN is not an array', shouldPass('isNotNull', NaN));
        it('Should inspect that [] is not an array', shouldPass('isNotNull', []));
        it('Should inspect that {} is not an array', shouldPass('isNotNull', {}));
        it('Should inspect that function is not an array', shouldPass('isNotNull', function() {}));
        it('Should inspect that generator is not an array', shouldPass('isNotNull', function* () { yield;}));
        it('Should inspect that class is not an array', shouldPass('isNotNull', class {}));
        it('Should inspect that /.+/ is not an array', shouldPass('isNotNull', /.+/));
    });

    describe('isUndefined', function() {
        it('Should inspect that "foo" is undefined', shouldFail('isUndefined', 'foo'));
        it('Should inspect that "" is undefined', shouldFail('isUndefined', ''));
        it('Should inspect that "123" is undefined', shouldFail('isUndefined', '123'));
        it('Should inspect that null is undefined', shouldFail('isUndefined', null));
        it('Should inspect that undefined is undefined', shouldPass('isUndefined', undefined));
        it('Should inspect that true is undefined', shouldFail('isUndefined', true));
        it('Should inspect that false is undefined', shouldFail('isUndefined', false));
        it('Should inspect that 123 is undefined', shouldFail('isUndefined', 123));
        it('Should inspect that 1.003 is undefined', shouldFail('isUndefined', 1.003));
        it('Should inspect that NaN is undefined', shouldFail('isUndefined', NaN));
        it('Should inspect that [] is undefined', shouldFail('isUndefined', []));
        it('Should inspect that {} is undefined', shouldFail('isUndefined', {}));
        it('Should inspect that function is undefined', shouldFail('isUndefined', function() {}));
        it('Should inspect that generator is undefined', shouldFail('isUndefined', function* () { yield;}));
        it('Should inspect that class is undefined', shouldFail('isUndefined', class {}));
        it('Should inspect that /.+/ is undefined', shouldFail('isUndefined', /.+/));
    });

    describe('isNotUndefined', function() {
        it('Should inspect that "foo" is not undefined', shouldPass('isNotUndefined', 'foo'));
        it('Should inspect that "" is not undefined', shouldPass('isNotUndefined', ''));
        it('Should inspect that "123" is not undefined', shouldPass('isNotUndefined', '123'));
        it('Should inspect that null is not not undefined', shouldPass('isNotUndefined', null));
        it('Should inspect that undefined is not undefined', shouldFail('isNotUndefined', undefined));
        it('Should inspect that true is not undefined', shouldPass('isNotUndefined', true));
        it('Should inspect that false is not undefined', shouldPass('isNotUndefined', false));
        it('Should inspect that 123 is not undefined', shouldPass('isNotUndefined', 123));
        it('Should inspect that 1.003 is not undefined', shouldPass('isNotUndefined', 1.003));
        it('Should inspect that NaN is not undefined', shouldPass('isNotUndefined', NaN));
        it('Should inspect that [] is not undefined', shouldPass('isNotUndefined', []));
        it('Should inspect that {} is not undefined', shouldPass('isNotUndefined', {}));
        it('Should inspect that function is not undefined', shouldPass('isNotUndefined', function() {}));
        it('Should inspect that generator is not undefined', shouldPass('isNotUndefined', function* () { yield;}));
        it('Should inspect that class is not undefined', shouldPass('isNotUndefined', class {}));
        it('Should inspect that /.+/ is not undefined', shouldPass('isNotUndefined', /.+/));
    });

    describe('isBoolean', function() {
        it('Should inspect that "foo" is aboolean', shouldFail('isBoolean', 'foo'));
        it('Should inspect that "" is aboolean', shouldFail('isBoolean', ''));
        it('Should inspect that "123" is aboolean', shouldFail('isBoolean', '123'));
        it('Should inspect that null is aboolean', shouldFail('isBoolean', null));
        it('Should inspect that undefined is aboolean', shouldFail('isBoolean', undefined));
        it('Should inspect that true is aboolean', shouldPass('isBoolean', true));
        it('Should inspect that false is aboolean', shouldPass('isBoolean', false));
        it('Should inspect that 123 is aboolean', shouldFail('isBoolean', 123));
        it('Should inspect that 1.003 is aboolean', shouldFail('isBoolean', 1.003));
        it('Should inspect that NaN is aboolean', shouldFail('isBoolean', NaN));
        it('Should inspect that [] is aboolean', shouldFail('isBoolean', []));
        it('Should inspect that {} is aboolean', shouldFail('isBoolean', {}));
        it('Should inspect that function is aboolean', shouldFail('isBoolean', function() {}));
        it('Should inspect that generator is aboolean', shouldFail('isBoolean', function* () { yield;}));
        it('Should inspect that class is aboolean', shouldFail('isBoolean', class {}));
        it('Should inspect that /.+/ is aboolean', shouldFail('isBoolean', /.+/));
    });

    describe('isNotBoolean', function() {
        it('Should inspect that "foo" is not a boolean', shouldPass('isNotBoolean', 'foo'));
        it('Should inspect that "" is not a boolean', shouldPass('isNotBoolean', ''));
        it('Should inspect that "123" is a boolean', shouldPass('isNotBoolean', '123'));
        it('Should inspect that null is not a boolean', shouldPass('isNotBoolean', null));
        it('Should inspect that undefined is not a boolean', shouldPass('isNotBoolean', undefined));
        it('Should inspect that true is not a boolean', shouldFail('isNotBoolean', true));
        it('Should inspect that false is not a boolean', shouldFail('isNotBoolean', false));
        it('Should inspect that 123 is not a boolean', shouldPass('isNotBoolean', 123));
        it('Should inspect that 1.003 is not a boolean', shouldPass('isNotBoolean', 1.003));
        it('Should inspect that NaN is not a boolean', shouldPass('isNotBoolean', NaN));
        it('Should inspect that [] is not a boolean', shouldPass('isNotBoolean', []));
        it('Should inspect that {} is not a boolean', shouldPass('isNotBoolean', {}));
        it('Should inspect that function is not a boolean', shouldPass('isNotBoolean', function() {}));
        it('Should inspect that generator is not a boolean', shouldPass('isNotBoolean', function* () { yield;}));
        it('Should inspect that class is not a boolean', shouldPass('isNotBoolean', class {}));
        it('Should inspect that /.+/ is not a boolean', shouldPass('isNotBoolean', /.+/));
    });

    describe('isTrue', function() {
        it('Should inspect that "foo" is true', shouldFail('isTrue', 'foo'));
        it('Should inspect that "" is true', shouldFail('isTrue', ''));
        it('Should inspect that "123" is true', shouldFail('isTrue', '123'));
        it('Should inspect that null is true', shouldFail('isTrue', null));
        it('Should inspect that undefined is true', shouldFail('isTrue', undefined));
        it('Should inspect that true is true', shouldPass('isTrue', true));
        it('Should inspect that false is true', shouldFail('isTrue', false));
        it('Should inspect that 123 is true', shouldFail('isTrue', 123));
        it('Should inspect that 1.003 is true', shouldFail('isTrue', 1.003));
        it('Should inspect that NaN is true', shouldFail('isTrue', NaN));
        it('Should inspect that [] is true', shouldFail('isTrue', []));
        it('Should inspect that {} is true', shouldFail('isTrue', {}));
        it('Should inspect that function is true', shouldFail('isTrue', function() {}));
        it('Should inspect that generator is true', shouldFail('isTrue', function* () { yield;}));
        it('Should inspect that class is true', shouldFail('isTrue', class {}));
        it('Should inspect that /.+/ is true', shouldFail('isTrue', /.+/));
    });

    describe('isNotTrue', function() {
        it('Should inspect that "foo" is not true', shouldPass('isNotTrue', 'foo'));
        it('Should inspect that "" is not true', shouldPass('isNotTrue', ''));
        it('Should inspect that "123" is true', shouldPass('isNotTrue', '123'));
        it('Should inspect that null is not true', shouldPass('isNotTrue', null));
        it('Should inspect that undefined is not true', shouldPass('isNotTrue', undefined));
        it('Should inspect that true is not true', shouldFail('isNotTrue', true));
        it('Should inspect that false is not true', shouldPass('isNotTrue', false));
        it('Should inspect that 123 is not true', shouldPass('isNotTrue', 123));
        it('Should inspect that 1.003 is not true', shouldPass('isNotTrue', 1.003));
        it('Should inspect that NaN is not true', shouldPass('isNotTrue', NaN));
        it('Should inspect that [] is not true', shouldPass('isNotTrue', []));
        it('Should inspect that {} is not true', shouldPass('isNotTrue', {}));
        it('Should inspect that function is not true', shouldPass('isNotTrue', function() {}));
        it('Should inspect that generator is not true', shouldPass('isNotTrue', function* () { yield;}));
        it('Should inspect that class is not true', shouldPass('isNotTrue', class {}));
        it('Should inspect that /.+/ is not true', shouldPass('isNotTrue', /.+/));
    });

    describe('isFalse', function() {
        it('Should inspect that "foo" is false', shouldFail('isFalse', 'foo'));
        it('Should inspect that "" is false', shouldFail('isFalse', ''));
        it('Should inspect that "123" is false', shouldFail('isFalse', '123'));
        it('Should inspect that null is false', shouldFail('isFalse', null));
        it('Should inspect that undefined is false', shouldFail('isFalse', undefined));
        it('Should inspect that true is false', shouldFail('isFalse', true));
        it('Should inspect that false is false', shouldPass('isFalse', false));
        it('Should inspect that 123 is false', shouldFail('isFalse', 123));
        it('Should inspect that 1.003 is false', shouldFail('isFalse', 1.003));
        it('Should inspect that NaN is false', shouldFail('isFalse', NaN));
        it('Should inspect that [] is false', shouldFail('isFalse', []));
        it('Should inspect that {} is false', shouldFail('isFalse', {}));
        it('Should inspect that function is false', shouldFail('isFalse', function() {}));
        it('Should inspect that generator is false', shouldFail('isFalse', function* () { yield;}));
        it('Should inspect that class is false', shouldFail('isFalse', class {}));
        it('Should inspect that /.+/ is false', shouldFail('isFalse', /.+/));
    });

    describe('isNotFalse', function() {
        it('Should inspect that "foo" is not false', shouldPass('isNotFalse', 'foo'));
        it('Should inspect that "" is not false', shouldPass('isNotFalse', ''));
        it('Should inspect that "123" is false', shouldPass('isNotFalse', '123'));
        it('Should inspect that null is not false', shouldPass('isNotFalse', null));
        it('Should inspect that undefined is not false', shouldPass('isNotFalse', undefined));
        it('Should inspect that true is not false', shouldPass('isNotFalse', true));
        it('Should inspect that false is not false', shouldFail('isNotFalse', false));
        it('Should inspect that 123 is not false', shouldPass('isNotFalse', 123));
        it('Should inspect that 1.003 is not false', shouldPass('isNotFalse', 1.003));
        it('Should inspect that NaN is not false', shouldPass('isNotFalse', NaN));
        it('Should inspect that [] is not false', shouldPass('isNotFalse', []));
        it('Should inspect that {} is not false', shouldPass('isNotFalse', {}));
        it('Should inspect that function is not false', shouldPass('isNotFalse', function() {}));
        it('Should inspect that generator is not false', shouldPass('isNotFalse', function* () { yield;}));
        it('Should inspect that class is not false', shouldPass('isNotFalse', class {}));
        it('Should inspect that /.+/ is not false', shouldPass('isNotFalse', /.+/));
    });

    describe('isRegExp', function() {
        it('Should inspect that "foo" is a RegExp', shouldFail('isRegExp', 'foo'));
        it('Should inspect that "" is a RegExp', shouldFail('isRegExp', ''));
        it('Should inspect that "123" is a RegExp', shouldFail('isRegExp', '123'));
        it('Should inspect that null is a RegExp', shouldFail('isRegExp', null));
        it('Should inspect that undefined is a RegExp', shouldFail('isRegExp', undefined));
        it('Should inspect that true is a RegExp', shouldFail('isRegExp', true));
        it('Should inspect that false is a RegExp', shouldFail('isRegExp', false));
        it('Should inspect that 123 is a RegExp', shouldFail('isRegExp', 123));
        it('Should inspect that 1.003 is a RegExp', shouldFail('isRegExp', 1.003));
        it('Should inspect that NaN is a RegExp', shouldFail('isRegExp', NaN));
        it('Should inspect that [] is a RegExp', shouldFail('isRegExp', []));
        it('Should inspect that {} is a RegExp', shouldFail('isRegExp', {}));
        it('Should inspect that function is a RegExp', shouldFail('isRegExp', function() {}));
        it('Should inspect that generator is a RegExp', shouldFail('isRegExp', function* () { yield;}));
        it('Should inspect that class is a RegExp', shouldFail('isRegExp', class {}));
        it('Should inspect that /.+/ is a RegExp', shouldPass('isRegExp', /.+/));
    });

    describe('isNotRegExp', function() {
        it('Should inspect that "foo" is not RegExp', shouldPass('isNotRegExp', 'foo'));
        it('Should inspect that "" is not RegExp', shouldPass('isNotRegExp', ''));
        it('Should inspect that "123" is RegExp', shouldPass('isNotRegExp', '123'));
        it('Should inspect that null is not RegExp', shouldPass('isNotRegExp', null));
        it('Should inspect that undefined is not RegExp', shouldPass('isNotRegExp', undefined));
        it('Should inspect that true is not RegExp', shouldPass('isNotRegExp', true));
        it('Should inspect that false is not RegExp', shouldPass('isNotRegExp', false));
        it('Should inspect that 123 is not RegExp', shouldPass('isNotRegExp', 123));
        it('Should inspect that 1.003 is not RegExp', shouldPass('isNotRegExp', 1.003));
        it('Should inspect that NaN is not RegExp', shouldPass('isNotRegExp', NaN));
        it('Should inspect that [] is not RegExp', shouldPass('isNotRegExp', []));
        it('Should inspect that {} is not RegExp', shouldPass('isNotRegExp', {}));
        it('Should inspect that function is not RegExp', shouldPass('isNotRegExp', function() {}));
        it('Should inspect that generator is not RegExp', shouldPass('isNotRegExp', function* () { yield;}));
        it('Should inspect that class is not RegExp', shouldPass('isNotRegExp', class {}));
        it('Should inspect that /.+/ is not RegExp', shouldFail('isNotRegExp', /.+/));
    });

    describe('isNumber', function() {
        it('Should inspect that "foo" is a Number', shouldFail('isNumber', 'foo'));
        it('Should inspect that "" is a Number', shouldFail('isNumber', ''));
        it('Should inspect that "123" is a Number', shouldFail('isNumber', '123'));
        it('Should inspect that null is a Number', shouldFail('isNumber', null));
        it('Should inspect that undefined is a Number', shouldFail('isNumber', undefined));
        it('Should inspect that true is a Number', shouldFail('isNumber', true));
        it('Should inspect that false is a Number', shouldFail('isNumber', false));
        it('Should inspect that 123 is a Number', shouldPass('isNumber', 123));
        it('Should inspect that 1.003 is a Number', shouldPass('isNumber', 1.003));
        it('Should inspect that NaN is a Number', shouldFail('isNumber', NaN));
        it('Should inspect that [] is a Number', shouldFail('isNumber', []));
        it('Should inspect that {} is a Number', shouldFail('isNumber', {}));
        it('Should inspect that function is a Number', shouldFail('isNumber', function() {}));
        it('Should inspect that generator is a Number', shouldFail('isNumber', function* () { yield;}));
        it('Should inspect that class is a Number', shouldFail('isNumber', class {}));
        it('Should inspect that /.+/ is a Number', shouldFail('isNumber', /.+/));
    });

    describe('isNotNumber', function() {
        it('Should inspect that "foo" is not Number', shouldPass('isNotNumber', 'foo'));
        it('Should inspect that "" is not Number', shouldPass('isNotNumber', ''));
        it('Should inspect that "123" is Number', shouldPass('isNotNumber', '123'));
        it('Should inspect that null is not Number', shouldPass('isNotNumber', null));
        it('Should inspect that undefined is not Number', shouldPass('isNotNumber', undefined));
        it('Should inspect that true is not Number', shouldPass('isNotNumber', true));
        it('Should inspect that false is not Number', shouldPass('isNotNumber', false));
        it('Should inspect that 123 is not Number', shouldFail('isNotNumber', 123));
        it('Should inspect that 1.003 is not Number', shouldFail('isNotNumber', 1.003));
        it('Should inspect that NaN is not Number', shouldPass('isNotNumber', NaN));
        it('Should inspect that [] is not Number', shouldPass('isNotNumber', []));
        it('Should inspect that {} is not Number', shouldPass('isNotNumber', {}));
        it('Should inspect that function is not Number', shouldPass('isNotNumber', function() {}));
        it('Should inspect that generator is not Number', shouldPass('isNotNumber', function* () { yield;}));
        it('Should inspect that class is not Number', shouldPass('isNotNumber', class {}));
        it('Should inspect that /.+/ is not Number', shouldPass('isNotNumber', /.+/));
    });

    describe('isNaN', function() {
        it('Should inspect that "foo" is a NaN', shouldFail('isNaN', 'foo'));
        it('Should inspect that "" is a NaN', shouldFail('isNaN', ''));
        it('Should inspect that "123" is a NaN', shouldFail('isNaN', '123'));
        it('Should inspect that null is a NaN', shouldFail('isNaN', null));
        it('Should inspect that undefined is a NaN', shouldFail('isNaN', undefined));
        it('Should inspect that true is a NaN', shouldFail('isNaN', true));
        it('Should inspect that false is a NaN', shouldFail('isNaN', false));
        it('Should inspect that 123 is a NaN', shouldFail('isNaN', 123));
        it('Should inspect that 1.003 is a NaN', shouldFail('isNaN', 1.003));
        it('Should inspect that NaN is a NaN', shouldPass('isNaN', NaN));
        it('Should inspect that [] is a NaN', shouldFail('isNaN', []));
        it('Should inspect that {} is a NaN', shouldFail('isNaN', {}));
        it('Should inspect that function is a NaN', shouldFail('isNaN', function() {}));
        it('Should inspect that generator is a NaN', shouldFail('isNaN', function* () { yield;}));
        it('Should inspect that class is a NaN', shouldFail('isNaN', class {}));
        it('Should inspect that /.+/ is a NaN', shouldFail('isNaN', /.+/));
    });

    describe('isNotNaN', function() {
        it('Should inspect that "foo" is not NaN', shouldPass('isNotNaN', 'foo'));
        it('Should inspect that "" is not NaN', shouldPass('isNotNaN', ''));
        it('Should inspect that "123" is NaN', shouldPass('isNotNaN', '123'));
        it('Should inspect that null is not NaN', shouldPass('isNotNaN', null));
        it('Should inspect that undefined is not NaN', shouldPass('isNotNaN', undefined));
        it('Should inspect that true is not NaN', shouldPass('isNotNaN', true));
        it('Should inspect that false is not NaN', shouldPass('isNotNaN', false));
        it('Should inspect that 123 is not NaN', shouldPass('isNotNaN', 123));
        it('Should inspect that 1.003 is not NaN', shouldPass('isNotNaN', 1.003));
        it('Should inspect that NaN is not NaN', shouldFail('isNotNaN', NaN));
        it('Should inspect that [] is not NaN', shouldPass('isNotNaN', []));
        it('Should inspect that {} is not NaN', shouldPass('isNotNaN', {}));
        it('Should inspect that function is not NaN', shouldPass('isNotNaN', function() {}));
        it('Should inspect that generator is not NaN', shouldPass('isNotNaN', function* () { yield;}));
        it('Should inspect that class is not NaN', shouldPass('isNotNaN', class {}));
        it('Should inspect that /.+/ is not NaN', shouldPass('isNotNaN', /.+/));
    });

    describe('isFunction', function() {
        it('Should inspect that "foo" is a function', shouldFail('isFunction', 'foo'));
        it('Should inspect that "" is a function', shouldFail('isFunction', ''));
        it('Should inspect that "123" is NaN', shouldFail('isFunction', '123'));
        it('Should inspect that null is a function', shouldFail('isFunction', null));
        it('Should inspect that undefined is a function', shouldFail('isFunction', undefined));
        it('Should inspect that true is a function', shouldFail('isFunction', true));
        it('Should inspect that false is a function', shouldFail('isFunction', false));
        it('Should inspect that 123 is a function', shouldFail('isFunction', 123));
        it('Should inspect that 1.003 is a function', shouldFail('isFunction', 1.003));
        it('Should inspect that NaN is a function', shouldFail('isFunction', NaN));
        it('Should inspect that [] is a function', shouldFail('isFunction', []));
        it('Should inspect that {} is a function', shouldFail('isFunction', {}));
        it('Should inspect that function is a function', shouldPass('isFunction', function() {}));
        it('Should inspect that generator is a function', shouldFail('isFunction', function* () { yield;}));
        it('Should inspect that class is a function', shouldFail('isFunction', class {}));
        it('Should inspect that /.+/ is a function', shouldFail('isFunction', /.+/));
    });

    describe('isNotFunction', function() {
        it('Should inspect that "foo" is not NaN', shouldPass('isNotFunction', 'foo'));
        it('Should inspect that "" is not NaN', shouldPass('isNotFunction', ''));
        it('Should inspect that "123" is NaN', shouldPass('isNotFunction', '123'));
        it('Should inspect that null is not NaN', shouldPass('isNotFunction', null));
        it('Should inspect that undefined is not NaN', shouldPass('isNotFunction', undefined));
        it('Should inspect that true is not NaN', shouldPass('isNotFunction', true));
        it('Should inspect that false is not NaN', shouldPass('isNotFunction', false));
        it('Should inspect that 123 is not NaN', shouldPass('isNotFunction', 123));
        it('Should inspect that 1.003 is not NaN', shouldPass('isNotFunction', 1.003));
        it('Should inspect that NaN is not NaN', shouldPass('isNotFunction', NaN));
        it('Should inspect that [] is not NaN', shouldPass('isNotFunction', []));
        it('Should inspect that {} is not NaN', shouldPass('isNotFunction', {}));
        it('Should inspect that function is not NaN', shouldFail('isNotFunction', function() {}));
        it('Should inspect that generator is not NaN', shouldPass('isNotFunction', function* () { yield;}));
        it('Should inspect that class is not NaN', shouldPass('isNotFunction', class {}));
        it('Should inspect that /.+/ is not NaN', shouldPass('isNotFunction', /.+/));
    });

    describe('isGenerator', function() {
        it('Should inspect that "foo" is a generator', shouldFail('isGenerator', 'foo'));
        it('Should inspect that "" is a generator', shouldFail('isGenerator', ''));
        it('Should inspect that "123" is NaN', shouldFail('isGenerator', '123'));
        it('Should inspect that null is a generator', shouldFail('isGenerator', null));
        it('Should inspect that undefined is a generator', shouldFail('isGenerator', undefined));
        it('Should inspect that true is a generator', shouldFail('isGenerator', true));
        it('Should inspect that false is a generator', shouldFail('isGenerator', false));
        it('Should inspect that 123 is a generator', shouldFail('isGenerator', 123));
        it('Should inspect that 1.003 is a generator', shouldFail('isGenerator', 1.003));
        it('Should inspect that NaN is a generator', shouldFail('isGenerator', NaN));
        it('Should inspect that [] is a generator', shouldFail('isGenerator', []));
        it('Should inspect that {} is a generator', shouldFail('isGenerator', {}));
        it('Should inspect that function is a generator', shouldFail('isGenerator', function() {}));
        it('Should inspect that generator is a generator', shouldPass('isGenerator', function* () { yield;}));
        it('Should inspect that class is a generator', shouldFail('isGenerator', class {}));
        it('Should inspect that /.+/ is a generator', shouldFail('isGenerator', /.+/));
    });

    describe('isNotGenerator', function() {
        it('Should inspect that "foo" is not a generator', shouldPass('isNotGenerator', 'foo'));
        it('Should inspect that "" is not a generator', shouldPass('isNotGenerator', ''));
        it('Should inspect that "123" is NaN', shouldPass('isNotGenerator', '123'));
        it('Should inspect that null is not a generator', shouldPass('isNotGenerator', null));
        it('Should inspect that undefined is not a generator', shouldPass('isNotGenerator', undefined));
        it('Should inspect that true is not a generator', shouldPass('isNotGenerator', true));
        it('Should inspect that false is not a generator', shouldPass('isNotGenerator', false));
        it('Should inspect that 123 is not a generator', shouldPass('isNotGenerator', 123));
        it('Should inspect that 1.003 is not a generator', shouldPass('isNotGenerator', 1.003));
        it('Should inspect that NaN is not a generator', shouldPass('isNotGenerator', NaN));
        it('Should inspect that [] is not a generator', shouldPass('isNotGenerator', []));
        it('Should inspect that {} is not a generator', shouldPass('isNotGenerator', {}));
        it('Should inspect that function is not a generator', shouldPass('isNotGenerator', function() {}));
        it('Should inspect that generator is not a generator', shouldFail('isNotGenerator', function* () { yield;}));
        it('Should inspect that class is not a generator', shouldPass('isNotGenerator', class {}));
        it('Should inspect that /.+/ is not a generator', shouldPass('isNotGenerator', /.+/));
    });

    describe('isPromise', function() {
        it('Should inspect that "foo" is a promise', shouldFail('isPromise', 'foo'));
        it('Should inspect that "" is a promise', shouldFail('isPromise', ''));
        it('Should inspect that "123" is NaN', shouldFail('isPromise', '123'));
        it('Should inspect that null is a promise', shouldFail('isPromise', null));
        it('Should inspect that undefined is a promise', shouldFail('isPromise', undefined));
        it('Should inspect that true is a promise', shouldFail('isPromise', true));
        it('Should inspect that false is a promise', shouldFail('isPromise', false));
        it('Should inspect that 123 is a promise', shouldFail('isPromise', 123));
        it('Should inspect that 1.003 is a promise', shouldFail('isPromise', 1.003));
        it('Should inspect that NaN is a promise', shouldFail('isPromise', NaN));
        it('Should inspect that [] is a promise', shouldFail('isPromise', []));
        it('Should inspect that {} is a promise', shouldFail('isPromise', {}));
        it('Should inspect that function is a promise', shouldFail('isPromise', function() {}));
        it('Should inspect that generator is a promise', shouldFail('isPromise', function* () { yield;}));
        it('Should inspect that class is a promise', shouldFail('isPromise', class {}));
        it('Should inspect that /.+/ is a promise', shouldFail('isPromise', /.+/));
        it('Should inspect tpromise/.+/ is a promise', shouldPass('isPromise', new Promise(function() {})));
    });

    describe('isNotPromise', function() {
        it('Should inspect that "foo" is not a promise', shouldPass('isNotPromise', 'foo'));
        it('Should inspect that "" is not a promise', shouldPass('isNotPromise', ''));
        it('Should inspect that "123" is NaN', shouldPass('isNotPromise', '123'));
        it('Should inspect that null is not a promise', shouldPass('isNotPromise', null));
        it('Should inspect that undefined is not a promise', shouldPass('isNotPromise', undefined));
        it('Should inspect that true is not a promise', shouldPass('isNotPromise', true));
        it('Should inspect that false is not a promise', shouldPass('isNotPromise', false));
        it('Should inspect that 123 is not a promise', shouldPass('isNotPromise', 123));
        it('Should inspect that 1.003 is not a promise', shouldPass('isNotPromise', 1.003));
        it('Should inspect that NaN is not a promise', shouldPass('isNotPromise', NaN));
        it('Should inspect that [] is not a promise', shouldPass('isNotPromise', []));
        it('Should inspect that {} is not a promise', shouldPass('isNotPromise', {}));
        it('Should inspect that function is not a promise', shouldPass('isNotPromise', function() {}));
        it('Should inspect that generator is not a promise', shouldPass('isNotPromise', function* () { yield;}));
        it('Should inspect that class is not a promise', shouldPass('isNotPromise', class {}));
        it('Should inspect that /.+/ is not a promise', shouldPass('isNotPromise', /.+/));
        it('Should inspect that promise is not a promise', shouldFail('isNotPromise', new Promise(function() {})));
    });

    describe('isAny', function() {
        let typesConf = [
            'string', 'number', 'array', 'null', 'object', 'boolean',
            'function', 'promise', 'class', 'undefined', 'NaN', 'true', 'false'
        ];

        let getTest = function(type, arr) {
            return arr.indexOf(type) === -1 ? shouldFail : shouldPass;
        };

        for (let type of typesConf) {
            it('Should inspect that "foo" is a ' + type, getTest(type, ['string'])('isAny', 'foo', [type]));
            it('Should inspect that "" is a ' + type, getTest(type, ['string'])('isAny', '', [type]));
            it('Should inspect that "123" is NaN', getTest(type, ['string'])('isAny', '123', [type]));
            it('Should inspect that null is a ' + type, getTest(type, ['null'])('isAny', null, [type]));
            it('Should inspect that undefined is a ' + type, getTest(type, ['undefined'])('isAny', undefined, [type]));
            it('Should inspect that true is a ' + type, getTest(type, ['true', 'boolean'])('isAny', true, [type]));
            it('Should inspect that false is a ' + type, getTest(type, ['false', 'boolean'])('isAny', false, [type]));
            it('Should inspect that 123 is a ' + type, getTest(type, ['number'])('isAny', 123, [type]));
            it('Should inspect that 1.003 is a ' + type, getTest(type, ['number'])('isAny', 1.003, [type]));
            it('Should inspect that NaN is a ' + type, getTest(type, ['NaN'])('isAny', NaN, [type]));
            it('Should inspect that [] is a ' + type, getTest(type, ['array'])('isAny', [], [type]));
            it('Should inspect that {} is a ' + type, getTest(type, ['object'])('isAny', {}, [type]));
            it('Should inspect that function is a ' + type, getTest(type, ['function'])('isAny', function() {}, [type]));
            it('Should inspect that generator is a ' + type, getTest(type, ['generator'])('isAny', function* () { yield;}, [type]));
            it('Should inspect that class is a ' + type, getTest(type, ['class'])('isAny', class {}, [type]));
            it('Should inspect that /.+/ is a ' + type, getTest(type, ['regexp'])('isAny', /.+/, [type]));
        }
    });

    describe('isNotAny', function() {
        let typesConf = [
            'string', 'number', 'array', 'null', 'object', 'boolean',
            'function', 'promise', 'class', 'undefined', 'NaN', 'true', 'false'
        ];

        let getTest = function(type, arr) {
            return arr.indexOf(type) === -1 ? shouldFail : shouldPass;
        };

        for (let type of typesConf) {
            it('Should inspect that "foo" is a ' + type, getTest(type, ['string'])('isNotAny', 'foo', [type]));
            it('Should inspect that "" is a ' + type, getTest(type, ['string'])('isNotAny', '', [type]));
            it('Should inspect that "123" is NaN', getTest(type, ['string'])('isNotAny', '123', [type]));
            it('Should inspect that null is a ' + type, getTest(type, ['null'])('isNotAny', null, [type]));
            it('Should inspect that undefined is a ' + type, getTest(type, ['undefined'])('isNotAny', undefined, [type]));
            it('Should inspect that true is a ' + type, getTest(type, ['true', 'boolean'])('isNotAny', true, [type]));
            it('Should inspect that false is a ' + type, getTest(type, ['false', 'boolean'])('isNotAny', false, [type]));
            it('Should inspect that 123 is a ' + type, getTest(type, ['number'])('isNotAny', 123, [type]));
            it('Should inspect that 1.003 is a ' + type, getTest(type, ['number'])('isNotAny', 1.003, [type]));
            it('Should inspect that NaN is a ' + type, getTest(type, ['NaN'])('isNotAny', NaN, [type]));
            it('Should inspect that [] is a ' + type, getTest(type, ['array'])('isNotAny', [], [type]));
            it('Should inspect that {} is a ' + type, getTest(type, ['object'])('isNotAny', {}, [type]));
            it('Should inspect that function is a ' + type, getTest(type, ['function'])('isNotAny', function() {}, [type]));
            it('Should inspect that generator is a ' + type, getTest(type, ['generator'])('isNotAny', function* () { yield;}, [type]));
            it('Should inspect that class is a ' + type, getTest(type, ['class'])('isNotAny', class {}, [type]));
            it('Should inspect that /.+/ is a ' + type, getTest(type, ['regexp'])('isNotAny', /.+/, [type]));
        }
    });

    describe('isNotGenerator', function() {
        it('Should inspect that "foo" is not a generator', shouldPass('isNotGenerator', 'foo'));
        it('Should inspect that "" is not a generator', shouldPass('isNotGenerator', ''));
        it('Should inspect that "123" is NaN', shouldPass('isNotGenerator', '123'));
        it('Should inspect that null is not a generator', shouldPass('isNotGenerator', null));
        it('Should inspect that undefined is not a generator', shouldPass('isNotGenerator', undefined));
        it('Should inspect that true is not a generator', shouldPass('isNotGenerator', true));
        it('Should inspect that false is not a generator', shouldPass('isNotGenerator', false));
        it('Should inspect that 123 is not a generator', shouldPass('isNotGenerator', 123));
        it('Should inspect that 1.003 is not a generator', shouldPass('isNotGenerator', 1.003));
        it('Should inspect that NaN is not a generator', shouldPass('isNotGenerator', NaN));
        it('Should inspect that [] is not a generator', shouldPass('isNotGenerator', []));
        it('Should inspect that {} is not a generator', shouldPass('isNotGenerator', {}));
        it('Should inspect that function is not a generator', shouldPass('isNotGenerator', function() {}));
        it('Should inspect that generator is not a generator', shouldFail('isNotGenerator', function* () { yield;}));
        it('Should inspect that class is not a generator', shouldPass('isNotGenerator', class {}));
        it('Should inspect that /.+/ is not a generator', shouldPass('isNotGenerator', /.+/));
    });

    describe('isTruthy', function() {
        it('Should inspect that "foo" is true', shouldPass('isTruthy', 'foo'));
        it('Should inspect that "" is true', shouldFail('isTruthy', ''));
        it('Should inspect that "123" is true', shouldPass('isTruthy', '123'));
        it('Should inspect that null is true', shouldFail('isTruthy', null));
        it('Should inspect that undefined is true', shouldFail('isTruthy', undefined));
        it('Should inspect that true is true', shouldPass('isTruthy', true));
        it('Should inspect that false is true', shouldFail('isTruthy', false));
        it('Should inspect that 123 is true', shouldPass('isTruthy', 123));
        it('Should inspect that 1.003 is true', shouldPass('isTruthy', 1.003));
        it('Should inspect that NaN is true', shouldFail('isTruthy', NaN));
        it('Should inspect that [] is true', shouldPass('isTruthy', []));
        it('Should inspect that {} is true', shouldPass('isTruthy', {}));
        it('Should inspect that function is true', shouldPass('isTruthy', function() {}));
        it('Should inspect that generator is true', shouldPass('isTruthy', function* () { yield;}));
        it('Should inspect that class is true', shouldPass('isTruthy', class {}));
        it('Should inspect that /.+/ is true', shouldPass('isTruthy', /.+/));
    });

    describe('isFalsy', function() {
        it('Should inspect that "foo" is true', shouldFail('isFalsy', 'foo'));
        it('Should inspect that "" is true', shouldPass('isFalsy', ''));
        it('Should inspect that "123" is true', shouldFail('isFalsy', '123'));
        it('Should inspect that null is true', shouldPass('isFalsy', null));
        it('Should inspect that undefined is true', shouldPass('isFalsy', undefined));
        it('Should inspect that true is true', shouldFail('isFalsy', true));
        it('Should inspect that false is true', shouldPass('isFalsy', false));
        it('Should inspect that 123 is true', shouldFail('isFalsy', 123));
        it('Should inspect that 1.003 is true', shouldFail('isFalsy', 1.003));
        it('Should inspect that NaN is true', shouldPass('isFalsy', NaN));
        it('Should inspect that [] is true', shouldFail('isFalsy', []));
        it('Should inspect that {} is true', shouldFail('isFalsy', {}));
        it('Should inspect that function is true', shouldFail('isFalsy', function() {}));
        it('Should inspect that generator is true', shouldFail('isFalsy', function* () { yield;}));
        it('Should inspect that class is true', shouldFail('isFalsy', class {}));
        it('Should inspect that /.+/ is true', shouldFail('isFalsy', /.+/));
    });

    describe('isEmpty', function() {
        it('Should inspect that "foo" is true', shouldFail('isEmpty', 'foo'));
        it('Should inspect that "" is true', shouldPass('isEmpty', ''));
        it('Should inspect that "123" is true', shouldFail('isEmpty', '123'));
        it('Should inspect that null is true', shouldFail('isEmpty', null));
        it('Should inspect that undefined is true', shouldFail('isEmpty', undefined));
        it('Should inspect that true is true', shouldFail('isEmpty', true));
        it('Should inspect that false is true', shouldFail('isEmpty', false));
        it('Should inspect that 123 is true', shouldFail('isEmpty', 123));
        it('Should inspect that 1.003 is true', shouldFail('isEmpty', 1.003));
        it('Should inspect that NaN is true', shouldFail('isEmpty', NaN));
        it('Should inspect that [] is true', shouldPass('isEmpty', []));
        it('Should inspect that {} is true', shouldPass('isEmpty', {}));
        it('Should inspect that function is true', shouldFail('isEmpty', function() {}));
        it('Should inspect that generator is true', shouldFail('isEmpty', function* () { yield;}));
        it('Should inspect that class is true', shouldFail('isEmpty', class {}));
        it('Should inspect that /.+/ is true', shouldFail('isEmpty', /.+/));
    });

    describe('isNotEmpty', function() {
        it('Should inspect that "foo" is true', shouldPass('isNotEmpty', 'foo'));
        it('Should inspect that "" is true', shouldFail('isNotEmpty', ''));
        it('Should inspect that "123" is true', shouldPass('isNotEmpty', '123'));
        it('Should inspect that null is true', shouldPass('isNotEmpty', null));
        it('Should inspect that undefined is true', shouldPass('isNotEmpty', undefined));
        it('Should inspect that true is true', shouldPass('isNotEmpty', true));
        it('Should inspect that false is true', shouldPass('isNotEmpty', false));
        it('Should inspect that 123 is true', shouldPass('isNotEmpty', 123));
        it('Should inspect that 1.003 is true', shouldPass('isNotEmpty', 1.003));
        it('Should inspect that NaN is true', shouldPass('isNotEmpty', NaN));
        it('Should inspect that [] is true', shouldFail('isNotEmpty', []));
        it('Should inspect that {} is true', shouldFail('isNotEmpty', {}));
        it('Should inspect that function is true', shouldPass('isNotEmpty', function() {}));
        it('Should inspect that generator is true', shouldPass('isNotEmpty', function* () { yield;}));
        it('Should inspect that class is true', shouldPass('isNotEmpty', class {}));
        it('Should inspect that /.+/ is true', shouldPass('isNotEmpty', /.+/));
    });

    describe('isInstanceOf', function() {
        var Foo = function() {};
        var Bar = class {};

        var foo = new Foo();
        var bar = new Bar();
        it('Should inspect that "foo" is an instance of Foo', shouldPass('isInstanceOf', foo, Foo));
        it('Should inspect that "foo" is not an instance of Bar', shouldFail('isInstanceOf', foo, Bar));
        it('Should inspect that "bar" is an instance of Bar', shouldPass('isInstanceOf', bar, Bar));
        it('Should inspect that [] is an instance of String', shouldPass('isInstanceOf', [], Array));
        it('Should inspect that {} is an instance of String', shouldPass('isInstanceOf', {}, Object));
        it('Should inspect that function is an instance of String', shouldPass('isInstanceOf', function() {}, Function));
        it('Should inspect that /.+/ is an instance of String', shouldPass('isInstanceOf', /.+/, RegExp));
    });

    describe('isNotInstanceOf', function() {
        var Foo = function() {};
        var Bar = class {};

        var foo = new Foo();
        var bar = new Bar();
        it('Should inspect that "foo" is not an instance of Foo', shouldFail('isNotInstanceOf', foo, Foo));
        it('Should inspect that "foo" is not an instance of Bar', shouldPass('isNotInstanceOf', foo, Bar));
        it('Should inspect that "bar" is not an instance of Bar', shouldFail('isNotInstanceOf', bar, Bar));
        it('Should inspect that [] is not an instance of String', shouldFail('isNotInstanceOf', [], Array));
        it('Should inspect that {} is not an instance of String', shouldFail('isNotInstanceOf', {}, Object));
        it('Should inspect that function is not an instance of String', shouldFail('isNotInstanceOf', function() {}, Function));
        it('Should inspect that /.+/ is not an instance of String', shouldFail('isNotInstanceOf', /.+/, RegExp));
    });

    describe('doesMatch', function() {
        it('Should inspect that "foo" doesMatch', shouldPass('doesMatch', 'foo', /f.+/));
        it('Should inspect that "bar" doesMatch', shouldFail('doesMatch', 'bar', /f.+/));
        it('Should inspect that 123 doesMatch', shouldPass('doesMatch', 123, /\d/));
        it('Should inspect that "123" with missing arg does fail', shouldFail('doesMatch', '123'));
    });

    describe('doesNotMatch', function() {
        it('Should inspect that "foo" doesNotMatch', shouldPass('doesNotMatch', 'bar', /f.+/));
        it('Should inspect that "bar" doesNotMatch', shouldFail('doesNotMatch', 'foo', /f.+/));
        it('Should inspect that 123 doesNotMatch', shouldFail('doesNotMatch', 123, /\d/));
        it('Should inspect that "123" with missing arg does fail', shouldFail('doesNotMatch', '123'));
    });

    describe('isGreaterThan', function() {
        it('Should throw an InputError if input is a string!', shouldThrow('Input is invalid!', 'isGreaterThan', '123', 123));
        it('Should throw an InputError if input is undefined!', shouldThrow('Input is invalid!', 'isGreaterThan', undefined, 123));
        it('Should throw an InputError if input is null!', shouldThrow('Input is invalid!', 'isGreaterThan', null, 123));
        it('Should throw an InputError if value is a string!', shouldThrow('First value is invalid!', 'isGreaterThan', 123, '123'));
        it('Should throw an InputError if value is undefined!', shouldThrow('First value is invalid!', 'isGreaterThan', 123, undefined));
        it('Should throw an InputError if value is null!', shouldThrow('First value is invalid!', 'isGreaterThan', 123, null));

        it('Should inspect that 123 is greater than 124', shouldFail('isGreaterThan', 123, 124));
        it('Should inspect that 123 is greater than 123', shouldFail('isGreaterThan', 123, 123));
        it('Should inspect that 123 is greater than 122', shouldPass('isGreaterThan', 123, 122));
        it('Should inspect that 123 is greater than -122', shouldPass('isGreaterThan', 123, -122));
        it('Should inspect that -123 is greater than -122', shouldFail('isGreaterThan', -123, -122));
        it('Should inspect that -123 is greater than -123', shouldFail('isGreaterThan', -123, -123));
        it('Should inspect that -123 is greater than -124', shouldPass('isGreaterThan', -123, -124));
    });

    describe('isGreaterOrEqual', function() {
        it('Should throw an InputError if input is a string!', shouldThrow('Input is invalid!', 'isGreaterOrEqual', '123', 123));
        it('Should throw an InputError if input is undefined!', shouldThrow('Input is invalid!', 'isGreaterOrEqual', undefined, 123));
        it('Should throw an InputError if input is null!', shouldThrow('Input is invalid!', 'isGreaterOrEqual', null, 123));
        it('Should throw an InputError if value is a string!', shouldThrow('First value is invalid!', 'isGreaterOrEqual', 123, '123'));
        it('Should throw an InputError if value is undefined!', shouldThrow('First value is invalid!', 'isGreaterOrEqual', 123, undefined));
        it('Should throw an InputError if value is null!', shouldThrow('First value is invalid!', 'isGreaterOrEqual', 123, null));

        it('Should inspect that 123 is greater than 124', shouldFail('isGreaterOrEqual', 123, 124));
        it('Should inspect that 123 is greater than 123', shouldPass('isGreaterOrEqual', 123, 123));
        it('Should inspect that 123 is greater than 122', shouldPass('isGreaterOrEqual', 123, 122));
        it('Should inspect that 123 is greater than -122', shouldPass('isGreaterOrEqual', 123, -122));
        it('Should inspect that -123 is greater than -122', shouldFail('isGreaterOrEqual', -123, -122));
        it('Should inspect that -123 is greater than -123', shouldPass('isGreaterOrEqual', -123, -123));
        it('Should inspect that -123 is greater than -124', shouldPass('isGreaterOrEqual', -123, -124));
    });

    describe('isLesserThan', function() {
        it('Should throw an InputError if input is a string!', shouldThrow('Input is invalid!', 'isLesserThan', '123', 123));
        it('Should throw an InputError if input is undefined!', shouldThrow('Input is invalid!', 'isLesserThan', undefined, 123));
        it('Should throw an InputError if input is null!', shouldThrow('Input is invalid!', 'isLesserThan', null, 123));
        it('Should throw an InputError if value is a string!', shouldThrow('First value is invalid!', 'isLesserThan', 123, '123'));
        it('Should throw an InputError if value is undefined!', shouldThrow('First value is invalid!', 'isLesserThan', 123, undefined));
        it('Should throw an InputError if value is null!', shouldThrow('First value is invalid!', 'isLesserThan', 123, null));

        it('Should inspect that 123 is lesser than 124', shouldPass('isLesserThan', 123, 124));
        it('Should inspect that 123 is lesser than 123', shouldFail('isLesserThan', 123, 123));
        it('Should inspect that 123 is lesser than 122', shouldFail('isLesserThan', 123, 122));
        it('Should inspect that 123 is lesser than -122', shouldPass('isLesserThan', -123, 122));
        it('Should inspect that -123 is lesser than -122', shouldFail('isLesserThan', -123, -124));
        it('Should inspect that -123 is lesser than -123', shouldFail('isLesserThan', -123, -123));
        it('Should inspect that -123 is lesser than -124', shouldPass('isLesserThan', -123, -122));
    });

    describe('isLesserOrEqual', function() {
        it('Should throw an InputError if input is a string!', shouldThrow('Input is invalid!', 'isLesserOrEqual', '123', 123));
        it('Should throw an InputError if input is undefined!', shouldThrow('Input is invalid!', 'isLesserOrEqual', undefined, 123));
        it('Should throw an InputError if input is null!', shouldThrow('Input is invalid!', 'isLesserOrEqual', null, 123));
        it('Should throw an InputError if value is a string!', shouldThrow('First value is invalid!', 'isLesserOrEqual', 123, '123'));
        it('Should throw an InputError if value is undefined!', shouldThrow('First value is invalid!', 'isLesserOrEqual', 123, undefined));
        it('Should throw an InputError if value is null!', shouldThrow('First value is invalid!', 'isLesserOrEqual', 123, null));

        it('Should inspect that 123 is lesser than 124', shouldPass('isLesserOrEqual', 123, 124));
        it('Should inspect that 123 is lesser than 123', shouldPass('isLesserOrEqual', 123, 123));
        it('Should inspect that 123 is lesser than 122', shouldFail('isLesserOrEqual', 123, 122));
        it('Should inspect that 123 is lesser than -122', shouldPass('isLesserOrEqual', -123, 122));
        it('Should inspect that -123 is lesser than -122', shouldFail('isLesserOrEqual', -123, -124));
        it('Should inspect that -123 is lesser than -123', shouldPass('isLesserOrEqual', -123, -123));
        it('Should inspect that -123 is lesser than -124', shouldPass('isLesserOrEqual', -123, -122));
    });

    describe('hasKey', function() {
        it('Should throw an InputError if input is a string!', shouldThrow('Input is invalid!', 'hasKey', 'foo', 'foo'));
        it('Should throw an InputError if input is undefined!', shouldThrow('Input is invalid!', 'hasKey', undefined, 'foo'));
        it('Should throw an InputError if input is null!', shouldThrow('Input is invalid!', 'hasKey', null, 'foo'));
        it('Should throw an InputError if value is undefined!', shouldThrow('First value is invalid!', 'hasKey', {}, undefined));
        it('Should throw an InputError if value is null!', shouldThrow('First value is invalid!', 'hasKey', {}, null));
        it('Should throw an InputError if value is an object!', shouldThrow('First value is invalid!', 'hasKey', {}, {}));
        it('Should throw an InputError if value is undefined!', shouldThrow('First value is invalid!', 'hasKey', [], undefined));
        it('Should throw an InputError if value is null!', shouldThrow('First value is invalid!', 'hasKey', [], null));
        it('Should throw an InputError if value is an object!', shouldThrow('First value is invalid!', 'hasKey', [], {}));

        it('Should inspect that object has an foo property', shouldPass('hasKey', { foo: 'bar' }, 'foo'));
        it('Should inspect that object has an bar property', shouldFail('hasKey', { foo: 'bar' }, 'bar'));
        it('Should inspect that object has an f property', shouldFail('hasKey', { foo: 'bar' }, 'f'));
        it('Should inspect that object has an foofoo property', shouldFail('hasKey', { foo: 'bar' }, 'foofoo'));
        it('Should inspect that object has an prototype property', shouldFail('hasKey', { foo: 'bar' }, 'prototype'));
        
        var arr = [];
        arr.foo = 'bar';
        it('Should inspect that array has an foo property', shouldPass('hasKey', arr, 'foo'));
        it('Should inspect that array has an bar property', shouldFail('hasKey', arr, 'bar'));
        it('Should inspect that array has an f property', shouldFail('hasKey', arr, 'f'));
        it('Should inspect that array has an foofoo property', shouldFail('hasKey', arr, 'foofoo'));
        it('Should inspect that array has an prototype property', shouldFail('hasKey', arr, 'prototype'));

        var reg = /.+/;
        reg.foo = 'bar';
        it('Should inspect that regexp has an foo property', shouldPass('hasKey', reg, 'foo'));
        it('Should inspect that regexp has an bar property', shouldFail('hasKey', reg, 'bar'));
        it('Should inspect that regexp has an f property', shouldFail('hasKey', reg, 'f'));
        it('Should inspect that regexp has an foofoo property', shouldFail('hasKey', reg, 'foofoo'));
        it('Should inspect that regexp has an prototype property', shouldFail('hasKey', reg, 'prototype'));

        var fn = function() {};
        fn.foo = 'bar';
        it('Should inspect that function has an foo property', shouldPass('hasKey', fn, 'foo'));
        it('Should inspect that function has an bar property', shouldFail('hasKey', fn, 'bar'));
        it('Should inspect that function has an f property', shouldFail('hasKey', fn, 'f'));
        it('Should inspect that function has an foofoo property', shouldFail('hasKey', fn, 'foofoo'));
        it('Should inspect that function has an prototype property', shouldFail('hasKey', fn, 'prototype'));

        var gen = function* () { yield; };
        gen.foo = 'bar';
        it('Should inspect that generator has an foo property', shouldPass('hasKey', gen, 'foo'));
        it('Should inspect that generator has an bar property', shouldFail('hasKey', gen, 'bar'));
        it('Should inspect that generator has an f property', shouldFail('hasKey', gen, 'f'));
        it('Should inspect that generator has an foofoo property', shouldFail('hasKey', gen, 'foofoo'));
        it('Should inspect that generator has an prototype property', shouldFail('hasKey', gen, 'prototype'));

        var classObj = class{};
        classObj.foo = 'bar';
        it('Should inspect that class has an foo property', shouldPass('hasKey', classObj, 'foo'));
        it('Should inspect that class has an bar property', shouldFail('hasKey', classObj, 'bar'));
        it('Should inspect that class has an f property', shouldFail('hasKey', classObj, 'f'));
        it('Should inspect that class has an foofoo property', shouldFail('hasKey', classObj, 'foofoo'));
        it('Should inspect that class has an prototype property', shouldFail('hasKey', classObj, 'prototype'));
    });

    describe('hasNotKey', function() {
        it('Should throw an InputError if input is a string!', shouldThrow('Input is invalid!', 'hasNotKey', 'foo', 'foo'));
        it('Should throw an InputError if input is undefined!', shouldThrow('Input is invalid!', 'hasNotKey', undefined, 'foo'));
        it('Should throw an InputError if input is null!', shouldThrow('Input is invalid!', 'hasNotKey', null, 'foo'));
        it('Should throw an InputError if value is undefined!', shouldThrow('First value is invalid!', 'hasNotKey', {}, undefined));
        it('Should throw an InputError if value is null!', shouldThrow('First value is invalid!', 'hasNotKey', {}, null));
        it('Should throw an InputError if value is an object!', shouldThrow('First value is invalid!', 'hasNotKey', {}, {}));
        it('Should throw an InputError if value is undefined!', shouldThrow('First value is invalid!', 'hasNotKey', [], undefined));
        it('Should throw an InputError if value is null!', shouldThrow('First value is invalid!', 'hasNotKey', [], null));
        it('Should throw an InputError if value is an object!', shouldThrow('First value is invalid!', 'hasNotKey', [], {}));

        it('Should inspect that object has an foo property', shouldFail('hasNotKey', { foo: 'bar' }, 'foo'));
        it('Should inspect that object has an bar property', shouldPass('hasNotKey', { foo: 'bar' }, 'bar'));
        it('Should inspect that object has an f property', shouldPass('hasNotKey', { foo: 'bar' }, 'f'));
        it('Should inspect that object has an foofoo property', shouldPass('hasNotKey', { foo: 'bar' }, 'foofoo'));
        it('Should inspect that object has an prototype property', shouldPass('hasNotKey', { foo: 'bar' }, 'prototype'));
        
        var arr = [];
        arr.foo = 'bar';
        it('Should inspect that array has an foo property', shouldFail('hasNotKey', arr, 'foo'));
        it('Should inspect that array has an bar property', shouldPass('hasNotKey', arr, 'bar'));
        it('Should inspect that array has an f property', shouldPass('hasNotKey', arr, 'f'));
        it('Should inspect that array has an foofoo property', shouldPass('hasNotKey', arr, 'foofoo'));
        it('Should inspect that array has an prototype property', shouldPass('hasNotKey', arr, 'prototype'));

        var reg = /.+/;
        reg.foo = 'bar';
        it('Should inspect that regexp has an foo property', shouldFail('hasNotKey', reg, 'foo'));
        it('Should inspect that regexp has an bar property', shouldPass('hasNotKey', reg, 'bar'));
        it('Should inspect that regexp has an f property', shouldPass('hasNotKey', reg, 'f'));
        it('Should inspect that regexp has an foofoo property', shouldPass('hasNotKey', reg, 'foofoo'));
        it('Should inspect that regexp has an prototype property', shouldPass('hasNotKey', reg, 'prototype'));

        var fn = function() {};
        fn.foo = 'bar';
        it('Should inspect that function has an foo property', shouldFail('hasNotKey', fn, 'foo'));
        it('Should inspect that function has an bar property', shouldPass('hasNotKey', fn, 'bar'));
        it('Should inspect that function has an f property', shouldPass('hasNotKey', fn, 'f'));
        it('Should inspect that function has an foofoo property', shouldPass('hasNotKey', fn, 'foofoo'));
        it('Should inspect that function has an prototype property', shouldPass('hasNotKey', fn, 'prototype'));

        var gen = function* () { yield; };
        gen.foo = 'bar';
        it('Should inspect that generator has an foo property', shouldFail('hasNotKey', gen, 'foo'));
        it('Should inspect that generator has an bar property', shouldPass('hasNotKey', gen, 'bar'));
        it('Should inspect that generator has an f property', shouldPass('hasNotKey', gen, 'f'));
        it('Should inspect that generator has an foofoo property', shouldPass('hasNotKey', gen, 'foofoo'));
        it('Should inspect that generator has an prototype property', shouldPass('hasNotKey', gen, 'prototype'));

        var classObj = class{};
        classObj.foo = 'bar';
        it('Should inspect that class has an foo property', shouldFail('hasNotKey', classObj, 'foo'));
        it('Should inspect that class has an bar property', shouldPass('hasNotKey', classObj, 'bar'));
        it('Should inspect that class has an f property', shouldPass('hasNotKey', classObj, 'f'));
        it('Should inspect that class has an foofoo property', shouldPass('hasNotKey', classObj, 'foofoo'));
        it('Should inspect that class has an prototype property', shouldPass('hasNotKey', classObj, 'prototype'));
    });

    describe('hasKeys', function() {
        it('Should throw an InputError if input is a string!', shouldThrow('Input is invalid!', 'hasKeys', 'foo', 'foo'));
        it('Should throw an InputError if input is undefined!', shouldThrow('Input is invalid!', 'hasKeys', undefined, 'foo'));
        it('Should throw an InputError if input is null!', shouldThrow('Input is invalid!', 'hasKeys', null, 'foo'));
        it('Should throw an InputError if value is undefined!', shouldThrow('First value is invalid!', 'hasKeys', {}, undefined));
        it('Should throw an InputError if value is null!', shouldThrow('First value is invalid!', 'hasKeys', {}, null));
        it('Should throw an InputError if value is an object!', shouldThrow('First value is invalid!', 'hasKeys', {}, {}));
        it('Should throw an InputError if value is undefined!', shouldThrow('First value is invalid!', 'hasKeys', [], undefined));
        it('Should throw an InputError if value is null!', shouldThrow('First value is invalid!', 'hasKeys', [], null));
        it('Should throw an InputError if value is an object!', shouldThrow('First value is invalid!', 'hasKeys', [], {}));

        var obj = { foo: 1, blub: 2 };
        it('Should inspect that object has an foo property', shouldPass('hasKeys', obj, ['foo']));
        it('Should inspect that object has an bar property', shouldFail('hasKeys', obj, ['bar']));
        it('Should inspect that object has an f property', shouldFail('hasKeys', obj, ['f']));
        it('Should inspect that object has an foofoo property', shouldFail('hasKeys', obj, ['foofoo']));
        it('Should inspect that object has an prototype property', shouldFail('hasKeys', obj, ['prototype']));

        it('Should inspect that object has an foo property', shouldPass('hasKeys', obj, ['blub', 'foo']));
        it('Should inspect that object has an bar property', shouldFail('hasKeys', obj, ['blub', 'bar']));
        it('Should inspect that object has an f property', shouldFail('hasKeys', obj, ['blub', 'f']));
        it('Should inspect that object has an foofoo property', shouldFail('hasKeys', obj, ['blub', 'foofoo']));
        it('Should inspect that object has an prototype property', shouldFail('hasKeys', obj, ['blub', 'prototype']));
        
        var arr = [];
        arr.foo = 'bar';
        it('Should inspect that array has an foo property', shouldPass('hasKeys', arr, ['foo']));
        it('Should inspect that array has an bar property', shouldFail('hasKeys', arr, ['bar']));
        it('Should inspect that array has an f property', shouldFail('hasKeys', arr, ['f']));
        it('Should inspect that array has an foofoo property', shouldFail('hasKeys', arr, ['foofoo']));
        it('Should inspect that array has an prototype property', shouldFail('hasKeys', arr, ['prototype']));

        var reg = /.+/;
        reg.foo = 'bar';
        it('Should inspect that regexp has an foo property', shouldPass('hasKeys', reg, ['foo']));
        it('Should inspect that regexp has an bar property', shouldFail('hasKeys', reg, ['bar']));
        it('Should inspect that regexp has an f property', shouldFail('hasKeys', reg, ['f']));
        it('Should inspect that regexp has an foofoo property', shouldFail('hasKeys', reg, ['foofoo']));
        it('Should inspect that regexp has an prototype property', shouldFail('hasKeys', reg, ['prototype']));

        var fn = function() {};
        fn.foo = 'bar';
        it('Should inspect that function has an foo property', shouldPass('hasKeys', fn, ['foo']));
        it('Should inspect that function has an bar property', shouldFail('hasKeys', fn, ['bar']));
        it('Should inspect that function has an f property', shouldFail('hasKeys', fn, ['f']));
        it('Should inspect that function has an foofoo property', shouldFail('hasKeys', fn, ['foofoo']));
        it('Should inspect that function has an prototype property', shouldFail('hasKeys', fn, ['prototype']));

        var gen = function* () { yield; };
        gen.foo = 'bar';
        it('Should inspect that generator has an foo property', shouldPass('hasKeys', gen, ['foo']));
        it('Should inspect that generator has an bar property', shouldFail('hasKeys', gen, ['bar']));
        it('Should inspect that generator has an f property', shouldFail('hasKeys', gen, ['f']));
        it('Should inspect that generator has an foofoo property', shouldFail('hasKeys', gen, ['foofoo']));
        it('Should inspect that generator has an prototype property', shouldFail('hasKeys', gen, ['prototype']));

        var classObj = class{};
        classObj.foo = 'bar';
        it('Should inspect that class has an foo property', shouldPass('hasKeys', classObj, ['foo']));
        it('Should inspect that class has an bar property', shouldFail('hasKeys', classObj, ['bar']));
        it('Should inspect that class has an f property', shouldFail('hasKeys', classObj, ['f']));
        it('Should inspect that class has an foofoo property', shouldFail('hasKeys', classObj, ['foofoo']));
        it('Should inspect that class has an prototype property', shouldFail('hasKeys', classObj, ['prototype']));
    });

    describe('hasNotKeys', function() {
        it('Should throw an InputError if input is a string!', shouldThrow('Input is invalid!', 'hasNotKeys', 'foo', 'foo'));
        it('Should throw an InputError if input is undefined!', shouldThrow('Input is invalid!', 'hasNotKeys', undefined, 'foo'));
        it('Should throw an InputError if input is null!', shouldThrow('Input is invalid!', 'hasNotKeys', null, 'foo'));
        it('Should throw an InputError if value is undefined!', shouldThrow('First value is invalid!', 'hasNotKeys', {}, undefined));
        it('Should throw an InputError if value is null!', shouldThrow('First value is invalid!', 'hasNotKeys', {}, null));
        it('Should throw an InputError if value is an object!', shouldThrow('First value is invalid!', 'hasNotKeys', {}, {}));
        it('Should throw an InputError if value is undefined!', shouldThrow('First value is invalid!', 'hasNotKeys', [], undefined));
        it('Should throw an InputError if value is null!', shouldThrow('First value is invalid!', 'hasNotKeys', [], null));
        it('Should throw an InputError if value is an object!', shouldThrow('First value is invalid!', 'hasNotKeys', [], {}));

        var obj = { foo: 1, blub: 2 };
        it('Should inspect that object has an foo property', shouldFail('hasNotKeys', obj, ['foo']));
        it('Should inspect that object has an bar property', shouldPass('hasNotKeys', obj, ['bar']));
        it('Should inspect that object has an f property', shouldPass('hasNotKeys', obj, ['f']));
        it('Should inspect that object has an foofoo property', shouldPass('hasNotKeys', obj, ['foofoo']));
        it('Should inspect that object has an prototype property', shouldPass('hasNotKeys', obj, ['prototype']));

        it('Should inspect that object has a blub and a foo property', shouldFail('hasNotKeys', obj, ['blub', 'foo']));
        it('Should inspect that object has a blub and a bar property', shouldPass('hasNotKeys', obj, ['blub', 'bar']));
        it('Should inspect that object has a blub and a f property', shouldPass('hasNotKeys', obj, ['blub', 'f']));
        it('Should inspect that object has a blub and a foofoo property', shouldPass('hasNotKeys', obj, ['blub', 'foofoo']));
        it('Should inspect that object has a blub and a prototype property', shouldPass('hasNotKeys', obj, ['blub', 'prototype']));
        
        var arr = [];
        arr.foo = 'bar';
        it('Should inspect that array has an foo property', shouldFail('hasNotKeys', arr, ['foo']));
        it('Should inspect that array has an bar property', shouldPass('hasNotKeys', arr, ['bar']));
        it('Should inspect that array has an f property', shouldPass('hasNotKeys', arr, ['f']));
        it('Should inspect that array has an foofoo property', shouldPass('hasNotKeys', arr, ['foofoo']));
        it('Should inspect that array has an prototype property', shouldPass('hasNotKeys', arr, ['prototype']));

        var reg = /.+/;
        reg.foo = 'bar';
        it('Should inspect that regexp has an foo property', shouldFail('hasNotKeys', reg, ['foo']));
        it('Should inspect that regexp has an bar property', shouldPass('hasNotKeys', reg, ['bar']));
        it('Should inspect that regexp has an f property', shouldPass('hasNotKeys', reg, ['f']));
        it('Should inspect that regexp has an foofoo property', shouldPass('hasNotKeys', reg, ['foofoo']));
        it('Should inspect that regexp has an prototype property', shouldPass('hasNotKeys', reg, ['prototype']));

        var fn = function() {};
        fn.foo = 'bar';
        it('Should inspect that function has an foo property', shouldFail('hasNotKeys', fn, ['foo']));
        it('Should inspect that function has an bar property', shouldPass('hasNotKeys', fn, ['bar']));
        it('Should inspect that function has an f property', shouldPass('hasNotKeys', fn, ['f']));
        it('Should inspect that function has an foofoo property', shouldPass('hasNotKeys', fn, ['foofoo']));
        it('Should inspect that function has an prototype property', shouldPass('hasNotKeys', fn, ['prototype']));

        var gen = function* () { yield; };
        gen.foo = 'bar';
        it('Should inspect that generator has an foo property', shouldFail('hasNotKeys', gen, ['foo']));
        it('Should inspect that generator has an bar property', shouldPass('hasNotKeys', gen, ['bar']));
        it('Should inspect that generator has an f property', shouldPass('hasNotKeys', gen, ['f']));
        it('Should inspect that generator has an foofoo property', shouldPass('hasNotKeys', gen, ['foofoo']));
        it('Should inspect that generator has an prototype property', shouldPass('hasNotKeys', gen, ['prototype']));

        var classObj = class{};
        classObj.foo = 'bar';
        it('Should inspect that class has an foo property', shouldFail('hasNotKeys', classObj, ['foo']));
        it('Should inspect that class has an bar property', shouldPass('hasNotKeys', classObj, ['bar']));
        it('Should inspect that class has an f property', shouldPass('hasNotKeys', classObj, ['f']));
        it('Should inspect that class has an foofoo property', shouldPass('hasNotKeys', classObj, ['foofoo']));
        it('Should inspect that class has an prototype property', shouldPass('hasNotKeys', classObj, ['prototype']));
    });

    describe('hasAnyKeys', function() {
        it('Should throw an InputError if input is a string!', shouldThrow('Input is invalid!', 'hasAnyKeys', 'foo', 'foo'));
        it('Should throw an InputError if input is undefined!', shouldThrow('Input is invalid!', 'hasAnyKeys', undefined, 'foo'));
        it('Should throw an InputError if input is null!', shouldThrow('Input is invalid!', 'hasAnyKeys', null, 'foo'));
        it('Should throw an InputError if value is undefined!', shouldThrow('First value is invalid!', 'hasAnyKeys', {}, undefined));
        it('Should throw an InputError if value is null!', shouldThrow('First value is invalid!', 'hasAnyKeys', {}, null));
        it('Should throw an InputError if value is an object!', shouldThrow('First value is invalid!', 'hasAnyKeys', {}, {}));
        it('Should throw an InputError if value is undefined!', shouldThrow('First value is invalid!', 'hasAnyKeys', [], undefined));
        it('Should throw an InputError if value is null!', shouldThrow('First value is invalid!', 'hasAnyKeys', [], null));
        it('Should throw an InputError if value is an object!', shouldThrow('First value is invalid!', 'hasAnyKeys', [], {}));

        var obj = { foo: 1, blub: 2 };
        it('Should inspect that object has an foo property', shouldPass('hasAnyKeys', obj, ['foo', 'blob']));
        it('Should inspect that object has an bar property', shouldFail('hasAnyKeys', obj, ['bar', 'blob']));
        it('Should inspect that object has an f property', shouldFail('hasAnyKeys', obj, ['f', 'blob']));
        it('Should inspect that object has an foofoo property', shouldFail('hasAnyKeys', obj, ['foofoo', 'blob']));
        it('Should inspect that object has an prototype property', shouldFail('hasAnyKeys', obj, ['prototype', 'blob']));

        var arr = [];
        arr.foo = 'bar';
        it('Should inspect that array has an foo property', shouldPass('hasAnyKeys', arr, ['foo', 'blob']));
        it('Should inspect that array has an bar property', shouldFail('hasAnyKeys', arr, ['bar', 'blob']));
        it('Should inspect that array has an f property', shouldFail('hasAnyKeys', arr, ['f', 'blob']));
        it('Should inspect that array has an foofoo property', shouldFail('hasAnyKeys', arr, ['foofoo', 'blob']));
        it('Should inspect that array has an prototype property', shouldFail('hasAnyKeys', arr, ['prototype', 'blob']));

        var reg = /.+/;
        reg.foo = 'bar';
        it('Should inspect that regexp has an foo property', shouldPass('hasAnyKeys', reg, ['foo', 'blob']));
        it('Should inspect that regexp has an bar property', shouldFail('hasAnyKeys', reg, ['bar', 'blob']));
        it('Should inspect that regexp has an f property', shouldFail('hasAnyKeys', reg, ['f', 'blob']));
        it('Should inspect that regexp has an foofoo property', shouldFail('hasAnyKeys', reg, ['foofoo', 'blob']));
        it('Should inspect that regexp has an prototype property', shouldFail('hasAnyKeys', reg, ['prototype', 'blob']));

        var fn = function() {};
        fn.foo = 'bar';
        it('Should inspect that function has an foo property', shouldPass('hasAnyKeys', fn, ['foo', 'blob']));
        it('Should inspect that function has an bar property', shouldFail('hasAnyKeys', fn, ['bar', 'blob']));
        it('Should inspect that function has an f property', shouldFail('hasAnyKeys', fn, ['f', 'blob']));
        it('Should inspect that function has an foofoo property', shouldFail('hasAnyKeys', fn, ['foofoo', 'blob']));
        it('Should inspect that function has an prototype property', shouldFail('hasAnyKeys', fn, ['prototype', 'blob']));

        var gen = function* () { yield; };
        gen.foo = 'bar';
        it('Should inspect that generator has an foo property', shouldPass('hasAnyKeys', gen, ['foo', 'blob']));
        it('Should inspect that generator has an bar property', shouldFail('hasAnyKeys', gen, ['bar', 'blob']));
        it('Should inspect that generator has an f property', shouldFail('hasAnyKeys', gen, ['f', 'blob']));
        it('Should inspect that generator has an foofoo property', shouldFail('hasAnyKeys', gen, ['foofoo', 'blob']));
        it('Should inspect that generator has an prototype property', shouldFail('hasAnyKeys', gen, ['prototype', 'blob']));

        var classObj = class{};
        classObj.foo = 'bar';
        it('Should inspect that class has an foo property', shouldPass('hasAnyKeys', classObj, ['foo', 'blob']));
        it('Should inspect that class has an bar property', shouldFail('hasAnyKeys', classObj, ['bar', 'blob']));
        it('Should inspect that class has an f property', shouldFail('hasAnyKeys', classObj, ['f', 'blob']));
        it('Should inspect that class has an foofoo property', shouldFail('hasAnyKeys', classObj, ['foofoo', 'blob']));
        it('Should inspect that class has an prototype property', shouldFail('hasAnyKeys', classObj, ['prototype', 'blob']));
    });

    describe('hasNotAnyKeys', function() {
        it('Should throw an InputError if input is a string!', shouldThrow('Input is invalid!', 'hasNotAnyKeys', 'foo', 'foo'));
        it('Should throw an InputError if input is undefined!', shouldThrow('Input is invalid!', 'hasNotAnyKeys', undefined, 'foo'));
        it('Should throw an InputError if input is null!', shouldThrow('Input is invalid!', 'hasNotAnyKeys', null, 'foo'));
        it('Should throw an InputError if value is undefined!', shouldThrow('First value is invalid!', 'hasNotAnyKeys', {}, undefined));
        it('Should throw an InputError if value is null!', shouldThrow('First value is invalid!', 'hasNotAnyKeys', {}, null));
        it('Should throw an InputError if value is an object!', shouldThrow('First value is invalid!', 'hasNotAnyKeys', {}, {}));
        it('Should throw an InputError if value is undefined!', shouldThrow('First value is invalid!', 'hasNotAnyKeys', [], undefined));
        it('Should throw an InputError if value is null!', shouldThrow('First value is invalid!', 'hasNotAnyKeys', [], null));
        it('Should throw an InputError if value is an object!', shouldThrow('First value is invalid!', 'hasNotAnyKeys', [], {}));

        var obj = { foo: 1, blub: 2 };
        it('Should inspect that object has an foo property', shouldFail('hasNotAnyKeys', obj, ['foo', 'blob']));
        it('Should inspect that object has an bar property', shouldPass('hasNotAnyKeys', obj, ['bar', 'blob']));
        it('Should inspect that object has an f property', shouldPass('hasNotAnyKeys', obj, ['f', 'blob']));
        it('Should inspect that object has an foofoo property', shouldPass('hasNotAnyKeys', obj, ['foofoo', 'blob']));
        it('Should inspect that object has an prototype property', shouldPass('hasNotAnyKeys', obj, ['prototype', 'blob']));

        var arr = [];
        arr.foo = 'bar';
        it('Should inspect that array has an foo property', shouldFail('hasNotAnyKeys', arr, ['foo', 'blob']));
        it('Should inspect that array has an bar property', shouldPass('hasNotAnyKeys', arr, ['bar', 'blob']));
        it('Should inspect that array has an f property', shouldPass('hasNotAnyKeys', arr, ['f', 'blob']));
        it('Should inspect that array has an foofoo property', shouldPass('hasNotAnyKeys', arr, ['foofoo', 'blob']));
        it('Should inspect that array has an prototype property', shouldPass('hasNotAnyKeys', arr, ['prototype', 'blob']));

        var reg = /.+/;
        reg.foo = 'bar';
        it('Should inspect that regexp has an foo property', shouldFail('hasNotAnyKeys', reg, ['foo', 'blob']));
        it('Should inspect that regexp has an bar property', shouldPass('hasNotAnyKeys', reg, ['bar', 'blob']));
        it('Should inspect that regexp has an f property', shouldPass('hasNotAnyKeys', reg, ['f', 'blob']));
        it('Should inspect that regexp has an foofoo property', shouldPass('hasNotAnyKeys', reg, ['foofoo', 'blob']));
        it('Should inspect that regexp has an prototype property', shouldPass('hasNotAnyKeys', reg, ['prototype', 'blob']));

        var fn = function() {};
        fn.foo = 'bar';
        it('Should inspect that function has an foo property', shouldFail('hasNotAnyKeys', fn, ['foo', 'blob']));
        it('Should inspect that function has an bar property', shouldPass('hasNotAnyKeys', fn, ['bar', 'blob']));
        it('Should inspect that function has an f property', shouldPass('hasNotAnyKeys', fn, ['f', 'blob']));
        it('Should inspect that function has an foofoo property', shouldPass('hasNotAnyKeys', fn, ['foofoo', 'blob']));
        it('Should inspect that function has an prototype property', shouldPass('hasNotAnyKeys', fn, ['prototype', 'blob']));

        var gen = function* () { yield; };
        gen.foo = 'bar';
        it('Should inspect that generator has an foo property', shouldFail('hasNotAnyKeys', gen, ['foo', 'blob']));
        it('Should inspect that generator has an bar property', shouldPass('hasNotAnyKeys', gen, ['bar', 'blob']));
        it('Should inspect that generator has an f property', shouldPass('hasNotAnyKeys', gen, ['f', 'blob']));
        it('Should inspect that generator has an foofoo property', shouldPass('hasNotAnyKeys', gen, ['foofoo', 'blob']));
        it('Should inspect that generator has an prototype property', shouldPass('hasNotAnyKeys', gen, ['prototype', 'blob']));

        var classObj = class{};
        classObj.foo = 'bar';
        it('Should inspect that class has an foo property', shouldFail('hasNotAnyKeys', classObj, ['foo', 'blob']));
        it('Should inspect that class has an bar property', shouldPass('hasNotAnyKeys', classObj, ['bar', 'blob']));
        it('Should inspect that class has an f property', shouldPass('hasNotAnyKeys', classObj, ['f', 'blob']));
        it('Should inspect that class has an foofoo property', shouldPass('hasNotAnyKeys', classObj, ['foofoo', 'blob']));
        it('Should inspect that class has an prototype property', shouldPass('hasNotAnyKeys', classObj, ['prototype', 'blob']));
    });

    describe('hasProps', function() {
        it('Should throw an InputError if input is a string!', shouldThrow('Input is invalid!', 'hasProps', 'foo', 'foo'));
        it('Should throw an InputError if input is undefined!', shouldThrow('Input is invalid!', 'hasProps', undefined, 'foo'));
        it('Should throw an InputError if input is null!', shouldThrow('Input is invalid!', 'hasProps', null, 'foo'));
        it('Should throw an InputError if value is undefined!', shouldThrow('First value is invalid!', 'hasProps', {}, undefined));
        it('Should throw an InputError if value is null!', shouldThrow('First value is invalid!', 'hasProps', {}, null));
        it('Should throw an InputError if value is an array!', shouldThrow('First value is invalid!', 'hasProps', {}, []));
        it('Should throw an InputError if value is undefined!', shouldThrow('First value is invalid!', 'hasProps', [], undefined));
        it('Should throw an InputError if value is null!', shouldThrow('First value is invalid!', 'hasProps', [], null));
        it('Should throw an InputError if value is an array!', shouldThrow('First value is invalid!', 'hasProps', [], []));

        var obj = { foo: 'blow', blub: 'blob' };
        it('Should inspect that object has an foo property', shouldPass('hasProps', obj, { foo: 'blow'}));
        it('Should inspect that object has an bar property', shouldFail('hasProps', obj, { bar: 'blow'}));
        it('Should inspect that object has an f property', shouldFail('hasProps', obj, { f: 'blow'}));
        it('Should inspect that object has an foofoo property', shouldFail('hasProps', obj, { foofoo: 'blow'}));
        it('Should inspect that object has an prototype property', shouldFail('hasProps', obj, { prototype: 'blow'}));

        obj = {
            foo: 'foo',
            bar: {
                foo: 'foo'
            }
        };

        it('Should inspect that object has an bar.foo property', shouldPass('hasProps', obj, { bar: { foo: 'foo' }}));

        obj = {
            foo: 'foo',
            bar: [
                'foo',
                'foo',
                'blub'
            ]
        };

        it('Should inspect that object has an bar.foo property', shouldPass('hasProps', obj, { bar: [ 'foo', 'foo', 'blub' ]}));
    });

    describe('hasProp', function() {
        it('Should throw an InputError if input is a string!', shouldThrow('Input is invalid!', 'hasProp', 'foo', 'foo'));
        it('Should throw an InputError if input is undefined!', shouldThrow('Input is invalid!', 'hasProp', undefined, 'foo'));
        it('Should throw an InputError if input is null!', shouldThrow('Input is invalid!', 'hasProp', null, 'foo'));
        it('Should throw an InputError if key is undefined!', shouldThrow('First value is invalid!', 'hasProp', {}, undefined));
        it('Should throw an InputError if key is null!', shouldThrow('First value is invalid!', 'hasProp', {}, null));
        it('Should throw an InputError if key is an array!', shouldThrow('First value is invalid!', 'hasProp', {}, []));
        it('Should throw an InputError if key is undefined!', shouldThrow('First value is invalid!', 'hasProp', [], undefined));
        it('Should throw an InputError if key is null!', shouldThrow('First value is invalid!', 'hasProp', [], null));
        it('Should throw an InputError if key is an array!', shouldThrow('First value is invalid!', 'hasProp', [], []));

        var obj = { foo: 'blow', blub: 'blob' };
        it('Should inspect that object has an foo property', shouldPass('hasProp', obj, 'foo', 'blow'));
        it('Should inspect that object has an bar property', shouldFail('hasProp', obj, 'bar', 'blow'));
        it('Should inspect that object has an f property', shouldFail('hasProp', obj, 'f', 'blow'));
        it('Should inspect that object has an foofoo property', shouldFail('hasProp', obj, 'foofoo', 'blow'));
        it('Should inspect that object has an prototype property', shouldFail('hasProp', obj, 'prototype', 'blow'));

        obj = {
            foo: 'foo',
            bar: {
                foo: 'foo'
            }
        };

        it('Should inspect that object has an bar.foo object property', shouldPass('hasProp', obj, 'bar.foo', 'foo' ));

        obj = {
            foo: 'foo',
            bar: {
                foo: [
                    'foo',
                    'foo',
                    'blub'
                ]
            }
        };

        it('Should inspect that object has an bar.foo array property', shouldPass('hasProp', obj, 'bar.foo', [ 'foo', 'foo', 'blub' ]));
    });

    describe('hasNotProp', function() {
        it('Should throw an InputError if input is a string!', shouldThrow('Input is invalid!', 'hasNotProp', 'foo', 'foo'));
        it('Should throw an InputError if input is undefined!', shouldThrow('Input is invalid!', 'hasNotProp', undefined, 'foo'));
        it('Should throw an InputError if input is null!', shouldThrow('Input is invalid!', 'hasNotProp', null, 'foo'));
        it('Should throw an InputError if key is undefined!', shouldThrow('First value is invalid!', 'hasNotProp', {}, undefined));
        it('Should throw an InputError if key is null!', shouldThrow('First value is invalid!', 'hasNotProp', {}, null));
        it('Should throw an InputError if key is an array!', shouldThrow('First value is invalid!', 'hasNotProp', {}, []));
        it('Should throw an InputError if key is undefined!', shouldThrow('First value is invalid!', 'hasNotProp', [], undefined));
        it('Should throw an InputError if key is null!', shouldThrow('First value is invalid!', 'hasNotProp', [], null));
        it('Should throw an InputError if key is an array!', shouldThrow('First value is invalid!', 'hasNotProp', [], []));

        var obj = { foo: 'blow', blub: 'blob' };
        it('Should inspect that object has not an foo property', shouldFail('hasNotProp', obj, 'foo', 'blow'));
        it('Should inspect that object has not an foo property with value "bar"', shouldPass('hasNotProp', obj, 'foo', 'bar'));
        it('Should inspect that object has not an bar property', shouldPass('hasNotProp', obj, 'bar', 'blow'));
        it('Should inspect that object has not an f property', shouldPass('hasNotProp', obj, 'f', 'blow'));
        it('Should inspect that object has not an foofoo property', shouldPass('hasNotProp', obj, 'foofoo', 'blow'));
        it('Should inspect that object has not an prototype property', shouldPass('hasNotProp', obj, 'prototype', 'blow'));

        obj = {
            foo: 'foo',
            bar: {
                foo: 'foo'
            }
        };

        it('Should inspect that object has not an bar.foo property with value "foo"', shouldFail('hasNotProp', obj, 'bar.foo', 'foo'));
        it('Should inspect that object has not an bar.foo property with value "bar"', shouldPass('hasNotProp', obj, 'bar.foo', 'bar'));

        obj = {
            foo: 'foo',
            bar: {
                foo: [
                    'foo',
                    'foo',
                    'blub'
                ]
            }
        };

        it('Should inspect that object has not an bar.foo property with an array value', shouldFail('hasNotProp', obj, 'bar.foo', [ 'foo', 'foo', 'blub' ]));
        it('Should inspect that object has not an bar.foo property with an array value', shouldPass('hasNotProp', obj, 'bar.foo', [ 'bar', 'bar', 'blub' ]));
    });

    describe('hasLength', function() {
        var arr = ['one', 'two', 'three'];
        var str = 'one_two_three';
        
        it('Should inspect that array has a length of 3', shouldPass('hasLength', arr, 3));
        it('Should inspect that array has a length of 4', shouldFail('hasLength', arr, 4));
        it('Should inspect that string has a length of 13', shouldPass('hasLength', str, 13));
        it('Should inspect that string has a length of 14', shouldFail('hasLength', str, 14));
    });

    describe('hasMinLength', function() {
        var arr = ['one', 'two', 'three'];
        var str = 'one_two_three';
        
        it('Should inspect that array has a min length of 2', shouldPass('hasMinLength', arr, 2));
        it('Should inspect that array has a min length of 3', shouldPass('hasMinLength', arr, 3));
        it('Should inspect that array has a min length of 4', shouldFail('hasMinLength', arr, 4));
        it('Should inspect that string has a min length of 13', shouldPass('hasMinLength', str, 12));
        it('Should inspect that string has a min length of 13', shouldPass('hasMinLength', str, 13));
        it('Should inspect that string has a min length of 14', shouldFail('hasMinLength', str, 14));
    });

    describe('hasMaxLength', function() {
        var arr = ['one', 'two', 'three'];
        var str = 'one_two_three';
        
        it('Should inspect that array has a max length of 2', shouldFail('hasMaxLength', arr, 2));
        it('Should inspect that array has a max length of 3', shouldPass('hasMaxLength', arr, 3));
        it('Should inspect that array has a max length of 4', shouldPass('hasMaxLength', arr, 4));
        it('Should inspect that string has a max length of 13', shouldFail('hasMaxLength', str, 12));
        it('Should inspect that string has a max length of 13', shouldPass('hasMaxLength', str, 13));
        it('Should inspect that string has a max length of 14', shouldPass('hasMaxLength', str, 14));
    });

    describe('hasValue', function() {
        var arr = ['one', 'two', 'three', 'four', 'five'];
        
        it('Should inspect that array has a "one" value', shouldPass('hasValue', arr, 'one'));
        it('Should inspect that array has a "two" value', shouldPass('hasValue', arr, 'two'));
        it('Should inspect that array has a "three" value', shouldPass('hasValue', arr, 'three'));
        it('Should inspect that array has a "zero" value', shouldFail('hasValue', arr, 'zero'));
        it('Should inspect that array has a "{ foo: true }" value', shouldPass('hasValue', [{ foo: true }], { foo: true }));
    });

    describe('hasNotValue', function() {
        var arr = ['one', 'two', 'three', 'four', 'five'];
        
        it('Should inspect that array has not "one" any value', shouldFail('hasNotValue', arr, 'one'));
        it('Should inspect that array has not "zero" any value', shouldPass('hasNotValue', arr, 'zero'));
        it('Should inspect that array has not "ten" any value', shouldPass('hasNotValue', arr, 'ten'));
    });

    describe('hasValues', function() {
        var arr = ['one', 'two', 'three', 'four', 'five'];
        
        it('Should inspect that array has all values', shouldFail('hasValues', arr, ['zero', 'one']));
        it('Should inspect that array has all values', shouldPass('hasValues', arr, ['one', 'two']));
        it('Should inspect that array has all values', shouldPass('hasValues', arr, ['one', 'two', 'three']));
        it('Should inspect that array has all values', shouldFail('hasValues', arr, ['one', 'zero']));
        it('Should inspect that array has a "{ foo: true }" value', shouldPass('hasValues', [{ foo: true }, 'one'], [{ foo: true }]));
    });

    describe('hasNotValues', function() {
        var arr = ['one', 'two', 'three', 'four', 'five'];
        
        it('Should inspect that array has all values', shouldFail('hasNotValues', arr, ['one', 'two']));
        it('Should inspect that array has all values', shouldPass('hasNotValues', arr, ['ten', 'eleven']));
        it('Should inspect that array has all values', shouldPass('hasNotValues', arr, ['one', 'zero']));
        it('Should inspect that array has a "{ foo: true }" value', shouldPass('hasNotValues', arr, [{ foo: true }]));
    });

    describe('hasAnyValues', function() {
        var arr = ['one', 'two', 'three', 'four', 'five'];
        
        it('Should inspect that array has any of this values', shouldPass('hasAnyValues', arr, ['zero', 'one']));
        it('Should inspect that array has any of this values', shouldPass('hasAnyValues', arr, ['one', 'two']));
        it('Should inspect that array has any of this values', shouldPass('hasAnyValues', arr, ['one', 'two', 'three']));
        it('Should inspect that array has any of this values', shouldFail('hasAnyValues', arr, ['ten', 'eleven']));
        it('Should inspect that array has a "{ foo: true }" value', shouldPass('hasAnyValues', [{ foo: true }], [{ foo: true }, 'one']));
    });

    describe('hasNotAnyValues', function() {
        var arr = ['one', 'two', 'three', 'four', 'five'];
        
        it('Should inspect that array has not any of this values', shouldFail('hasNotAnyValues', arr, ['one', 'two']));
        it('Should inspect that array has not any of this values', shouldPass('hasNotAnyValues', arr, ['ten', 'eleven']));
        it('Should inspect that array has not any of this values', shouldFail('hasNotAnyValues', arr, ['one', 'zero']));
        it('Should inspect that array has a "{ foo: true }" value', shouldPass('hasNotAnyValues', arr, [{ foo: true }]));
    });

    describe('isWithin', function() {
        it('Should inspect that num is within a range of 2 and 4', shouldPass('isWithin', 3, 2, 4));
        it('Should inspect that num is within a range of 4 and 6', shouldFail('isWithin', 3, 4, 6));
        it('Should inspect that num is within a range of -4 and -2', shouldPass('isWithin', -3, -2, -4));
        it('Should inspect that num is within a range of -6 and -4', shouldFail('isWithin', -3, -4, -6));
    });

    describe('isNotWithin', function() {
        it('Should inspect that num is within a range of 2 and 4', shouldFail('isNotWithin', 3, 2, 4));
        it('Should inspect that num is within a range of 4 and 6', shouldPass('isNotWithin', 3, 4, 6));
        it('Should inspect that num is within a range of -4 and -2', shouldFail('isNotWithin', -3, -2, -4));
        it('Should inspect that num is within a range of -6 and -4', shouldPass('isNotWithin', -3, -4, -6));
    });

    describe('doesThrow', function() {
        var fn = function() {
            throw new Error('Test error');
        };

        var fn2 = function() {
        };

        it('Should throw an error', function() {
            inspect(fn).onCall().doesThrow('Test error');
        });

        it('Should not throw an error', function() {
            var passed = false;

            try {
                inspect(fn2).onCall().doesThrow('Test error');
                passed = true;
            } catch (err) {
                //Everything is fine :)
            }

            if (passed) {
                inspect.fail('Should fail, but it passed!');
            }
        });

        it('Should throw another error than expected', function() {
            var passed = false;

            try {
                inspect(fn).onCall().doesThrow('Some other');
                passed = true;
            } catch (err) {
                //Everything is fine :)
            }

            if (passed) {
                inspect.fail('Should fail, but it passed!');
            }
        });

        it('Should throw an error', function() {
            inspect(fn).onCall().doesThrow();
        });

        it('Should not throw an error', function() {
            var passed = false;

            try {
                inspect(fn2).onCall().doesThrow();
                passed = true;
            } catch (err) {
                //Everything is fine :)
            }

            if (passed) {
                inspect.fail('Should fail, but it passed!');
            }
        });

        it('Should throw an error', function() {
            inspect(fn).onCall().doesThrow(/error/);
        });

        it('Should not throw an error', function() {
            var passed = false;

            try {
                inspect(fn2).onCall().doesThrow(/error/);
                passed = true;
            } catch (err) {
                //Everything is fine :)
            }

            if (passed) {
                inspect.fail('Should fail, but it passed!');
            }
        });

        it('Should throw another error than expected', function() {
            var passed = false;

            try {
                inspect(fn).onCall().doesThrow(/other/);
                passed = true;
            } catch (err) {
                //Everything is fine :)
            }

            if (passed) {
                inspect.fail('Should fail, but it passed!');
            }
        });
        
        it('Should throw an error, using withArgs', function() {
            inspect(fn).withArgs('foo').doesThrow('Test error');
        });

        it('Should not throw an error, using withArgs', function() {
            var passed = false;

            try {
                inspect(fn2).withArgs('foo').doesThrow(/error/);
                passed = true;
            } catch (err) {
                //Everything is fine :)
            }

            if (passed) {
                inspect.fail('Should fail, but it passed!');
            }
        });
    });

    describe('doesNotThrow', function() {
        var fn = function() {
        };

        var fn2 = function() {
            throw new Error('Test error');
        };

        it('Should throw an error', function() {
            inspect(fn).onCall().doesNotThrow('Test error');
        });

        it('Should not throw an error', function() {
            var passed = false;

            try {
                inspect(fn2).onCall().doesNotThrow('Test error');
                passed = true;
            } catch (err) {
                //Everything is fine :)
            }

            if (passed) {
                inspect.fail('Should fail, but it passed!');
            }
        });

        it('Should throw another error than expected', function() {
            inspect(fn2).onCall().doesNotThrow('Some other');
        });

        it('Should throw an error', function() {
            inspect(fn).onCall().doesNotThrow();
        });

        it('Should not throw an error', function() {
            var passed = false;

            try {
                inspect(fn2).onCall().doesNotThrow();
                passed = true;
            } catch (err) {
                //Everything is fine :)
            }

            if (passed) {
                inspect.fail('Should fail, but it passed!');
            }
        });

        it('Should throw an error', function() {
            inspect(fn).onCall().doesNotThrow(/error/);
        });

        it('Should not throw an error', function() {
            var passed = false;

            try {
                inspect(fn2).onCall().doesNotThrow(/error/);
                passed = true;
            } catch (err) {
                //Everything is fine :)
            }

            if (passed) {
                inspect.fail('Should fail, but it passed!');
            }
        });

        it('Should throw another error than expected', function() {
            inspect(fn2).onCall().doesNotThrow(/other/);
        });
        
        it('Should throw an error, using withArgs', function() {
            inspect(fn).withArgs('foo').doesNotThrow('Test error');
        });

        it('Should not throw an error, using withArgs', function() {
            var passed = false;

            try {
                inspect(fn2).withArgs('foo').doesNotThrow(/error/);
                passed = true;
            } catch (err) {
                //Everything is fine :)
            }

            if (passed) {
                inspect.fail('Should fail, but it passed!');
            }
        });
    });

    describe('doesContain', function() {
        var str = 'My football is red';
        it('Should contain `foo`', shouldPass('doesContain', str, 'foo'));
        it('Should contain `bar`', shouldFail('doesContain', str, 'bar'));
    });

    describe('doesNotContain', function() {
        var str = 'My football is red';
        it('Should contain `foo`', shouldFail('doesNotContain', str, 'foo'));
        it('Should contain `bar`', shouldPass('doesNotContain', str, 'bar'));
    });

    describe('doesIncrease', function() {
        var obj = { num: 1 };

        it('Should increase a number', function() {
            inspect(obj).onCall(function() {
                obj.num++;
            }).doesIncrease('num');
        });

        it('Should increase a number by 2', function() {
            inspect(obj).onCall(function() {
                obj.num += 2;
            }).doesIncrease('num', 2);
        });

        it('Should increase a number by 3', function(done) {
            try {
                inspect(obj).onCall(function() {
                    obj.num += 1;
                }).doesIncrease('num', 3);

                done('Failed!');
            } catch (err) {
                done();
            }
        });
    });

    describe('doesDecrease', function() {
        var obj;

        beforeEach(function() {
            obj = { num: 3 };         
        });

        it('Should decrease a number', function() {
            inspect(obj).onCall(function() {
                obj.num--;
            }).doesDecrease('num');
        });

        it('Should decrease a number by 2', function() {
            inspect(obj).onCall(function() {
                obj.num -= 2;
            }).doesDecrease('num', 2);
        });

        it('Should decrease a number by 3', function(done) {
            try {
                inspect(obj).onCall(function() {
                    obj.num -= 1;
                }).doesDecrease('num', 3);

                done('Failed!');
            } catch (err) {
                done();
            }
        });
    });

    describe('isCloseTo', function() {
        it('1.001 should be close to by 0.1', shouldPass('isCloseTo', 1, 1.001, 0.1));
        it('0.91 should be close to by 0.1', shouldPass('isCloseTo', 1, 0.91, 0.1));
        it('0.9 should be close to by 0.1', shouldPass('isCloseTo', 1, 0.9, 0.1));
        it('1.1 should be close to by 0.1', shouldPass('isCloseTo', 1, 1.1, 0.1));
        it('0.89 should be close to by 0.1', shouldFail('isCloseTo', 1, 0.89, 0.1));
        it('1.11 should be close to by 0.1', shouldFail('isCloseTo', 1, 1.11, 0.1));
    });

    describe('isNotCloseTo', function() {
        it('1.001 should not be close to by 0.1', shouldFail('isNotCloseTo', 1, 1.001, 0.1));
        it('0.91 should not be close to by 0.1', shouldFail('isNotCloseTo', 1, 0.91, 0.1));
        it('0.9 should not be close to by 0.1', shouldFail('isNotCloseTo', 1, 0.9, 0.1));
        it('1.1 should not be close to by 0.1', shouldFail('isNotCloseTo', 1, 1.1, 0.1));
        it('0.89 should not be close to by 0.1', shouldPass('isNotCloseTo', 1, 0.89, 0.1));
        it('1.11 should not be close to by 0.1', shouldPass('isNotCloseTo', 1, 1.11, 0.1));
    });

    describe('onCall', function() {
        it('Should call a method', function(done) {
            var fn = function() {
                done();
            };

            var obj = { foo: '' };

            inspect(obj).onCall(fn);
        });
    });

    describe('doesChange', function() {
        it('Should change a property', function() {
            var obj = { foo: '' };
            var fn = function() {
                obj.foo = 'bar';
            };

            inspect(obj).onCall(fn).doesChange('foo');
        });

        it('Should fail changing a property', function(done) {
            var obj = { foo: '' };
            var fn = function() {
                obj.otherfoo = 'bar';
            };

            try {
                inspect(obj).onCall(fn).doesChange('foo');
                done('Failed!');
            } catch(err) {
                done();
            }
        });
    });

    describe('doesNotChange', function() {
        it('Should change a property', function() {
            var obj = { foo: '' };
            var fn = function() {
                obj.otherfoo = 'bar';
            };

            inspect(obj).onCall(fn).doesNotChange('foo');
        });

        it('Should fail not changing a property', function(done) {
            var obj = { foo: '' };
            var fn = function() {
                obj.foo = 'bar';
            };

            try {
                inspect(obj).onCall(fn).doesNotChange('foo');
                done('Failed!');
            } catch(err) {
                done();
            }
        });
    });

    describe('doesStartWith', function() {
        it('Should start with foo', shouldPass('doesStartWith', 'Foo is cool!', 'Foo'));
        it('Should start with bar', shouldFail('doesStartWith', 'Foo is cool!', 'Bar'));
        it('Should start with bar', shouldFail('doesStartWith', 'Foo is cool!', 'Match is longer then input'));
    });

    describe('doesNotStartWith', function() {
        it('Should not start with foo', shouldPass('doesNotStartWith', 'Foo is cool!', 'Bar'));
        it('Should not start with bar', shouldFail('doesNotStartWith', 'Foo is cool!', 'Foo'));
        it('Should not start with bar', shouldPass('doesNotStartWith', 'Foo is cool!', 'Match is longer then input'));
    });

    describe('doesEndWith', function() {
        it('Should end with foo', shouldPass('doesEndWith', 'Foo is cool!', 'cool!'));
        it('Should end with bar', shouldFail('doesEndWith', 'Foo is cool!', 'boring!'));
        it('Should end with bar', shouldFail('doesEndWith', 'Foo is cool!', 'Match is longer then input!'));
    });

    describe('doesNotEndWith', function() {
        it('Should not end with foo', shouldPass('doesNotEndWith', 'Foo is cool!', 'boring!'));
        it('Should not end with bar', shouldFail('doesNotEndWith', 'Foo is cool!', 'cool!'));
        it('Should not end with bar', shouldPass('doesNotEndWith', 'Foo is cool!', 'Match is longer then input!'));
    });
});
