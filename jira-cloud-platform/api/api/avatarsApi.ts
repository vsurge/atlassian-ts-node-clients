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

import localVarRequest = require('request');
import http = require('http');

/* tslint:disable:no-unused-locals */
import { Avatar } from '../model/avatar';
import { Avatars } from '../model/avatars';
import { SystemAvatars } from '../model/systemAvatars';

import { ObjectSerializer, Authentication, VoidAuth } from '../model/models';

let defaultBasePath = 'http://localhost';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum AvatarsApiApiKeys {
}

export class AvatarsApi {
    protected _basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
    }

    constructor(basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
        this.authentications.default = auth;
    }

    public setApiKey(key: AvatarsApiApiKeys, value: string) {
        (this.authentications as any)[AvatarsApiApiKeys[key]].apiKey = value;
    }

    /**
     * Returns a list of system avatar details by owner type, where the owner types are issue type, project, or user.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** None.
     * @summary Get system avatars by type
     * @param type The avatar type.
     */
    public async comAtlassianJiraRestV2IssueAvatarResourceGetAllSystemAvatarsGet (type: 'issuetype' | 'project' | 'user', options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.ClientResponse; body: SystemAvatars;  }> {
        const localVarPath = this.basePath + '/rest/api/2/avatar/{type}/system'
            .replace('{' + 'type' + '}', encodeURIComponent(String(type)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'type' is not null or undefined
        if (type === null || type === undefined) {
            throw new Error('Required parameter type was null or undefined when calling comAtlassianJiraRestV2IssueAvatarResourceGetAllSystemAvatarsGet.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));
        return authenticationPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.ClientResponse; body: SystemAvatars;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "SystemAvatars");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject({ response: response, body: body });
                        }
                    }
                });
            });
        });
    }
    /**
     * Deletes an avatar from a project or issue type.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * @summary Delete avatar
     * @param type The type of the entity. Valid values are &#x60;project&#x60; and &#x60;issuetype&#x60;.
     * @param owningObjectId The ID of the entity item.
     * @param id The ID of the avatar.
     */
    public async comAtlassianJiraRestV2IssueUniversalAvatarResourceDeleteAvatarDelete (type: string, owningObjectId: string, id: number, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.ClientResponse; body?: any;  }> {
        const localVarPath = this.basePath + '/rest/api/2/universal_avatar/type/{type}/owner/{owningObjectId}/avatar/{id}'
            .replace('{' + 'type' + '}', encodeURIComponent(String(type)))
            .replace('{' + 'owningObjectId' + '}', encodeURIComponent(String(owningObjectId)))
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'type' is not null or undefined
        if (type === null || type === undefined) {
            throw new Error('Required parameter type was null or undefined when calling comAtlassianJiraRestV2IssueUniversalAvatarResourceDeleteAvatarDelete.');
        }

        // verify required parameter 'owningObjectId' is not null or undefined
        if (owningObjectId === null || owningObjectId === undefined) {
            throw new Error('Required parameter owningObjectId was null or undefined when calling comAtlassianJiraRestV2IssueUniversalAvatarResourceDeleteAvatarDelete.');
        }

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling comAtlassianJiraRestV2IssueUniversalAvatarResourceDeleteAvatarDelete.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'DELETE',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));
        return authenticationPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.ClientResponse; body?: any;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject({ response: response, body: body });
                        }
                    }
                });
            });
        });
    }
    /**
     * Returns the system and custom avatars for a project or issue type.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** None.
     * @summary Get avatars
     * @param type The type of the entity. Valid values are &#x60;project&#x60; and &#x60;issuetype&#x60;.
     * @param entityId The ID of the entity item.
     */
    public async comAtlassianJiraRestV2IssueUniversalAvatarResourceGetAvatarsGet (type: string, entityId: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.ClientResponse; body: Avatars;  }> {
        const localVarPath = this.basePath + '/rest/api/2/universal_avatar/type/{type}/owner/{entityId}'
            .replace('{' + 'type' + '}', encodeURIComponent(String(type)))
            .replace('{' + 'entityId' + '}', encodeURIComponent(String(entityId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'type' is not null or undefined
        if (type === null || type === undefined) {
            throw new Error('Required parameter type was null or undefined when calling comAtlassianJiraRestV2IssueUniversalAvatarResourceGetAvatarsGet.');
        }

        // verify required parameter 'entityId' is not null or undefined
        if (entityId === null || entityId === undefined) {
            throw new Error('Required parameter entityId was null or undefined when calling comAtlassianJiraRestV2IssueUniversalAvatarResourceGetAvatarsGet.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));
        return authenticationPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.ClientResponse; body: Avatars;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "Avatars");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject({ response: response, body: body });
                        }
                    }
                });
            });
        });
    }
    /**
     * Loads a custom avatar for a project or issue type.  Specify the avatar\'s local file location in the body of the request. Also, include the following headers:   *  `X-Atlassian-Token: no-check` To prevent XSRF protection blocking the request, for more information see [Special Headers](#special-request-headers).  *  `Content-Type: image/image type` Valid image types are JPEG, GIF, or PNG.  For example:   `curl --request POST `  `--user email@example.com:<api_token> `  `--header \'X-Atlassian-Token: no-check\' `  `--header \'Content-Type: image/< image_type>\' `  `--data-binary \"<@/path/to/file/with/your/avatar>\" `  `--url \'https://your-domain.atlassian.net/rest/api/2/universal_avatar/type/{type}/owner/{entityId}\'`  The avatar is cropped to a square. If no crop parameters are specified, the square originates at the top left of the image. The length of the square\'s sides is set to the smaller of the height or width of the image.  The cropped image is then used to create avatars of 16x16, 24x24, 32x32, and 48x48 in size.  After creating the avatar use:   *  [Update issue type](#api-rest-api-2-issuetype-id-put) to set it as the issue type\'s displayed avatar.  *  [Set project avatar](#api-rest-api-2-project-projectIdOrKey-avatar-put) to set it as the project\'s displayed avatar.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * @summary Load avatar
     * @param type The type of the entity. Valid values are &#x60;project&#x60; and &#x60;issuetype&#x60;.
     * @param entityId The ID of the entity item.
     * @param size The length of each side of the crop region.
     * @param body 
     * @param x The X coordinate of the top-left corner of the crop region.
     * @param y The Y coordinate of the top-left corner of the crop region.
     */
    public async comAtlassianJiraRestV2IssueUniversalAvatarResourceStoreAvatarPost (type: string, entityId: string, size: number, body: object, x?: number, y?: number, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.ClientResponse; body: Avatar;  }> {
        const localVarPath = this.basePath + '/rest/api/2/universal_avatar/type/{type}/owner/{entityId}'
            .replace('{' + 'type' + '}', encodeURIComponent(String(type)))
            .replace('{' + 'entityId' + '}', encodeURIComponent(String(entityId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'type' is not null or undefined
        if (type === null || type === undefined) {
            throw new Error('Required parameter type was null or undefined when calling comAtlassianJiraRestV2IssueUniversalAvatarResourceStoreAvatarPost.');
        }

        // verify required parameter 'entityId' is not null or undefined
        if (entityId === null || entityId === undefined) {
            throw new Error('Required parameter entityId was null or undefined when calling comAtlassianJiraRestV2IssueUniversalAvatarResourceStoreAvatarPost.');
        }

        // verify required parameter 'size' is not null or undefined
        if (size === null || size === undefined) {
            throw new Error('Required parameter size was null or undefined when calling comAtlassianJiraRestV2IssueUniversalAvatarResourceStoreAvatarPost.');
        }

        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling comAtlassianJiraRestV2IssueUniversalAvatarResourceStoreAvatarPost.');
        }

        if (x !== undefined) {
            localVarQueryParameters['x'] = ObjectSerializer.serialize(x, "number");
        }

        if (y !== undefined) {
            localVarQueryParameters['y'] = ObjectSerializer.serialize(y, "number");
        }

        if (size !== undefined) {
            localVarQueryParameters['size'] = ObjectSerializer.serialize(size, "number");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(body, "object")
        };

        let authenticationPromise = Promise.resolve();
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));
        return authenticationPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.ClientResponse; body: Avatar;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "Avatar");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject({ response: response, body: body });
                        }
                    }
                });
            });
        });
    }
}
