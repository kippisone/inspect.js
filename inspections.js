'use strict';

var inspect = {};

inspect.isInstanceOf = function isInstanceOf(a, b) {
    return a instanceof b;
};

/**
 * Creates an inspection error.
 * @method InspectionError
 * @param  {object}        obj The throwing InspectionObject
 * @param  {string}        msg Error message
 *
 * @returns {object} Returns an error object
 */
var InspectionError = function(obj, msg) {
    return new Error(msg);
}

var Inspect = function(input) {
    this.testObj = input;
};

/**
 * Inspects whether an object is an instance of a specific constructor
 *
 * @method toBeInstanceOf
 * @param  {Function}  constuctFn  Constructor method
 */
Inspect.prototype.toBeInstanceOf = function(constructFn) {
    if (!inspect.isInstanceOf(constructFn)) {
        throw new InspectionError(this, 'Inspected object is not an instance of spcified constructor!');
    }

    return this;
};

/**
 * Inspects whether an object is not an instance of a specific constructor
 *
 * @method notToBeInstanceOf
 * @param  {Function}  constuctFn  Constructor method
 */
Inspect.prototype.notToBeInstanceOf = function(constructFn) {
    if (inspect.isInstanceOf(constructFn)) {
        throw new InspectionError(this, 'Inspected object should not be an instance of specified constructor!');
    }

    return this;
};

/**
 * Inspects if input is a string
 *
 * @method isString
 * @param  {any}  arg  description
 */
Inspect.prototype.isString = function(arg) {
  //TODO implement method
};

/**
 * [description]
 *
 * @method isNotString
 * @param  {any}  arg  description
 */
Inspect.prototype.isNotString = function(arg) {
  //TODO implement method
};
/**
 * [description]
 *
 * @method 
 * @param  {any}  arg  description
 */
Inspect.prototype.isArray = function(arg) {
  //TODO implement method
};

/**
 * [description]
 *
 * @method 
 * @param  {any}  arg  description
 */
Inspect.prototype.isArray = function(arg) {
  //TODO implement method
};
/**
 * [description]
 *
 * @method 
 * @param  {any}  arg  description
 */
Inspect.prototype.isObject = function(arg) {
  //TODO implement method
};

/**
 * [description]
 *
 * @method 
 * @param  {any}  arg  description
 */
Inspect.prototype.isObject = function(arg) {
  //TODO implement method
};
/**
 * [description]
 *
 * @method 
 * @param  {any}  arg  description
 */
Inspect.prototype.isNull = function(arg) {
  //TODO implement method
};

/**
 * [description]
 *
 * @method 
 * @param  {any}  arg  description
 */
Inspect.prototype.isNull = function(arg) {
  //TODO implement method
};
/**
 * [description]
 *
 * @method 
 * @param  {any}  arg  description
 */
Inspect.prototype.isBoolean = function(arg) {
  //TODO implement method
};

/**
 * [description]
 *
 * @method 
 * @param  {any}  arg  description
 */
Inspect.prototype.isBoolean = function(arg) {
  //TODO implement method
};
/**
 * [description]
 *
 * @method 
 * @param  {any}  arg  description
 */
Inspect.prototype.isUndefined = function(arg) {
  //TODO implement method
};

/**
 * [description]
 *
 * @method 
 * @param  {any}  arg  description
 */
Inspect.prototype.isUndefined = function(arg) {
  //TODO implement method
};
/**
 * [description]
 *
 * @method 
 * @param  {any}  arg  description
 */
Inspect.prototype.isTrue = function(arg) {
  //TODO implement method
};

/**
 * [description]
 *
 * @method 
 * @param  {any}  arg  description
 */
Inspect.prototype.isTrue = function(arg) {
  //TODO implement method
};
/**
 * [description]
 *
 * @method 
 * @param  {any}  arg  description
 */
Inspect.prototype.isFalse = function(arg) {
  //TODO implement method
};

/**
 * [description]
 *
 * @method 
 * @param  {any}  arg  description
 */
Inspect.prototype.isFalse = function(arg) {
  //TODO implement method
};
/**
 * [description]
 *
 * @method 
 * @param  {any}  arg  description
 */
Inspect.prototype.isRegExp = function(arg) {
  //TODO implement method
};

/**
 * [description]
 *
 * @method 
 * @param  {any}  arg  description
 */
Inspect.prototype.isRegExp = function(arg) {
  //TODO implement method
};
/**
 * [description]
 *
 * @method 
 * @param  {any}  arg  description
 */
Inspect.prototype.isNumber = function(arg) {
  //TODO implement method
};

/**
 * [description]
 *
 * @method 
 * @param  {any}  arg  description
 */
