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

import { CommitFile } from './commitFile';

/**
* A paginated list of commit_file objects.
*/
export class PaginatedFiles {
    /**
    * Total number of objects in the response. This is an optional element that is not provided in all responses, as it can be expensive to compute.
    */
    'size'?: number;
    /**
    * Page number of the current results. This is an optional element that is not provided in all responses.
    */
    'page'?: number;
    /**
    * Current number of objects on the existing page. The default value is 10 with 100 being the maximum allowed value. Individual APIs may enforce different values.
    */
    'pagelen'?: number;
    /**
    * Link to the next page if it exists. The last page of a collection does not have this value. Use this link to navigate the result set and refrain from constructing your own URLs.
    */
    'next'?: string;
    /**
    * Link to previous page if it exists. A collections first page does not have this value. This is an optional element that is not provided in all responses. Some result sets strictly support forward navigation and never provide previous links. Clients must anticipate that backwards navigation is not always available. Use this link to navigate the result set and refrain from constructing your own URLs.
    */
    'previous'?: string;
    'values'?: Array<CommitFile>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "size",
            "baseName": "size",
            "type": "number"
        },
        {
            "name": "page",
            "baseName": "page",
            "type": "number"
        },
        {
            "name": "pagelen",
            "baseName": "pagelen",
            "type": "number"
        },
        {
            "name": "next",
            "baseName": "next",
            "type": "string"
        },
        {
            "name": "previous",
            "baseName": "previous",
            "type": "string"
        },
        {
            "name": "values",
            "baseName": "values",
            "type": "Array<CommitFile>"
        }    ];

    static getAttributeTypeMap() {
        return PaginatedFiles.attributeTypeMap;
    }
}

