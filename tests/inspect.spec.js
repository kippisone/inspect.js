'use strict';

var inspect = require('../inspect');
var classMethod;

try {
  classMethod = class {
    constructor() {

    }
  }
} catch(err) {
  classMethod = function() {

  }
}

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
      return arr.indexOf(type) === -1 ? shouldPass : shouldFail;
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

  describe('isDate', function() {
    it('should inspect that "foo" is a date object', shouldFail('isDate', 'foo'));
    it('should inspect that "" is a date object', shouldFail('isDate', ''));
    it('should inspect that "123" is a date object', shouldFail('isDate', '123'));
    it('should inspect that null is not a date object', shouldFail('isDate', null));
    it('should inspect that undefined is not a date object', shouldFail('isDate', undefined));
    it('should inspect that true is not a date object', shouldFail('isDate', true));
    it('should inspect that false is not a date object', shouldFail('isDate', false));
    it('should inspect that 123 is not a date object', shouldFail('isDate', 123));
    it('should inspect that 1.003 is not a date object', shouldFail('isDate', 1.003));
    it('should inspect that NaN is not a date object', shouldFail('isDate', NaN));
    it('should inspect that [] is not a date object', shouldFail('isDate', []));
    it('should inspect that {} is not a date object', shouldFail('isDate', {}));
    it('should inspect that function is not a date object', shouldFail('isDate', function() {}));
    it('should inspect that generator is not a date object', shouldFail('isDate', function* () { yield;}));
    it('should inspect that class is not a date object', shouldFail('isDate', class {}));
    it('should inspect that /.+/ is not a date object', shouldFail('isDate', /.+/));
    it('should inspect that new Date() is not a date object', shouldPass('isDate', new Date()));
  });

  describe('isNotDate', function() {
    it('should inspect that "foo" is a date object', shouldPass('isNotDate', 'foo'));
    it('should inspect that "" is a date object', shouldPass('isNotDate', ''));
    it('should inspect that "123" is a date object', shouldPass('isNotDate', '123'));
    it('should inspect that null is not a date object', shouldPass('isNotDate', null));
    it('should inspect that undefined is not a date object', shouldPass('isNotDate', undefined));
    it('should inspect that true is not a date object', shouldPass('isNotDate', true));
    it('should inspect that false is not a date object', shouldPass('isNotDate', false));
    it('should inspect that 123 is not a date object', shouldPass('isNotDate', 123));
    it('should inspect that 1.003 is not a date object', shouldPass('isNotDate', 1.003));
    it('should inspect that NaN is not a date object', shouldPass('isNotDate', NaN));
    it('should inspect that [] is not a date object', shouldPass('isNotDate', []));
    it('should inspect that {} is not a date object', shouldPass('isNotDate', {}));
    it('should inspect that function is not a date object', shouldPass('isNotDate', function() {}));
    it('should inspect that generator is not a date object', shouldPass('isNotDate', function* () { yield;}));
    it('should inspect that class is not a date object', shouldPass('isNotDate', class {}));
    it('should inspect that /.+/ is not a date object', shouldPass('isNotDate', /.+/));
    it('should inspect that new Date() is not a date object', shouldFail('isNotDate', new Date()));
  });

  describe('isDateString', function() {
    it('should inspect that "foo" is a date string', shouldFail('isDateString', 'foo'));
    it('should inspect that "" is a date string', shouldFail('isDateString', ''));
    it('should inspect that "123" is a date string', shouldFail('isDateString', '123'));
    it('should inspect that null is a date string', shouldFail('isDateString', null));
    it('should inspect that undefined is a date string', shouldFail('isDateString', undefined));
    it('should inspect that true is a date string', shouldFail('isDateString', true));
    it('should inspect that false is a date string', shouldFail('isDateString', false));
    it('should inspect that 123 is a date string', shouldFail('isDateString', 123));
    it('should inspect that 1.003 is a date string', shouldFail('isDateString', 1.003));
    it('should inspect that NaN is a date string', shouldFail('isDateString', NaN));
    it('should inspect that [] is a date string', shouldFail('isDateString', []));
    it('should inspect that {} is a date string', shouldFail('isDateString', {}));
    it('should inspect that function is a date string', shouldFail('isDateString', function() {}));
    it('should inspect that generator is a date string', shouldFail('isDateString', function* () { yield;}));
    it('should inspect that class is a date string', shouldFail('isDateString', class {}));
    it('should inspect that /.+/ is a date string', shouldFail('isDateString', /.+/));
    it('should inspect that new Date() is a date string', shouldFail('isDateString', new Date()));
    it('should inspect that Thu, 28 Aug 2016 22:37:13 +0200 is a date string', shouldPass('isDateString', 'Thu, 28 Aug 2016 22:37:13 +0200'));
  });

  describe('isNotDateString', function() {
    it('should inspect that "foo" is a date string', shouldPass('isNotDateString', 'foo'));
    it('should inspect that "" is a date string', shouldPass('isNotDateString', ''));
    it('should inspect that "123" is a date string', shouldPass('isNotDateString', '123'));
    it('should inspect that null is not a date string', shouldPass('isNotDateString', null));
    it('should inspect that undefined is not a date string', shouldPass('isNotDateString', undefined));
    it('should inspect that true is not a date string', shouldPass('isNotDateString', true));
    it('should inspect that false is not a date string', shouldPass('isNotDateString', false));
    it('should inspect that 123 is not a date string', shouldPass('isNotDateString', 123));
    it('should inspect that 1.003 is not a date string', shouldPass('isNotDateString', 1.003));
    it('should inspect that NaN is not a date string', shouldPass('isNotDateString', NaN));
    it('should inspect that [] is not a date string', shouldPass('isNotDateString', []));
    it('should inspect that {} is not a date string', shouldPass('isNotDateString', {}));
    it('should inspect that function is not a date string', shouldPass('isNotDateString', function() {}));
    it('should inspect that generator is not a date string', shouldPass('isNotDateString', function* () { yield;}));
    it('should inspect that class is not a date string', shouldPass('isNotDateString', class {}));
    it('should inspect that /.+/ is not a date string', shouldPass('isNotDateString', /.+/));
    it('should inspect that new Date() is not a date string', shouldPass('isNotDateString', new Date()));
    it('should inspect that Thu, 28 Aug 2016 22:37:13 +0200 is not a date string', shouldFail('isNotDateString', 'Thu, 28 Aug 2016 22:37:13 +0200'));
  });

  describe('getItem', function() {
    it('Should return a specific array item', function() {
      let arr = [1, 2, '3', 4];
      inspect(arr).getItem(1).isNumber();
      inspect(arr).getItem(2).isString();
      inspect(arr).getItem(5).isUndefined();

      inspect(() => {
        inspect('str').getItem('1');
      }).onCall().doesThrow(/Input must be an array/);

      inspect(() => {
        inspect(arr).getItem('1');
      }).onCall().doesThrow(/must be a number/);
    });
  });

  describe('getRange', () => {
    it('Returns a range array', () => {
      const range = inspect.getRange(1, 9);
      inspect(range).isArray();
      inspect(range).isEql([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
  });

});
