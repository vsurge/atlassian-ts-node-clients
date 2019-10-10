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

import { AvatarUrlsBean } from './avatarUrlsBean';
import { SimpleListWrapperApplicationRole } from './simpleListWrapperApplicationRole';
import { SimpleListWrapperGroupName } from './simpleListWrapperGroupName';

/**
* A user.
*/
export class User {
    /**
    * The URL of the user.
    */
    'self'?: string;
    /**
    * This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
    */
    'key'?: string;
    /**
    * The accountId of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. Required in requests.
    */
    'accountId'?: string;
    /**
    * The user account type. Can take the following values:   *  `atlassian` regular Atlassian user account  *  `app` system account used for Connect applications and OAuth to represent external systems  *  `customer` Jira Service Desk account representing an external service desk
    */
    'accountType'?: User.AccountTypeEnum;
    /**
    * This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
    */
    'name'?: string;
    /**
    * The email address of the user. Depending on the user’s privacy setting, this may be returned as null.
    */
    'emailAddress'?: string;
    /**
    * The avatars of the user.
    */
    'avatarUrls'?: AvatarUrlsBean;
    /**
    * The display name of the user. Depending on the user’s privacy setting, this may return an alternative value.
    */
    'displayName'?: string;
    /**
    * Indicates whether the user is active.
    */
    'active'?: boolean;
    /**
    * The time zone specified in the user\'s profile. Depending on the user’s privacy setting, this may be returned as null.
    */
    'timeZone'?: string;
    /**
    * The locale of the user. Depending on the user’s privacy setting, this may be returned as null.
    */
    'locale'?: string;
    /**
    * The groups that the user belongs to.
    */
    'groups'?: SimpleListWrapperGroupName;
    /**
    * The application roles the user is assigned to.
    */
    'applicationRoles'?: SimpleListWrapperApplicationRole;
    /**
    * Expand options that include additional user details in the response.
    */
    'expand'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "self",
            "baseName": "self",
            "type": "string"
        },
        {
            "name": "key",
            "baseName": "key",
            "type": "string"
        },
        {
            "name": "accountId",
            "baseName": "accountId",
            "type": "string"
        },
        {
            "name": "accountType",
            "baseName": "accountType",
            "type": "User.AccountTypeEnum"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "emailAddress",
            "baseName": "emailAddress",
            "type": "string"
        },
        {
            "name": "avatarUrls",
            "baseName": "avatarUrls",
            "type": "AvatarUrlsBean"
        },
        {
            "name": "displayName",
            "baseName": "displayName",
            "type": "string"
        },
        {
            "name": "active",
            "baseName": "active",
            "type": "boolean"
        },
        {
            "name": "timeZone",
            "baseName": "timeZone",
            "type": "string"
        },
        {
            "name": "locale",
            "baseName": "locale",
            "type": "string"
        },
        {
            "name": "groups",
            "baseName": "groups",
            "type": "SimpleListWrapperGroupName"
        },
        {
            "name": "applicationRoles",
            "baseName": "applicationRoles",
            "type": "SimpleListWrapperApplicationRole"
        },
        {
            "name": "expand",
            "baseName": "expand",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return User.attributeTypeMap;
    }
}

export namespace User {
    export enum AccountTypeEnum {
        Atlassian = <any> 'atlassian',
        App = <any> 'app',
        Customer = <any> 'customer',
        Unknown = <any> 'unknown'
    }
}
