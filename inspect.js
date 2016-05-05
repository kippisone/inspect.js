/**
 * Inspect.js the next generation test inspection library
 *
 * @package Inspect
 * @module inspect
 */

'use strict';

var utils = require('./lib/inspectUtils');
var InspectionError = require('./lib/inspectionError');
var InputError = require('./lib/errors').InputError;
var ComparisonError = require('./lib/errors').ComparisonError;
var ContainmentError = require('./lib/errors').ContainmentError;

/**
 * Enables debug mode
 *
 * @var {string} DEBUG
 * @default  false
 */

/**
 * Inspect class
 * @constructor  Inspect
 * @param {any} input Input value
 */
var Inspect = function(input) {
    this.inspectValue = input;
};

/**
 * Defines whether inspect.js is cool or not.
 *
 * @property {boolean} isCool
 */

/**
 * Another fucking serious property
 *
 * @event is.geil
 * @param {number} 1328 Krasse Zahl
 */

/**
 * Inspects whether input is a string
 *
 * @method isString
 * @chainable
 * @version  v0.1.0
 * @public
 * @unimplemented
 * @new
 * @beta
 * @deprecated
 * @async
 * @static
 * @chainable
 *
 * @param  {string} [message] Custom error message
 *
 * @fires is.geil
 * @arg {object} req Request object
 * @arg {object} res Response object
 *
 * @fires is.geil
 * @arg {object} req Request object
 * @arg {object} res Response object
 *
 * @example {js}
 * inspect('Foo').isString();
 *
 * @example {js}
 * inspect(123).isString();
 *
 * @preview
 * <b>Foo</b>
 *
 * @returns {object} Returns `this` value Lorem ipsum Dolor do culpa est sint laboris reprehenderit exercitation Ut aliquip nostrud enim ea ullamco exercitation tempor voluptate ut laborum in fugiat labore sed officia esse ea veniam aute voluptate qui ullamco nostrud irure nostrud eiusmod velit in aliqua minim officia Ut voluptate do est eiusmod ut tempor est id eu officia sunt Ut irure adipisicing dolor dolor culpa Ut commodo nisi in dolor in dolor incididunt reprehenderit aliqua sint dolore velit culpa voluptate dolor labore exercitation quis eiusmod amet proident est cillum aliqua ut ad culpa id non amet laboris fugiat labore ex consequat occaecat in consequat elit aute quis eiusmod nostrud in velit et eu irure reprehenderit incididunt dolore laboris minim dolor quis dolore ut eiusmod enim dolor tempor aute velit eiusmod elit in ullamco cillum veniam fugiat sit sunt ex occaecat nisi adipisicing sunt reprehenderit eiusmod incididunt labore commodo.
 */
Inspect.prototype.isString = function(message) {
    var type = utils.getTypeOf(this.inspectValue);
    if (type !== 'string') {
        throw new InspectionError(message || ('Typeof input should be a string. But current type is ' + type));
    }

    return this;
};

/**
 * Inspects whether input is not a string
 *
 * @middleware isNotString
 * @chainable
 * @version  v0.1.0
 * @protected
 *
 * @param  {string} [message] Custom error message
 *
 * @example {js}
 * inspect(123).isNotString();
 *
 * @returns {object} Returns `this` value
 */
Inspect.prototype.isNotString = function(message) {
    var type = utils.getTypeOf(this.inspectValue);
    if (type === 'string') {
        throw new InspectionError(message || ('Typeof input should not be a string. But it is a string!'));
    }

    return this;
};

