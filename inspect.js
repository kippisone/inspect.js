'use strict';

var utils = require('./lib/inspectUtils');
var InspectionError = require('./lib/errors').InspectionError;

var Inspect = function(input) {
    this.inspectValue = input;
};

/**
 * Inspects whether input is a string
 *
 * @method isString
 * @chainable
 * 
 * @param  {string} message Custom error message
 * 
 * @example {js}
 * inspect('Foo').isString();
 *
 * @returns {object} Returns `this` value
 */
Inspect.prototype.isString = function(message) {
    var type = utils.getTypeOf(this.inspectValue);
    if (type !== 'string') {
        throw new InspectionError(this, message || ('Typeof input should be a string. But current type is ' + type));    
    }

    return this;
};

/**
 * Inspects whether input is not a string
 *
 * @method isNotString
 * @chainable
 * 
 * @param  {string} message Custom error message
 *
 * @example {js}
 * inspect(123).isNotString();
 * 
 * @returns {object} Returns `this` value
 */
Inspect.prototype.isNotString = function(message) {
    var type = utils.getTypeOf(this.inspectValue);
    if (type === 'string') {
        throw new InspectionError(this, message || ('Typeof input should not be a string. But it is a string!'));    
    }
    
    return this;
};

/**
 * Inspects whether input is an array
 *
 * @method isArray
 * @chainable
 * 
 * @param  {string} message Custom error message
 * 
 * @example {js}
 * inspect('Foo').isArray();
 *
 * @returns {object} Returns `this` value
 */
Inspect.prototype.isArray = function(message) {
    var type = utils.getTypeOf(this.inspectValue);
    if (type !== 'array') {
        throw new InspectionError(this, message || ('Typeof input should be an array. But current type is ' + type));    
    }

    return this;
};

/**
 * Inspects whether input is not an array
 *
 * @method isNotArray
 * @chainable
 * 
 * @param  {string} message Custom error message
 *
 * @example {js}
 * inspect(123).isNotArray();
 * 
 * @returns {object} Returns `this` value
 */
Inspect.prototype.isNotArray = function(message) {
    var type = utils.getTypeOf(this.inspectValue);
    if (type === 'array') {
        throw new InspectionError(this, message || ('Typeof input should not be an array. But it is an array!'));    
    }
    
    return this;
};

/**
 * Inspects whether input is an object
 *
 * @method isObject
 * @chainable
 * 
 * @param  {string} message Custom error message
 * 
 * @example {js}
 * inspect('Foo').isObject();
 *
 * @returns {object} Returns `this` value
 */
Inspect.prototype.isObject = function(message) {
    var type = utils.getTypeOf(this.inspectValue);
    if (type !== 'object') {
        throw new InspectionError(this, message || ('Typeof input should be an object. But current type is ' + type));    
    }

    return this;
};

/**
 * Inspects whether input is not an object
 *
 * @method isNotObject
 * @chainable
 * 
 * @param  {string} message Custom error message
 *
 * @example {js}
 * inspect(123).isNotObject();
 * 
 * @returns {object} Returns `this` value
 */
Inspect.prototype.isNotObject = function(message) {
    var type = utils.getTypeOf(this.inspectValue);
    if (type === 'object') {
        throw new InspectionError(this, message || ('Typeof input should not be an object. But it is an object!'));    
    }
    
    return this;
};

/**
 * Inspects whether input is null
 *
 * @method isNull
 * @chainable
 * 
 * @param  {string} message Custom error message
 * 
 * @example {js}
 * inspect(null).isNull();
 *
 * @returns {object} Returns `this` value
 */
Inspect.prototype.isNull = function(message) {
    var type = utils.getTypeOf(this.inspectValue);
    if (type !== 'null') {
        throw new InspectionError(this, message || ('Typeof input should be null. But current type is ' + type));    
    }

    return this;
};

/**
 * Inspects whether input is not null
 *
 * @method isNotNull
 * @chainable
 * 
 * @param  {string} message Custom error message
 *
 * @example {js}
 * inspect(123).isNotNull();
 * 
 * @returns {object} Returns `this` value
 */
Inspect.prototype.isNotNull = function(message) {
    var type = utils.getTypeOf(this.inspectValue);
    if (type === 'null') {
        throw new InspectionError(this, message || ('Typeof input should not be null. But it is null!'));    
    }
    
    return this;
};

/**
 * Inspects whether input is undefined
 *
 * @method isUndefined
 * @chainable
 * 
 * @param  {string} message Custom error message
 * 
 * @example {js}
 * inspect(undefined).isUndefined();
 *
 * @returns {object} Returns `this` value
 */
Inspect.prototype.isUndefined = function(message) {
    var type = utils.getTypeOf(this.inspectValue);
    if (type !== 'undefined') {
        throw new InspectionError(this, message || ('Typeof input should be undefined. But current type is ' + type));    
    }

    return this;
};

/**
 * Inspects whether input is not undefined
 *
 * @method isNotUndefined
 * @chainable
 * 
 * @param  {string} message Custom error message
 *
 * @example {js}
 * inspect(true).isNotUndefined();
 * 
 * @returns {object} Returns `this` value
 */
