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

## isBoolean()

Inspects whether input is a boolean

### Params:

*string* `message` Custom error message




```js
inspect('Foo').isBoolean();
```

## isNotBoolean()

Inspects whether input is not a boolean

### Params:

*string* `message` Custom error message




```js
inspect(123).isNotBoolean();
```

## isTrue()

Inspects whether input is true

### Params:

*string* `message` Custom error message




```js
inspect('Foo').isTrue();
```

## isNotBoolean()

Inspects whether input is not a boolean

### Params:

*string* `message` Custom error message




```js
inspect(123).isNotBoolean();
```

## isFalse()

Inspects whether input is false

### Params:

*string* `message` Custom error message




```js
inspect('Foo').isFalse();
```

## isNotFalse()

Inspects whether input is not false

### Params:

*string* `message` Custom error message




```js
inspect(123).isNotFalse();
```

## isRegExp()

Inspects whether input is a regexp

### Params:

*string* `message` Custom error message




```js
inspect(/.+/).isRegExp();
```

## isNotRegExp()

Inspects whether input is not a regexp

### Params:

*string* `message` Custom error message




```js
inspect('.*').isNotRegExp();
```

## isNumber()

Inspects whether input is a number

### Params:

*string* `message` Custom error message




```js
inspect('Foo').isNumber();
```

## isNotNumber()

Inspects whether input is not a number

### Params:

*string* `message` Custom error message




```js
inspect(123).isNotNumber();
```

## isNaN()

Inspects whether input is NaN

### Params:

*string* `message` Custom error message




```js
inspect('Foo').isNaN();
```

## isNotNaN()

Inspects whether input is not a NaN

### Params:

*string* `message` Custom error message




```js
inspect(123).isNotNaN();
```

## isClass()

[description]

### Params:

arg any 
description
*string* `message` Custom error message




```

## isFunction()

Inspects whether input is a function

### Params:

*string* `message` Custom error message




```js
inspect(function).isFunction();
```

## isNotFunction()

Inspects whether input is not function

### Params:

*string* `message` Custom error message




```js
inspect(true).isNotFunction();
```

## isGenerator()

Inspects whether input is a generator function
This test will pass on environments without generator support if type of input value is function!

### Params:

*string* `message` Custom error message




```js
inspect(generator function).isGenerator();
```

## isNotGenerator()

Inspects whether input is not generator function

### Params:

*string* `message` Custom error message




```js
inspect(true).isNotGenerator();
```

## isPromise()

Inspects whether input is a promise.
A promise is identified if input type is an object and if input has a then and a catch method

### Params:

*string* `message` Custom error message




```js
var promise = new Promise(function(resolve, reject) {
    
});

inspect(promise).isPromise();
```

## isNotPromise()

Inspects whether input is not promise

### Params:

*string* `message` Custom error message




```js
inspect(true).isNotPromise();
```

## isAny()

Inspects whether input is one of these types.
types could be string number array null object boolean true false function promise class or undefined

### Params:

types   string,array    
Types array or csv list.
*string* `message` Custom error message




```

## isNotAny()

Inspects whether input is not one of any types.
types could be all what utils.getTypeOf is supporting

### Params:

types   string,array    
Types array or csv list.
*string* `message` Custom error message




