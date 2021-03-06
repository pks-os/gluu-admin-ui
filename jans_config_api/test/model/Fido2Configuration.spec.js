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
    instance = new JansConfigApi.Fido2Configuration();
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

  describe('Fido2Configuration', function() {
    it('should create an instance of Fido2Configuration', function() {
      // uncomment below and update the code to test Fido2Configuration
      //var instane = new JansConfigApi.Fido2Configuration();
      //expect(instance).to.be.a(JansConfigApi.Fido2Configuration);
    });

    it('should have the property authenticatorCertsFolder (base name: "authenticatorCertsFolder")', function() {
      // uncomment below and update the code to test the property authenticatorCertsFolder
      //var instance = new JansConfigApi.Fido2Configuration();
      //expect(instance).to.be();
    });

    it('should have the property mdsCertsFolder (base name: "mdsCertsFolder")', function() {
      // uncomment below and update the code to test the property mdsCertsFolder
      //var instance = new JansConfigApi.Fido2Configuration();
      //expect(instance).to.be();
    });

    it('should have the property mdsTocsFolder (base name: "mdsTocsFolder")', function() {
      // uncomment below and update the code to test the property mdsTocsFolder
      //var instance = new JansConfigApi.Fido2Configuration();
      //expect(instance).to.be();
    });

    it('should have the property serverMetadataFolder (base name: "serverMetadataFolder")', function() {
      // uncomment below and update the code to test the property serverMetadataFolder
      //var instance = new JansConfigApi.Fido2Configuration();
      //expect(instance).to.be();
    });

    it('should have the property requestedParties (base name: "requestedParties")', function() {
      // uncomment below and update the code to test the property requestedParties
      //var instance = new JansConfigApi.Fido2Configuration();
      //expect(instance).to.be();
    });

    it('should have the property userAutoEnrollment (base name: "userAutoEnrollment")', function() {
      // uncomment below and update the code to test the property userAutoEnrollment
      //var instance = new JansConfigApi.Fido2Configuration();
      //expect(instance).to.be();
    });

    it('should have the property unfinishedRequestExpiration (base name: "unfinishedRequestExpiration")', function() {
      // uncomment below and update the code to test the property unfinishedRequestExpiration
      //var instance = new JansConfigApi.Fido2Configuration();
      //expect(instance).to.be();
    });

    it('should have the property authenticationHistoryExpiration (base name: "authenticationHistoryExpiration")', function() {
      // uncomment below and update the code to test the property authenticationHistoryExpiration
      //var instance = new JansConfigApi.Fido2Configuration();
      //expect(instance).to.be();
    });

    it('should have the property requestedCredentialTypes (base name: "requestedCredentialTypes")', function() {
      // uncomment below and update the code to test the property requestedCredentialTypes
      //var instance = new JansConfigApi.Fido2Configuration();
      //expect(instance).to.be();
    });

  });

}));