/**
 * Inspects whether input is an array
 *
 * @method isArray
 * @chainable
 * @private
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
        throw new InspectionError(message || ('Typeof input should be an array. But current type is ' + type));
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
        throw new InspectionError(message || ('Typeof input should not be an array. But it is an array!'));
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
        throw new InspectionError(message || ('Typeof input should be an object. But current type is ' + type));
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
        throw new InspectionError(message || ('Typeof input should not be an object. But it is an object!'));
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
        throw new InspectionError(message || ('Typeof input should be null. But current type is ' + type));
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
        throw new InspectionError(message || ('Typeof input should not be null. But it is null!'));
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
        throw new InspectionError(message || ('Typeof input should be undefined. But current type is ' + type));
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
        throw new InspectionError(message || ('Typeof input should not be undefined. But it is undefined!'));
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
        throw new InspectionError(message || ('Typeof input should be a boolean. But current type is ' + type));
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
        throw new InspectionError(message || ('Typeof input should not be a boolean. But it is a boolean!'));
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
        throw new InspectionError(message || ('Typeof input should be true. But current type is ' + utils.getTypeOf(this.inspectValue)));
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
        throw new InspectionError(message || ('Typeof input should not be a boolean. But it is true!'));
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
        throw new InspectionError(message || ('Typeof input should be false. But current type is ' + utils.getTypeOf(this.inspectValue)));
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
        throw new InspectionError(message || ('Typeof input should not be false. But it is false!'));
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
        throw new InspectionError(message || ('Typeof input should be a regexp. But current type is ' + type));
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
        throw new InspectionError(message || ('Typeof input should not be a regexp. But it is a regexp!'));
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
        throw new InspectionError(message || ('Typeof input should be a number. But current type is ' + type));
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
        throw new InspectionError(message || ('Typeof input should not be a number. But it is a number!'));
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
    if (type !== 'NaN') {
        throw new InspectionError(message || ('Typeof input should be a NaN. But current type is ' + type + '!'));
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
    if (type === 'NaN') {
        throw new InspectionError(message || ('Typeof input should not be a NaN. But it is a NaN!'));
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
        throw new InspectionError(message || ('Typeof input should be a function. But current type is ' + type));
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
        throw new InspectionError(message || ('Typeof input should not be a function. But it is function!'));
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
    if (type !== 'generator') {
        throw new InspectionError(message || ('Typeof input should be a generator function. But current type is ' + type));
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
    if (type === 'generator') {
        throw new InspectionError(message || ('Typeof input should not be a generator function. But it is generator function!'));
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
        throw new InspectionError(
            message || ('Typeof input should be a promise. But current type is ')
        );
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
    if (utils.isPromise(this.inspectValue)) {
        throw new InspectionError(this,
            message || ('Typeof input should not be a promise. But it is promise!')
        );
    }

    return this;
};

/**
 * Inspects whether input is one of these `types`.
 *
 * `types` could be `string` `number` `array` `null` `object` `boolean` `true` `false` `function` `promise` `class` or `undefined`
 *
 * @method isAny
 * @chainable
 *
 * @param  {string|array}  types  Types array or csv list.
 * @param  {string} message Custom error message
 *
 * @returns {object} Returns `this` value
 */
