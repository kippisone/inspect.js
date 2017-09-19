'use strict';

var path = require('path');
var superimport = require('superimport');
var IS_NODE_ENV = typeof(window) === 'undefined' && typeof(global) === 'object';

var expections = {};

function testFn(name, tests, options) {
  options = options || {
    nodejs: true,
    browser: true
  };

  if ((options.nodejs && IS_NODE_ENV) || (options.browser && !IS_NODE_ENV)) {
    if (expections[name]) {
      throw new Error('Test ' + name + ' already exists!');
    }

    expections[name] = {
      tests: tests
    };
  }
}

superimport.importAll(path.join(__dirname, './methods/'), true).forEach(function(fn) {
  try {
    fn(testFn);
  } catch (err) {
    var throwErr =  new Error('Module import failed!\n' + err.message);
    throwErr.stack = err.stack;
    throw throwErr;
  }
});

module.exports = expections;
