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
import { UpdatedProjectCategory } from './updatedProjectCategory';

/**
* Details about a next-gen project.
*/
export class ProjectForScope {
    /**
    * The URL of the project details.
    */
    'self'?: string;
    /**
    * The ID of the project.
    */
    'id'?: string;
    /**
    * The key of the project.
    */
    'key'?: string;
    /**
    * The name of the project.
    */
    'name'?: string;
    /**
    * The [project type](https://confluence.atlassian.com/x/GwiiLQ#Jiraapplicationsoverview-Productfeaturesandprojecttypes) of the project.
    */
    'projectTypeKey'?: ProjectForScope.ProjectTypeKeyEnum;
    /**
    * Whether or not the project is simplified.
    */
    'simplified'?: boolean;
    /**
    * The URLs of the project\'s avatars.
    */
    'avatarUrls'?: AvatarUrlsBean;
    /**
    * The category the project belongs to.
    */
    'projectCategory'?: UpdatedProjectCategory;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "self",
            "baseName": "self",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "key",
            "baseName": "key",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "projectTypeKey",
            "baseName": "projectTypeKey",
            "type": "ProjectForScope.ProjectTypeKeyEnum"
        },
        {
            "name": "simplified",
            "baseName": "simplified",
            "type": "boolean"
        },
        {
            "name": "avatarUrls",
            "baseName": "avatarUrls",
            "type": "AvatarUrlsBean"
        },
        {
            "name": "projectCategory",
            "baseName": "projectCategory",
            "type": "UpdatedProjectCategory"
        }    ];

    static getAttributeTypeMap() {
        return ProjectForScope.attributeTypeMap;
    }
}

export namespace ProjectForScope {
    export enum ProjectTypeKeyEnum {
        Software = <any> 'software',
        ServiceDesk = <any> 'service_desk',
        Business = <any> 'business'
    }
}
