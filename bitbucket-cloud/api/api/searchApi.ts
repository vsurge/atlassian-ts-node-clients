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

import localVarRequest = require('request');
import http = require('http');

/* tslint:disable:no-unused-locals */
import { SearchResultPage } from '../model/searchResultPage';

import { ObjectSerializer, Authentication, VoidAuth } from '../model/models';

let defaultBasePath = 'https://api.bitbucket.org/2.0';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum SearchApiApiKeys {
}

export class SearchApi {
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

    public setApiKey(key: SearchApiApiKeys, value: string) {
        (this.authentications as any)[SearchApiApiKeys[key]].apiKey = value;
    }

    /**
     * 
     * @summary Search for code in the repositories of the specified team
     * @param username The account to search in; either the username or the UUID in curly braces
     * @param searchQuery The search query
     * @param page Which page of the search results to retrieve
     * @param pagelen How many search results to retrieve per page
     */
    public async searchAccount (username: string, searchQuery: string, page?: number, pagelen?: number, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.ClientResponse; body: SearchResultPage;  }> {
        const localVarPath = this.basePath + '/teams/{username}/search/code'
            .replace('{' + 'username' + '}', encodeURIComponent(String(username)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'username' is not null or undefined
        if (username === null || username === undefined) {
            throw new Error('Required parameter username was null or undefined when calling searchAccount.');
        }

        // verify required parameter 'searchQuery' is not null or undefined
        if (searchQuery === null || searchQuery === undefined) {
            throw new Error('Required parameter searchQuery was null or undefined when calling searchAccount.');
        }

        if (searchQuery !== undefined) {
            localVarQueryParameters['search_query'] = ObjectSerializer.serialize(searchQuery, "string");
        }

        if (page !== undefined) {
            localVarQueryParameters['page'] = ObjectSerializer.serialize(page, "number");
        }

        if (pagelen !== undefined) {
            localVarQueryParameters['pagelen'] = ObjectSerializer.serialize(pagelen, "number");
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
            return new Promise<{ response: http.ClientResponse; body: SearchResultPage;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "SearchResultPage");
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
     * 
     * @summary Search for code in the repositories of the specified user
     * @param username The account to search in; either the username or the UUID in curly braces
     * @param searchQuery The search query
     * @param page Which page of the search results to retrieve
     * @param pagelen How many search results to retrieve per page
     */
    public async searchAccount_1 (username: string, searchQuery: string, page?: number, pagelen?: number, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.ClientResponse; body: SearchResultPage;  }> {
        const localVarPath = this.basePath + '/users/{username}/search/code'
            .replace('{' + 'username' + '}', encodeURIComponent(String(username)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'username' is not null or undefined
        if (username === null || username === undefined) {
            throw new Error('Required parameter username was null or undefined when calling searchAccount_1.');
        }

        // verify required parameter 'searchQuery' is not null or undefined
        if (searchQuery === null || searchQuery === undefined) {
            throw new Error('Required parameter searchQuery was null or undefined when calling searchAccount_1.');
        }

        if (searchQuery !== undefined) {
            localVarQueryParameters['search_query'] = ObjectSerializer.serialize(searchQuery, "string");
        }

        if (page !== undefined) {
            localVarQueryParameters['page'] = ObjectSerializer.serialize(page, "number");
        }

        if (pagelen !== undefined) {
            localVarQueryParameters['pagelen'] = ObjectSerializer.serialize(pagelen, "number");
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
            return new Promise<{ response: http.ClientResponse; body: SearchResultPage;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "SearchResultPage");
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