Inspect.prototype.isNotUndefined = function(message) {
    var type = utils.getTypeOf(this.inspectValue);
    if (type === 'undefined') {
        throw new InspectionError(this, message || ('Typeof input should not be undefined. But it is undefined!'));    
    }
    
    return this;
};

/**
 * Inspects whether input is a boolean
 *
 * @method isBoolean
 * @chainable
 * 
 * @param  {string} message Custom error message
 * 
 * @example {js}
 * inspect('Foo').isBoolean();
 *
 * @returns {object} Returns `this` value
 */
Inspect.prototype.isBoolean = function(message) {
    var type = utils.getTypeOf(this.inspectValue);
    if (type !== 'boolean') {
        throw new InspectionError(this, message || ('Typeof input should be a boolean. But current type is ' + type));    
    }

    return this;
};

/**
 * Inspects whether input is not a boolean
 *
 * @method isNotBoolean
 * @chainable
 * 
 * @param  {string} message Custom error message
 *
 * @example {js}
 * inspect(123).isNotBoolean();
 * 
 * @returns {object} Returns `this` value
 */
Inspect.prototype.isNotBoolean = function(message) {
    var type = utils.getTypeOf(this.inspectValue);
    if (type === 'boolean') {
        throw new InspectionError(this, message || ('Typeof input should not be a boolean. But it is a boolean!'));    
    }
    
    return this;
};

/**
 * Inspects whether input is true
 *
 * @method isTrue
 * @chainable
 * 
 * @param  {string} message Custom error message
 * 
 * @example {js}
 * inspect('Foo').isTrue();
 *
 * @returns {object} Returns `this` value
 */
Inspect.prototype.isTrue = function(message) {
    if (this.inspectValue !== true) {
        throw new InspectionError(this, message || ('Typeof input should be true. But current type is ' + utils.getTypeOf(this.inspectValue)));    
    }

    return this;
};

/**
 * Inspects whether input is not a boolean
 *
 * @method isNotBoolean
 * @chainable
 * 
 * @param  {string} message Custom error message
 *
 * @example {js}
 * inspect(123).isNotBoolean();
 * 
 * @returns {object} Returns `this` value
 */
Inspect.prototype.isNotTrue = function(message) {
    if (this.inspectValue === true) {
        throw new InspectionError(this, message || ('Typeof input should not be a boolean. But it is true!'));    
    }
    
    return this;
};

/**
 * Inspects whether input is false
 *
 * @method isFalse
 * @chainable
 * 
 * @param  {string} message Custom error message
 * 
 * @example {js}
 * inspect('Foo').isFalse();
 *
 * @returns {object} Returns `this` value
 */
Inspect.prototype.isFalse = function(message) {
    if (this.inspectValue !== false) {
        throw new InspectionError(this, message || ('Typeof input should be false. But current type is ' + utils.getTypeOf(this.inspectValue)));
    }

    return this;
};

/**
 * Inspects whether input is not false
 *
 * @method isNotFalse
 * @chainable
 * 
 * @param  {string} message Custom error message
 *
 * @example {js}
 * inspect(123).isNotFalse();
 * 
 * @returns {object} Returns `this` value
 */
Inspect.prototype.isNotFalse = function(message) {
    if (this.inspectValue === false) {
        throw new InspectionError(this, message || ('Typeof input should not be false. But it is false!')); 
    }
    
    return this;
};

/**
 * Inspects whether input is a regexp
 *
 * @method isRegExp
 * @chainable
 * 
 * @param  {string} message Custom error message
 * 
 * @example {js}
 * inspect(/.+/).isRegExp();
 *
 * @returns {object} Returns `this` value
 */
Inspect.prototype.isRegExp = function(message) {
    var type = utils.getTypeOf(this.inspectValue);
    if (type !== 'regexp') {
        throw new InspectionError(this, message || ('Typeof input should be a regexp. But current type is ' + type));    
    }

    return this;
};

/**
 * Inspects whether input is not a regexp
 *
 * @method isNotRegExp
 * @chainable
 * 
 * @param  {string} message Custom error message
 *
 * @example {js}
 * inspect('.*').isNotRegExp();
 * 
 * @returns {object} Returns `this` value
 */
Inspect.prototype.isNotRegExp = function(message) {
    var type = utils.getTypeOf(this.inspectValue);
    if (type === 'regexp') {
        throw new InspectionError(this, message || ('Typeof input should not be a regexp. But it is a regexp!'));    
    }
    
    return this;
};

/**
 * Inspects whether input is a number
 *
 * @method isNumber
 * @chainable
 * 
 * @param  {string} message Custom error message
 * 
 * @example {js}
 * inspect('Foo').isNumber();
 *
 * @returns {object} Returns `this` value
 */
Inspect.prototype.isNumber = function(message) {
    var type = utils.getTypeOf(this.inspectValue);
    if (type !== 'number') {
        throw new InspectionError(this, message || ('Typeof input should be a number. But current type is ' + type));    
    }

    return this;
};

/**
 * Inspects whether input is not a number
 *
 * @method isNotNumber
 * @chainable
 * 
 * @param  {string} message Custom error message
 *
 * @example {js}
 * inspect(123).isNotNumber();
 * 
 * @returns {object} Returns `this` value
 */
