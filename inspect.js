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
Inspect.prototype.isFunction = function(arg) {
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
Inspect.prototype.isFunction = function(arg) {
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
Inspect.prototype.isGenerator = function(arg) {
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
Inspect.prototype.isGenerator = function(arg) {
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
Inspect.prototype.isPromise = function(arg) {
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
Inspect.prototype.isPromise = function(arg) {
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
Inspect.prototype.isAny = function(arg) {
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
Inspect.prototype.isAny = function(arg) {
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
Inspect.prototype.isTruthy = function(arg) {
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
Inspect.prototype.isTruthy = function(arg) {
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
Inspect.prototype.isFalsy = function(arg) {
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
Inspect.prototype.isFalsy = function(arg) {
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
Inspect.prototype.isEmpty = function(arg) {
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
Inspect.prototype.isEmpty = function(arg) {
    //TODO implement method
    return this;
};

/**
 * Inspects whether an object is an instance of a specific constructor
 *
 * @method isInstanceOf
 * @param  {Function}  constuctFn  Constructor method
 */
Inspect.prototype.isInstanceOf = function(constructFn) {
        if (!utils.isInstanceOf(constructFn)) {
                throw new InspectionError(this, 'Inspected object is not an instance of spcified constructor!');
        }

        return this;
};

/**
 * Inspects whether an object is not an instance of a specific constructor
 *
 * @method isNotInstanceOf
 * @param  {Function}  constuctFn  Constructor method
 */
Inspect.prototype.isNotInstanceOf = function(constructFn) {
        if (utils.isInstanceOf(constructFn)) {
                throw new InspectionError(this, 'Inspected object should not be an instance of specified constructor!');
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
Inspect.prototype.toMatch = function(arg) {
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
Inspect.prototype.toMatch = function(arg) {
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
Inspect.prototype.isGreaterThan = function(arg) {
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
Inspect.prototype.isGreaterThan = function(arg) {
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
Inspect.prototype.isGreaterOrEqual = function(arg) {
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
Inspect.prototype.isGreaterOrEqual = function(arg) {
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
Inspect.prototype.isLesserThan = function(arg) {
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
Inspect.prototype.isLesserThan = function(arg) {
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
Inspect.prototype.isLesserOrEqual = function(arg) {
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
Inspect.prototype.isLesserOrEqual = function(arg) {
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
Inspect.prototype.hasKey = function(arg) {
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
Inspect.prototype.hasKey = function(arg) {
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
Inspect.prototype.hasKeys = function(arg) {
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
Inspect.prototype.hasKeys = function(arg) {
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
Inspect.prototype.hasAnyKey = function(arg) {
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
Inspect.prototype.hasAnyKey = function(arg) {
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
Inspect.prototype.hasLength = function(arg) {
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
Inspect.prototype.hasLength = function(arg) {
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
Inspect.prototype.hasValues = function(arg) {
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
Inspect.prototype.hasValues = function(arg) {
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
Inspect.prototype.hasSameValues = function(arg) {
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
Inspect.prototype.hasSameValues = function(arg) {
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
Inspect.prototype.isTypeOf = function(arg) {
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
Inspect.prototype.isTypeOf = function(arg) {
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
Inspect.prototype.doesExist = function(arg) {
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
Inspect.prototype.doesExist = function(arg) {
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
Inspect.prototype.isCloseTo = function(arg) {
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
Inspect.prototype.isCloseTo = function(arg) {
    //TODO implement method
    return this;
};

module.exports = function(value) {
    return new Inspect(value);
};
