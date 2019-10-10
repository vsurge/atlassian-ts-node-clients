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

import { NotificationSchemeEvent } from './notificationSchemeEvent';
import { Scope } from './scope';

/**
* Details about a notification scheme.
*/
export class NotificationScheme {
    /**
    * Expand options that include additional notification scheme details in the response.
    */
    'expand'?: string;
    /**
    * The ID of the notification scheme.
    */
    'id'?: number;
    'self'?: string;
    /**
    * The name of the notification scheme.
    */
    'name'?: string;
    /**
    * The description of the notification scheme.
    */
    'description'?: string;
    /**
    * The notification events and associated recipients.
    */
    'notificationSchemeEvents'?: Array<NotificationSchemeEvent>;
    /**
    * The scope of the notification scheme.
    */
    'scope'?: Scope;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "expand",
            "baseName": "expand",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "self",
            "baseName": "self",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "notificationSchemeEvents",
            "baseName": "notificationSchemeEvents",
            "type": "Array<NotificationSchemeEvent>"
        },
        {
            "name": "scope",
            "baseName": "scope",
            "type": "Scope"
        }    ];

    static getAttributeTypeMap() {
        return NotificationScheme.attributeTypeMap;
    }
}

