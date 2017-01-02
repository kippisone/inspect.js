'use strict';

let inspect = require('../inspect');
let expections = require('./expections/tests');

function runTest(test) {
  try {
    let i = inspect(test.input);
    i[test.method].apply(i, test.args);
    return { state: 'pass' };
  } catch (err) {
    return {
      state: 'fail',
      error: err
    }
  }
}

function readable(type) {
  if (type === null) {
    return '[null]';
  }

  if (type === undefined) {
    return '[undefined]';
  }

  if (Array.isArray()) {
    return '[array Array]';
  }

  if (typeof type === 'object') {
    return JSON.stringify(type);
  }

  if (typeof type === 'string') {
    return '"' + type + '"';
  }

  return String(type);
}

describe('Expections tests', function() {
  Object.keys(expections).forEach((key) => {
    describe(key, () => {
      expections[key].forEach((test) => {
        test.method = key;
        it(`with input ${readable(test.input)} should ${test.result}`, () => {
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