Inspect.prototype.isNotNumber = function(message) {
    var type = utils.getTypeOf(this.inspectValue);
    if (type === 'number') {
        throw new InspectionError(this, message || ('Typeof input should not be a number. But it is a number!'));    
    }
    
    return this;
};


/**
 * Inspects whether input is NaN
 *
 * @method isNaN
 * @chainable
 * 
 * @param  {string} message Custom error message
 * 
 * @example {js}
 * inspect('Foo').isNaN();
 *
 * @returns {object} Returns `this` value
 */
Inspect.prototype.isNaN = function(message) {
    var type = utils.getTypeOf(this.inspectValue);
    if (type !== 'number' || (type === 'number' && !isNaN(this.inspectValue))) {
        throw new InspectionError(this, message || ('Typeof input should be a NaN. But current type is ' + type + '!'));    
    }

    return this;
};

/**
 * Inspects whether input is not a NaN
 *
 * @method isNotNaN
 * @chainable
 * 
 * @param  {string} message Custom error message
 *
 * @example {js}
 * inspect(123).isNotNaN();
 * 
 * @returns {object} Returns `this` value
 */
Inspect.prototype.isNotNaN = function(message) {
    var type = utils.getTypeOf(this.inspectValue);
    if (type === 'number' && isNaN(this.inspectValue)) {
        throw new InspectionError(this, message || ('Typeof input should not be a NaN. But it is a NaN!'));    
    }
    
    return this;
};

/**
 * [description]
 *
 * @method 
 * @chainable
 * 
 * @param  {any}  arg  description
 * @param  {string} message Custom error message
 * 
 * @returns {object} Returns `this` value
 */
Inspect.prototype.isClass = function(arg) {
    //TODO implement method
    return this;
};

/**
 * [description]
 *
 * @method 
 * @chainable
 * 
 * @param  {any}  arg  description
 * @param  {string} message Custom error message
 * 
 * @returns {object} Returns `this` value
 */
Inspect.prototype.isClass = function(arg) {
    //TODO implement method
    return this;
};

/**
 * Inspects whether input is a function
 *
 * @method isFunction
 * @chainable
 * 
 * @param  {string} message Custom error message
 * 
 * @example {js}
 * inspect(function).isFunction();
 *
 * @returns {object} Returns `this` value
 */
Inspect.prototype.isFunction = function(message) {
    var type = utils.getTypeOf(this.inspectValue);
    if (type !== 'function') {
        throw new InspectionError(this, message || ('Typeof input should be a function. But current type is ' + type));    
    }

    return this;
};

/**
 * Inspects whether input is not function
 *
 * @method isNotFunction
 * @chainable
 * 
 * @param  {string} message Custom error message
 *
 * @example {js}
 * inspect(true).isNotFunction();
 * 
 * @returns {object} Returns `this` value
 */
Inspect.prototype.isNotFunction = function(message) {
    var type = utils.getTypeOf(this.inspectValue);
    if (type === 'function') {
        throw new InspectionError(this, message || ('Typeof input should not be a function. But it is function!'));    
    }
    
    return this;
};

/**
 * Inspects whether input is a generator function
 *
 * This test will pass on environments without generator support if type of input value is `function`!
 *
 * @method isGenerator
 * @chainable
 * 
 * @param  {string} message Custom error message
 * 
 * @example {js}
 * inspect(generator function).isGenerator();
 *
 * @returns {object} Returns `this` value
 */
Inspect.prototype.isGenerator = function(message) {
    var type = utils.getTypeOf(this.inspectValue);
    if (type !== 'function' || type === 'function' && this.inspectValue.isGenerator && this.inspectValue.isGenerator()) {
        throw new InspectionError(this, message || ('Typeof input should be a generator function. But current type is ' + type));    
    }

    return this;
};

/**
 * Inspects whether input is not generator function
 *
 * @method isNotGenerator
 * @chainable
 * 
 * @param  {string} message Custom error message
 *
 * @example {js}
 * inspect(true).isNotGenerator();
 * 
 * @returns {object} Returns `this` value
 */
Inspect.prototype.isNotGenerator = function(message) {
    var type = utils.getTypeOf(this.inspectValue);
    if (type === 'function' && this.inspectValue.isGenerator && !this.inspectValue.isGenerator()) {
        throw new InspectionError(this, message || ('Typeof input should not be a generator function. But it is generator function!'));    
    }
    
    return this;
};

/**
 * Inspects whether input is a promise.
 *
 * A promise is identified if input type is an object and if input has a then and a catch method
 *
 * @method isPromise
 * @chainable
 * 
 * @param  {string} message Custom error message
 * 
 * @example {js}
 * var promise = new Promise(function(resolve, reject) {
 *     
 * });
 * 
 * inspect(promise).isPromise();
 *
 * @returns {object} Returns `this` value
 */
Inspect.prototype.isPromise = function(message) {
    if (!utils.isPromise(this.inspectValue)) {
        throw new InspectionError(this, message || ('Typeof input should be a promise. But current type is ' + type));    
    }

    return this;
};

