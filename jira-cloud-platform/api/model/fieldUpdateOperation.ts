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


/**
* Details of an operation to perform on a field.
*/
export class FieldUpdateOperation {
    /**
    * A map containing the name of a field and the value to add to it.
    */
    'add'?: object;
    /**
    * A map containing the name of a field and the value to set in it.
    */
    'set'?: object;
    /**
    * A map containing the name of a field and the value to removed from it.
    */
    'remove'?: object;
    /**
    * A map containing the name of a field and the value to edit in it.
    */
    'edit'?: object;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "add",
            "baseName": "add",
            "type": "object"
        },
        {
            "name": "set",
            "baseName": "set",
            "type": "object"
        },
        {
            "name": "remove",
            "baseName": "remove",
            "type": "object"
        },
        {
            "name": "edit",
            "baseName": "edit",
            "type": "object"
        }    ];

    static getAttributeTypeMap() {
        return FieldUpdateOperation.attributeTypeMap;
    }
}

