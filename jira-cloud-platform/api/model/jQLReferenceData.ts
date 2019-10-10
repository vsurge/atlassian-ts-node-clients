/**
 * The Jira Cloud platform REST API
 * Jira Cloud platform REST API documentation
 *
 * The version of the OpenAPI document: 1001.0.0-SNAPSHOT
 * Contact: ecosystem@atlassian.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { FieldReferenceData } from './fieldReferenceData';
import { FunctionReferenceData } from './functionReferenceData';

/**
* Lists of JQL reference data.
*/
export class JQLReferenceData {
    /**
    * List of fields usable in JQL queries.
    */
    'visibleFieldNames'?: Array<FieldReferenceData>;
    /**
    * List of functions usable in JQL queries.
    */
    'visibleFunctionNames'?: Array<FunctionReferenceData>;
    /**
    * List of JQL query reserved words.
    */
    'jqlReservedWords'?: Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "visibleFieldNames",
            "baseName": "visibleFieldNames",
            "type": "Array<FieldReferenceData>"
        },
        {
            "name": "visibleFunctionNames",
            "baseName": "visibleFunctionNames",
            "type": "Array<FunctionReferenceData>"
        },
        {
            "name": "jqlReservedWords",
            "baseName": "jqlReservedWords",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return JQLReferenceData.attributeTypeMap;
    }
}