Inspect.prototype.isNumber = function(arg) {
  //TODO implement method
};
/**
 * [description]
 *
 * @method 
 * @param  {any}  arg  description
 */
Inspect.prototype.isNaN = function(arg) {
  //TODO implement method
};

/**
 * [description]
 *
 * @method 
 * @param  {any}  arg  description
 */
Inspect.prototype.isNaN = function(arg) {
  //TODO implement method
};
/**
 * [description]
 *
 * @method 
 * @param  {any}  arg  description
 */
Inspect.prototype.isClass = function(arg) {
  //TODO implement method
};

/**
 * [description]
 *
 * @method 
 * @param  {any}  arg  description
 */
Inspect.prototype.isClass = function(arg) {
  //TODO implement method
};
/**
 * [description]
 *
 * @method 
 * @param  {any}  arg  description
 */
Inspect.prototype.isFunction = function(arg) {
  //TODO implement method
};

/**
 * [description]
 *
 * @method 
 * @param  {any}  arg  description
 */
Inspect.prototype.isFunction = function(arg) {
  //TODO implement method
};
/**
 * [description]
 *
 * @method 
 * @param  {any}  arg  description
 */
Inspect.prototype.isGenerator = function(arg) {
  //TODO implement method
};

/**
 * [description]
 *
 * @method 
 * @param  {any}  arg  description
 */
Inspect.prototype.isGenerator = function(arg) {
  //TODO implement method
};
/**
 * [description]
 *
 * @method 
 * @param  {any}  arg  description
 */
Inspect.prototype.isPromise = function(arg) {
  //TODO implement method
};

/**
 * [description]
 *
 * @method 
 * @param  {any}  arg  description
 */
Inspect.prototype.isPromise = function(arg) {
  //TODO implement method
};
/**
 * [description]
 *
 * @method 
 * @param  {any}  arg  description
 */
Inspect.prototype.isAny = function(arg) {
  //TODO implement method
};

/**
 * [description]
 *
 * @method 
 * @param  {any}  arg  description
 */
Inspect.prototype.isAny = function(arg) {
  //TODO implement method
};
/**
 * [description]
 *
 * @method 
 * @param  {any}  arg  description
 */
Inspect.prototype.isTruthy = function(arg) {
  //TODO implement method
};

/**
 * [description]
 *
 * @method 
 * @param  {any}  arg  description
 */
Inspect.prototype.isTruthy = function(arg) {
  //TODO implement method
};
/**
 * [description]
 *
 * @method 
 * @param  {any}  arg  description
 */
Inspect.prototype.isFalsy = function(arg) {
  //TODO implement method
};

/**
 * [description]
 *
 * @method 
 * @param  {any}  arg  description
 */
Inspect.prototype.isFalsy = function(arg) {
  //TODO implement method
};
/**
 * [description]
 *
 * @method 
 * @param  {any}  arg  description
 */
Inspect.prototype.isEmpty = function(arg) {
  //TODO implement method
};

/**
 * [description]
 *
 * @method 
 * @param  {any}  arg  description
 */
Inspect.prototype.isEmpty = function(arg) {
  //TODO implement method
};
/**
 * [description]
 *
 * @method 
 * @param  {any}  arg  description
 */
Inspect.prototype.toMatch = function(arg) {
  //TODO implement method
};

/**
 * [description]
 *
 * @method 
 * @param  {any}  arg  description
 */
Inspect.prototype.toMatch = function(arg) {
  //TODO implement method
};
/**
 * [description]
 *
 * @method 
 * @param  {any}  arg  description
 */
Inspect.prototype.isGreaterThan = function(arg) {
  //TODO implement method
};

/**
 * [description]
 *
 * @method 
 * @param  {any}  arg  description
 */
Inspect.prototype.isGreaterThan = function(arg) {
  //TODO implement method
};
/**
 * [description]
 *
 * @method 
 * @param  {any}  arg  description
 */
Inspect.prototype.isGreaterOrEqual = function(arg) {
  //TODO implement method
};

/**
 * [description]
 *
 * @method 
 * @param  {any}  arg  description
 */
Inspect.prototype.isGreaterOrEqual = function(arg) {
  //TODO implement method
};
/**
 * [description]
 *
 * @method 
 * @param  {any}  arg  description
 */
Inspect.prototype.isLesserThan = function(arg) {
  //TODO implement method
};

/**
 * [description]
 *
 * @method 
 * @param  {any}  arg  description
 */
Inspect.prototype.isLesserThan = function(arg) {
  //TODO implement method
};
/**
 * [description]
 *
 * @method 
 * @param  {any}  arg  description
 */
Inspect.prototype.isLesserOrEqual = function(arg) {
  //TODO implement method
};

