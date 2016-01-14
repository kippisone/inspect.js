'use strict';

/**
 * Creates an inspection error.
 * @method InspectionError
 * @param  {object}        obj The throwing InspectionObject
 * @param  {string}        msg Error message
 *
 * @returns {object} Returns an error object
 */
var InspectionError = function InspectionError(obj, msg, actual, expected) {
    var err = new Error(msg);

    if (arguments.length === 4) {
      err.expected = expected;
      err.actual = actual;
    }

    return err;
};

module.exports.InspectionError = InspectionError;