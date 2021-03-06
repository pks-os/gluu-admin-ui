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
    instance = new JansConfigApi.CacheConfigurationInMemoryApi();
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

  describe('CacheConfigurationInMemoryApi', function() {
    describe('getConfigCacheInMemory', function() {
      it('should call getConfigCacheInMemory successfully', function(done) {
        //uncomment below and update the code to test getConfigCacheInMemory
        //instance.getConfigCacheInMemory(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchConfigCacheInMemory', function() {
      it('should call patchConfigCacheInMemory successfully', function(done) {
        //uncomment below and update the code to test patchConfigCacheInMemory
        //instance.patchConfigCacheInMemory(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('putConfigCacheInMemory', function() {
      it('should call putConfigCacheInMemory successfully', function(done) {
        //uncomment below and update the code to test putConfigCacheInMemory
        //instance.putConfigCacheInMemory(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
