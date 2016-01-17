inspect.js
==========

Behavior driven test inspection library with more then 60 test methods for Node.js and Javascript.


## isString([message])

Inspects whether input is a string

### Params:

*string* `message` Custom error message



```js
inspect('Foo').isString();
```

## isNotString([message])

Inspects whether input is not a string

### Params:

*string* `message` Custom error message



```js
inspect(123).isNotString();
```

## isArray([message])

Inspects whether input is an array

### Params:

*string* `message` Custom error message



```js
inspect('Foo').isArray();
```

## isNotArray([message])

Inspects whether input is not an array

### Params:

*string* `message` Custom error message



```js
inspect(123).isNotArray();
```

## isObject([message])

Inspects whether input is an object

### Params:

*string* `message` Custom error message




```js
inspect('Foo').isObject();
```

## isNotObject([message])

Inspects whether input is not an object

### Params:

*string* `message` Custom error message




```js
inspect(123).isNotObject();
```

## isNull([message])

Inspects whether input is null

### Params:

*string* `message` Custom error message




```js
inspect(null).isNull();
```

## isNotNull([message])

Inspects whether input is not null

### Params:

*string* `message` Custom error message




```js
inspect(123).isNotNull();
```

## isUndefined([message])

Inspects whether input is undefined

### Params:

*string* `message` Custom error message




```js
inspect(undefined).isUndefined();
```

## isNotUndefined([message])

Inspects whether input is not undefined

### Params:

*string* `message` Custom error message




```js
inspect(true).isNotUndefined();
```

## isBoolean([message])

Inspects whether input is a boolean

### Params:

*string* `message` Custom error message




```js
inspect('Foo').isBoolean();
```

## isNotBoolean([message])

Inspects whether input is not a boolean

### Params:

*string* `message` Custom error message




```js
inspect(123).isNotBoolean();
```

## isTrue([message])

Inspects whether input is true

### Params:

*string* `message` Custom error message




```js
inspect('Foo').isTrue();
```

## isNotBoolean([message])

Inspects whether input is not a boolean

### Params:

*string* `message` Custom error message




```js
inspect(123).isNotBoolean();
```

## isFalse([message])

Inspects whether input is false

### Params:

*string* `message` Custom error message




```js
inspect('Foo').isFalse();
```

## isNotFalse([message])

Inspects whether input is not false

### Params:

*string* `message` Custom error message




```js
inspect(123).isNotFalse();
```

## isRegExp([message])

Inspects whether input is a regexp

### Params:

*string* `message` Custom error message




```js
inspect(/.+/).isRegExp();
```

## isNotRegExp([message])

Inspects whether input is not a regexp

### Params:

*string* `message` Custom error message




```js
inspect('.*').isNotRegExp();
```

## isNumber([message])

Inspects whether input is a number

### Params:

*string* `message` Custom error message




```js
inspect('Foo').isNumber();
```

## isNotNumber([message])

Inspects whether input is not a number

### Params:

*string* `message` Custom error message




```js
inspect(123).isNotNumber();
```

## isNaN([message])

Inspects whether input is NaN

### Params:

*string* `message` Custom error message




```js
inspect('Foo').isNaN();
```

## isNotNaN([message])

Inspects whether input is not a NaN

### Params:

*string* `message` Custom error message




```js
inspect(123).isNotNaN();
```

## isClass([message])

[description]

### Params:

*string* `message` Custom error message

## isFunction([message])

Inspects whether input is a function

### Params:

*string* `message` Custom error message




```js
inspect(function).isFunction();
```

## isNotFunction([message])

Inspects whether input is not function

### Params:

*string* `message` Custom error message




```js
inspect(true).isNotFunction();
```

## isGenerator([message])

Inspects whether input is a generator function
This test will pass on environments without generator support if type of input value is function!

### Params:

*string* `message` Custom error message




```js
inspect(generator function).isGenerator();
```

## isNotGenerator([message])

Inspects whether input is not generator function

### Params:

*string* `message` Custom error message




```js
inspect(true).isNotGenerator();
```

## isPromise([message])

Inspects whether input is a promise.
A promise is identified if input type is an object and if input has a then and a catch method

### Params:

*string* `message` Custom error message




```js
var promise = new Promise(function(resolve, reject) {
    
});

inspect(promise).isPromise();
```

## isNotPromise([message])

Inspects whether input is not promise

### Params:

*string* `message` Custom error message




```js
inspect(true).isNotPromise();
```

## isAny([message])

Inspects whether input is one of these types.
types could be string number array null object boolean true false function promise class or undefined

### Params:

types   string,array    
Types array or csv list.
*string* `message` Custom error message




```

## isNotAny([message])

Inspects whether input is not one of any types.
types could be all what utils.getTypeOf is supporting

### Params:

types   string,array    
Types array or csv list.
*string* `message` Custom error message




```

## isTruthy([message])

Inspects whether input is truthy
This tests passes if value is not 0 "" null NaN or undefined

### Params:

*string* `message` Custom error message




```js
inspect('Foo').isTruthy();
```

## isFalsy([message])

Inspects whether input is falsy
This tests passes if value is one of 0 "" null NaN or undefined

### Params:

*string* `message` Custom error message




```js
inspect('Foo').isFalys();
```

## isEmpty([message])

Inspects whether input is empty
This tests passes if value is one of "" [] or {}

### Params:

*string* `message` Custom error message




```js
inspect('').isEmpty();
inspect({}).isEmpty();
inspect([]).isEmpty();
```

## isNotEmpty([message])