Inspect.prototype.isAny = function(types, message) {
    if (typeof types === 'string') {
        types = types.split(',').map(String.trim);
    }

    if (!utils.isAny(this.inspectValue, types)) {
        throw new InspectionError(
            message || (
                'Typeof input should be any of `' + types.join(', ') + '`. But it is ' +
                utils.getTypeOf(this.inspectValue) + '!'
            )
        );
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
Inspect.prototype.isNotAny = function(types, message) {
    if (typeof types === 'string') {
        types = types.split(',').map(String.trim);
    }

    if (!utils.isAny(this.inspectValue, types)) {
        throw new InspectionError(message || ('Typeof input should not be any of `' + types.join(', ') + '`. But it is ' + utils.getTypeOf(this.inspectValue) + '!'));
    }

    return this;
};

/**
 * Inspects whether input is equal to a value.
 *
 * This makes a === comparison
 *
 * @method isEqual
 * @chainable
 *
 * @param  {any} value Match value
 * @param  {string} message Custom error message
 *
 * @example {js}
 *
 * var obj = {};
 * inspect(obj).isEqual(obj);
 *
 * @returns {object} Returns `this` value
 */
Inspect.prototype.isEqual = function(value, message) {
    if (this.inspectValue !== value) {
        throw new ComparisonError(this,
            message || (
                'Input is not equals to `value`'
            ),
            this.inspectValue,
            value
        );
    }

    return this;
};

/**
 * Inspects whether input is not equal to a value.
 *
 * This makes a !== comparison
 *
 * @method isNotEqual
 * @chainable
 *
 * @param  {any} value Match value
 * @param  {string} message Custom error message
 *
 * @example {js}
 *
 * var obj = {};
 * inspect(obj).isNotEqual({});
 *
 * @returns {object} Returns `this` value
 */
Inspect.prototype.isNotEqual = function(value, message) {
    if (this.inspectValue !== value) {
        throw new ComparisonError(this,
            message || (
                'Input is equal to `value`, but it should not!'
            ),
            this.inspectValue,
            value
        );
    }

    return this;
};

/**
 * Inspects whether input is eql to a value.
 *
 * This makes a value comparison.
 *
 * @method isEql
 * @chainable
 *
 * @param  {any} value Match value
 * @param  {string} message Custom error message
 *
 * @example {js}
 *
 * var obj = {};
 * inspect(obj).isEql({});
 *
 * @returns {object} Returns `this` value
 */
Inspect.prototype.isEql = function(value, message) {
    if (!utils.compareValues(this.inspectValue, value)) {
        throw new ComparisonError(this,
            message || (
                'Input is not eql to `value`'
            ),
            this.inspectValue,
            value
        );
    }

    return this;
};

/**
 * Inspects whether input is not eql to a value.
 *
 * This makes a value comparison.
 *
 * @method isNotEql
 * @chainable
 *
 * @param  {any} value Match value
 * @param  {string} message Custom error message
 *
 * @example {js}
 *
 * var obj = { bar: '' };
 * inspect(obj).isNotEql({});
 *
 * @returns {object} Returns `this` value
 */
Inspect.prototype.isNotEql = function(value, message) {
    if (utils.compareValues(this.inspectValue, value)) {
        throw new ComparisonError(this,
            message || (
                'Input shouldn\'t be equal to value!'
            ),
            this.inspectValue,
            value
        );
    }

    return this;
};

/**
 * Inspects whether input is truthy
 *
 * This tests passes if value is not `0` `""` `null` `NaN` or `undefined`
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
    if (!this.inspectValue) {
        throw new InspectionError(message || ('Typeof input should be truthy. But current type is ' + (this.inspectValue ? 'truthy' : 'falsy')));
    }

    return this;
};

/**
 * Inspects whether input is falsy
 *
 * This tests passes if value is one of `0` `""` `null` `NaN` or `undefined`
 *
 * @method isFalsy
 * @chainable
 *
 * @param  {string} message Custom error message
 *
 * @example {js}
 * inspect('Foo').isFalys();
 *
 * @returns {object} Returns `this` value
 */
Inspect.prototype.isFalsy = function(message) {
    if (this.inspectValue) {
        throw new InspectionError(message || ('Typeof input should be falsy. But current type is ' + (this.inspectValue ? 'truthy' : 'falsy')));
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
    if (!utils.isEmpty(this.inspectValue)) {
        throw new InspectionError(message || ('Input should be empty. But it is not empty!'));
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
    if (utils.isEmpty(this.inspectValue)) {
        throw new InspectionError(message || ('Input should not be empty. But it is empty!'));
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
        throw new InspectionError(message || ('Input is not an instance of a specific Prototype or Class!'));
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
    if (utils.isInstanceOf(this.inspectValue, proto)) {
        throw new InspectionError(message || ('Input should not be an instance of a specific Prototype or Class. But it is!'));
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
        throw new InspectionError(message || ('Input does not match against a regular expression!'));
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
        throw new InspectionError(message || ('Input does match against a regular expression. But it should not!'));
    }

    return this;
};

/**
 * Inspects whether input starts with a specific string
 *
 * @method doesStartWith
 * @chainable
 *
 * @param  {string} match Match string
 * @param  {string} message Custom error message
 *
 * @example {js}
 * inspect('Foo is cool').doesStartWith('Foo');
 *
 * @returns {object} Returns `this` value
 */
Inspect.prototype.doesStartWith = function(match, message) {
    this.validateInput('string', match, 'string');

    if (this.inspectValue.substr(0, match.length) !== match) {
        throw new ContainmentError(this,
            message || 'Input does not start with match!',
            { pos: 0, len: match.length },
            match
        );
    }

    return this;
};

/**
 * Inspects whether input starts not with a specific string
 *
 * @method doesNotStartWith
 * @chainable
 *
 * @param  {string} match Match string
 * @param  {string} message Custom error message
 *
 * @example {js}
 * inspect('Foo is cool').doesNotStartWith('bar');
 *
 * @returns {object} Returns `this` value
 */
Inspect.prototype.doesNotStartWith = function(match, message) {
    this.validateInput('string', match, 'string');

    if (this.inspectValue.substr(0, match.length) === match) {
        throw new InspectionError(message || ('Input starts with match, but it should not!'));
    }

    return this;
};

/**
 * Inspects whether input ends with a specific string
 *
 * @method doesEndWith
 * @chainable
 *
 * @param  {string} match Match string
 * @param  {string} message Custom error message
 *
 * @example {js}
 * inspect('Foo is cool').doesEndWith('Foo');
 *
 * @returns {object} Returns `this` value
 */
Inspect.prototype.doesEndWith = function(match, message) {
    this.validateInput('string', match, 'string');

    if (this.inspectValue.substr(this.inspectValue.length - match.length) !== match) {
        throw new ContainmentError(this,
            message || 'Input does not end with match!',
            { pos: this.inspectValue.length - match.length, len: match.length },
            match
        );
    }

    return this;
};

/**
 * Inspects whether input ends not with a specific string
 *
 * @method doesNotEndWith
 * @chainable
 *
 * @param  {string} match Match string
 * @param  {string} message Custom error message
 *
 * @example {js}
 * inspect('Foo is cool').doesNotEndWith('bar');
 *
 * @returns {object} Returns `this` value
 */
Inspect.prototype.doesNotEndWith = function(match, message) {
    this.validateInput('string', match, 'string');

    if (this.inspectValue.substr(this.inspectValue.length - match.length) === match) {
        throw new InspectionError(message || ('Input ends with match, but it should not!'));
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
Inspect.prototype.isGreaterThan = function(num, message) {
    this.validateInput('number', num, 'number');

    if (this.inspectValue <= num) {
        throw new InspectionError(message || ('Input must be greater than ' + num + '! But input is ' + this.inspectValue));
    }

    return this;
};

/**
 * Inspects whether `input` is greater than or equal to  `num`
 *
 * @method isGreaterOrEqual
 * @chainable
 *
 * @param  {number}  num  Comparison number
 * @param  {string} message Custom error message
 *
 * @example {js}
 * inspect(3).isGreaterOrEqual(3);
 *
 * @returns {object} Returns `this` value
 */
Inspect.prototype.isGreaterOrEqual = function(num, message) {
    this.validateInput('number', num, 'number');
    if (this.inspectValue < num) {
        throw new InspectionError(message || ('Input must be greater than or equal ' + num + '! But input is ' + this.inspectValue));
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
 * inspect(3).isLesserThan(4);
 *
 * @returns {object} Returns `this` value
 */
Inspect.prototype.isLesserThan = function(num, message) {
    this.validateInput('number', num, 'number');
    if (this.inspectValue >= num) {
        throw new InspectionError(message || ('Input must be lesser than ' + num + '! But input is ' + this.inspectValue));
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
Inspect.prototype.isLesserOrEqual = function(num, message) {
    this.validateInput('number', num, 'number');
    if (this.inspectValue > num) {
        throw new InspectionError(message || ('Input must be lesser than or equal ' + num + '! But input is ' + this.inspectValue));
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
Inspect.prototype.hasKey = function(key, message) {
    this.validateInput('obj-types', key, 'string');
    if (!utils.hasKeys(this.inspectValue, [key])) {
        throw new InspectionError(message || ('Input does not have any ' + key + ' property'));
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
Inspect.prototype.hasNotKey = function(key, message) {
    this.validateInput('obj-types', key, 'string');
    if (utils.hasKeys(this.inspectValue, [key])) {
        throw new InspectionError(message || ('Input does have a ' + key + ' property, but it should not!'));
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
Inspect.prototype.hasKeys = function(keys, message) {
    this.validateInput('obj-types', keys, 'array');
    if (!utils.hasKeys(this.inspectValue, keys)) {
        throw new InspectionError(message || ('Input does not have any `' + keys.join('` `') + '` property'));
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
Inspect.prototype.hasNotKeys = function(keys, message) {
    this.validateInput('obj-types', keys, 'array');
    if (utils.hasKeys(this.inspectValue, keys)) {
        throw new InspectionError(message || ('Input does not have any `' + keys.join('` `') + '` property'));
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
Inspect.prototype.hasAnyKeys = function(keys, message) {
    this.validateInput('obj-types', keys, 'array');
    if (!utils.hasAnyKeys(this.inspectValue, keys)) {
        throw new InspectionError(message || ('Input does not have any of this keys `' + keys.join('` `') + '` property'));
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
Inspect.prototype.hasNotAnyKeys = function(keys, message) {
    this.validateInput('obj-types', keys, 'array');
    if (utils.hasAnyKeys(this.inspectValue, keys)) {
        throw new InspectionError(message || ('Input has any of this keys `' + keys.join(', ') + '` properties, but it shoud has none of them!'));
    }

    return this;
};

/**
 * Inspects whether `input` has all of this properties
 *
 * @method hasProps
 * @chainable
 *
 * @param  {object}  props  props array
 * @param  {string} message Custom error message
 *
 * @example {js}
 * inspect({
 *     foo: true,
 *     bar: true
 * }).hasProps(['foo', 'bar']);
 *
 * @returns {object} Returns `this` value
 */
Inspect.prototype.hasProps = function(props, message) {
    this.validateInput('obj-types', props, 'object');
    if (!utils.hasProps(this.inspectValue, props)) {
        throw new ComparisonError(this, message || ('Property comparison failed!'),
            this.inspectValue,
            props
        );
    }

    return this;
};

/**
 * Inspects whether `input` has a property with a specified value
 *
 * @method hasProp
 * @chainable
 *
 * @param  {object}  props  props array
 * @param  {string} message Custom error message
 *
 * @example {js}
 * inspect({
 *     foo: true,
 *     bar: true
 * }).hasProp('foo', true);
 *
 * @returns {object} Returns `this` value
 */
Inspect.prototype.hasProp = function(key, value, message) {
    this.validateInput('obj-types', key, 'string', value, 'any');
    if (!utils.hasDeepKey(this.inspectValue, key)) {
        throw new InspectionError(message || 'Input has no `' + key + '` property!');
    }

    if (!utils.hasDeepProp(this.inspectValue, key, value)) {
        throw new ComparisonError(this, message || ('Property comparison failed!'), utils.undotify(this.inspectValue, key), value);
    }

    return this;
};

/**
 * Inspects whether `input` has not a property with a specified value
 *
 * @method hasNotProp
 * @chainable
 *
 * @param  {object}  props  props array
 * @param  {string} message Custom error message
 *
 * @example {js}
 * inspect({
 *     foo: true,
 *     bar: true
 * }).hasNotProp('foo', true);
 *
 * @returns {object} Returns `this` value
 */
Inspect.prototype.hasNotProp = function(key, value, message) {
    this.validateInput('obj-types', key, 'string', value, 'any');
    var prop = utils.hasDeepKey(this.inspectValue, key);
    if (prop && utils.hasDeepProp(this.inspectValue, key, value)) {
        throw new ComparisonError(this, message || ('Property comparison failed!'), utils.undotify(this.inspectValue, key), value);
    }

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
Inspect.prototype.hasLength = function(len, message) {
    this.validateInput('array,string', len, 'number');
    if (this.inspectValue.length !== len) {
        throw new InspectionError(message || ('Input should have a length of ' + len + ' but it has a length of ' + this.inspectValue.length));
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
Inspect.prototype.hasMinLength = function(len, message) {
    this.validateInput('array,string', len, 'number');
    if (this.inspectValue.length < len) {
        throw new InspectionError(message || ('Input should have a minimum length of ' + len + ' but it has a length of ' + this.inspectValue.length));
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
Inspect.prototype.hasMaxLength = function(len, message) {
    this.validateInput('array,string', len, 'number');
    if (this.inspectValue.length > len) {
        throw new InspectionError(message || ('Input should have a maximum length of ' + len + ' but it has a length of ' + this.inspectValue.length));
    }

    return this;
};

/**
 * Inspects whether an array has a specific value
 *
 * @method hasValue
 * @chainable
 *
 * @param  {any}  arg  description
 * @param  {string} message Custom error message
 *
 * @returns {object} Returns `this` value
 */
Inspect.prototype.hasValue = function(value, message) {
    this.validateInput('array', value, 'any');
    if (!utils.hasValues(this.inspectValue, [value])) {
        throw new ComparisonError(this, message || 'Input has not all of these value!', this.inspectValue, value);
    }

    return this;
};

/**
 * Inspects whether an array has not a specific value
 *
 * @method hasNotValue
 * @chainable
 *
 * @param  {any}  arg  description
 * @param  {string} message Custom error message
 *
 * @returns {object} Returns `this` value
 */
Inspect.prototype.hasNotValue = function(value, message) {
    this.validateInput('array', value, 'any');
    if (utils.hasValues(this.inspectValue, [value])) {
        throw new ComparisonError(this, message || 'Input has not all of these value!', this.inspectValue, value);
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
Inspect.prototype.hasValues = function(values, message) {
    this.validateInput('array', values, 'array');
    if (!utils.hasValues(this.inspectValue, values)) {
        throw new ComparisonError(this, message || 'Input has not all of these values!', this.inspectValue, values);
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
Inspect.prototype.hasNotValues = function(values, message) {
    this.validateInput('array', values, 'array');
    if (utils.hasValues(this.inspectValue, values)) {
        throw new ComparisonError(this, message || 'Input has any of these values, but it shoud have none of them!', this.inspectValue, values);
    }

    return this;
};

/**
 * Inspects whether an array has any of these values
 *
 * @method hasAnyValues
 * @chainable
 *
 * @param  {array}  values  Haystack values
 * @param  {string} message Custom error message
 *
 * @returns {object} Returns `this` value
 */
Inspect.prototype.hasAnyValues = function(values, message) {
    this.validateInput('array', values, 'array');
    if (!utils.hasAnyValues(this.inspectValue, values)) {
        throw new ComparisonError(this, message || 'Input has not any of these values!', this.inspectValue, values);
    }

    return this;
};
/**
 * Inspects whether an array has not any of these values
 *
 * @method hasNotAnyValues
 * @chainable
 *
 * @param  {array}  values  Haystack values
 * @param  {string} message Custom error message
 *
 * @returns {object} Returns `this` value
 */
Inspect.prototype.hasNotAnyValues = function(values, message) {
    this.validateInput('array', values, 'array');
    if (utils.hasAnyValues(this.inspectValue, values)) {
        throw new ComparisonError(this, message || 'Input has not any of these values!', this.inspectValue, values);
    }

    return this;
};

/**
 * Inspects whether a number is within a specivic range
 *
 * @method isWithin
 * @chainable
 *
 * @param  {number}  min  Min value
 * @param  {number}  max  Max value
 * @param  {string} message Custom error message
 *
 * @returns {object} Returns `this` value
 */
Inspect.prototype.isWithin = function(min, max, message) {
    this.validateInput('number', min, 'number', max, 'number');

    var a = Math.min(min, max);
    var b = Math.max(min, max);

    if (this.inspectValue < a || this.inspectValue > b) {
        throw new InspectionError(message || 'Input must be within ' + a + ', and ' + b + '. But current value is ' + this.inspectValue + '!');
    }

    return this;
};

/**
 * Inspects whether a number is not within a specivic range
 *
 * @method isNotWithin
 * @chainable
 *
 * @param  {number}  min  Min value
 * @param  {number}  max  Max value
 * @param  {string} message Custom error message
 *
 * @returns {object} Returns `this` value
 */
Inspect.prototype.isNotWithin = function(min, max, message) {
    this.validateInput('number', min, 'number', max, 'number');

    var a = Math.min(min, max);
    var b = Math.max(min, max);

    if (this.inspectValue > a && this.inspectValue < b) {
        throw new InspectionError(message || 'Input should not be within ' + a + ', and ' + b + '. But current value is ' + this.inspectValue + '!');
    }

    return this;
};

/**
 * Inspects whether a function throws an exception
 *
 * @method doesThrow
 * @chainable
 *
 * @param  {string|regexp}  [exception] Specific error exception
 * @param  {string} message Custom error message
 *
 * @returns {object} Returns `this` value
 */
Inspect.prototype.doesThrow = function(exception, message) {
    if (!this.funcCallError) {
        throw new InspectionError(message || 'Input should throw an error, but error wasn\'t thrown!');
    }

    var type = utils.getTypeOf(exception);
    if (type === 'string') {
        if (this.funcCallError.message !== exception) {
            throw new InspectionError(message || 'Input should throw an `' + exception + '` error!', exception, this.funcCallError.message);
        }
    }
    else if (type === 'regexp') {
        if (!exception.test(this.funcCallError.message)) {
            throw new InspectionError(message || 'Input should throw an `' + exception + '` error!', exception, this.funcCallError.message);
        }
    }

    return this;
};

/**
 * Inspects whether a function does not throw an exception
 *
 * @method doesNotThrow
 * @chainable
 *
 * @param  {string|regexp}  [exception] Specific error exception
 * @param  {string} [message] Custom error message
 *
 * @returns {object} Returns `this` value
 */
Inspect.prototype.doesNotThrow = function(exception, message) {
    if (!exception && this.funcCallError) {
        throw new InspectionError(message || 'Input should not throw an error, but `' + exception + '` was thrown!');
    }

    if (exception && this.funcCallError) {
        var type = utils.getTypeOf(exception);
        if (type === 'string') {
            if (this.funcCallError.message === exception) {
                throw new InspectionError(message || 'Input should not throw an `' + exception + '` error, but it has!', exception, this.funcCallError.message);
            }
        }
        else if (type === 'regexp') {
            if (exception.test(this.funcCallError.message)) {
                throw new InspectionError(message || 'Input should not throw an `' + exception + '` error, but it has!', exception, this.funcCallError.message);
            }
        }
    }

    return this;
};

/**
 * Inspects whether a string contains a specific value
 *
 * @method doesContain
 * @chainable
 *
 * @param  {string}  str  description
 * @param  {string} message Custom error message
 *
 * @returns {object} Returns `this` value
 */
Inspect.prototype.doesContain = function(str, message) {
    this.validateInput('string', str, 'string');

    if (this.inspectValue.indexOf(str) === -1) {
        throw new InspectionError(message || ('Input does not contain `' + str + '`!'));
    }

    return this;
};

/**
 * Inspects whether a string does not contains a specific value
 *
 * @method doesNotContain
 * @chainable
 *
 * @param  {string}  str  description
 * @param  {string} message Custom error message
 *
 * @returns {object} Returns `this` value
 */
Inspect.prototype.doesNotContain = function(str, message) {
    this.validateInput('string', str, 'string');

    if (this.inspectValue.indexOf(str) !== -1) {
        throw new InspectionError(message || ('Input should not contain `' + str + '`, but it was found!'));
    }

    return this;
};

/**
 * Inspects whether a string contains a specific value only once
 *
 * @method doesContainOnce
 * @chainable
 *
 * @param  {string}  str  description
 * @param  {string} message Custom error message
 *
 * @returns {object} Returns `this` value
 */
Inspect.prototype.doesContainOnce = function(str, message) {
    this.validateInput('string', str, 'string');

    var reg = new RegExp(str.replace(/[\/\\.+*?\(\[\{\}\]\)-]/g, '\\$&'), 'g');
    var match = this.inspectValue.match(reg);
    if (!match) {
        throw new InspectionError(message || ('Input does not contain `' + str + '`!'));
    }

    if (match.length > 1) {
      throw new InspectionError(message || ('Input does contain `str` ' + match.length + ' times, but it should contain `str` only once a time!'));
    }

    return this;
};

/**
 * Inspects whether an array contains a subset of an array in the same order
 *
 * @method hasSubset
 * @chainable
 *
 * @param  {array}  subset  Search for subset
 * @param  {string} message Custom error message
 *
 * @returns {object} Returns `this` value
 */
Inspect.prototype.hasSubset = function(subset, message) {
    this.validateInput('array', subset, 'array');

    if (!utils.hasSubset(this.inspectValue, subset)) {
        throw new InspectionError(message || ('Input should contain a subset, but it was not found!'));
    }

    return this;
};

/**
 * Inspects whether an array does not contains a subset of an array in the same order
 *
 * @method hasNotSubset
 * @chainable
 *
 * @param  {array}  subset  Search for subset
 * @param  {string} message Custom error message
 *
 * @returns {object} Returns `this` value
 */
Inspect.prototype.hasNotSubset = function(subset, message) {
    this.validateInput('array', subset, 'array');

    if (utils.hasSubset(this.inspectValue, subset)) {
        throw new InspectionError(message || ('Input should not contain a subset, but it has!'));
    }

    return this;
};

/**
 * Inspects whether an function call increases a property
 *
 * @method doesIncrease
 * @chainable
 *
 * @param  {obj} prop The property who should be changed
 * @param  {string} prop The property who should be changed
 * @param  {num} [num] Increase amount
 * @param  {string} message Custom error message
 *
 * @example {js}
 * var obj = { num: 1 };
 * var fn = function() {
 *     obj.num++;
 * };
 *
 * inspect(obj).onCall(fn).doesIncrease('foo', 2);
 *
 * @returns {object} Returns `this` value
 */
Inspect.prototype.doesIncrease = function(prop, num, message) {
    this.validateInput('object', prop, 'string');

    if (utils.isUndefined(this.inspectValueBefore)) {
        throw new InputError('This method works only together with onCall! The onCall method must be called before!');
    }

    if (isNaN(num)) {
        message = num;
        num = null;
    }

    var a = utils.undotify(this.inspectValueBefore, prop);
    var b = utils.undotify(this.inspectValue, prop);

    if (num) {
        if ((a + num) !== b) {
            throw new ComparisonError(this, message || ('Input should be increased by ' + num + '!'), b, a + num);
        }
    }
    else if (a >= b) {
        throw new ComparisonError(this, message || ('Input should be increased!'), b, a + 1);
    }

    return this;
};

/**
 * Inspects whether an function call decreases a property
 *
 * @method doesDecrease
 * @chainable
 *
 * @param  {string} prop The property who should be changed
 * @param  {num} [num] Increase amount
 * @param  {string} message Custom error message
 *
 * @example {js}
 * var obj = { num: 1 };
 * var fn = function() {
 *     obj.num++;
 * };
 *
 * inspect(obj).onCall(fn).doesIncrease('foo', 2);
 *
 * @returns {object} Returns `this` value
 */
Inspect.prototype.doesDecrease = function(prop, num, message) {
    this.validateInput('object', prop, 'string');

    if (utils.isUndefined(this.inspectValueBefore)) {
        throw new InputError('This method works only together with onCall! The onCall method must be called before!');
    }

    if (isNaN(num)) {
        message = num;
        num = null;
    }

    var a = utils.undotify(this.inspectValueBefore, prop);
    var b = utils.undotify(this.inspectValue, prop);

    if (num) {
        if (a - num !== b) {
            throw new ComparisonError(this, message || ('Input should be increased by ' + num + '!'), b, a - num);
        }
    }
    else if (a <= b) {
        throw new ComparisonError(this, message || ('Input should be increased!'), b, a - 1);
    }

    return this;
};

/**
 * Inspects whether an function call changes a property
 *
 * @method doesChange
 * @chainable
 *
 * @param  {obj} prop The property who should be changed
 * @param  {string} prop The property who should be changed
 * @param  {string} message Custom error message
 *
 * @example {js}
 * var obj = { foo: '' };
 * var fn = function() {
 *     obj.foo = 'bar';
 * };
 *
 * inspect(obj).onCall(fn).doesChange('foo');
 *
 * @returns {object} Returns `this` value
 */
Inspect.prototype.doesChange = function(prop, message) {
    this.validateInput('object', prop, 'string');

    if (utils.isUndefined(this.inspectValueBefore)) {
        throw new InputError('This method works only together with onCall! The onCall method must be called before!');
    }

    var a = utils.undotify(this.inspectValueBefore, prop);
    var b = utils.undotify(this.inspectValue, prop);

    if (utils.compareValues(a, b)) {
        throw new ComparisonError(this, message || ('Property `' + prop + '` should be changed!'));
    }

    return this;
};

/**
 * Inspects whether an function call changes a property
 *
 * @method doesNotChange
 * @chainable
 *
 * @param  {obj} prop The property who should be changed
 * @param  {string} prop The property who should be changed
 * @param  {string} message Custom error message
 *
 * @example {js}
 * var obj = { foo: '' };
 * var fn = function() {
 *     obj.otherfoo = 'bar';
 * };
 *
 * inspect(obj).onCall(fn).doesNotChange('foo');
 *
 * @returns {object} Returns `this` value
 */
Inspect.prototype.doesNotChange = function(prop, message) {
    this.validateInput('object', prop, 'string');

    if (utils.isUndefined(this.inspectValueBefore)) {
        throw new InputError('This method works only together with onCall! The onCall method must be called before!');
    }

    var a = utils.undotify(this.inspectValueBefore, prop);
    var b = utils.undotify(this.inspectValue, prop);

    if (!utils.compareValues(a, b)) {
        throw new ComparisonError(this, message || ('Property `' + prop + '` should be changed!'), b, a);
    }

    return this;
};

/**
 * Inspects whether an function call does not change a property
 *
 * @method doesNotChange
 * @chainable
 *
 * @param  {obj} prop The property who should be changed
 * @param  {string} prop The property who should be changed
 * @param  {string} message Custom error message
 *
 * @example {js}
 * var obj = { foo: '' };
 * var fn = function() {
 *     obj.otherFoo = 'bar';
 * };
 *
 * inspect(obj).onCall(fn).doesNotChange('foo');
 *
 * @returns {object} Returns `this` value
 */
Inspect.prototype.doesNotIncrease = function(prop, message) {
    this.validateInput('object', prop, 'string');

    if (utils.isUndefined(this.inspectValueBefore)) {
        throw new InputError('This method works only together with onCall! The onCall method must be called before!');
    }

    var a = utils.undotify(this.inspectValueBefore, prop);
    var b = utils.undotify(this.inspectValue, prop);

    if (!utils.compareValues(a, b)) {
        throw new ComparisonError(this, message || ('Property `' + prop + '` should not be changed!'), b, a);
    }

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
        throw new InspectionError(message || ('Input is not within the allowed range!'));
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
        throw new InspectionError(message || ('Input is not outside of the allowed range!'));
    }

    return this;
};

/**
 * Cals a function
 *
 * @method onCall
 * @param  {function}  fn  Caller function
 */
Inspect.prototype.onCall = function(fn) {
    if (fn) {
        this.inspectValueBefore = utils.clone(this.inspectValue);
    }

    var args = Array.prototype.slice.call(arguments, 1);
    this.callInputAsFunction(fn, null, args);
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
        throw new InspectionError('Could not call `input` as a function. Input is type of ' + type + '!');
    }

    var args = Array.prototype.slice.call(arguments);
    this.callInputAsFunction(null, null, args);
    return this;
};

/**
 * Calls input as a function with args
 *
 * @method withArgs
 * @param  {object}  ctx  Call function on context
 * @param  {any}  args...  Call with args
 */
Inspect.prototype.withArgsOn = function(ctx) {
    var type = utils.getTypeOf(this.inspectValue);
    if (typeof this.inspectValue !== 'function') {
        throw new InspectionError('Could not call `input` as a function. Input is type of ' + type + '!');
    }

    var args = Array.prototype.slice.call(arguments, 1);
    this.callInputAsFunction(null, ctx, args);
    return this;
};

/**
 * Converts a value in a readable value
 *
 * @method toString
 * @param  {any}  value The value to be converted
 */
Inspect.prototype.toString = function(value) {
    if (arguments.length === 0) {
        value = this.inspectValue;
    }

    var type = utils.getTypeOf(value);

    return '[' + type + ']';
};

/**
 * Validates input values.
 *
 * Throws an InputError if validation fails!
 *
 * @method validateInput
 * @private
 *
 * @param  {string}  inputTypes  Types for input value
 * @param  {any}  value  The value
 * @param  {string}  valueTypes  Types for the  value
 */
Inspect.prototype.validateInput = function(inputTypes, value, valueTypes) {
    if (!utils.isAny(this.inspectValue, inputTypes)) {
        throw new InputError(this, 'Input is invalid! Input must be ' + this.getTypeNames(inputTypes));
    }

    if (arguments.length >= 2 && !utils.isAny(value, valueTypes)) {
        throw new InputError(this, 'First value is invalid! Value must be ' + this.getTypeNames(valueTypes));
    }

    if (arguments.length >= 4 && !utils.isAny(arguments[3], arguments[4])) {
        throw new InputError(this, 'Second value is invalid! Value must be ' + this.getTypeNames(valueTypes));
    }
};

/**
 * Converts type names into a readable string
 *
 * @method getTypeNames
 * @private
 *
 * @param  {string|array}  types  Type names
 *
 * @returns {string} Returns a readable type names string.
 */
Inspect.prototype.getTypeNames = function(types) {
    if (typeof types === 'string') {
        types = types.split(',').map(function(s) {
            return s.replace(/^\s+|\s+$/g, '');
        });
    }

    var str;
    if (types.length === 1) {
        str = /^[aeiou]/i.test(types[0]) ? 'an ' : 'a ';
    }
    else {
        str = 'one of `';
    }

    str += types.join('` `', types);
    str += '`';

    return str;
};

/**
 * Calls input as a function if it is a function
 *
 * @method callInputAsFunction
 * @param  {object}  thisValue  This value
 */
Inspect.prototype.callInputAsFunction = function(fn, ctx, args) {
    fn = fn || this.inspectValue;

    var type = utils.getTypeOf(fn);
    if (type !== 'function') {
        throw new InputError('Can\'t call input as a function. Input value is ' + this.getTypeNames(type));
    }

    try {
        this.funcCallResult = fn.apply(ctx, args);
    }
    catch (err) {
        this.funcCallError = err;
    }

    return this;
};

module.exports = function(value) {

    return new Inspect(value);
};



/**
 * Prints a string to the console
 *
 * @method print
 * @static
 * @param  {string}  str  Print str to console
 */
module.exports.print = function(str) {
    if (str === null) {
        str = '[Null]';
    }

    if (str === undefined) {
        str = '[Undefined]';
    }

    if (typeof str === 'object') {
        str = JSON.stringify(str, null, '  ');
    }

    str = str.split(/\n/g);
    var fillLen = String(str.length).length;

    str.forEach(function(line, index) {
        var nr = ('      ' + String(index + 1)).slice(-fillLen);
        console.log(nr + ' | ' + line);
    });
};

/**
 * Let fail a test
 *
 * @method fail
 *
 * @param  {string} message  Error message
 * @param  {any} actual   Current value
 * @param  {expected} expected Expected value
 */
module.exports.fail = function(message, actual, expected) {
    throw new InspectionError(message, actual, expected);
};

/**
 * [description]
 *
 * @method method_name
 * @param  {type}  arg  description
 */
module.exports.useSinon = function(sinon) {
    var sinonInspect = require('./lib/sinonInspect');
    sinonInspect(Inspect, sinon);
};
