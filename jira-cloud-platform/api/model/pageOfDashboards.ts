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

import { Dashboard } from './dashboard';

/**
* A page containing dashboard details.
*/
export class PageOfDashboards {
    /**
    * The index of the first item returned on the page.
    */
    'startAt'?: number;
    /**
    * The maximum number of results that could be on the page.
    */
    'maxResults'?: number;
    /**
    * The number of results on the page.
    */
    'total'?: number;
    /**
    * The URL of the previous page of results, if any.
    */
    'prev'?: string;
    /**
    * The URL of the next page of results, if any.
    */
    'next'?: string;
    /**
    * List of dashboards.
    */
    'dashboards'?: Array<Dashboard>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "startAt",
            "baseName": "startAt",
            "type": "number"
        },
        {
            "name": "maxResults",
            "baseName": "maxResults",
            "type": "number"
        },
        {
            "name": "total",
            "baseName": "total",
            "type": "number"
        },
        {
            "name": "prev",
            "baseName": "prev",
            "type": "string"
        },
        {
            "name": "next",
            "baseName": "next",
            "type": "string"
        },
        {
            "name": "dashboards",
            "baseName": "dashboards",
            "type": "Array<Dashboard>"
        }    ];

    static getAttributeTypeMap() {
        return PageOfDashboards.attributeTypeMap;
    }
}

