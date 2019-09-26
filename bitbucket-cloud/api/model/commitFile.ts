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

import { Commit } from './commit';

/**
* A file object, representing a file at a commit in a repository
*/
export class CommitFile {
    'type': string;
    /**
    * The path in the repository
    */
    'path'?: string;
    'commit'?: Commit;
    'attributes'?: CommitFile.AttributesEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "path",
            "baseName": "path",
            "type": "string"
        },
        {
            "name": "commit",
            "baseName": "commit",
            "type": "Commit"
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "CommitFile.AttributesEnum"
        }    ];

    static getAttributeTypeMap() {
        return CommitFile.attributeTypeMap;
    }
}

export namespace CommitFile {
    export enum AttributesEnum {
        Link = <any> 'link',
        Executable = <any> 'executable',
        Subrepository = <any> 'subrepository',
        Binary = <any> 'binary',
        Lfs = <any> 'lfs'
    }
}
