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

import { AuditRecordBean } from './auditRecordBean';

/**
* Container for a list of audit records.
*/
export class AuditRecords {
    /**
    * The number of audit items skipped before the first item in this list.
    */
    'offset'?: number;
    /**
    * The requested or default limit on the number of audit items to be returned.
    */
    'limit'?: number;
    /**
    * The total number of audit items returned.
    */
    'total'?: number;
    /**
    * The list of audit items.
    */
    'records'?: Array<AuditRecordBean>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "offset",
            "baseName": "offset",
            "type": "number"
        },
        {
            "name": "limit",
            "baseName": "limit",
            "type": "number"
        },
        {
            "name": "total",
            "baseName": "total",
            "type": "number"
        },
        {
            "name": "records",
            "baseName": "records",
            "type": "Array<AuditRecordBean>"
        }    ];

    static getAttributeTypeMap() {
        return AuditRecords.attributeTypeMap;
    }
}

