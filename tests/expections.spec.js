//eslint env node browser es5
'use strict';

var inspect = require('../inspect');
var expections = require('./loadExpections');

function runTest(test) {
  try {
    var value;
    eval('value = ' + test.input + ';');
    var i = inspect(value);
    i[test.method].apply(i, test.args);
    return { state: 'pass' };
  } catch (err) {
    return {
      state: 'fail',
      error: err
    }
  }
}

describe.only('Inspection method', function() {
  Object.keys(expections).forEach((key) => {
    describe(key, function() {
      var testArray = expections[key].tests || expections[key];
      testArray.forEach((test) => {
        test.method = key;
        test.title = test.title || 'with input ' + test.input + ' should ' + test.result;
        it(test.title, function testFn() {
          var result = runTest(test);

          if (result.state === 'pass' && test.result === 'fail') {
            throw new Error('Test failed, but it should pass!');
          } else if (result.state === 'fail' && test.result === 'pass') {
            var err =  new Error('Test failed, but it should pass!\n' + result.error);
            err.stack = result.error.stack;
            throw err;
          }
        });
      });
    });
  });
});
