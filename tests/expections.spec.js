'use strict';

let inspect = require('../inspect');
let expections = require('./expections/tests');

function runTest(test) {
  try {
    let value;
    eval('value = ' + test.input + ';');
    let i = inspect(value);
    i[test.method].apply(i, test.args);
    return { state: 'pass' };
  } catch (err) {
    return {
      state: 'fail',
      error: err
    }
  }
}

describe('Expections tests', function() {
  Object.keys(expections).forEach((key) => {
    describe(key, () => {
      expections[key].forEach((test) => {
        test.method = key;
        it(`with input ${test.input} should ${test.result}`, () => {
          let result = runTest(test);

          if (result.state === 'pass' && test.result === 'fail') {
            throw new Error('Test failed, but it should pass!');
          } else if (result.state === 'fail' && test.result === 'pass') {
            throw new Error('Test failed, but it should pass!\n' + result.error);
          }
        });
      });
    });
  });
});