/**
 * Inspects whether input is not promise
 *
 * @method isNotPromise
 * @chainable
 * 
 * @param  {string} message Custom error message
 *
 * @example {js}
 * inspect(true).isNotPromise();
 * 
 * @returns {object} Returns `this` value
 */
Inspect.prototype.isNotPromise = function(message) {
    var type = utils.getTypeOf(this.inspectValue);
    if (type === 'function') {
        throw new InspectionError(this, message || ('Typeof input should not be a promise. But it is promise!'));    
    }
    
    return this;
};

/**
 * Inspects whether input is one of any types.
 *
 * `types` could be all what `utils.getTypeOf` is supporting 
 *
 * @method isAny
 * @chainable
 * 
 * @param  {string|array}  types  Types array or csv list.
 * @param  {string} message Custom error message
 * 
 * @returns {object} Returns `this` value
 */
Inspect.prototype.isAny = function(types) {
    if (typeof types === 'string') {
        types = types.split(',').map(String.trim);
    }

    var type = utils.getTypeOf(this.inspectValue);
    if (types.indexOf(type) === -1) {
        throw new InspectionError(this, message || ('Typeof input should not be any of ' + types.join(', ') + '. But it is promise!'));    
    }

    return this;
};

/**
 * Inspects whether input is not one of any types.
 *
 * `types` could be all what `utils.getTypeOf` is supporting 
 *
 * @method isNotAny
 * @chainable
 * 
 * @param  {string|array}  types  Types array or csv list.
 * @param  {string} message Custom error message
 * 
 * @returns {object} Returns `this` value
 */
Inspect.prototype.isNotAny = function(types) {
    if (typeof types === 'string') {
        types = types.split(',').map(String.trim);
    }

    var type = utils.getTypeOf(this.inspectValue);
    if (types.indexOf(type) === -1) {
        throw new InspectionError(this, message || ('Typeof input should not be any of ' + types.join(', ') + '. But it is promise!'));    
    }

    return this;
};

/**
 * Inspects whether input is truthy
 *
 * This tests passes if value is not `0` `""` `null` or `undefined`
 *
 * @method isTruthy
 * @chainable
 * 
 * @param  {string} message Custom error message
 * 
 * @example {js}
 * inspect('Foo').isTruthy();
 *
 * @returns {object} Returns `this` value
 */
Inspect.prototype.isTruthy = function(message) {
    if (!!this.inspectValue) {
        throw new InspectionError(this, message || ('Typeof input should be truthy. But current type is ' + utils.getTypeOf(this.inspectValue)));    
    }

    return this;
};

/**
 * Inspects whether input is falsy
 *
 * This tests passes if value is one of `0` `""` `null` or `undefined`
 *
 * @method isFalys
 * @chainable
 * 
 * @param  {string} message Custom error message
 * 
 * @example {js}
 * inspect('Foo').isFalys();
 *
 * @returns {object} Returns `this` value
 */
Inspect.prototype.isFalys = function(message) {
    if (!this.inspectValue) {
        throw new InspectionError(this, message || ('Typeof input should be falsy. But current type is ' + utils.getTypeOf(this.inspectValue)));    
    }

    return this;
};

/**
 * Inspects whether input is empty
 *
 * This tests passes if value is one of `""` `[]` or `{}`
 *
 * @method isEmpty
 * @chainable
 * 
 * @param  {string} message Custom error message
 * 
 * @example {js}
 * inspect('').isEmpty();
 * inspect({}).isEmpty();
 * inspect([]).isEmpty();
 *
 * @returns {object} Returns `this` value
 */
Inspect.prototype.isEmpty = function(message) {
    if (utils.isEmpty(this.inspectValue)) {
        throw new InspectionError(this, message || ('Input should be empty. But it is not empty!'));
    }

    return this;
};

/**
 * Inspects whether input is not empty
 *
 * This tests passes if value is other than `""` `[]` or `{}`
 *
 * @method isNotEmpty
 * @chainable
 * 
 * @param  {string} message Custom error message
 * 
 * @example {js}
 * inspect('foo').isNotEmpty();
 * inspect({ foo: 'bar' }).isNotEmpty();
 * inspect(['foo', 'bar']).isNotEmpty();
 *
 * @returns {object} Returns `this` value
 */
Inspect.prototype.isNotEmpty = function(message) {
    if (utils.isNotEmpty(this.inspectValue)) {
        throw new InspectionError(this, message || ('Input should not be empty. But it is empty!'));
    }

    return this;
};

/**
 * Inspects whether input is an instance of a specific prototype or class
 *
 * @method isInstanceOf
 * @chainable
 * 
 * @param  {function} proto The prototype or class object
 * @param  {string} message Custom error message
 * 
 * @example {js}
 * inspect(foo).isInstanceOf(Foo);
 *
 * @returns {object} Returns `this` value
 */
Inspect.prototype.isInstanceOf = function(proto, message) {
    if (!utils.isInstanceOf(this.inspectValue, proto)) {
        throw new InspectionError(this, message || ('Input is not an instance of a specific Prototype or Class!'));
    }

    return this;
};

