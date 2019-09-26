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
* A Bitbucket Pipelines NOT_RUN pipeline step result.
*/
export class PipelineStepStateCompletedNotRunAllOf {
    /**
    * The name of the result (NOT_RUN)
    */
    'name'?: PipelineStepStateCompletedNotRunAllOf.NameEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "PipelineStepStateCompletedNotRunAllOf.NameEnum"
        }    ];

    static getAttributeTypeMap() {
        return PipelineStepStateCompletedNotRunAllOf.attributeTypeMap;
    }
}

export namespace PipelineStepStateCompletedNotRunAllOf {
    export enum NameEnum {
        NOTRUN = <any> 'NOT_RUN'
    }
}