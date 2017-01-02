module.exports = {
  isString: [
    { input: 'foo', 'result': 'pass' },
    { input: '', 'result': 'pass' },
    { input: `template str`, 'result': 'pass' },
    { input: 123, 'result': 'fail' },
    { input: null, 'result': 'fail' },
    { input: undefined, 'result': 'fail' },
    { input: [], 'result': 'fail' },
    { input: {}, 'result': 'fail' },
    { input: /[a-z]/, 'result': 'fail' },
    { input: new Date(), 'result': 'fail' }
  ],
  isNotString: [
    { input: 'foo', 'result': 'fail' },
    { input: '', 'result': 'fail' },
    { input: `template str`, 'result': 'fail' },
    { input: 123, 'result': 'pass' },
    { input: null, 'result': 'pass' },
    { input: undefined, 'result': 'pass' },
    { input: [], 'result': 'pass' },
    { input: {}, 'result': 'pass' },
    { input: /[a-z]/, 'result': 'pass' },
    { input: new Date(), 'result': 'pass' }
  ]
};
