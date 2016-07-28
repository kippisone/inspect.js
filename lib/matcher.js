'use strict';

/**
 * Matchers
 *
 * Matchers are helper methods for object matches
 *
 * @module Matcher
 *
 * @example
 * inspect(obj).isEql({
 * 	 name: inspect.matcher.str     // Matches if value is a string
 * 	 version: inspect.matcher.num  // Matches if value is a number
 * });
 *
 */

var utils = require('./inspectUtils');

var inspectMatchers = {
  /**
   * Inspect whether input matches as string
   * @property str
   * @version v1.2.0
   */
  str: {
    message: 'String match failed!',
    test: function(val) {
      return typeof val === 'string'
    }
  },

  /**
   * Inspect whether input matches as number
   * @property num
   * @version v1.2.0
   */
  num: {
    message: 'Number match failed!',
    test: function(val) {
      return utils.isNumber(val)
    }
  },

  /**
   * Inspect whether input matches as array
   * @property arr
   * @version v1.2.0
   */
  arr: {
    message: 'Array match failed!',
    test: function(val) {
      return utils.isArray(val)
    }
  },

  /**
   * Inspect whether input matches as object
   * @property obj
   * @version v1.2.0
   */
  obj: {
    message: 'Object match failed!',
    test: function(val) {
      return utils.isObject(val)
    }
  },

  /**
   * Inspect whether input matches as boolean
   * @property bool
   * @version v1.2.0
   */
  bool: {
    message: 'Boolean match failed!',
    test: function(val) {
      return utils.isBoolean(val)
    }
  },

  /**
   * Inspect whether input matches as regexp
   * @property regexp
   * @version v1.2.0
   */
  regexp: {
    message: 'RegExp match failed!',
    test: function(val) {
      return utils.isRegExp(val)
    }
  },

  /**
   * Inspect whether input matches truthy
   * @property truthy
   * @version v1.2.0
   */
  truthy: {
    message: 'Truthy match failed!',
    test: function(val) {
      return !!val
    }
  },

  /**
   * Inspect whether input matches as falsy
   * @property falsy
   * @version v1.2.0
   */
  falsy: {
    message: 'Falsy match failed!',
    test: function(val) {
      return !val
    }
  },

  /**
   * Inspect whether input matches any value
   * @property any
   * @version v1.2.0
   */
  any: {
    message: 'Any match failed!',
    test: function(val) {
      return true
    }
  },

  /**
   * Inspect whether input matches as date
   * @property date
   * @version v1.2.0
   */
  date: {
    message: 'Date match failed!',
    test: function(val) {
      return utils.isDate(val)
    }
  },

  /**
   * Inspect whether input matches as function
   * @property func
   * @version v1.2.0
   */
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