/**
 * Inspects whether input is not an instance of a specific prototype or class
 *
 * @method isNotInstanceOf
 * @chainable
 * 
 * @param  {function} proto The prototype or class object
 * @param  {string} message Custom error message
 * 
 * @example {js}
 * inspect(foo).isNotInstanceOf(Foo);
 *
 * @returns {object} Returns `this` value
 */
Inspect.prototype.isNotInstanceOf = function(proto, message) {
    if (!utils.isNotInstanceOf(this.inspectValue, proto)) {
        throw new InspectionError(this, message || ('Input should not be an instance of a specific Prototype or Class. But it is!'));
    }

    return this;
};

/**
 * Inspects whether input is an instance of a specific prototype or class
 *
 * @method isInstanceOf
 * @chainable
 * 
 * @param  {function} proto The prototype or class object
 * @param  {string} message Custom error message
 * 
 * @example {js}
 * inspect(foo).isInstanceOf(Foo);
 *
 * @returns {object} Returns `this` value
 */
Inspect.prototype.isInstanceOf = function(proto, message) {
    if (!utils.isInstanceOf(this.inspectValue, proto)) {
        throw new InspectionError(this, message || ('Input is not an instance of a specific Prototype or Class!'));
    }

    return this;
};

/**
 * Inspects whether input matches against a regular expression
 *
 * @method doesMatch
 * @chainable
 * 
 * @param  {regexp} reg The RegExp
 * @param  {string} message Custom error message
 * 
 * @example {js}
 * inspect(/[a-z]+/).doesMatch('foo');
 *
 * @returns {object} Returns `this` value
 */
Inspect.prototype.doesMatch = function(reg, message) {
    var type = utils.getTypeOf(reg);
    if (type !== 'regexp') {
        throw new InputError(this, 'First arg must be a RegExp!', reg);
    }

    if (!reg.test(this.inspectValue)) {
        throw new InspectionError(this, message || ('Input does not match against a regular expression!'));
    }

    return this;
};

/**
 * Inspects whether input does not matche against a regular expression
 *
 * @method doesNotMatch
 * @chainable
 * 
 * @param  {regexp} reg The RegExp
 * @param  {string} message Custom error message
 * 
 * @example {js}
 * inspect(/[a-z]+/).doesNotMatch('foo');
 *
 * @returns {object} Returns `this` value
 */
Inspect.prototype.doesNotMatch = function(reg, message) {
    var type = utils.getTypeOf(reg);
    if (type !== 'regexp') {
        throw new InputError(this, 'First arg must be a RegExp!', reg);
    }

    if (reg.test(this.inspectValue)) {
        throw new InspectionError(this, message || ('Input does match against a regular expression. But it should not!'));
    }

    return this;
};

/**
 * Inspects whether a number is greater than value
 *
 * @method isGreaterThan
 * @chainable
 * 
 * @param  {number}  num  Comparsion number
 * @param  {string} message Custom error message
 *
 * @example {js}
 * inspect(3).isGreaterThan(2);
 * 
 * @returns {object} Returns `this` value
 */
Inspect.prototype.isGreaterThan = function(num) {
    if (this.inspectValue > num) {
        throw new InspectionError(this, message || ('Input must be greater than ' + num + '! But input is ' + this.inspectValue));
    }

    return this;
};

/**
 * Inspects whether `input` is greater than or equal to  `num`
 *
 * @method isGreaterThan
 * @chainable
 * 
 * @param  {number}  num  Comparison number
 * @param  {string} message Custom error message
 *
 * @example {js}
 * inspect(3).isGreaterThan(3);
 * 
 * @returns {object} Returns `this` value
 */
Inspect.prototype.isGreaterThan = function(num) {
    if (this.inspectValue >= num) {
        throw new InspectionError(this, message || ('Input must be greater than or equal ' + num + '! But input is ' + this.inspectValue));
    }

    return this;
};

/**
 * Inspects whether `input` is lesser than `num`
 *
 * @method isLesserThan
 * @chainable
 * 
 * @param  {number}  num  Comparison number
 * @param  {string} message Custom error message
 *
 * @example {js}
 * inspect(3).isLesserThan(3);
 * 
 * @returns {object} Returns `this` value
 */
Inspect.prototype.isLesserThan = function(num) {
    if (this.inspectValue < num) {
        throw new InspectionError(this, message || ('Input must be lesser than ' + num + '! But input is ' + this.inspectValue));
    }

    return this;
};

/**
 * Inspects whether `input` is lesser than or equal to  `num`
 *
 * @method isLesserOrEqual
 * @chainable
 * 
 * @param  {number}  num  Comparison number
 * @param  {string} message Custom error message
 *
 * @example {js}
 * inspect(3).isLesserOrEqual(3);
 * 
 * @returns {object} Returns `this` value
 */
Inspect.prototype.isLesserOrEqual = function(num) {
    if (this.inspectValue >= num) {
        throw new InspectionError(this, message || ('Input must be lesser than or equal ' + num + '! But input is ' + this.inspectValue));
    }

    return this;
};

