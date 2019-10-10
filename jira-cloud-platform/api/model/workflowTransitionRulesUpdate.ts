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

import { WorkflowTransitionRules } from './workflowTransitionRules';

/**
* Details about a workflow configuration update request.
*/
export class WorkflowTransitionRulesUpdate {
    /**
    * The list of workflows with transition rules to update.
    */
    'workflows'?: Array<WorkflowTransitionRules>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "workflows",
            "baseName": "workflows",
            "type": "Array<WorkflowTransitionRules>"
        }    ];

    static getAttributeTypeMap() {
        return WorkflowTransitionRulesUpdate.attributeTypeMap;
    }
}