/**
 * [description]
 *
 * @method 
 * @param  {any}  arg  description
 */
Inspect.prototype.isLesserOrEqual = function(arg) {
  //TODO implement method
};
/**
 * [description]
 *
 * @method 
 * @param  {any}  arg  description
 */
Inspect.prototype.hasKey = function(arg) {
  //TODO implement method
};

/**
 * [description]
 *
 * @method 
 * @param  {any}  arg  description
 */
Inspect.prototype.hasKey = function(arg) {
  //TODO implement method
};
/**
 * [description]
 *
 * @method 
 * @param  {any}  arg  description
 */
Inspect.prototype.hasKeys = function(arg) {
  //TODO implement method
};

/**
 * [description]
 *
 * @method 
 * @param  {any}  arg  description
 */
Inspect.prototype.hasKeys = function(arg) {
  //TODO implement method
};
/**
 * [description]
 *
 * @method 
 * @param  {any}  arg  description
 */
Inspect.prototype.hasAnyKey = function(arg) {
  //TODO implement method
};

/**
 * [description]
 *
 * @method 
 * @param  {any}  arg  description
 */
Inspect.prototype.hasAnyKey = function(arg) {
  //TODO implement method
};
/**
 * [description]
 *
 * @method 
 * @param  {any}  arg  description
 */
Inspect.prototype.hasProperties = function(arg) {
  //TODO implement method
};

/**
 * [description]
 *
 * @method 
 * @param  {any}  arg  description
 */
Inspect.prototype.hasProperties = function(arg) {
  //TODO implement method
};
/**
 * [description]
 *
 * @method 
 * @param  {any}  arg  description
 */
Inspect.prototype.hasOwnProperties = function(arg) {
  //TODO implement method
};

/**
 * [description]
 *
 * @method 
 * @param  {any}  arg  description
 */
Inspect.prototype.hasOwnProperties = function(arg) {
  //TODO implement method
};
/**
 * [description]
 *
 * @method 
 * @param  {any}  arg  description
 */
Inspect.prototype.hasProperty = function(arg) {
  //TODO implement method
};

/**
 * [description]
 *
 * @method 
 * @param  {any}  arg  description
 */
Inspect.prototype.hasProperty = function(arg) {
  //TODO implement method
};
/**
 * [description]
 *
 * @method 
 * @param  {any}  arg  description
 */
Inspect.prototype.hasOwnProperty = function(arg) {
  //TODO implement method
};

/**
 * [description]
 *
 * @method 
 * @param  {any}  arg  description
 */
Inspect.prototype.hasOwnProperty = function(arg) {
  //TODO implement method
};
/**
 * [description]
 *
 * @method 
 * @param  {any}  arg  description
 */
Inspect.prototype.hasLength = function(arg) {
  //TODO implement method
};

/**
 * [description]
 *
 * @method 
 * @param  {any}  arg  description
 */
Inspect.prototype.hasLength = function(arg) {
  //TODO implement method
};
/**
 * [description]
 *
 * @method 
 * @param  {any}  arg  description
 */
Inspect.prototype.hasValues = function(arg) {
  //TODO implement method
};

/**
 * [description]
 *
 * @method 
 * @param  {any}  arg  description
 */
Inspect.prototype.hasValues = function(arg) {
  //TODO implement method
};
/**
 * [description]
 *
 * @method 
 * @param  {any}  arg  description
 */
Inspect.prototype.hasSameValues = function(arg) {
  //TODO implement method
};

/**
 * [description]
 *
 * @method 
 * @param  {any}  arg  description
 */
Inspect.prototype.hasSameValues = function(arg) {
  //TODO implement method
};
/**
 * [description]
 *
 * @method 
 * @param  {any}  arg  description
 */
Inspect.prototype.isTypeOf = function(arg) {
  //TODO implement method
};

/**
 * [description]
 *
 * @method 
 * @param  {any}  arg  description
 */
Inspect.prototype.isTypeOf = function(arg) {
  //TODO implement method
};
/**
 * [description]
 *
 * @method 
 * @param  {any}  arg  description
 */
Inspect.prototype.toChange = function(arg) {
  //TODO implement method
};

/**
 * [description]
 *
 * @method 
 * @param  {any}  arg  description
 */
Inspect.prototype.toChange = function(arg) {
  //TODO implement method
};
/**
 * [description]
 *
 * @method 
 * @param  {any}  arg  description
 */
Inspect.prototype.toIncrease = function(arg) {
  //TODO implement method
};

/**
 * [description]
 *
 * @method 
 * @param  {any}  arg  description
 */
Inspect.prototype.toIncrease = function(arg) {
  //TODO implement method
};
/**
 * [description]
 *
 * @method 
 * @param  {any}  arg  description
 */
