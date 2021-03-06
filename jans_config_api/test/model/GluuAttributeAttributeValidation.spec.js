/**
 * jans-config-api
 * jans-config-api - Authorization services
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: xxx@gluu.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.JansConfigApi);
  }
}(this, function(expect, JansConfigApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new JansConfigApi.GluuAttributeAttributeValidation();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('GluuAttributeAttributeValidation', function() {
    it('should create an instance of GluuAttributeAttributeValidation', function() {
      // uncomment below and update the code to test GluuAttributeAttributeValidation
      //var instane = new JansConfigApi.GluuAttributeAttributeValidation();
      //expect(instance).to.be.a(JansConfigApi.GluuAttributeAttributeValidation);
    });

    it('should have the property regexp (base name: "regexp")', function() {
      // uncomment below and update the code to test the property regexp
      //var instance = new JansConfigApi.GluuAttributeAttributeValidation();
      //expect(instance).to.be();
    });

    it('should have the property minLength (base name: "minLength")', function() {
      // uncomment below and update the code to test the property minLength
      //var instance = new JansConfigApi.GluuAttributeAttributeValidation();
      //expect(instance).to.be();
    });

    it('should have the property maxLength (base name: "maxLength")', function() {
      // uncomment below and update the code to test the property maxLength
      //var instance = new JansConfigApi.GluuAttributeAttributeValidation();
      //expect(instance).to.be();
    });

  });

}));
