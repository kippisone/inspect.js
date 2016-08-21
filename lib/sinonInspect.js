'use strict';

var InspectionError = require('./inspectionError');

module.exports = function(Inspect, sinon) {

  /**
   * Inspects that a spy or stub was called
   *
   * @method wasCalled
   * @version v1.3.0
   *
   * @chainable
   * @return {object}     Returns this value
   */
  Inspect.prototype.wasCalled = function() {
    sinon.assert.called(this.inspectValue);
    return this;
  }

  /**
   * Inspects that a spy or stub was not called
   *
   * @method wasNotCalled
   * @version v1.3.0
   *
   * @chainable
   * @return {object}     Returns this value
   */
  Inspect.prototype.wasNotCalled = function() {
    sinon.assert.notCalled(this.inspectValue);
    return this;
  }

  /**
   * Inspects that a spy or stub was called exactly once
   *
   * @method wasCalledOnce
   * @version v1.3.0
   *
   * @chainable
   * @return {object}     Returns this value
   */
  Inspect.prototype.wasCalledOnce = function() {
    sinon.assert.calledOnce(this.inspectValue);
    return this;
  }

  /**
   * Inspects that a spy or stub was called exactly twice
   *
   * @method wasCalledTwice
   * @version v1.3.0
   *
   * @chainable
   * @return {object}     Returns this value
   */
  Inspect.prototype.wasCalledTwice = function() {
    sinon.assert.calledTwice(this.inspectValue);
    return this;
  }

  /**
   * Inspects that a spy or stub was called exactly thrice
   *
   * @method wasCalledThrice
   * @version v1.3.0
   *
   * @chainable
   * @return {object}     Returns this value
   */
  Inspect.prototype.wasCalledThrice = function() {
    sinon.assert.calledThrice(this.inspectValue);
    return this;
  }

  /**
   * Inspects that a spy or stub was called with `obj` as this value
   *
   * @method wasCalledOn
   * @version v1.3.0
   *
   * @param  {object} obj Sinon spy or stub object
   *
   * @chainable
   * @return {object}     Returns this value
   */
  Inspect.prototype.wasCalledOn = function(obj) {
    sinon.assert.calledOn(this.inspectValue);
    return this;
  }

  /**
   * Inspects that a spy or stub was always called with `obj` as this value
   *
   * @method wasAlwaysCalledOn
   * @version v1.3.0
   *
   * @param  {object} obj Sinon spy or stub object
   *
   * @chainable
   * @return {object}     Returns this value
   */
  Inspect.prototype.wasAlwaysCalledOn = function(obj) {
    sinon.assert.alwaysCalledOn(this.inspectValue);
    return this;
  }

  /**
   * Inspects that a spy or stub was called with arguments
   *
   * @method wasCalledWith
   * @version v1.3.0
   *
   * @param  {object} arg1 First arg
   * @param  {object} arg2 Second arg
   * @param  {object} ... N args
   *
   * @chainable
   * @return {object}     Returns this value
   */
  Inspect.prototype.wasCalledWith = function() {
    var args = Array.prototype.slice.call(arguments);
    try {
      sinon.assert.calledWith.apply(sinon.assert, [this.inspectValue].concat(args));
    }
    catch (err) {
      var actual = this.inspectValue.getCalls().map(function(call, index) {
        return call.args;
      });

      var expected = args;

      throw new InspectionError(err.message, actual, expected)
      .diffMode('one-to-n')
      .setStack(err.stack)
    }

    return this;
  }

  /**
   * Inspects that a spy or stub was called with matching arguments
   *
   * @method wasCalledWithMatch
   * @version v1.3.0
   *
   * @param  {object} arg1 First arg
   * @param  {object} arg2 Second arg
   * @param  {object} ... N args
   *
   * @chainable
   * @return {object}     Returns this value
   */
  Inspect.prototype.wasCalledWithMatch = function() {
    var args = Array.prototype.slice.call(arguments);
    args.unshift(this.inspectValue);
    sinon.assert.calledWithMatch.apply(sinon.assert, args);
    return this;
  }

  /**
   * Inspects that a spy or stub was always called with arguments
   *
   * @method wasAlwaysCalledWith
   * @version v1.3.0
   *
   * @param  {object} arg1 First arg
   * @param  {object} arg2 Second arg
   * @param  {object} ... N args
   *
   * @chainable
   * @return {object}     Returns this value
   */
  Inspect.prototype.wasAlwaysCalledWith = function() {
    var args = Array.prototype.slice.call(arguments);
    try {
      sinon.assert.calledWith.apply(sinon.assert, [this.inspectValue].concat(args));
    }
    catch (err) {
      var actual = this.inspectValue.getCalls().map(function(call, index) {
        return call.args;
      });

      var expected = args;

      throw new InspectionError(err.message, actual, expected)
      .diffMode('one-to-n')
      .setStack(err.stack)
    }

    return this;
  }

  /**
   * Inspects that a spy or stub was always called with matching arguments
   *
   * @method wasAlwaysCalledWithMatch
   * @version v1.3.0
   *
   * @param  {object} arg1 First arg
   * @param  {object} arg2 Second arg
   * @param  {object} ... N args
   *
   * @chainable
   * @return {object}     Returns this value
   */
  Inspect.prototype.wasAlwaysCalledWithMatch = function() {
    var args = Array.prototype.slice.call(arguments);
    args.unshift(this.inspectValue);
    sinon.assert.alwaysCalledWithMatch.apply(sinon.assert, args);
    return this;
  }

  /**
   * Inspects that a spy or stub was exactly called with arguments
   *
   * @method wasCalledWithExectly
   * @version v1.3.0
   *
   * @param  {object} arg1 First arg
   * @param  {object} arg2 Second arg
   * @param  {object} ... N args
   *
   * @chainable
   * @return {object}     Returns this value
   */
  Inspect.prototype.wasCalledWithExectly = function() {
    var args = Array.prototype.slice.call(arguments);
    args.unshift(this.inspectValue);
    sinon.assert.calledWith.apply(sinon.assert, args);
    return this;
  }

  /**
   * Inspects that a spy or stub was always exactly called with matching arguments
   *
   * @method wasAlwaysCalledWithExectly
   * @version v1.3.0
   *
   * @param  {object} arg1 First arg
   * @param  {object} arg2 Second arg
   * @param  {object} ... N args
   *
   * @chainable
   * @return {object}     Returns this value
   */
  Inspect.prototype.wasAlwaysCalledWithExectly = function() {
    var args = Array.prototype.slice.call(arguments);
    args.unshift(this.inspectValue);
    sinon.assert.alwaysCalledWithExectly.apply(sinon.assert, args);
    return this;
  }

  /**
   * Inspects that a spy or stub was never called with arguments
   *
   * @method wasNeverCalledWith
   * @version v1.3.0
   *
   * @param  {object} arg1 First arg
   * @param  {object} arg2 Second arg
   * @param  {object} ... N args
   *
   * @chainable
   * @return {object}     Returns this value
   */
  Inspect.prototype.wasNeverCalledWith = function() {
    var args = Array.prototype.slice.call(arguments);
    args.unshift(this.inspectValue);
    sinon.assert.neverCalledWith.apply(sinon.assert, args);
    return this;
  }

  /**
   * Inspects that a spy or stub was never called with matching arguments
   *
   * @method wasNeverCalledWithMatch
   * @version v1.3.0
   *
   * @param  {object} arg1 First arg
   * @param  {object} arg2 Second arg
   * @param  {object} ... N args
   *
   * @chainable
   * @return {object}     Returns this value
   */
  Inspect.prototype.wasNeverCalledWithMatch = function() {
    var args = Array.prototype.slice.call(arguments);
    args.unshift(this.inspectValue);
    sinon.assert.neverCalledWithMatch.apply(sinon.assert, args);
    return this;
  }

  /**
   * Inspects that a spy or stub was called n times
   *
   * @method hasCallCount
   * @version v1.3.0
   *
   * @param {number} num Call counts
   *
   * @chainable
   * @return {object}     Returns this value
   */
  Inspect.prototype.hasCallCount = function(num) {
    sinon.assert.callCount(this.inspectValue, num);
    return this;
  }

  /**
   * Inspects that multiple spy's or stubs were called in a specific order
   *
   * @method hasCallOrder
   * @version v1.3.0
   *
   * @param  {object} spy1 First spy
   * @param  {object} spy2 Second spy
   * @param  {object} ... N'th spy
   *
   * @chainable
   * @return {object}     Returns this value
   */
  Inspect.prototype.hasCallOrder = function(num) {
    var args = Array.prototype.slice.call(arguments);
    args.unshift(this.inspectValue);
    sinon.assert.callOrder.apply(sinon.assert, args);
    return this;
  }

  /**
   * Inspects that a spy or stub was called with new operator
   *
   * @method wasCalledWithNew
   * @version v1.3.0
   *
   * @chainable
   * @return {object}     Returns this value
   */
  Inspect.prototype.wasCalledWithNew = function() {
    sinon.assert.calledWithNew(this.inspectValue);
    return this;
  }

  /**
   * Inspects that a spy or stub was always called with new operator
   *
   * @method wasAlwaysCalledWithNew
   * @version v1.3.0
   *
   * @chainable
   * @return {object}     Returns this value
   */
  Inspect.prototype.wasAlwaysCalledWithNew = function() {
    sinon.assert.alwaysCalledWithNew(this.inspectValue);
    return this;
  }

  /**
   * Inspects that a spy or stub has thrown an exception
   *
   * @method hasThrown
   * @version v1.3.0
   *
   * @param {object|string} obj Exception object or string that should be thrown
   *
   * @chainable
   * @return {object}   Returns this value
   */
  Inspect.prototype.hasThrown = function(obj) {
    sinon.assert.threw(this.inspectValue, obj);
    return this;
  }

  /**
   * Inspects that a spy or stub has always thrown an exception
   *
   * @method hasThrown
   * @version v1.3.0
   *
   * @param {object|string} obj Exception object or string that should be thrown
   *
   * @chainable
   * @return {object}   Returns this value
   */
  Inspect.prototype.hasAlwaysThrown = function(obj) {
    sinon.assert.alwaysThrew(this.inspectValue, obj);
    return this;
  }
};