Inspect.prototype.toDecrease = function(arg) {
  //TODO implement method
};

/**
 * [description]
 *
 * @method 
 * @param  {any}  arg  description
 */
Inspect.prototype.toDecrease = function(arg) {
  //TODO implement method
};
/**
 * [description]
 *
 * @method 
 * @param  {any}  arg  description
 */
Inspect.prototype.isWithin = function(arg) {
  //TODO implement method
};

/**
 * [description]
 *
 * @method 
 * @param  {any}  arg  description
 */
Inspect.prototype.isWithin = function(arg) {
  //TODO implement method
};
/**
 * [description]
 *
 * @method 
 * @param  {any}  arg  description
 */
Inspect.prototype.doesThrow = function(arg) {
  //TODO implement method
};

/**
 * [description]
 *
 * @method 
 * @param  {any}  arg  description
 */
Inspect.prototype.doesThrow = function(arg) {
  //TODO implement method
};
/**
 * [description]
 *
 * @method 
 * @param  {any}  arg  description
 */
Inspect.prototype.doesContain = function(arg) {
  //TODO implement method
};

/**
 * [description]
 *
 * @method 
 * @param  {any}  arg  description
 */
Inspect.prototype.doesContain = function(arg) {
  //TODO implement method
};
/**
 * [description]
 *
 * @method 
 * @param  {any}  arg  description
 */
Inspect.prototype.doesContainSubset = function(arg) {
  //TODO implement method
};

/**
 * [description]
 *
 * @method 
 * @param  {any}  arg  description
 */
Inspect.prototype.doesContainSubset = function(arg) {
  //TODO implement method
};
/**
 * [description]
 *
 * @method 
 * @param  {any}  arg  description
 */
Inspect.prototype.doesExist = function(arg) {
  //TODO implement method
};

/**
 * [description]
 *
 * @method 
 * @param  {any}  arg  description
 */
Inspect.prototype.doesExist = function(arg) {
  //TODO implement method
};
/**
 * [description]
 *
 * @method 
 * @param  {any}  arg  description
 */
Inspect.prototype.isCloseTo = function(arg) {
  //TODO implement method
};

/**
 * [description]
 *
 * @method 
 * @param  {any}  arg  description
 */
Inspect.prototype.isCloseTo = function(arg) {
  //TODO implement method
};

// toBeString
// toBeArray
// toBeObject
// toBeNull
// toBeBoolean
// toBeUndefined
// toBeTrue
// toBeFalse
// toBeRegExp
// toBeNumber
// toBeNaN
// toBeClass
// toBeFunction
// toBeGenerator
// toBePromise
// toBeAny
// toBeTruthy
// toBeFalsy
// toBeEmpty
// toMatch
// toBeGreaterThan
// toBeGreaterOrEqual
// toBeLesserThan
// toBeLesserOrEqual
// toHaveKey
// toHaveKeys
// toHaveAnyKey
// toHaveProperties
// toHaveOwnProperties
// toHaveProperty
// toHaveOwnProperty
// toHaveLength
// toHaveValues
// toHaveSameValues
// toHaveTypeOf
// toChanges
// toIncrease
// toDecrease
// toBeWithin
// toThrow
// toContain
// toContainSubset
// toExist
// toBeCloseTo
// 
// fail
// pass
// 
// 
// 
// inspect(foo).toBeString();
// inspect(foo).toBeArray();
// inspect(foo).toBeObject();
// inspect(foo).toBeNull();
// inspect(foo).toBeBoolean();
// inspect(foo).toBeUndefined();
// inspect(foo).toBeTrue();
// inspect(foo).toBeFalse();
// inspect(foo).toBeRegExp();
// inspect(foo).toBeNumber();
// inspect(foo).toBeNaN();
// inspect(foo).toBeClass();
// inspect(foo).toBeFunction();
// inspect(foo).toBeGenerator();
// inspect(foo).toBePromise();
// inspect(foo).toBeAny();
// inspect(foo).toBeTruthy();
// inspect(foo).toBeFalsy();
// inspect(foo).toBeEmpty();
// inspect(foo).toMatch();
// inspect(foo).toBeGreaterThan();
// inspect(foo).toBeGreaterOrEqual();
// inspect(foo).toBeLesserThan();
// inspect(foo).toBeLesserOrEqual();
// inspect(foo).toHaveKey();
// inspect(foo).toHaveKeys();
// inspect(foo).toHaveAnyKey();
// inspect(foo).toHaveProperties();
// inspect(foo).toHaveOwnProperties();
// inspect(foo).toHaveProperty();
// inspect(foo).toHaveOwnProperty();
// inspect(foo).toHaveLength();
// inspect(foo).toHaveValues();
// inspect(foo).toHaveSameValues();
// inspect(foo).toHaveTypeOf();
// inspect(foo).toChanges();
// inspect(foo).toIncrease();
// inspect(foo).toDecrease();
// inspect(foo).toBeWithin();
// inspect(foo).toThrow();
// inspect(foo).toContain();
// inspect(foo).toContainSubset();
// inspect(foo).toExist();
// inspect(foo).toBeCloseTo();

