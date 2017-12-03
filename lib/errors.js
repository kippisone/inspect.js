'use strict';

var InputError = function InputError(obj, msg, actual) {
    if (arguments.length >= 3) {
        msg += '\n\nInput value is: ' + obj.toString(actual);
    }

    var err = new Error(msg);

    return err;
};

/**
 * Creates an assertion error.
 * @method AssertionError
 * @param  {object}        obj The throwing InspectionObject
 * @param  {string}        msg Error message
 *
 * @returns {object} Returns an error object
 */
var AssertionError = function AssertionError(obj, msg, actual, expected) {
    var str = '';
    var err = new Error(msg + '\n\n' + str);

    if (arguments.length === 4) {
      err.expected = expected;
      err.actual = actual;
    }

    return err;
};

module.exports.AssertionError = AssertionError;
module.exports.InputError = InputError;