```

## isTruthy()

Inspects whether input is truthy
This tests passes if value is not 0 "" null NaN or undefined

### Params:

*string* `message` Custom error message




```js
inspect('Foo').isTruthy();
```

## isFalsy()

Inspects whether input is falsy
This tests passes if value is one of 0 "" null NaN or undefined

### Params:

*string* `message` Custom error message




```js
inspect('Foo').isFalys();
```

## isEmpty()

Inspects whether input is empty
This tests passes if value is one of "" [] or {}

### Params:

*string* `message` Custom error message




```js
inspect('').isEmpty();
inspect({}).isEmpty();
inspect([]).isEmpty();
```

## isNotEmpty()

Inspects whether input is not empty
This tests passes if value is other than "" [] or {}

### Params:

*string* `message` Custom error message




```js
inspect('foo').isNotEmpty();
inspect({ foo: 'bar' }).isNotEmpty();
inspect(['foo', 'bar']).isNotEmpty();
```

## isInstanceOf()

Inspects whether input is an instance of a specific prototype or class

### Params:

proto   function    
The prototype or class object
*string* `message` Custom error message




```js
inspect(foo).isInstanceOf(Foo);
```

## isNotInstanceOf()

Inspects whether input is not an instance of a specific prototype or class

### Params:

proto   function    
The prototype or class object
*string* `message` Custom error message




```js
inspect(foo).isNotInstanceOf(Foo);
```

## doesMatch()

Inspects whether input matches against a regular expression

### Params:

reg regexp  
The RegExp
*string* `message` Custom error message




```js
inspect(/[a-z]+/).doesMatch('foo');
```

## doesNotMatch()

Inspects whether input does not matche against a regular expression

### Params:

reg regexp  
The RegExp
*string* `message` Custom error message




```js
inspect(/[a-z]+/).doesNotMatch('foo');
```

## isGreaterThan()

Inspects whether a number is greater than value

### Params:

num number  
Comparsion number
*string* `message` Custom error message




```js
inspect(3).isGreaterThan(2);
```

## isGreaterOrEqual()

Inspects whether input is greater than or equal to num

### Params:

num number  
Comparison number
*string* `message` Custom error message




```js
inspect(3).isGreaterOrEqual(3);
```

## isLesserThan()

Inspects whether input is lesser than num

### Params:

num number  
Comparison number
*string* `message` Custom error message




```js
inspect(3).isLesserThan(4);
```

## isLesserOrEqual()

Inspects whether input is lesser than or equal to num

### Params:

num number  
Comparison number
*string* `message` Custom error message




```js
inspect(3).isLesserOrEqual(3);
```

## hasKey()

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

## hasNotKey()

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

## hasKeys()

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

## hasNotKeys()

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

## hasAnyKeys()

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

## hasNotAnyKeys()

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

## hasProps()

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

## hasProp()

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

## hasNotProp()

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

## hasLength()

Inspects whether input has a specific length
Accepts arrays or strings as input values

### Params:

len number  
Expected length
*string* `message` Custom error message




```

## hasMinLength()

Inspects whether input has a specific min length
Accepts arrays or strings as input values

### Params:

len number  
Expected length
*string* `message` Custom error message




```

## hasMaxLength()

Inspects whether input has a specific max length
Accepts arrays or strings as input values

### Params:

len number  
Expected length
*string* `message` Custom error message




```

## hasValue()

Inspects whether an array has a specific value

### Params:

arg any 
description
*string* `message` Custom error message




```

## hasNotValue()

Inspects whether an array has not a specific value

### Params:

arg any 
description
*string* `message` Custom error message




```

## hasValues()

Inspects whether an array has all of these value(s)

### Params:

arg any 
description
*string* `message` Custom error message




```

## hasNotValues()

Inspects whether an array has none of these values

### Params:

arg any 
description
*string* `message` Custom error message




```

## hasAnyValues()

Inspects whether an array has any of these values

### Params:

values  array   
Haystack values
*string* `message` Custom error message




```

## hasNotAnyValues()

Inspects whether an array has not any of these values

### Params:

values  array   
Haystack values
*string* `message` Custom error message




```

## doesChange()

[description]

### Params:

arg any 
description
*string* `message` Custom error message




```

## toChange()

[description]

### Params:

arg any 
description
*string* `message` Custom error message




```

## toIncrease()

[description]

### Params:

arg any 
description
*string* `message` Custom error message




```

## toIncrease()

[description]

### Params:

arg any 
description
*string* `message` Custom error message




```

## toDecrease()

[description]

### Params:

arg any 
description
*string* `message` Custom error message




```

## toDecrease()

[description]

### Params:

arg any 
description
*string* `message` Custom error message




```

## isWithin()

[description]

### Params:

arg any 
description
*string* `message` Custom error message




```

## isWithin()

[description]

### Params:

arg any 
description
*string* `message` Custom error message




```

## doesThrow()

[description]

### Params:

arg any 
description
*string* `message` Custom error message




```

## doesThrow()

[description]

### Params:

arg any 
description
*string* `message` Custom error message




```

## doesContain()

[description]

### Params:

arg any 
description
*string* `message` Custom error message




```

## doesContain()

[description]

### Params:

arg any 
description
*string* `message` Custom error message




```

## doesContainSubset()

[description]

### Params:

arg any 
description
*string* `message` Custom error message




```

## doesContainSubset()

[description]

### Params:

arg any 
description
*string* `message` Custom error message




```

## isCloseTo()

Inspects whether a number is close to num by a given range

### Params:

num number  
Comparsion number
range   number  
Allowed range
*string* `message` Custom error message




```js
inspect(3.001).isCloseTo(3, 0.1);
```

## isNotCloseTo()

Inspects whether a number is close to num by a given range

### Params:

num number  
Comparsion number
range   number  
Allowed range
*string* `message` Custom error message




```js
inspect(3.001).isNotCloseTo(2, 0.1);
```

## withArgs()

Calls input as a function with args

### Params:

args... any 
Call with this args
```

## withArgs()

Calls input as a function with args

### Params:

args... any 
Call with this args
```