// inspect(foo).notToBestring();
// inspect(foo).notToBeArray();
// inspect(foo).notToBeObject();
// inspect(foo).notToBeNull();
// inspect(foo).notToBeBoolean();
// inspect(foo).notToBeUndefined();
// inspect(foo).notToBeTrue();
// inspect(foo).notToBeFalse();
// inspect(foo).notToBeRegExp();
// inspect(foo).notToBeNumber();
// inspect(foo).notToBeNaN();
// inspect(foo).notToBeClass();
// inspect(foo).notToBeFunction();
// inspect(foo).notToBeGenerator();
// inspect(foo).notToBePromise();
// inspect(foo).notToBeAny();
// inspect(foo).notToBeTruthy();
// inspect(foo).notToBeFalsy();
// inspect(foo).notToBeEmpty();
// inspect(foo).notToMatch();
// inspect(foo).notToBeGreaterThan();
// inspect(foo).notToBeGreaterOrEqual();
// inspect(foo).notToBeLesserThan();
// inspect(foo).notToBeLesserOrEqual();
// inspect(foo).notToHaveKey();
// inspect(foo).notToHaveKeys();
// inspect(foo).notToHaveAnyKey();
// inspect(foo).notToHaveProperties();
// inspect(foo).notToHaveOwnProperties();
// inspect(foo).notToHaveProperty();
// inspect(foo).notToHaveOwnProperty();
// inspect(foo).notToHaveLength();
// inspect(foo).notToHaveValues();
// inspect(foo).notToHaveSameValues();
// inspect(foo).notToHaveTypeOf();
// inspect(foo).notToChanges();
// inspect(foo).notToIncrease();
// inspect(foo).notToDecrease();
// inspect(foo).notToBeWithin();
// inspect(foo).notToThrow();
// inspect(foo).notToContain();
// inspect(foo).notToContainSubset();
// inspect(foo).notToExist();
// inspect(foo).notToBeCloseTo();


// inspect(foo).isString();
// inspect(foo).isArray();
// inspect(foo).isObject();
// inspect(foo).isNull();
// inspect(foo).isBoolean();
// inspect(foo).isUndefined();
// inspect(foo).isTrue();
// inspect(foo).isFalse();
// inspect(foo).isRegExp();
// inspect(foo).isNumber();
// inspect(foo).isNaN();
// inspect(foo).isClass();
// inspect(foo).isFunction();
// inspect(foo).isGenerator();
// inspect(foo).isPromise();
// inspect(foo).isAny();
// inspect(foo).isTruthy();
// inspect(foo).isFalsy();
// inspect(foo).isEmpty();
// inspect(foo).toMatch();
// inspect(foo).isGreaterThan();
// inspect(foo).isGreaterOrEqual();
// inspect(foo).isLesserThan();
// inspect(foo).isLesserOrEqual();
// inspect(foo).hasKey();
// inspect(foo).hasKeys();
// inspect(foo).hasAnyKey();
// inspect(foo).hasProperties();
// inspect(foo).hasOwnProperties();
// inspect(foo).hasProperty();
// inspect(foo).hasOwnProperty();
// inspect(foo).hasLength();
// inspect(foo).hasValues();
// inspect(foo).hasSameValues();
// inspect(foo).isTypeOf();
// inspect(foo).toChange();
// inspect(foo).toIncrease();
// inspect(foo).toDecrease();
// inspect(foo).isWithin();
// inspect(foo).doesThrow();
// inspect(foo).doesContain();
// inspect(foo).doesContainSubset();
// inspect(foo).doesExist();
// inspect(foo).isCloseTo();

