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

import { JexpJqlIssues } from './jexpJqlIssues';

/**
* The JQL specifying the issues available in the evaluated Jira expression under the `issues` context variable.
*/
export class JexpIssues {
    /**
    * The JQL query that specifies the set of issues available in the Jira expression.
    */
    'jql'?: JexpJqlIssues;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "jql",
            "baseName": "jql",
            "type": "JexpJqlIssues"
        }    ];

    static getAttributeTypeMap() {
        return JexpIssues.attributeTypeMap;
    }
}

