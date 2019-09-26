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


/**
* A Pipelines known host public key.
*/
export class PipelineSshPublicKeyAllOf {
    /**
    * The type of the public key.
    */
    'keyType'?: string;
    /**
    * The base64 encoded public key.
    */
    'key'?: string;
    /**
    * The MD5 fingerprint of the public key.
    */
    'md5Fingerprint'?: string;
    /**
    * The SHA-256 fingerprint of the public key.
    */
    'sha256Fingerprint'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "keyType",
            "baseName": "key_type",
            "type": "string"
        },
        {
            "name": "key",
            "baseName": "key",
            "type": "string"
        },
        {
            "name": "md5Fingerprint",
            "baseName": "md5_fingerprint",
            "type": "string"
        },
        {
            "name": "sha256Fingerprint",
            "baseName": "sha256_fingerprint",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return PipelineSshPublicKeyAllOf.attributeTypeMap;
    }
}

