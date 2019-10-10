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
import { Component } from './component';
import { Hierarchy } from './hierarchy';
import { IssueTypeBean } from './issueTypeBean';
import { ProjectCategory } from './projectCategory';
import { ProjectPermissions } from './projectPermissions';
import { User } from './user';
import { Version } from './version';

/**
* Details about a project.
*/
export class Project {
    /**
    * Expand options that include additional project details in the response.
    */
    'expand'?: string;
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
    * A brief description of the project.
    */
    'description'?: string;
    /**
    * The username of the project lead.
    */
    'lead'?: User;
    /**
    * List of the components contained in the project.
    */
    'components'?: Array<Component>;
    /**
    * List of the issue types available in the project.
    */
    'issueTypes'?: Array<IssueTypeBean>;
    /**
    * A link to information about this project, such as project documentation.
    */
    'url'?: string;
    /**
    * An email address associated with the project.
    */
    'email'?: string;
    /**
    * The default assignee when creating issues for this project.
    */
    'assigneeType'?: Project.AssigneeTypeEnum;
    /**
    * The versions defined in the project. For more information, see [Create version](#api-rest-api-2-version-post).
    */
    'versions'?: Array<Version>;
    /**
    * The name of the project.
    */
    'name'?: string;
    /**
    * The name and self URL for each role defined in the project. For more information, see [Create project role](#api-rest-api-2-role-post).
    */
    'roles'?: { [key: string]: string; };
    /**
    * The URLs of the project\'s avatars.
    */
    'avatarUrls'?: AvatarUrlsBean;
    /**
    * The category the project belongs to.
    */
    'projectCategory'?: ProjectCategory;
    /**
    * The [project type](https://confluence.atlassian.com/x/GwiiLQ#Jiraapplicationsoverview-Productfeaturesandprojecttypes) of the project.
    */
    'projectTypeKey'?: Project.ProjectTypeKeyEnum;
    /**
    * Indicates whether the project is simplified.
    */
    'simplified'?: boolean;
    /**
    * The type of the project.
    */
    'style'?: Project.StyleEnum;
    /**
    * Indicates whether the project is private.
    */
    'isPrivate'?: boolean;
    /**
    * The issue type hierarchy for the project
    */
    'issueTypeHierarchy'?: Hierarchy;
    /**
    * User permissions on the project
    */
    'permissions'?: ProjectPermissions;
    /**
    * Map of project properties
    */
    'properties'?: { [key: string]: object; };
    /**
    * unique ID for next-gen projects
    */
    'uuid'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "expand",
            "baseName": "expand",
            "type": "string"
        },
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
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "lead",
            "baseName": "lead",
            "type": "User"
        },
        {
            "name": "components",
            "baseName": "components",
            "type": "Array<Component>"
        },
        {
            "name": "issueTypes",
            "baseName": "issueTypes",
            "type": "Array<IssueTypeBean>"
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string"
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "assigneeType",
            "baseName": "assigneeType",
            "type": "Project.AssigneeTypeEnum"
        },
        {
            "name": "versions",
            "baseName": "versions",
            "type": "Array<Version>"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "roles",
            "baseName": "roles",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "avatarUrls",
            "baseName": "avatarUrls",
            "type": "AvatarUrlsBean"
        },
        {
            "name": "projectCategory",
            "baseName": "projectCategory",
            "type": "ProjectCategory"
        },
        {
            "name": "projectTypeKey",
            "baseName": "projectTypeKey",
            "type": "Project.ProjectTypeKeyEnum"
        },
        {
            "name": "simplified",
            "baseName": "simplified",
            "type": "boolean"
        },
        {
            "name": "style",
            "baseName": "style",
            "type": "Project.StyleEnum"
        },
        {
            "name": "isPrivate",
            "baseName": "isPrivate",
            "type": "boolean"
        },
        {
            "name": "issueTypeHierarchy",
            "baseName": "issueTypeHierarchy",
            "type": "Hierarchy"
        },
        {
            "name": "permissions",
            "baseName": "permissions",
            "type": "ProjectPermissions"
        },
        {
            "name": "properties",
            "baseName": "properties",
            "type": "{ [key: string]: object; }"
        },
        {
            "name": "uuid",
            "baseName": "uuid",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return Project.attributeTypeMap;
    }
}

export namespace Project {
    export enum AssigneeTypeEnum {
        PROJECTLEAD = <any> 'PROJECT_LEAD',
        UNASSIGNED = <any> 'UNASSIGNED'
    }
    export enum ProjectTypeKeyEnum {
        Software = <any> 'software',
        ServiceDesk = <any> 'service_desk',
        Business = <any> 'business'
    }
    export enum StyleEnum {
        CLASSIC = <any> 'CLASSIC',
        NEXTGEN = <any> 'NEXTGEN',
        Classic = <any> 'classic',
        NextGen = <any> 'next-gen'
    }
}