// inspect(foo).isNotString();
// inspect(foo).isNotArray();
// inspect(foo).isNotObject();
// inspect(foo).isNotNull();
// inspect(foo).isNotBoolean();
// inspect(foo).isNotUndefined();
// inspect(foo).isNotTrue();
// inspect(foo).isNotFalse();
// inspect(foo).isNotRegExp();
// inspect(foo).isNotNumber();
// inspect(foo).isNotNaN();
// inspect(foo).isNotClass();
// inspect(foo).isNotFunction();
// inspect(foo).isNotGenerator();
// inspect(foo).isNotPromise();
// inspect(foo).isNotAny();
// inspect(foo).isNotTruthy();
// inspect(foo).isNotFalsy();
// inspect(foo).isNotEmpty();
// inspect(foo).doesMatch();
// inspect(foo).doesNotMatch();
// inspect(foo).isNotGreaterThan();
// inspect(foo).isNotGreaterOrEqual();
// inspect(foo).isNotLesserThan();
// inspect(foo).isNotLesserOrEqual();
// inspect(foo).hasNotKey();
// inspect(foo).hasNotKeys();
// inspect(foo).hasNotAnyKey();
// inspect(foo).hasNotProperties();
// inspect(foo).hasNotOwnProperties();
// inspect(foo).hasNotProperty();
// inspect(foo).hasNotOwnProperty();
// inspect(foo).hasNotLength();
// inspect(foo).hasNotValues();
// inspect(foo).hasNotSameValues();
// inspect(foo).isNotTypeOf();
// inspect(foo).doesNotChange();
// inspect(foo).doesNotIncrease();
// inspect(foo).doesNotDecrease();
// inspect(foo).isNotWithin();
// inspect(foo).doesNotThrow();
// inspect(foo).doesNotContain();
// inspect(foo).doesNotContainSubset();
// inspect(foo).doesNotExist();
// inspect(foo).isNotCloseTo();

module.exports = Inspect;

