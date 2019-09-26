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

import { DeploymentEnvironment } from './deploymentEnvironment';
import { DeploymentRelease } from './deploymentRelease';
import { DeploymentState } from './deploymentState';

/**
* A Bitbucket Deployment.
*/
export class DeploymentAllOf {
    /**
    * The UUID identifying the deployment.
    */
    'uuid'?: string;
    'state'?: DeploymentState;
    'environment'?: DeploymentEnvironment;
    'release'?: DeploymentRelease;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "uuid",
            "baseName": "uuid",
            "type": "string"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "DeploymentState"
        },
        {
            "name": "environment",
            "baseName": "environment",
            "type": "DeploymentEnvironment"
        },
        {
            "name": "release",
            "baseName": "release",
            "type": "DeploymentRelease"
        }    ];

    static getAttributeTypeMap() {
        return DeploymentAllOf.attributeTypeMap;
    }
}
