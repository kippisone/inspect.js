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

* isPlainObject()
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
