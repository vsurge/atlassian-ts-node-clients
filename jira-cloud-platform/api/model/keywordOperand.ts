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


/**
* An operand that is a JQL keyword. See [Advanced searching - keywords reference](https://confluence.atlassian.com/jiracorecloud/advanced-searching-keywords-reference-765593717.html#Advancedsearching-keywordsreference-EMPTYEMPTY) for more information about operand keywords.
*/
export class KeywordOperand {
    /**
    * The keyword that is the operand value.
    */
    'keyword': KeywordOperand.KeywordEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "keyword",
            "baseName": "keyword",
            "type": "KeywordOperand.KeywordEnum"
        }    ];

    static getAttributeTypeMap() {
        return KeywordOperand.attributeTypeMap;
    }
}

export namespace KeywordOperand {
    export enum KeywordEnum {
        Empty = <any> 'empty'
    }
}