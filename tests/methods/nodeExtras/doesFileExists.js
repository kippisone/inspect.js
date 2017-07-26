const path = require('path');

module.exports = function(test) {
  test('doesFileExists', [
    { input: '"./fixtures/test.json"', result: 'pass'},
    { input: '"./fixtures/notExists.json"', result: 'fail'},
    { input: '"' + path.join(__dirname, '../../fixtures/test.json') + '"', result: 'pass'},
    { input: '"' + path.join(__dirname, '../../fixtures/notExists.json') + '"', result: 'fail'},
    { input: '"./fixtures/"', result: 'pass'},
    { input: '"' + path.join(__dirname, '../../fixtures/') + '"', result: 'pass'},
    { input: '"./fixtures-notexists/"', result: 'fail'},
    { input: '"' + path.join(__dirname, '../../fixtures-notexists/') + '"', result: 'fail'},
  ], {
    nodejs: true
  });

  test('doesNotFileExists', [
    { input: '"./fixtures/test.json"', result: 'fail'},
    { input: '"./fixtures/notExists.json"', result: 'pass'},
    { input: '"' + path.join(__dirname, '../../fixtures/test.json') + '"', result: 'fail'},
    { input: '"' + path.join(__dirname, '../../fixtures/notExists.json') + '"', result: 'pass'},
    { input: '"./fixtures/"', result: 'fail'},
    { input: '"' + path.join(__dirname, '../../fixtures/') + '"', result: 'fail'},
    { input: '"./fixtures-notexists/"', result: 'pass'},
    { input: '"' + path.join(__dirname, '../../fixtures-notexists/') + '"', result: 'pass'},
  ], {
    nodejs: true
  });
};
