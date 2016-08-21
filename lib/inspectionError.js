'use strict';

/**
 * Creates an inspection error.
 * @method InspectionError
 * @param  {string}        message Error message
 * @param  {any} [actual] Current value
 * @param  {any} [expected] Expected value
 *
 * @returns {object} Returns an error object
 */
var InspectionError = function InspectionError(message, actual, expected) {
    this.name = 'InspectionError';
    this.message = message;
    if (!this.stack) {
        this.stack = this.caller;
    }

    if (arguments.length >= 3) {
      this.expected = expected;
      this.actual = actual;
    }
};

InspectionError.prototype = Object.create(Error.prototype);
InspectionError.prototype.constructor = InspectionError;

/**
 * Sets diff mode
 *
 * @method diffMode
 * @chainable
 * @param  {string}  mode  Defines diff mode.
 * @param  {object}  [options]  Additionaly data for diff
 */
InspectionError.prototype.diffMode = function(mode, options) {
    this.diffMode = mode;
    if (options) {
        this.diffOptions = options;
    }

    return this;
};

InspectionError.prototype.setStack = function(stack) {
    this.stack = stack;
    return this;
}

module.exports = InspectionError;
