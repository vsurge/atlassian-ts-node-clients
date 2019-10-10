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

import { WebhookDetails } from './webhookDetails';

/**
* Details of webhooks to register.
*/
export class WebhookRegistrationDetails {
    /**
    * A list of webhooks.
    */
    'webhooks': Array<WebhookDetails>;
    /**
    * The URL that specifies where to send the webhooks.
    */
    'url': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "webhooks",
            "baseName": "webhooks",
            "type": "Array<WebhookDetails>"
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return WebhookRegistrationDetails.attributeTypeMap;
    }
}
