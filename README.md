inspect.js
==========

Inspect.js is a modern test framework for Node.js and the web.
It comes with more then 120 test methods and helpers.
Inspect.js itself is fully tested with more than 1600 unit tests.  

Try it, codetesting is a pure pleasure.


```shell
npm install inspect.js --save-dev
```

Usage
-----

Inspect.js exports an `inspect()` method. This method can be used to test any kind of data.

```js
inspect('Hello inspect.js').isString();
inspect('Hello inspect.js').isEql('Hello inspect.js');
```

Tests if the input is type of string and if string is equal to `Hello inspect.js`.

Examples
--------

Lets say our test object is a class and we're using [Mocha](https://mochajs.org/) as Test Suite.

```js
// lib/mycalss.js

class TestClass {
  constructor(conf) {
    this.conf = conf || {};
    this.logLevel = 'warn';
  }

  getData() {
    return Promise.resolve({
      foo: 'bar'
    });
  }
}

module.exports = TestClass;
```

then a test could be...

```js
// tests/myclass.spec.js

let inspect = require('inspect.js');
let MyClass = require('../lib/myclass');

describe('MyClass', function() {
  it('first unit test')
    inspect(MyClass).isClass();

    let myCalss = new MyClass();
    inspect(myClass.conf).isObject();
    inspect(myClass.logLevel).isString().isEql('warn');
    inspect(myClass.getData).isFunction();

    let res = myClass.getData();
    inspect(res).isPromise();
});
```

See our [API documentation](https://inspectjs.com/docs.html) for a full list of all inspection methods.