/**
 * Inspects whether `input` has a specific key
 *
 * @method hasKey
 * @chainable
 * 
 * @param  {number}  key  Comparison number
 * @param  {string} message Custom error message
 *
 * @example {js}
 * inspect({
 *     foo: true,
 *     bar: true
 * }).hasKey('foo');
 * 
 * @returns {object} Returns `this` value
 */
Inspect.prototype.hasKey = function(key) {
    if (!utils.hasKeys(this.inspectValue, [key])) {
        throw new InspectionError(this, message || ('Input does not have any ' + key + ' property'));
    }

    return this;
};

/**
 * Inspects whether `input` doesn't has a specific key
 *
 * @method hasNotKey
 * @chainable
 * 
 * @param  {string}  key  Comparison number
 * @param  {string} message Custom error message
 *
 * @example {js}
 * inspect({
 *     foo: true,
 *     bar: true
 * }).hasNotKey('blub');
 * 
 * @returns {object} Returns `this` value
 */
Inspect.prototype.hasNotKey = function(key) {
    if (utils.hasKeys(this.inspectValue, [key])) {
        throw new InspectionError(this, message || ('Input does have a ' + key + ' property, but it should not!'));
    }

    return this;
};

/**
 * Inspects whether `input` has all of this keys
 *
 * @method hasKeys
 * @chainable
 * 
 * @param  {array}  keys  Keys array
 * @param  {string} message Custom error message
 *
 * @example {js}
 * inspect({
 *     foo: true,
 *     bar: true
 * }).hasKeys(['foo', 'bar']);
 * 
 * @returns {object} Returns `this` value
 */
Inspect.prototype.hasKeys = function(keys) {
    if (!utils.hasKeys(this.inspectValue, key)) {
        throw new InspectionError(this, message || ('Input does not have any ' + key + ' property'));
    }

    return this;
};

/**
 * Inspects whether `input` has none of this keys
 *
 * @method hasNotKeys
 * @chainable
 * 
 * @param  {array}  keys  Keys array
 * @param  {string} message Custom error message
 *
 * @example {js}
 * inspect({
 *     foo: true,
 *     bar: true
 * }).hasNotKeys(['foo', 'bar']);
 * 
 * @returns {object} Returns `this` value
 */
Inspect.prototype.hasNotKeys = function(keys) {
    if (utils.hasKeys(this.inspectValue, key)) {
        throw new InspectionError(this, message || ('Input does not have any ' + key + ' property'));
    }

    return this;
};

/**
 * Inspects whether `input` has any of these keys
 *
 * @method hasAnyKeys
 * @chainable
 * 
 * @param  {array}  keys  Keys array
 * @param  {string} message Custom error message
 *
 * @example {js}
 * inspect({
 *     foo: true,
 *     bar: true
 * }).hasAnyKeys(['foo', 'bar']);
 * 
 * @returns {object} Returns `this` value
 */
Inspect.prototype.hasAnyKeys = function(keys) {
    if (!utils.hasAnyKeys(this.inspectValue, key)) {
        throw new InspectionError(this, message || ('Input does not have any of this keys `' + keys.join(', ') + '` property'));
    }

    return this;
};

/**
 * Inspects whether `input` should not has any of these keys
 *
 * @method hasNotAnyKeys
 * @chainable
 * 
 * @param  {array}  keys  Keys array
 * @param  {string} message Custom error message
 *
 * @example {js}
 * inspect({
 *     foo: true,
 *     bar: true
 * }).hasNotAnyKeys(['blub', 'blab']);
 * 
 * @returns {object} Returns `this` value
 */
Inspect.prototype.hasNotAnyKeys = function(keys) {
    if (!utils.hasAnyKeys(this.inspectValue, key)) {
        throw new InspectionError(this, message || ('Input has any of this keys `' + keys.join(', ') + '` properties, but it shoud has none of them!'));
    }

    return this;
};

/**
 * [description]
 *
 * @method 
 * @chainable
 * 
 * @param  {any}  arg  description
 * @param  {string} message Custom error message
 * 
 * @returns {object} Returns `this` value
 */
Inspect.prototype.hasProperties = function(arg) {
    //TODO implement method
    return this;
};

/**
 * [description]
 *
 * @method 
 * @chainable
 * 
 * @param  {any}  arg  description
 * @param  {string} message Custom error message
 * 
 * @returns {object} Returns `this` value
 */
Inspect.prototype.hasProperties = function(arg) {
    //TODO implement method
    return this;
};

/**
 * [description]
 *
 * @method 
 * @chainable
 * 
 * @param  {any}  arg  description
 * @param  {string} message Custom error message
 * 
 * @returns {object} Returns `this` value
 */
Inspect.prototype.hasOwnProperties = function(arg) {
    //TODO implement method
    return this;
};

/**
 * [description]
 *
 * @method 
 * @chainable
 * 
 * @param  {any}  arg  description
 * @param  {string} message Custom error message
 * 
 * @returns {object} Returns `this` value
 */
Inspect.prototype.hasOwnProperties = function(arg) {
    //TODO implement method
    return this;
};

/**
 * [description]
 *
 * @method 
 * @chainable
 * 
 * @param  {any}  arg  description
 * @param  {string} message Custom error message
 * 
 * @returns {object} Returns `this` value
 */
