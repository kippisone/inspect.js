module.exports = function(test) {
  test('isAny', [
    { input: '"foo"', result: 'pass', args: [['string', 'number']] },
    { input: '""', result: 'pass', args: [['string', 'number']] },
    { input: '`template str`', result: 'pass', args: [['string', 'number']] },
    { input: '123', result: 'pass', args: [['string', 'number']] },
    { input: '1.23', result: 'pass', args: [['string', 'number']] },
    { input: 'null', result: 'fail', args: [['string', 'number']] },
    { input: 'undefined', result: 'fail', args: [['string', 'number']] },
    { input: 'true', result: 'fail', args: [['string', 'number']] },
    { input: 'false', result: 'fail', args: [['string', 'number']] },
    { input: 'NaN', result: 'fail', args: [['string', 'number']] },
    { input: '[]', result: 'fail', args: [['string', 'number']] },
    { input: '{}', result: 'fail', args: [['string', 'number']] },
    { input: '/[a-z]/', result: 'fail', args: [['string', 'number']] },
    { input: 'new Date()', result: 'fail', args: [['string', 'number']] },
    { input: 'function() {}', result: 'fail', args: [['string', 'number']] },
    { input: '() => {}', result: 'fail', args: [['string', 'number']] },
    { input: 'function* () {}', result: 'fail', args: [['string', 'number']] },
    { input: 'class {}', result: 'fail', args: [['string', 'number']] }
  ]);

  test('isNotAny', [
    { input: '"foo"', result: 'fail', args: [['string', 'number']] },
    { input: '""', result: 'fail', args: [['string', 'number']] },
    { input: '`template str`', result: 'fail', args: [['string', 'number']] },
    { input: '123', result: 'fail', args: [['string', 'number']] },
    { input: '1.23', result: 'fail', args: [['string', 'number']] },
    { input: 'null', result: 'pass', args: [['string', 'number']] },
    { input: 'undefined', result: 'pass', args: [['string', 'number']] },
    { input: 'true', result: 'pass', args: [['string', 'number']] },
    { input: 'false', result: 'pass', args: [['string', 'number']] },
    { input: 'NaN', result: 'pass', args: [['string', 'number']] },
    { input: '[]', result: 'pass', args: [['string', 'number']] },
    { input: '{}', result: 'pass', args: [['string', 'number']] },
    { input: '/[a-z]/', result: 'pass', args: [['string', 'number']] },
    { input: 'new Date()', result: 'pass', args: [['string', 'number']] },
    { input: 'function fn() {}', result: 'pass', args: [['string', 'number']] },
    { input: '() => {}', result: 'pass', args: [['string', 'number']] },
    { input: 'function* () {}', result: 'pass', args: [['string', 'number']] },
    { input: 'class {}', result: 'pass', args: [['string', 'number']] }
  ]);
};
