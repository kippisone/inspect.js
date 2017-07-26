module.exports = function(test) {
  test('isDate', [
    { input: '"foo"', result: 'fail' },
    { input: '""', result: 'fail' },
    { input: '`template str`', result: 'fail' },
    { input: '123', result: 'fail' },
    { input: '1.23', result: 'fail' },
    { input: 'null', result: 'fail' },
    { input: 'undefined', result: 'fail' },
    { input: 'true', result: 'fail' },
    { input: 'false', result: 'fail' },
    { input: 'NaN', result: 'fail' },
    { input: '[]', result: 'fail' },
    { input: '{}', result: 'fail' },
    { input: '/[a-z]/', result: 'fail' },
    { input: 'new Date()', result: 'pass' },
    { input: '"Thu Feb 02 2017 20:18:23 GMT+0100 (CET)"', result: 'fail' },
    { input: 'function() {}', result: 'fail' },
    { input: '() => {}', result: 'fail' },
    { input: 'function* () {}', result: 'fail' },
    { input: 'class {}', result: 'fail' }
  ]);

  test('isNotDate', [
    { input: '"foo"', result: 'pass' },
    { input: '""', result: 'pass' },
    { input: '`template str`', result: 'pass' },
    { input: '123', result: 'pass' },
    { input: '1.23', result: 'pass' },
    { input: 'null', result: 'pass' },
    { input: 'undefined', result: 'pass' },
    { input: 'true', result: 'pass' },
    { input: 'false', result: 'pass' },
    { input: 'NaN', result: 'pass' },
    { input: '[]', result: 'pass' },
    { input: '{}', result: 'pass' },
    { input: '/[a-z]/', result: 'pass' },
    { input: 'new Date()', result: 'fail' },
    { input: '"Thu Feb 02 2017 20:18:23 GMT+0100 (CET)"', result: 'pass' },
    { input: 'function fn() {}', result: 'pass' },
    { input: '() => {}', result: 'pass' },
    { input: 'function* () {}', result: 'pass' },
    { input: 'class {}', result: 'pass' }
  ]);

  test('isDateString', [
    { input: '"foo"', result: 'fail' },
    { input: '""', result: 'fail' },
    { input: '`template str`', result: 'fail' },
    { input: '123', result: 'fail' },
    { input: '1.23', result: 'fail' },
    { input: 'null', result: 'fail' },
    { input: 'undefined', result: 'fail' },
    { input: 'true', result: 'fail' },
    { input: 'false', result: 'fail' },
    { input: 'NaN', result: 'fail' },
    { input: '[]', result: 'fail' },
    { input: '{}', result: 'fail' },
    { input: '/[a-z]/', result: 'fail' },
    { input: 'new Date()', result: 'fail' },
    { input: '"Thu Feb 02 2017 20:18:23 GMT+0100 (CET)"', result: 'pass' },
    { input: 'function() {}', result: 'fail' },
    { input: '() => {}', result: 'fail' },
    { input: 'function* () {}', result: 'fail' },
    { input: 'class {}', result: 'fail' }
  ]);

  test('isNotDateString', [
    { input: '"foo"', result: 'pass' },
    { input: '""', result: 'pass' },
    { input: '`template str`', result: 'pass' },
    { input: '123', result: 'pass' },
    { input: '1.23', result: 'pass' },
    { input: 'null', result: 'pass' },
    { input: 'undefined', result: 'pass' },
    { input: 'true', result: 'pass' },
    { input: 'false', result: 'pass' },
    { input: 'NaN', result: 'pass' },
    { input: '[]', result: 'pass' },
    { input: '{}', result: 'pass' },
    { input: '/[a-z]/', result: 'pass' },
    { input: 'new Date()', result: 'pass' },
    { input: '"Thu Feb 02 2017 20:18:23 GMT+0100 (CET)"', result: 'fail' },
    { input: 'function fn() {}', result: 'pass' },
    { input: '() => {}', result: 'pass' },
    { input: 'function* () {}', result: 'pass' },
    { input: 'class {}', result: 'pass' }
  ]);
};
