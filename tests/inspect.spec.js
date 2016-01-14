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
        it('should inspect that [] is not a string', shouldFail('isString', []));
        it('should inspect that {} is not a string', shouldFail('isString', {}));
        it('should inspect that function is not a string', shouldFail('isString', function() {}));
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
        it('Should inspect that [] is not a string', shouldPass('isNotString', []));
        it('Should inspect that {} is not a string', shouldPass('isNotString', {}));
        it('Should inspect that function is not a string', shouldPass('isNotString', function() {}));
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
        it('Should inspect that [] is not an array', shouldPass('isArray', []));
        it('Should inspect that {} is not an array', shouldFail('isArray', {}));
        it('Should inspect that function is not an array', shouldFail('isArray', function() {}));
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
        it('Should inspect that [] is not an array', shouldFail('isNotArray', []));
        it('Should inspect that {} is not an array', shouldPass('isNotArray', {}));
        it('Should inspect that function is not an array', shouldPass('isNotArray', function() {}));
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
        it('Should inspect that [] is not an array', shouldFail('isObject', []));
        it('Should inspect that {} is not an array', shouldPass('isObject', {}));
        it('Should inspect that function is not an array', shouldFail('isObject', function() {}));
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
        it('Should inspect that [] is not an array', shouldPass('isNotObject', []));
        it('Should inspect that {} is not an array', shouldFail('isNotObject', {}));
        it('Should inspect that function is not an array', shouldPass('isNotObject', function() {}));
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
        it('Should inspect that [] is not an array', shouldFail('isNull', []));
        it('Should inspect that {} is not an array', shouldFail('isNull', {}));
        it('Should inspect that function is not an array', shouldFail('isNull', function() {}));
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
        it('Should inspect that [] is not an array', shouldPass('isNotNull', []));
        it('Should inspect that {} is not an array', shouldPass('isNotNull', {}));
        it('Should inspect that function is not an array', shouldPass('isNotNull', function() {}));
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
        it('Should inspect that [] is undefined', shouldFail('isUndefined', []));
        it('Should inspect that {} is undefined', shouldFail('isUndefined', {}));
        it('Should inspect that function is undefined', shouldFail('isUndefined', function() {}));
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
        it('Should inspect that [] is not undefined', shouldPass('isNotUndefined', []));
        it('Should inspect that {} is not undefined', shouldPass('isNotUndefined', {}));
        it('Should inspect that function is not undefined', shouldPass('isNotUndefined', function() {}));
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
        it('Should inspect that [] is aboolean', shouldFail('isBoolean', []));
        it('Should inspect that {} is aboolean', shouldFail('isBoolean', {}));
        it('Should inspect that function is aboolean', shouldFail('isBoolean', function() {}));
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
        it('Should inspect that [] is not a boolean', shouldPass('isNotBoolean', []));
        it('Should inspect that {} is not a boolean', shouldPass('isNotBoolean', {}));
        it('Should inspect that function is not a boolean', shouldPass('isNotBoolean', function() {}));
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
        it('Should inspect that [] is true', shouldFail('isTrue', []));
        it('Should inspect that {} is true', shouldFail('isTrue', {}));
        it('Should inspect that function is true', shouldFail('isTrue', function() {}));
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
        it('Should inspect that [] is not true', shouldPass('isNotTrue', []));
        it('Should inspect that {} is not true', shouldPass('isNotTrue', {}));
        it('Should inspect that function is not true', shouldPass('isNotTrue', function() {}));
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
        it('Should inspect that [] is false', shouldFail('isFalse', []));
        it('Should inspect that {} is false', shouldFail('isFalse', {}));
        it('Should inspect that function is false', shouldFail('isFalse', function() {}));
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
        it('Should inspect that [] is not false', shouldPass('isNotFalse', []));
        it('Should inspect that {} is not false', shouldPass('isNotFalse', {}));
        it('Should inspect that function is not false', shouldPass('isNotFalse', function() {}));
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
        it('Should inspect that [] is a RegExp', shouldFail('isRegExp', []));
        it('Should inspect that {} is a RegExp', shouldFail('isRegExp', {}));
        it('Should inspect that function is a RegExp', shouldFail('isRegExp', function() {}));
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
        it('Should inspect that [] is not RegExp', shouldPass('isNotRegExp', []));
        it('Should inspect that {} is not RegExp', shouldPass('isNotRegExp', {}));
        it('Should inspect that function is not RegExp', shouldPass('isNotRegExp', function() {}));
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
        it('Should inspect that [] is a Number', shouldFail('isNumber', []));
        it('Should inspect that {} is a Number', shouldFail('isNumber', {}));
        it('Should inspect that function is a Number', shouldFail('isNumber', function() {}));
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
        it('Should inspect that [] is not Number', shouldPass('isNotNumber', []));
        it('Should inspect that {} is not Number', shouldPass('isNotNumber', {}));
        it('Should inspect that function is not Number', shouldPass('isNotNumber', function() {}));
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
        it('Should inspect that NaN is a NaN', shouldPass('isNaN', NaN));
        it('Should inspect that [] is a NaN', shouldFail('isNaN', []));
        it('Should inspect that {} is a NaN', shouldFail('isNaN', {}));
        it('Should inspect that function is a NaN', shouldFail('isNaN', function() {}));
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
        it('Should inspect that NaN is not NaN', shouldFail('isNotNaN', NaN));
        it('Should inspect that [] is not NaN', shouldPass('isNotNaN', []));
        it('Should inspect that {} is not NaN', shouldPass('isNotNaN', {}));
        it('Should inspect that function is not NaN', shouldPass('isNotNaN', function() {}));
        it('Should inspect that /.+/ is not NaN', shouldPass('isNotNaN', /.+/));
    });
});
