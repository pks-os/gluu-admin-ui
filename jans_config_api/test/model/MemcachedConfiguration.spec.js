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
    instance = new JansConfigApi.MemcachedConfiguration();
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

  describe('MemcachedConfiguration', function() {
    it('should create an instance of MemcachedConfiguration', function() {
      // uncomment below and update the code to test MemcachedConfiguration
      //var instane = new JansConfigApi.MemcachedConfiguration();
      //expect(instance).to.be.a(JansConfigApi.MemcachedConfiguration);
    });

    it('should have the property servers (base name: "servers")', function() {
      // uncomment below and update the code to test the property servers
      //var instance = new JansConfigApi.MemcachedConfiguration();
      //expect(instance).to.be();
    });

    it('should have the property maxOperationQueueLength (base name: "maxOperationQueueLength")', function() {
      // uncomment below and update the code to test the property maxOperationQueueLength
      //var instance = new JansConfigApi.MemcachedConfiguration();
      //expect(instance).to.be();
    });

    it('should have the property bufferSize (base name: "bufferSize")', function() {
      // uncomment below and update the code to test the property bufferSize
      //var instance = new JansConfigApi.MemcachedConfiguration();
      //expect(instance).to.be();
    });

    it('should have the property defaultPutExpiration (base name: "defaultPutExpiration")', function() {
      // uncomment below and update the code to test the property defaultPutExpiration
      //var instance = new JansConfigApi.MemcachedConfiguration();
      //expect(instance).to.be();
    });

    it('should have the property connectionFactoryType (base name: "connectionFactoryType")', function() {
      // uncomment below and update the code to test the property connectionFactoryType
      //var instance = new JansConfigApi.MemcachedConfiguration();
      //expect(instance).to.be();
    });

  });

}));