Inspects whether input is not empty
This tests passes if value is other than "" [] or {}

### Params:

*string* `message` Custom error message




```js
inspect('foo').isNotEmpty();
inspect({ foo: 'bar' }).isNotEmpty();
inspect(['foo', 'bar']).isNotEmpty();
```

## isInstanceOf([message])

Inspects whether input is an instance of a specific prototype or class

### Params:

proto   function    
The prototype or class object
*string* `message` Custom error message




```js
inspect(foo).isInstanceOf(Foo);
```

## isNotInstanceOf([message])

Inspects whether input is not an instance of a specific prototype or class

### Params:

proto   function    
The prototype or class object
*string* `message` Custom error message




```js
inspect(foo).isNotInstanceOf(Foo);
```

## doesMatch([message])

Inspects whether input matches against a regular expression

### Params:

reg regexp  
The RegExp
*string* `message` Custom error message




```js
inspect(/[a-z]+/).doesMatch('foo');
```

## doesNotMatch(reg, [message])

Inspects whether input does not matche against a regular expression

### Params:

reg regexp  
The RegExp
*string* `message` Custom error message




```js
inspect(/[a-z]+/).doesNotMatch('foo');
```

## isGreaterThan(num, [message])

Inspects whether a number is greater than value

### Params:

num number  
Comparsion number
*string* `message` Custom error message




```js
inspect(3).isGreaterThan(2);
```

## isGreaterOrEqual(num, [message])

Inspects whether input is greater than or equal to num

### Params:

num number  
Comparison number
*string* `message` Custom error message




```js
inspect(3).isGreaterOrEqual(3);
```

## isLesserThan(num, [message])

Inspects whether input is lesser than num

### Params:

num number  
Comparison number
*string* `message` Custom error message




```js
inspect(3).isLesserThan(4);
```

## isLesserOrEqual(num, [message])

Inspects whether input is lesser than or equal to num

### Params:

num number  
Comparison number
*string* `message` Custom error message




```js
inspect(3).isLesserOrEqual(3);
```

## hasKey(key, [message])

Inspects whether input has a specific key

### Params:

key number  
Comparison number
*string* `message` Custom error message




```js
inspect({
    foo: true,
    bar: true
}).hasKey('foo');
```

## hasNotKey(key, [message])

Inspects whether input doesn't has a specific key

### Params:

key string  
Comparison number
*string* `message` Custom error message




```js
inspect({
    foo: true,
    bar: true
}).hasNotKey('blub');
```

## hasKeys(keys, [message])

Inspects whether input has all of this keys

### Params:

keys    array   
Keys array
*string* `message` Custom error message




```js
inspect({
    foo: true,
    bar: true
}).hasKeys(['foo', 'bar']);
```

## hasNotKeys(keys, [message])

Inspects whether input has none of this keys

### Params:

keys    array   
Keys array
*string* `message` Custom error message




```js
inspect({
    foo: true,
    bar: true
}).hasNotKeys(['foo', 'bar']);
```

## hasAnyKeys(keys, [message])

Inspects whether input has any of these keys

### Params:

keys    array   
Keys array
*string* `message` Custom error message




```js
inspect({
    foo: true,
    bar: true
}).hasAnyKeys(['foo', 'bar']);
```

## hasNotAnyKeys(keys, [message])

Inspects whether input should not has any of these keys

### Params:

keys    array   
Keys array
*string* `message` Custom error message




```js
inspect({
    foo: true,
    bar: true
}).hasNotAnyKeys(['blub', 'blab']);
```

## hasProps(props, [message])

Inspects whether input has all of this properties

### Params:

props   object  
props array
*string* `message` Custom error message




```js
inspect({
    foo: true,
    bar: true
}).hasProps(['foo', 'bar']);
```

## hasProp(prop, value, [message])

Inspects whether input has a property with a specified value

### Params:

props   object  
props array
*string* `message` Custom error message




```js
inspect({
    foo: true,
    bar: true
}).hasProp('foo', true);
```

## hasNotProp(prop, value, [message])

Inspects whether input has not a property with a specified value

### Params:

props   object  
props array
*string* `message` Custom error message




```js
inspect({
    foo: true,
    bar: true
}).hasNotProp('foo', true);
```

## hasLength(len, [message])

Inspects whether input has a specific length
Accepts arrays or strings as input values

### Params:

len number  
Expected length
*string* `message` Custom error message

```

## hasMinLength(len, [message])

Inspects whether input has a specific min length
Accepts arrays or strings as input values

### Params:

len number  
Expected length
*string* `message` Custom error message




```

## hasMaxLength(len, [message])

Inspects whether input has a specific max length
Accepts arrays or strings as input values

### Params:

len number  
Expected length
*string* `message` Custom error message




```

## hasValue(value, [message])

Inspects whether an array has a specific value

### Params:

*any* `value` Search for item
description
*string* `message` Custom error message


## hasNotValue(value, [message])

Inspects whether an array has not a specific value

### Params:

*any* `value` Search for item
description
*string* `message` Custom error message

## hasValues()

Inspects whether an array has all of these value(s)

### Params:

*string* `message` Custom error message




## hasNotValues()

Inspects whether an array has none of these values

### Params:

*string* `message` Custom error message




## hasAnyValues()

Inspects whether an array has any of these values

### Params:

values  array   
Haystack values
*string* `message` Custom error message




## hasNotAnyValues()

Inspects whether an array has not any of these values

### Params:

values  array   
Haystack values
*string* `message` Custom error message

