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
import { Comment } from '../model/comment';
import { IssueCommentListRequestBean } from '../model/issueCommentListRequestBean';
import { PageBeanComment } from '../model/pageBeanComment';
import { PageOfComments } from '../model/pageOfComments';

import { ObjectSerializer, Authentication, VoidAuth } from '../model/models';
import { OAuth } from '../model/models';

let defaultBasePath = 'http://localhost';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum IssueCommentsApiApiKeys {
}

export class IssueCommentsApi {
    protected _basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'OAuth2': new OAuth(),
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

    public setApiKey(key: IssueCommentsApiApiKeys, value: string) {
        (this.authentications as any)[IssueCommentsApiApiKeys[key]].apiKey = value;
    }

    set accessToken(token: string) {
        this.authentications.OAuth2.accessToken = token;
    }

    /**
     * Returns the comments for a list of comment IDs.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** Comments are returned where the user:   *  has *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project containing the comment.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.  *  If the comment has visibility restrictions, belongs to the group or has the role visibility is restricted to.
     * @summary Get comments by IDs
     * @param issueCommentListRequestBean The list of comment IDs.
     * @param expand Use [expand](#expansion) to include additional information about comments in the response. This parameter accepts multiple values separated by a comma:   *  &#x60;renderedBody&#x60; Returns the comment body rendered in HTML.  *  &#x60;properties&#x60; Returns the comment\&#39;s properties.
     */
    public async comAtlassianJiraRestV2IssueIssueCommentListResourceGetCommentsByIdsPost (issueCommentListRequestBean: IssueCommentListRequestBean, expand?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.ClientResponse; body: PageBeanComment;  }> {
        const localVarPath = this.basePath + '/rest/api/2/comment/list';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'issueCommentListRequestBean' is not null or undefined
        if (issueCommentListRequestBean === null || issueCommentListRequestBean === undefined) {
            throw new Error('Required parameter issueCommentListRequestBean was null or undefined when calling comAtlassianJiraRestV2IssueIssueCommentListResourceGetCommentsByIdsPost.');
        }

        if (expand !== undefined) {
            localVarQueryParameters['expand'] = ObjectSerializer.serialize(expand, "string");
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
            body: ObjectSerializer.serialize(issueCommentListRequestBean, "IssueCommentListRequestBean")
        };

        let authenticationPromise = Promise.resolve();
        authenticationPromise = authenticationPromise.then(() => this.authentications.OAuth2.applyToRequest(localVarRequestOptions));

        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));
        return authenticationPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.ClientResponse; body: PageBeanComment;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "PageBeanComment");
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
     * Adds a comment to an issue.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:**   *  *Browse projects* and *Add comments* [ project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue containing the comment is in.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
     * @summary Add comment
     * @param issueIdOrKey The ID or key of the issue.
     * @param requestBody 
     * @param expand Use [expand](#expansion) to include additional information about comments in the response. This parameter accepts &#x60;renderedBody&#x60;, which returns the comment body rendered in HTML.
     */
    public async comAtlassianJiraRestV2IssueIssueCommentResourceAddCommentPost (issueIdOrKey: string, requestBody: { [key: string]: object; }, expand?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.ClientResponse; body: Comment;  }> {
        const localVarPath = this.basePath + '/rest/api/2/issue/{issueIdOrKey}/comment'
            .replace('{' + 'issueIdOrKey' + '}', encodeURIComponent(String(issueIdOrKey)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'issueIdOrKey' is not null or undefined
        if (issueIdOrKey === null || issueIdOrKey === undefined) {
            throw new Error('Required parameter issueIdOrKey was null or undefined when calling comAtlassianJiraRestV2IssueIssueCommentResourceAddCommentPost.');
        }

        // verify required parameter 'requestBody' is not null or undefined
        if (requestBody === null || requestBody === undefined) {
            throw new Error('Required parameter requestBody was null or undefined when calling comAtlassianJiraRestV2IssueIssueCommentResourceAddCommentPost.');
        }

        if (expand !== undefined) {
            localVarQueryParameters['expand'] = ObjectSerializer.serialize(expand, "string");
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
            body: ObjectSerializer.serialize(requestBody, "{ [key: string]: object; }")
        };

        let authenticationPromise = Promise.resolve();
        authenticationPromise = authenticationPromise.then(() => this.authentications.OAuth2.applyToRequest(localVarRequestOptions));

        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));
        return authenticationPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.ClientResponse; body: Comment;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "Comment");
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
     * Deletes a comment.  **[Permissions](#permissions) required:**   *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue containing the comment is in.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.  *  *Delete all comments*[ project permission](https://confluence.atlassian.com/x/yodKLg) to delete any comment or *Delete own comments* to delete comment created by the user,  *  If the comment has visibility restrictions, the user belongs to the group or has the role visibility is restricted to.
     * @summary Delete comment
     * @param issueIdOrKey The ID or key of the issue.
     * @param id The ID of the comment.
     */
    public async comAtlassianJiraRestV2IssueIssueCommentResourceDeleteCommentDelete (issueIdOrKey: string, id: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.ClientResponse; body?: any;  }> {
        const localVarPath = this.basePath + '/rest/api/2/issue/{issueIdOrKey}/comment/{id}'
            .replace('{' + 'issueIdOrKey' + '}', encodeURIComponent(String(issueIdOrKey)))
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'issueIdOrKey' is not null or undefined
        if (issueIdOrKey === null || issueIdOrKey === undefined) {
            throw new Error('Required parameter issueIdOrKey was null or undefined when calling comAtlassianJiraRestV2IssueIssueCommentResourceDeleteCommentDelete.');
        }

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling comAtlassianJiraRestV2IssueIssueCommentResourceDeleteCommentDelete.');
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
        authenticationPromise = authenticationPromise.then(() => this.authentications.OAuth2.applyToRequest(localVarRequestOptions));

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
     * Returns a comment.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:**   *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project containing the comment.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.  *  If the comment has visibility restrictions, the user belongs to the group or has the role visibility is restricted to.
     * @summary Get comment
     * @param issueIdOrKey The ID or key of the issue.
     * @param id The ID of the comment.
     * @param expand Use [expand](#expansion) to include additional information about comments in the response. This parameter accepts &#x60;renderedBody&#x60;, which returns the comment body rendered in HTML.
     */
    public async comAtlassianJiraRestV2IssueIssueCommentResourceGetCommentGet (issueIdOrKey: string, id: string, expand?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.ClientResponse; body: Comment;  }> {
        const localVarPath = this.basePath + '/rest/api/2/issue/{issueIdOrKey}/comment/{id}'
            .replace('{' + 'issueIdOrKey' + '}', encodeURIComponent(String(issueIdOrKey)))
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'issueIdOrKey' is not null or undefined
        if (issueIdOrKey === null || issueIdOrKey === undefined) {
            throw new Error('Required parameter issueIdOrKey was null or undefined when calling comAtlassianJiraRestV2IssueIssueCommentResourceGetCommentGet.');
        }

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling comAtlassianJiraRestV2IssueIssueCommentResourceGetCommentGet.');
        }

        if (expand !== undefined) {
            localVarQueryParameters['expand'] = ObjectSerializer.serialize(expand, "string");
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
        authenticationPromise = authenticationPromise.then(() => this.authentications.OAuth2.applyToRequest(localVarRequestOptions));

        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));
        return authenticationPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.ClientResponse; body: Comment;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "Comment");
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
     * Returns all comments for an issue.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** Comments are included in the response where the user has:   *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project containing the comment.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.  *  If the comment has visibility restrictions, belongs to the group or has the role visibility is role visibility is restricted to.
     * @summary Get comments
     * @param issueIdOrKey The ID or key of the issue.
     * @param startAt The index of the first item to return in a page of results (page offset).
     * @param maxResults The maximum number of items to return per page. The maximum is &#x60;100&#x60;.
     * @param orderBy The field to order returned comments by. Only accepts the value *created*, which orders comments by their created date.
     * @param expand Use [expand](#expansion) to include additional information about comments in the response. This parameter accepts &#x60;renderedBody&#x60;, which returns the comment body rendered in HTML.
     */
    public async comAtlassianJiraRestV2IssueIssueCommentResourceGetCommentsGet (issueIdOrKey: string, startAt?: number, maxResults?: number, orderBy?: 'created' | '-created', expand?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.ClientResponse; body: PageOfComments;  }> {
        const localVarPath = this.basePath + '/rest/api/2/issue/{issueIdOrKey}/comment'
            .replace('{' + 'issueIdOrKey' + '}', encodeURIComponent(String(issueIdOrKey)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'issueIdOrKey' is not null or undefined
        if (issueIdOrKey === null || issueIdOrKey === undefined) {
            throw new Error('Required parameter issueIdOrKey was null or undefined when calling comAtlassianJiraRestV2IssueIssueCommentResourceGetCommentsGet.');
        }

        if (startAt !== undefined) {
            localVarQueryParameters['startAt'] = ObjectSerializer.serialize(startAt, "number");
        }

        if (maxResults !== undefined) {
            localVarQueryParameters['maxResults'] = ObjectSerializer.serialize(maxResults, "number");
        }

        if (orderBy !== undefined) {
            localVarQueryParameters['orderBy'] = ObjectSerializer.serialize(orderBy, "'created' | '-created'");
        }

        if (expand !== undefined) {
            localVarQueryParameters['expand'] = ObjectSerializer.serialize(expand, "string");
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
        authenticationPromise = authenticationPromise.then(() => this.authentications.OAuth2.applyToRequest(localVarRequestOptions));

        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));
        return authenticationPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.ClientResponse; body: PageOfComments;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "PageOfComments");
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
     * Updates a comment.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:**   *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue containing the comment is in.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.  *  *Edit all comments*[ project permission](https://confluence.atlassian.com/x/yodKLg) to update any comment or *Edit own comments* to update comment created by the user.  *  If the comment has visibility restrictions, the user belongs to the group or has the role visibility is restricted to.
     * @summary Update comment
     * @param issueIdOrKey The ID or key of the issue.
     * @param id The ID of the comment.
     * @param requestBody 
     * @param expand Use [expand](#expansion) to include additional information about comments in the response. This parameter accepts &#x60;renderedBody&#x60;, which returns the comment body rendered in HTML.
     */
    public async comAtlassianJiraRestV2IssueIssueCommentResourceUpdateCommentPut (issueIdOrKey: string, id: string, requestBody: { [key: string]: object; }, expand?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.ClientResponse; body: Comment;  }> {
        const localVarPath = this.basePath + '/rest/api/2/issue/{issueIdOrKey}/comment/{id}'
            .replace('{' + 'issueIdOrKey' + '}', encodeURIComponent(String(issueIdOrKey)))
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'issueIdOrKey' is not null or undefined
        if (issueIdOrKey === null || issueIdOrKey === undefined) {
            throw new Error('Required parameter issueIdOrKey was null or undefined when calling comAtlassianJiraRestV2IssueIssueCommentResourceUpdateCommentPut.');
        }

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling comAtlassianJiraRestV2IssueIssueCommentResourceUpdateCommentPut.');
        }

        // verify required parameter 'requestBody' is not null or undefined
        if (requestBody === null || requestBody === undefined) {
            throw new Error('Required parameter requestBody was null or undefined when calling comAtlassianJiraRestV2IssueIssueCommentResourceUpdateCommentPut.');
        }

        if (expand !== undefined) {
            localVarQueryParameters['expand'] = ObjectSerializer.serialize(expand, "string");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(requestBody, "{ [key: string]: object; }")
        };

        let authenticationPromise = Promise.resolve();
        authenticationPromise = authenticationPromise.then(() => this.authentications.OAuth2.applyToRequest(localVarRequestOptions));

        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));
        return authenticationPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.ClientResponse; body: Comment;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "Comment");
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