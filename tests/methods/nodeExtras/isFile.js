const path = require('path');

const TEST_FILE = path.join(__dirname, '../../fixtures/test.json')
const TEST_FILE_NOT_EXISTS = path.join(__dirname, '../../fixtures/notExists.json')

module.exports = function(test) {
  test('isFile', [
    { input: `"${TEST_FILE}"`, result: 'pass'},
    { input: `"${TEST_FILE_NOT_EXISTS}"`, result: 'fail'},
    { input: '"' + path.join(__dirname, '../../fixtures/test.json') + '"', result: 'pass'},
    { input: '"' + path.join(__dirname, '../../fixtures/notExists.json') + '"', result: 'fail'},
    { input: '"./fixtures/"', result: 'fail'},
    { input: '"' + path.join(__dirname, '../../fixtures/') + '"', result: 'fail'},
    { input: '"./fixtures-notexists/"', result: 'fail'},
    { input: '"' + path.join(__dirname, '../../fixtures-notexists/') + '"', result: 'fail'},
  ], {
    nodejs: true
  });

  test('isNotFile', [
    { input: `"${TEST_FILE}"`, result: 'fail'},
    { input: `"${TEST_FILE_NOT_EXISTS}"`, result: 'pass'},
    { input: '"' + path.join(__dirname, '../../fixtures/test.json') + '"', result: 'fail'},
    { input: '"' + path.join(__dirname, '../../fixtures/notExists.json') + '"', result: 'pass'},
    { input: '"./fixtures/"', result: 'pass'},
    { input: '"' + path.join(__dirname, '../../fixtures/') + '"', result: 'pass'},
    { input: '"./fixtures-notexists/"', result: 'pass'},
    { input: '"' + path.join(__dirname, '../../fixtures-notexists/') + '"', result: 'pass'},
  ], {
    nodejs: true
  });

  test('fileContains', [
    { input: `"${TEST_FILE}"`, result: 'pass', args: ["foo"] },
    { input: `"${TEST_FILE}"`, result: 'fail', args: ["pineapple"] },
    { input: `"${TEST_FILE_NOT_EXISTS}"`, result: 'fail'}
  ], {
    nodejs: true
  });

  test('fileNotContains', [
    { input: `"${TEST_FILE}"`, result: 'fail', args: ["foo"] },
    { input: `"${TEST_FILE}"`, result: 'pass', args: ["pineapple"] },
    { input: `"${TEST_FILE_NOT_EXISTS}"`, result: 'pass'}
  ], {
    nodejs: true
  });
};
