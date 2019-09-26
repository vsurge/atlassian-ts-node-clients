/**
 * Bitbucket API
 * Code against the Bitbucket API to automate simple tasks, embed Bitbucket data into your own site, build mobile or desktop apps, or even add custom UI add-ons into Bitbucket itself using the Connect framework.
 *
 * The version of the OpenAPI document: 2.0
 * Contact: support@bitbucket.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
* The status of an import or export job
*/
export class IssueJobStatus {
    'type'?: string;
    /**
    * The status of the import/export job
    */
    'status'?: IssueJobStatus.StatusEnum;
    /**
    * The phase of the import/export job
    */
    'phase'?: string;
    /**
    * The total number of issues being imported/exported
    */
    'total'?: number;
    /**
    * The total number of issues already imported/exported
    */
    'count'?: number;
    /**
    * The percentage of issues already imported/exported
    */
    'pct'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "IssueJobStatus.StatusEnum"
        },
        {
            "name": "phase",
            "baseName": "phase",
            "type": "string"
        },
        {
            "name": "total",
            "baseName": "total",
            "type": "number"
        },
        {
            "name": "count",
            "baseName": "count",
            "type": "number"
        },
        {
            "name": "pct",
            "baseName": "pct",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return IssueJobStatus.attributeTypeMap;
    }
}

export namespace IssueJobStatus {
    export enum StatusEnum {
        ACCEPTED = <any> 'ACCEPTED',
        STARTED = <any> 'STARTED',
        RUNNING = <any> 'RUNNING',
        FAILURE = <any> 'FAILURE'
    }
}