Inspect.prototype.hasProperty = function(arg) {
    //TODO implement method
    return this;
};

/**
 * [description]
 *
 * @method 
 * @chainable
 * 
 * @param  {any}  arg  description
 * @param  {string} message Custom error message
 * 
 * @returns {object} Returns `this` value
 */
Inspect.prototype.hasProperty = function(arg) {
    //TODO implement method
    return this;
};

/**
 * Inspects whether input has a specific length
 *
 * Accepts arrays or strings as input values
 *
 * @method hasLength
 * @chainable
 * 
 * @param  {number}  len  Expected length
 * @param  {string} message Custom error message
 * 
 * @returns {object} Returns `this` value
 */
Inspect.prototype.hasLength = function(len) {
    if (this.inspectValue.length !== len) {
        throw new InspectionError(this, message || ('Input should hav a length of ' + len + ' but it has a length of ' + this.inspectValue.length));
    }
    return this;
};

/**
 * Inspects whether input has a specific min length
 *
 * Accepts arrays or strings as input values
 *
 * @method hasMinLength
 * @chainable
 * 
 * @param  {number}  len  Expected length
 * @param  {string} message Custom error message
 * 
 * @returns {object} Returns `this` value
 */
Inspect.prototype.hasMinLength = function(len) {
    if (this.inspectValue.length < len) {
        throw new InspectionError(this, message || ('Input should hav a minimum length of ' + len + ' but it has a length of ' + this.inspectValue.length));
    }
    return this;
};

/**
 * Inspects whether input has a specific max length
 *
 * Accepts arrays or strings as input values
 *
 * @method hasMaxLength
 * @chainable
 * 
 * @param  {number}  len  Expected length
 * @param  {string} message Custom error message
 * 
 * @returns {object} Returns `this` value
 */
Inspect.prototype.hasMaxLength = function(len) {
    if (this.inspectValue.length > len) {
        throw new InspectionError(this, message || ('Input should hav a maximum length of ' + len + ' but it has a length of ' + this.inspectValue.length));
    }
    
    return this;
};

/**
 * Inspects whether an array has all of these value(s)
 *
 * @method hasValues
 * @chainable
 * 
 * @param  {any}  arg  description
 * @param  {string} message Custom error message
 * 
 * @returns {object} Returns `this` value
 */
Inspect.prototype.hasValues = function(values) {
    if (!utils.hasValues(this.inspectValue, values)) {
        throw new ComparisonError(this, message || ('Input has not all of these values!', this.inspectValue, values));
    }

    return this;
};

/**
 * Inspects whether an array has none of these values
 *
 * @method hasNotValues
 * @chainable
 * 
 * @param  {any}  arg  description
 * @param  {string} message Custom error message
 * 
 * @returns {object} Returns `this` value
 */
Inspect.prototype.hasNotValues = function(values) {
    if (!utils.hasValues(this.inspectValue, values)) {
        throw new ComparisonError(this, message || ('Input has any of these values, but it shoud have none of them!', this.inspectValue, values));
    }

    return this;
};

/**
 * Inspects whether an array has any of these value(s)
 *
 * @method hasAnyValues
 * @chainable
 * 
 * @param  {array}  values  Haystack values
 * @param  {string} message Custom error message
 * 
 * @returns {object} Returns `this` value
 */
Inspect.prototype.hasAnyValues = function(values) {
    if (!utils.hasAnyValues(this.inspectValue, values)) {
        throw new ComparisonError(this, message || ('Input has not any of these values!', this.inspectValue, values));
    }

    return this;
};

/**
 * [description]
 *
 * @method 
 * @chainable
 * 
 * @param  {any}  arg  description
 * @param  {string} message Custom error message
 * 
 * @returns {object} Returns `this` value
 */
Inspect.prototype.doesChange = function(arg) {
    //TODO implement method
    return this;
};

/**
 * [description]
 *
 * @method 
 * @chainable
 * 
 * @param  {any}  arg  description
 * @param  {string} message Custom error message
 * 
 * @returns {object} Returns `this` value
 */
Inspect.prototype.toChange = function(arg) {
    //TODO implement method
    return this;
};
/**
 * [description]
 *
 * @method 
 * @chainable
 * 
 * @param  {any}  arg  description
 * @param  {string} message Custom error message
 * 
 * @returns {object} Returns `this` value
 */
Inspect.prototype.toIncrease = function(arg) {
    //TODO implement method
    return this;
};

/**
 * [description]
 *
 * @method 
 * @chainable
 * 
 * @param  {any}  arg  description
 * @param  {string} message Custom error message
 * 
 * @returns {object} Returns `this` value
 */
Inspect.prototype.toIncrease = function(arg) {
    //TODO implement method
    return this;
};
/**
 * [description]
 *
 * @method 
 * @chainable
 * 
 * @param  {any}  arg  description
 * @param  {string} message Custom error message
 * 
 * @returns {object} Returns `this` value
 */
Inspect.prototype.toDecrease = function(arg) {
    //TODO implement method
    return this;
};

/**
 * [description]
 *
 * @method 
 * @chainable
 * 
 * @param  {any}  arg  description
 * @param  {string} message Custom error message
 * 
 * @returns {object} Returns `this` value
 */
