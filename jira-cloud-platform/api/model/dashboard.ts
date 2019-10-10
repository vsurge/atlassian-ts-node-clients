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

import { SharePermission } from './sharePermission';
import { UserBean } from './userBean';

/**
* Details of a dashboard.
*/
export class Dashboard {
    'description'?: string;
    /**
    * The ID of the dashboard.
    */
    'id'?: string;
    /**
    * Indicates whether the dashboard is selected as a favorite by the user.
    */
    'isFavourite'?: boolean;
    /**
    * The name of the dashboard.
    */
    'name'?: string;
    /**
    * The owner of the dashboard.
    */
    'owner'?: UserBean;
    /**
    * The number of users who have this dashboard as a favorite.
    */
    'popularity'?: number;
    /**
    * The rank of this dashboard.
    */
    'rank'?: number;
    /**
    * The URL of these dashboard details.
    */
    'self'?: string;
    /**
    * The details of any share permissions for the dashboard.
    */
    'sharePermissions'?: Array<SharePermission>;
    /**
    * The URL of the dashboard.
    */
    'view'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "isFavourite",
            "baseName": "isFavourite",
            "type": "boolean"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "owner",
            "baseName": "owner",
            "type": "UserBean"
        },
        {
            "name": "popularity",
            "baseName": "popularity",
            "type": "number"
        },
        {
            "name": "rank",
            "baseName": "rank",
            "type": "number"
        },
        {
            "name": "self",
            "baseName": "self",
            "type": "string"
        },
        {
            "name": "sharePermissions",
            "baseName": "sharePermissions",
            "type": "Array<SharePermission>"
        },
        {
            "name": "view",
            "baseName": "view",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return Dashboard.attributeTypeMap;
    }
}
