NOTES
=====

Missing features
----------------

* Check promise status
  .isPromise('pending')
  .isPromise('resolved')
  .isPromise('rejected')

  or

  isPendingPromise()
  isResolvedPromise()
  isRejectedPromise()

  isPromise().isPending()
  isPromise().isResolved()
  isPromise().isRejected()

* isPlainObject() or isJSON()
  inspect({}).isPlainObject();

* isEmptyArray()
  inspect([]).isEmptyArray();

* Data type converters
  inspect({ foo: 'bar' }).asString().isEql("{"foo":"bar"});

  .asString()
  .asJSON()
  .asNumber()
  .asObject()
  .asArray()

* Trim strings
  inspect("foo\n").trim().isEql("foo");

  .trim()
  .ltrim()
  .rtrim()
* isRealNumber()

* findItem() // Finds an array item by a filter
  /foo/ Value must contain foo
  "foo" Value must be foo
  123 Value must be 123
  { foo: 23 } Value must be an object and has a property foo with value 23


doesPass(fn) // Inspects value against a custom function
doesNotPass(fn)


 * isError()
 * isTypeError()
 * isCustomError(type)

Fancy Node stuff

 * isFile()
 * isDir()
 * fileContains()
 * fileEquals()

Bugs:
 - isEql() doesn't show missing props

    isEql({
      foo: undefined
    });
