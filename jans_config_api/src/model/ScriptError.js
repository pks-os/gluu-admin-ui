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

import ApiClient from '../ApiClient';

/**
 * The ScriptError model module.
 * @module model/ScriptError
 * @version 1.0.0
 */
class ScriptError {
    /**
     * Constructs a new <code>ScriptError</code>.
     * Possible errors assosiated with the script.
     * @alias module:model/ScriptError
     */
    constructor() { 
        
        ScriptError.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ScriptError</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ScriptError} obj Optional instance to populate.
     * @return {module:model/ScriptError} The populated <code>ScriptError</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ScriptError();

            if (data.hasOwnProperty('raisedAt')) {
                obj['raisedAt'] = ApiClient.convertToType(data['raisedAt'], 'Date');
            }
            if (data.hasOwnProperty('stackTrace')) {
                obj['stackTrace'] = ApiClient.convertToType(data['stackTrace'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Date} raisedAt
 */
ScriptError.prototype['raisedAt'] = undefined;

/**
 * @member {String} stackTrace
 */
ScriptError.prototype['stackTrace'] = undefined;






export default ScriptError;

