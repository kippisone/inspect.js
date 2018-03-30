'use strict'

class TestRunner {
  constructor () {
    this.testStack = []
  }

  test (title, fn) {
    this.testStack.push({
      title: title,
      test: fn
    })
  }

  run () {
    return new Promise((resolve, reject) => {
      const next = () => {
        const test = this.testStack.shift()
        if (!test) {
          return resolve()
        }

        if (test.test.length === 1) {
          test.test((err) => {
            if (err) {
              return reject(err)
            }

            next()
          })
        } else {
          const res = test.test()
          res.then(() => {
            next()
          }).catch((err) => {
            reject(err)
          })
        }
      }

      next()
    })
  }
}

module.exports = TestRunner
