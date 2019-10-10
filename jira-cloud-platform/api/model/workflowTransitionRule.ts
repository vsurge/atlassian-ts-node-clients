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
* A workflow transition rule.
*/
export class WorkflowTransitionRule {
    /**
    * The type of the transition rule.
    */
    'type': string;
    /**
    * The configuration of the transition rule. This is currently returned only for some of the rule types. Availability of this property is subject to change.
    */
    'configuration'?: object;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "configuration",
            "baseName": "configuration",
            "type": "object"
        }    ];

    static getAttributeTypeMap() {
        return WorkflowTransitionRule.attributeTypeMap;
    }
}

