const inspect = require('../')
const TestRunner = require('../lib/TestRunner')

describe('TestRunner extension', () => {
  describe('test()', () => {
    it('adds a new test to the test stack', () => {
      const testRunner = new TestRunner()
      const test1 = function(done) {
        done()
      }

      const test2 = function() {
        return Promise.resolve()
      }

      testRunner.test('test1', test1)
      testRunner.test('test2', test2)

      inspect(testRunner.testStack).isArray().hasLength(2)
    })
  })

  describe('run()', () => {
    it('runs the test stack', () => {
      const testRunner = new TestRunner()
      const res = []
      const test1 = function(done) {
        res.push('one')
        done()
      }

      const test2 = function() {
        res.push('two')
        return Promise.resolve()
      }

      testRunner.test('test1', test1)
      testRunner.test('test2', test2)
      const pres = testRunner.run()
      return pres.then(() => {
        inspect(res).isEql(['one', 'two'])
      })
    })
  })

  describe('inspect.run()', () => {
    it('runs the test stack from static method', () => {
      const res = []
      const test1 = function(done) {
        res.push('one')
        done()
      }

      const test2 = function() {
        res.push('two')
        return Promise.resolve()
      }

      inspect.test('test1', test1)
      inspect.test('test2', test2)
      const pres = inspect.run()
      return pres.then(() => {
        inspect(res).isEql(['one', 'two'])
      })
    })
  })
})
