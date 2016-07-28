'use strict';

var utils = require('../lib/inspectUtils');
var matcher = require('../lib/matcher');

var plainFunction = function() {

};

var curDate = new Date();

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
      { title: 'two different regular expressions', left: /.+/, right: /.*/, shoudFail: true },

      // String matcher
      { title: 'string with str matcher', left: 'aaa', right: matcher.str, shoudFail: false },
      { title: 'number with str matcher', left: 123, right: matcher.str, shoudFail: true },
      { title: 'boolean with str matcher', left: true, right: matcher.str, shoudFail: true },
      { title: 'array with str matcher', left: ['aaa'], right: matcher.str, shoudFail: true },
      { title: 'object with str matcher', left: { foo: 'bar' }, right: matcher.str, shoudFail: true },
      { title: 'null with str matcher', left: null, right: matcher.str, shoudFail: true },
      { title: 'undefined with str matcher', left: undefined, right: matcher.str, shoudFail: true },
      { title: 'function with str matcher', left: plainFunction, right: matcher.str, shoudFail: true },
      { title: 'NaN with str matcher', left: NaN, right: matcher.str, shoudFail: true },
      { title: 'regexp with str matcher', left: /.+/, right: matcher.str, shoudFail: true },
      { title: 'date with str matcher', left: curDate, right: matcher.str, shoudFail: true },

      // Number matcher
      { title: 'string with num matcher', left: 'aaa', right: matcher.num, shoudFail: true },
      { title: 'number with num matcher', left: 123, right: matcher.num, shoudFail: false },
      { title: 'boolean with num matcher', left: true, right: matcher.num, shoudFail: true },
      { title: 'array with num matcher', left: ['aaa'], right: matcher.num, shoudFail: true },
      { title: 'object with num matcher', left: { foo: 'bar' }, right: matcher.num, shoudFail: true },
      { title: 'null with num matcher', left: null, right: matcher.num, shoudFail: true },
      { title: 'undefined with num matcher', left: undefined, right: matcher.num, shoudFail: true },
      { title: 'function with num matcher', left: plainFunction, right: matcher.num, shoudFail: true },
      { title: 'NaN with num matcher', left: NaN, right: matcher.num, shoudFail: true },
      { title: 'regexp with num matcher', left: /.+/, right: matcher.num, shoudFail: true },
      { title: 'date with num matcher', left: curDate, right: matcher.num, shoudFail: true },

      // Array matcher
      { title: 'string with arr matcher', left: 'aaa', right: matcher.arr, shoudFail: true },
      { title: 'number with arr matcher', left: 123, right: matcher.arr, shoudFail: true },
      { title: 'boolean with arr matcher', left: true, right: matcher.arr, shoudFail: true },
      { title: 'array with arr matcher', left: ['aaa'], right: matcher.arr, shoudFail: false },
      { title: 'object with arr matcher', left: { foo: 'bar' }, right: matcher.arr, shoudFail: true },
      { title: 'null with arr matcher', left: null, right: matcher.arr, shoudFail: true },
      { title: 'undefined with arr matcher', left: undefined, right: matcher.arr, shoudFail: true },
      { title: 'function with arr matcher', left: plainFunction, right: matcher.arr, shoudFail: true },
      { title: 'NaN with arr matcher', left: NaN, right: matcher.arr, shoudFail: true },
      { title: 'regexp with arr matcher', left: /.+/, right: matcher.arr, shoudFail: true },
      { title: 'date with arr matcher', left: curDate, right: matcher.arr, shoudFail: true },

      // Object matcher
      { title: 'string with obj matcher', left: 'aaa', right: matcher.obj, shoudFail: true },
      { title: 'number with obj matcher', left: 123, right: matcher.obj, shoudFail: true },
      { title: 'boolean with obj matcher', left: true, right: matcher.obj, shoudFail: true },
      { title: 'array with obj matcher', left: ['aaa'], right: matcher.obj, shoudFail: true },
      { title: 'object with obj matcher', left: { foo: 'bar' }, right: matcher.obj, shoudFail: false },
      { title: 'null with obj matcher', left: null, right: matcher.obj, shoudFail: true },
      { title: 'undefined with obj matcher', left: undefined, right: matcher.obj, shoudFail: true },
      { title: 'function with obj matcher', left: plainFunction, right: matcher.obj, shoudFail: true },
      { title: 'NaN with obj matcher', left: NaN, right: matcher.obj, shoudFail: true },
      { title: 'regexp with obj matcher', left: /.+/, right: matcher.obj, shoudFail: true },
      { title: 'date with obj matcher', left: curDate, right: matcher.obj, shoudFail: true },

      // Boolean matcher
      { title: 'string with bool matcher', left: 'aaa', right: matcher.bool, shoudFail: true },
      { title: 'number with bool matcher', left: 123, right: matcher.bool, shoudFail: true },
      { title: 'boolean with bool matcher', left: true, right: matcher.bool, shoudFail: false },
      { title: 'array with bool matcher', left: ['aaa'], right: matcher.bool, shoudFail: true },
      { title: 'object with bool matcher', left: { foo: 'bar' }, right: matcher.bool, shoudFail: true },
      { title: 'null with bool matcher', left: null, right: matcher.bool, shoudFail: true },
      { title: 'undefined with bool matcher', left: undefined, right: matcher.bool, shoudFail: true },
      { title: 'function with bool matcher', left: plainFunction, right: matcher.bool, shoudFail: true },
      { title: 'NaN with bool matcher', left: NaN, right: matcher.bool, shoudFail: true },
      { title: 'regexp with bool matcher', left: /.+/, right: matcher.bool, shoudFail: true },
      { title: 'date with bool matcher', left: curDate, right: matcher.bool, shoudFail: true },

      // RegExp matcher
      { title: 'string with regexp matcher', left: 'aaa', right: matcher.regexp, shoudFail: true },
      { title: 'number with regexp matcher', left: 123, right: matcher.regexp, shoudFail: true },
      { title: 'boolean with regexp matcher', left: true, right: matcher.regexp, shoudFail: true },
      { title: 'array with regexp matcher', left: ['aaa'], right: matcher.regexp, shoudFail: true },
      { title: 'object with regexp matcher', left: { foo: 'bar' }, right: matcher.regexp, shoudFail: true },
      { title: 'null with regexp matcher', left: null, right: matcher.regexp, shoudFail: true },
      { title: 'undefined with regexp matcher', left: undefined, right: matcher.regexp, shoudFail: true },
      { title: 'function with regexp matcher', left: plainFunction, right: matcher.regexp, shoudFail: true },
      { title: 'NaN with regexp matcher', left: NaN, right: matcher.regexp, shoudFail: true },
      { title: 'regexp with regexp matcher', left: /.+/, right: matcher.regexp, shoudFail: false },
      { title: 'date with regexp matcher', left: curDate, right: matcher.regexp, shoudFail: true },

      // Truthy matcher
      { title: 'string with truthy matcher', left: 'aaa', right: matcher.truthy, shoudFail: false },
      { title: 'empty string with truthy matcher', left: '', right: matcher.truthy, shoudFail: true },
      { title: 'number with truthy matcher', left: 123, right: matcher.truthy, shoudFail: false },
      { title: '0 with truthy matcher', left: 0, right: matcher.truthy, shoudFail: true },
      { title: '-1 with truthy matcher', left: -1, right: matcher.truthy, shoudFail: false },
      { title: 'boolean with truthy matcher', left: true, right: matcher.truthy, shoudFail: false },
      { title: 'array with truthy matcher', left: ['aaa'], right: matcher.truthy, shoudFail: false },
      { title: 'object with truthy matcher', left: { foo: 'bar' }, right: matcher.truthy, shoudFail: false },
      { title: 'null with truthy matcher', left: null, right: matcher.truthy, shoudFail: true },
      { title: 'undefined with truthy matcher', left: undefined, right: matcher.truthy, shoudFail: true },
      { title: 'function with truthy matcher', left: plainFunction, right: matcher.truthy, shoudFail: false },
      { title: 'NaN with truthy matcher', left: NaN, right: matcher.truthy, shoudFail: true },
      { title: 'regexp with truthy matcher', left: /.+/, right: matcher.truthy, shoudFail: false },
      { title: 'date with truthy matcher', left: curDate, right: matcher.truthy, shoudFail: false },

      // Falsy matcher
      { title: 'string with falsy matcher', left: 'aaa', right: matcher.falsy, shoudFail: true },
      { title: 'empty string with falsy matcher', left: '', right: matcher.falsy, shoudFail: false },
      { title: 'number with falsy matcher', left: 123, right: matcher.falsy, shoudFail: true },
      { title: '0 with falsy matcher', left: 0, right: matcher.falsy, shoudFail: false },
      { title: '-1 with falsy matcher', left: -1, right: matcher.falsy, shoudFail: true },
      { title: 'boolean with falsy matcher', left: true, right: matcher.falsy, shoudFail: true },
      { title: 'array with falsy matcher', left: ['aaa'], right: matcher.falsy, shoudFail: true },
      { title: 'object with falsy matcher', left: { foo: 'bar' }, right: matcher.falsy, shoudFail: true },
      { title: 'null with falsy matcher', left: null, right: matcher.falsy, shoudFail: false },
      { title: 'undefined with falsy matcher', left: undefined, right: matcher.falsy, shoudFail: false },
      { title: 'function with falsy matcher', left: plainFunction, right: matcher.falsy, shoudFail: true },
      { title: 'NaN with falsy matcher', left: NaN, right: matcher.falsy, shoudFail: false },
      { title: 'regexp with falsy matcher', left: /.+/, right: matcher.falsy, shoudFail: true },
      { title: 'date with falsy matcher', left: curDate, right: matcher.falsy, shoudFail: true },

      // Date matcher
      { title: 'string with date matcher', left: 'aaa', right: matcher.date, shoudFail: true },
      { title: 'number with date matcher', left: 123, right: matcher.date, shoudFail: true },
      { title: 'boolean with date matcher', left: true, right: matcher.date, shoudFail: true },
      { title: 'array with date matcher', left: ['aaa'], right: matcher.date, shoudFail: true },
      { title: 'object with date matcher', left: { foo: 'bar' }, right: matcher.date, shoudFail: true },
      { title: 'null with date matcher', left: null, right: matcher.date, shoudFail: true },
      { title: 'undefined with date matcher', left: undefined, right: matcher.date, shoudFail: true },
      { title: 'function with date matcher', left: plainFunction, right: matcher.date, shoudFail: true },
      { title: 'NaN with date matcher', left: NaN, right: matcher.date, shoudFail: true },
      { title: 'regexp with date matcher', left: /.+/, right: matcher.date, shoudFail: true },
      { title: 'date with date matcher', left: curDate, right: matcher.date, shoudFail: false },

      // Function matcher
      { title: 'string with func matcher', left: 'aaa', right: matcher.func, shoudFail: true },
      { title: 'number with func matcher', left: 123, right: matcher.func, shoudFail: true },
      { title: 'boolean with func matcher', left: true, right: matcher.func, shoudFail: true },
      { title: 'array with func matcher', left: ['aaa'], right: matcher.func, shoudFail: true },
      { title: 'object with func matcher', left: { foo: 'bar' }, right: matcher.func, shoudFail: true },
      { title: 'null with func matcher', left: null, right: matcher.func, shoudFail: true },
      { title: 'undefined with func matcher', left: undefined, right: matcher.func, shoudFail: true },
      { title: 'function with func matcher', left: plainFunction, right: matcher.func, shoudFail: false },
      { title: 'NaN with func matcher', left: NaN, right: matcher.func, shoudFail: true },
      { title: 'regexp with func matcher', left: /.+/, right: matcher.func, shoudFail: true },
      { title: 'date with func matcher', left: curDate, right: matcher.func, shoudFail: true }
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

  describe('hasSubset', function() {
    var a = ['one', 'two', 'three', 'four', 'five', 'six', 'seven'];

    it('Should contain a subset in the middle', function() {
      var b = ['three', 'four', 'five'];

      if (!utils.hasSubset(a, b)) {
        throw 'Failed!';
      }
    });

    it('Should contain a subset in the middle, only one', function() {
      var b = ['five'];

      if (!utils.hasSubset(a, b)) {
        throw 'Failed!';
      }
    });

    it('Should contain a subset at begin', function() {
      var b = ['one', 'two'];

      if (!utils.hasSubset(a, b)) {
        throw 'Failed!';
      }
    });

    it('Should contain a subset at end', function() {
      var b = ['six', 'seven'];

      if (!utils.hasSubset(a, b)) {
        throw 'Failed!';
      }
    });

    it('Should not contain a subset with wrong order', function() {
      var b = ['six', 'five'];

      if (utils.hasSubset(a, b)) {
        throw 'Failed!';
      }
    });

    it('Should not contain a subset with wrong values', function() {
      var b = ['zenty', 'sixty'];

      if (utils.hasSubset(a, b)) {
        throw 'Failed!';
      }
    });

    it('Should not contain a subset with boolean as values', function() {
      var b = [true, true];

      if (utils.hasSubset(a, b)) {
        throw 'Failed!';
      }
    });

    it('Should contain a subset with objects as values', function() {
      var a = [{ one: true }, { two: true }, { three: true }, { four: true }, { five: true }, { six: true }, { seven: true }];
      var b = [{ three: true }, { four: true }];

      if (!utils.hasSubset(a, b)) {
        throw 'Failed!';
      }
    });
  });

  describe('hasConstructor', function() {
    it('Should have a constructor method', function() {
      var fn = class { constructor() {}};
      if (!utils.hasConstructor(fn)) {
        throw new Error('Should have a constructor');
      }
    });
  });
});
