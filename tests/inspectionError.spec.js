'use strict';

var inspect = require('../inspect.js');
var InspectionError = require('../lib/inspectionError');

describe('Error handler', function() {  
    describe('InspectionError', function() {
        it('should create an InsepctionError', function() {
            var err = new InspectionError('test error');
            inspect(err)
              .isObject()
              .isInstanceOf(InspectionError)   
              .isInstanceOf(Error);   
        });

        it('should have a error message', function() {
            var err = new InspectionError('Test error');
            inspect(err).hasProp('message', 'Test error');
        });

        it('should have an actual property', function() {
            var err = new InspectionError('Test error', 'actual', 'expected');
            inspect(err).hasProp('actual', 'actual');
        });

        it('should have an expected property', function() {
            var err = new InspectionError('Test error', 'expected', 'expected');
            inspect(err).hasProp('expected', 'expected');
        });

        it('Should set a diff mode', function() {
            var err = new InspectionError('Test error').diffMode('test');
            inspect(err).hasProp('diffMode', 'test');
        });

        it('Should set diff options', function() {
            var err = new InspectionError('Test error').diffMode('test', { offset: 23 });
            inspect(err).hasProp('diffOptions', { offset: 23 });
        });
    });
});