/*!

// typeof
expect('test').to.be.a('string');
expect({ foo: 'bar' }).to.be.an('object');
expect(null).to.be.a('null');
expect(undefined).to.be.an('undefined');

// language chain
expect(foo).to.be.an.instanceof(Foo);
.include(value)

@param{ Object | String | Number }obj
@param{ String }message_optional_
The include and contain assertions can be used as either property based language chains or as methods to assert the inclusion of an object in an array or a substring in a string. When used as language chains, they toggle the contains flag for the keys assertion.

expect([1,2,3]).to.include(2);
expect('foobar').to.contain('foo');
expect({ foo: 'bar', hello: 'universe' }).to.include.keys('foo');
.ok

Asserts that the target is truthy.

expect('everthing').to.be.ok;
expect(1).to.be.ok;
expect(false).to.not.be.ok;
expect(undefined).to.not.be.ok;
expect(null).to.not.be.ok;
.true

Asserts that the target is true.

expect(true).to.be.true;
expect(1).to.not.be.true;
.false

Asserts that the target is false.

expect(false).to.be.false;
expect(0).to.not.be.false;
.null

Asserts that the target is null.

expect(null).to.be.null;
expect(undefined).not.to.be.null;
.undefined

Asserts that the target is undefined.

expect(undefined).to.be.undefined;
expect(null).to.not.be.undefined;
.exist

Asserts that the target is neither null nor undefined.

var foo = 'hi'
  , bar = null
  , baz;

expect(foo).to.exist;
expect(bar).to.not.exist;
expect(baz).to.not.exist;
.empty

Asserts that the target's length is 0. For arrays, it checks the length property. For objects, it gets the count of enumerable keys.

expect([]).to.be.empty;
expect('').to.be.empty;
expect({}).to.be.empty;
.arguments

Asserts that the target is an arguments object.

function test () {
  expect(arguments).to.be.arguments;
}
.equal(value)

@param{ Mixed }value
@param{ String }message_optional_
Asserts that the target is strictly equal (===) to value. Alternately, if the deep flag is set, asserts that the target is deeply equal to value.

expect('hello').to.equal('hello');
expect(42).to.equal(42);
expect(1).to.not.equal(true);
expect({ foo: 'bar' }).to.not.equal({ foo: 'bar' });
expect({ foo: 'bar' }).to.deep.equal({ foo: 'bar' });
.eql(value)

@param{ Mixed }value
@param{ String }message_optional_
Asserts that the target is deeply equal to value.

expect({ foo: 'bar' }).to.eql({ foo: 'bar' });
expect([ 1, 2, 3 ]).to.eql([ 1, 2, 3 ]);
.above(value)

@param{ Number }value
@param{ String }message_optional_
Asserts that the target is greater than value.

expect(10).to.be.above(5);
Can also be used in conjunction with length to assert a minimum length. The benefit being a more informative error message than if the length was supplied directly.

expect('foo').to.have.length.above(2);
expect([ 1, 2, 3 ]).to.have.length.above(2);
.least(value)

@param{ Number }value
@param{ String }message_optional_
Asserts that the target is greater than or equal to value.

expect(10).to.be.at.least(10);
Can also be used in conjunction with length to assert a minimum length. The benefit being a more informative error message than if the length was supplied directly.

expect('foo').to.have.length.of.at.least(2);
expect([ 1, 2, 3 ]).to.have.length.of.at.least(3);
.below(value)

@param{ Number }value
@param{ String }message_optional_
Asserts that the target is less than value.

expect(5).to.be.below(10);
Can also be used in conjunction with length to assert a maximum length. The benefit being a more informative error message than if the length was supplied directly.

expect('foo').to.have.length.below(4);
expect([ 1, 2, 3 ]).to.have.length.below(4);
.most(value)

@param{ Number }value
@param{ String }message_optional_
Asserts that the target is less than or equal to value.

expect(5).to.be.at.most(5);
Can also be used in conjunction with length to assert a maximum length. The benefit being a more informative error message than if the length was supplied directly.

expect('foo').to.have.length.of.at.most(4);
expect([ 1, 2, 3 ]).to.have.length.of.at.most(3);
.within(start, finish)

@param{ Number }startlowerbound inclusive
@param{ Number }finishupperbound inclusive
@param{ String }message_optional_
Asserts that the target is within a range.

expect(7).to.be.within(5,10);
Can also be used in conjunction with length to assert a length range. The benefit being a more informative error message than if the length was supplied directly.

expect('foo').to.have.length.within(2,4);
expect([ 1, 2, 3 ]).to.have.length.within(2,4);
.instanceof(constructor)

@param{ Constructor }constructor
@param{ String }message_optional_
Asserts that the target is an instance of constructor.

var Tea = function (name) { this.name = name; }
  , Chai = new Tea('chai');

expect(Chai).to.be.an.instanceof(Tea);
expect([ 1, 2, 3 ]).to.be.instanceof(Array);
.property(name, [value])

@param{ String }name
@param{ Mixed }value(optional)
@param{ String }message_optional_
Asserts that the target has a property name, optionally asserting that the value of that property is strictly equal to value. If the deep flag is set, you can use dot- and bracket-notation for deep references into objects and arrays.

// simple referencing
var obj = { foo: 'bar' };
expect(obj).to.have.property('foo');
expect(obj).to.have.property('foo', 'bar');

// deep referencing
var deepObj = {
    green: { tea: 'matcha' }
  , teas: [ 'chai', 'matcha', { tea: 'konacha' } ]
};

expect(deepObj).to.have.deep.property('green.tea', 'matcha');
expect(deepObj).to.have.deep.property('teas[1]', 'matcha');
expect(deepObj).to.have.deep.property('teas[2].tea', 'konacha');
You can also use an array as the starting point of a deep.property assertion, or traverse nested arrays.

var arr = [
    [ 'chai', 'matcha', 'konacha' ]
  , [ { tea: 'chai' }
    , { tea: 'matcha' }
    , { tea: 'konacha' } ]
];

expect(arr).to.have.deep.property('[0][1]', 'matcha');
expect(arr).to.have.deep.property('[1][2].tea', 'konacha');
Furthermore, property changes the subject of the assertion to be the value of that property from the original object. This permits for further chainable assertions on that property.

expect(obj).to.have.property('foo')
  .that.is.a('string');
expect(deepObj).to.have.property('green')
  .that.is.an('object')
  .that.deep.equals({ tea: 'matcha' });
expect(deepObj).to.have.property('teas')
  .that.is.an('array')
  .with.deep.property('[2]')
    .that.deep.equals({ tea: 'konacha' });
.ownProperty(name)

@param{ String }name
@param{ String }message_optional_
Asserts that the target has an own property name.

expect('test').to.have.ownProperty('length');
.length(value)

@param{ Number }length
@param{ String }message_optional_
Asserts that the target's length property has the expected value.

expect([ 1, 2, 3]).to.have.length(3);
expect('foobar').to.have.length(6);
Can also be used as a chain precursor to a value comparison for the length property.

expect('foo').to.have.length.above(2);
expect([ 1, 2, 3 ]).to.have.length.above(2);
expect('foo').to.have.length.below(4);
expect([ 1, 2, 3 ]).to.have.length.below(4);
expect('foo').to.have.length.within(2,4);
expect([ 1, 2, 3 ]).to.have.length.within(2,4);
.match(regexp)

@param{ RegExp }RegularExpression
@param{ String }message_optional_
Asserts that the target matches a regular expression.

expect('foobar').to.match(/^foo/);
.string(string)

@param{ String }string
@param{ String }message_optional_
Asserts that the string target contains another string.

expect('foobar').to.have.string('bar');
.keys(key1, [key2], [...])

@param{ String... | Array | Object }keys
Asserts that the target contains any or all of the passed-in keys. Use in combination with any, all, contains, or have will affect what will pass.

When used in conjunction with any, at least one key that is passed in must exist in the target object. This is regardless whether or not the have or contain qualifiers are used. Note, either any or all should be used in the assertion. If neither are used, the assertion is defaulted to all.

When both all and contain are used, the target object must have at least all of the passed-in keys but may have more keys not listed.

When both all and have are used, the target object must both contain all of the passed-in keys AND the number of keys in the target object must match the number of keys passed in (in other words, a target object must have all and only all of the passed-in keys).

expect({ foo: 1, bar: 2 }).to.have.any.keys('foo', 'baz');
expect({ foo: 1, bar: 2 }).to.have.any.keys('foo');
expect({ foo: 1, bar: 2 }).to.contain.any.keys('bar', 'baz');
expect({ foo: 1, bar: 2 }).to.contain.any.keys(['foo']);
expect({ foo: 1, bar: 2 }).to.contain.any.keys({'foo': 6});
expect({ foo: 1, bar: 2 }).to.have.all.keys(['bar', 'foo']);
expect({ foo: 1, bar: 2 }).to.have.all.keys({'bar': 6, 'foo', 7});
expect({ foo: 1, bar: 2, baz: 3 }).to.contain.all.keys(['bar', 'foo']);
expect({ foo: 1, bar: 2, baz: 3 }).to.contain.all.keys([{'bar': 6}}]);
.throw(constructor)

@param{ ErrorConstructor }constructor
@param{ String | RegExp }expectederror message
@param{ String }message_optional_
@seehttps://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error#Error_types
Asserts that the function target will throw a specific error, or specific type of error (as determined using instanceof), optionally with a RegExp or string inclusion test for the error's message.

var err = new ReferenceError('This is a bad function.');
var fn = function () { throw err; }
expect(fn).to.throw(ReferenceError);
expect(fn).to.throw(Error);
expect(fn).to.throw(/bad function/);
expect(fn).to.not.throw('good function');
expect(fn).to.throw(ReferenceError, /bad function/);
expect(fn).to.throw(err);
expect(fn).to.not.throw(new RangeError('Out of range.'));
Please note that when a throw expectation is negated, it will check each parameter independently, starting with error constructor type. The appropriate way to check for the existence of a type of error but for a message that does not match is to use and.

expect(fn).to.throw(ReferenceError)
   .and.not.throw(/good function/);
.respondTo(method)

@param{ String }method
@param{ String }message_optional_
Asserts that the object or class target will respond to a method.

Klass.prototype.bar = function(){};
expect(Klass).to.respondTo('bar');
expect(obj).to.respondTo('bar');
To check if a constructor will respond to a static function, set the itself flag.

Klass.baz = function(){};
expect(Klass).itself.to.respondTo('baz');
.itself

Sets the itself flag, later used by the respondTo assertion.

function Foo() {}
Foo.bar = function() {}
Foo.prototype.baz = function() {}

expect(Foo).itself.to.respondTo('bar');
expect(Foo).itself.not.to.respondTo('baz');
.satisfy(method)

@param{ Function }matcher
@param{ String }message_optional_
Asserts that the target passes a given truth test.

expect(1).to.satisfy(function(num) { return num > 0; });
.closeTo(expected, delta)

@param{ Number }expected
@param{ Number }delta
@param{ String }message_optional_
Asserts that the target is equal expected, to within a +/- delta range.

expect(1.5).to.be.closeTo(1, 0.5);
.members(set)

@param{ Array }set
@param{ String }message_optional_
Asserts that the target is a superset of set, or that the target and set have the same strictly-equal (===) members. Alternately, if the deep flag is set, set members are compared for deep equality.

expect([1, 2, 3]).to.include.members([3, 2]);
expect([1, 2, 3]).to.not.include.members([3, 2, 8]);

expect([4, 2]).to.have.members([2, 4]);
expect([5, 2]).to.not.have.members([5, 2, 1]);

expect([{ id: 1 }]).to.deep.include.members([{ id: 1 }]);
.change(function)

@param{ String }object
@param{ String }propertyname
@param{ String }message_optional_
Asserts that a function changes an object property

var obj = { val: 10 };
var fn = function() { obj.val += 3 };
var noChangeFn = function() { return 'foo' + 'bar'; }
expect(fn).to.change(obj, 'val');
expect(noChangFn).to.not.change(obj, 'val')
.increase(function)

@param{ String }object
@param{ String }propertyname
@param{ String }message_optional_
Asserts that a function increases an object property

var obj = { val: 10 };
var fn = function() { obj.val = 15 };
expect(fn).to.increase(obj, 'val');
.decrease(function)

@param{ String }object
@param{ String }propertyname
@param{ String }message_optional_
Asserts that a function decreases an object property

var obj = { val: 10 };
var fn = function() { obj.val = 5 };
expect(fn).to.decrease(obj, 'val');

 */