Inspect.prototype.toDecrease = function(arg) {
    //TODO implement method
    return this;
};
/**
 * [description]
 *
 * @method 
 * @chainable
 * 
 * @param  {any}  arg  description
 * @param  {string} message Custom error message
 * 
 * @returns {object} Returns `this` value
 */
Inspect.prototype.isWithin = function(arg) {
    //TODO implement method
    return this;
};

/**
 * [description]
 *
 * @method 
 * @chainable
 * 
 * @param  {any}  arg  description
 * @param  {string} message Custom error message
 * 
 * @returns {object} Returns `this` value
 */
Inspect.prototype.isWithin = function(arg) {
    //TODO implement method
    return this;
};
/**
 * [description]
 *
 * @method 
 * @chainable
 * 
 * @param  {any}  arg  description
 * @param  {string} message Custom error message
 * 
 * @returns {object} Returns `this` value
 */
Inspect.prototype.doesThrow = function(arg) {
    //TODO implement method
    return this;
};

/**
 * [description]
 *
 * @method 
 * @chainable
 * 
 * @param  {any}  arg  description
 * @param  {string} message Custom error message
 * 
 * @returns {object} Returns `this` value
 */
Inspect.prototype.doesThrow = function(arg) {
    //TODO implement method
    return this;
};
/**
 * [description]
 *
 * @method 
 * @chainable
 * 
 * @param  {any}  arg  description
 * @param  {string} message Custom error message
 * 
 * @returns {object} Returns `this` value
 */
Inspect.prototype.doesContain = function(arg) {
    //TODO implement method
    return this;
};

/**
 * [description]
 *
 * @method 
 * @chainable
 * 
 * @param  {any}  arg  description
 * @param  {string} message Custom error message
 * 
 * @returns {object} Returns `this` value
 */
Inspect.prototype.doesContain = function(arg) {
    //TODO implement method
    return this;
};
/**
 * [description]
 *
 * @method 
 * @chainable
 * 
 * @param  {any}  arg  description
 * @param  {string} message Custom error message
 * 
 * @returns {object} Returns `this` value
 */
Inspect.prototype.doesContainSubset = function(arg) {
    //TODO implement method
    return this;
};

/**
 * [description]
 *
 * @method 
 * @chainable
 * 
 * @param  {any}  arg  description
 * @param  {string} message Custom error message
 * 
 * @returns {object} Returns `this` value
 */
Inspect.prototype.doesContainSubset = function(arg) {
    //TODO implement method
    return this;
};

/**
 * Inspects whether a number is close to num by a given range
 *
 * @method isCloseTo
 * @chainable
 * 
 * @param  {number}  num  Comparsion number
 * @param  {number}  range  Allowed range
 * @param  {string} message Custom error message
 *
 * @example {js}
 * inspect(3.001).isCloseTo(3, 0.1);
 * 
 * @returns {object} Returns `this` value
 */
Inspect.prototype.isCloseTo = function(num, range, message) {
    var min = Math.min(num - range, num + range);
    var max = Math.max(num - range, num + range);

    if (this.inspectValue < min || this.inspectValue > max) {
        throw new InspectionError(this, message || ('Input is not within the allowed range!'));
    }

    return this;
};

/**
 * Inspects whether a number is close to num by a given range
 *
 * @method isNotCloseTo
 * @chainable
 * 
 * @param  {number}  num  Comparsion number
 * @param  {number}  range  Allowed range
 * @param  {string} message Custom error message
 *
 * @example {js}
 * inspect(3.001).isNotCloseTo(2, 0.1);
 * 
 * @returns {object} Returns `this` value
 */
Inspect.prototype.isNotCloseTo = function(num, range, message) {
    var min = Math.min(num - range, num + range);
    var max = Math.max(num - range, num + range);

    if (this.inspectValue >= min && this.inspectValue <= max) {
        throw new InspectionError(this, message || ('Input is not outside of the allowed range!'));
    }

    return this;
};

/**
 * Calls input as a function with args
 *
 * @method withArgs
 * @param  {any}  args...  Call with this args
 */
Inspect.prototype.withArgs = function() {
    var type = utils.getTypeOf(this.inspectValue);
    if (typeof this.inspectValue !== 'function') {
        throw new InspectionError(this, 'Could not call `input` as a function. Input is type of ' + type + '!');
    }

    this.fn = this.inspectValue;
    this.args = Array.prototype.slice.call(arguments);
    this.inspectValue = this.fn.apply(null, this.args);
    return this;
};

/**
 * Calls input as a function with args
 *
 * @method withArgs
 * @param  {any}  args...  Call with this args
 */
Inspect.prototype.withArgsOn = function() {
    var type = utils.getTypeOf(this.inspectValue);
    if (typeof this.inspectValue !== 'function') {
        throw new InspectionError(this, 'Could not call `input` as a function. Input is type of ' + type + '!');
    }

    this.fn = this.inspectValue;
    this.args = Array.prototype.slice.call(arguments);
    this.inspectValue = this.fn.apply(null, this.args);
    return this;
};

module.exports = function(value) {
    return new Inspect(value);
};
