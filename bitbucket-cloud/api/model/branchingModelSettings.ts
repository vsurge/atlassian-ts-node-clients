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

import { BranchingModelSettingsAllOf } from './branchingModelSettingsAllOf';
import { BranchingModelSettingsAllOfBranchTypes } from './branchingModelSettingsAllOfBranchTypes';
import { BranchingModelSettingsAllOfDevelopment } from './branchingModelSettingsAllOfDevelopment';
import { BranchingModelSettingsAllOfProduction } from './branchingModelSettingsAllOfProduction';
import { MilestoneAllOfLinks } from './milestoneAllOfLinks';
import { ModelObject } from './modelObject';

export class BranchingModelSettings extends ModelObject {
    'links'?: MilestoneAllOfLinks;
    'branchTypes'?: Array<BranchingModelSettingsAllOfBranchTypes>;
    'development'?: BranchingModelSettingsAllOfDevelopment;
    'production'?: BranchingModelSettingsAllOfProduction;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "links",
            "baseName": "links",
            "type": "MilestoneAllOfLinks"
        },
        {
            "name": "branchTypes",
            "baseName": "branch_types",
            "type": "Array<BranchingModelSettingsAllOfBranchTypes>"
        },
        {
            "name": "development",
            "baseName": "development",
            "type": "BranchingModelSettingsAllOfDevelopment"
        },
        {
            "name": "production",
            "baseName": "production",
            "type": "BranchingModelSettingsAllOfProduction"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(BranchingModelSettings.attributeTypeMap);
    }
}
