'use strict';

var utils = require('./inspectUtils');

var inspectMatchers = {
  str: {
    message: 'String match failed!',
    test: function(val) {
      return typeof val === 'string'
    }
  },
  num: {
    message: 'Number match failed!',
    test: function(val) {
      return utils.isNumber(val)
    }
  },
  arr: {
    message: 'Array match failed!',
    test: function(val) {
      return utils.isArray(val)
    }
  },
  obj: {
    message: 'Object match failed!',
    test: function(val) {
      return utils.isObject(val)
    }
  },
  bool: {
    message: 'Boolean match failed!',
    test: function(val) {
      return utils.isBoolean(val)
    }
  },
  regexp: {
    message: 'RegExp match failed!',
    test: function(val) {
      return utils.isRegExp(val)
    }
  },
  truthy: {
    message: 'Truthy match failed!',
    test: function(val) {
      return !!val
    }
  },
  falsy: {
    message: 'Falsy match failed!',
    test: function(val) {
      return !val
    }
  },
  any: {
    message: 'Any match failed!',
    test: function(val) {
      return true
    }
  },
  date: {
    message: 'Date match failed!',
    test: function(val) {
      return utils.isDate(val)
    }
  },
  func: {
    message: 'Func match failed!',
    test: function(val) {
      return utils.isFunction(val)
    }
  }
  // eql: function(left, right) {
  //   return {
  //     message: 'Eql match failed!',
  //     test: function(val) {
  //       return utils.isFunction(val)
  //     }
  //   }
  // }
};

module.exports = inspectMatchers;
