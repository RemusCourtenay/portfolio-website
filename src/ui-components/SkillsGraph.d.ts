/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
import { SpecificSkillProps } from "./SpecificSkill";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SkillsGraphOverridesProps = {
    SkillsGraph?: PrimitiveOverrideProps<FlexProps>;
    "My Skills"?: PrimitiveOverrideProps<TextProps>;
    SkillsGroup?: PrimitiveOverrideProps<FlexProps>;
    LabelTextGroup?: PrimitiveOverrideProps<FlexProps>;
    ExperienceTitles?: PrimitiveOverrideProps<FlexProps>;
    Header1Group?: PrimitiveOverrideProps<FlexProps>;
    Personal?: PrimitiveOverrideProps<TextProps>;
    Header2Group?: PrimitiveOverrideProps<FlexProps>;
    Educational?: PrimitiveOverrideProps<TextProps>;
    Header3Group?: PrimitiveOverrideProps<FlexProps>;
    Commercial?: PrimitiveOverrideProps<TextProps>;
    skill1Group?: PrimitiveOverrideProps<FlexProps>;
    SpecificSkill1791995?: SpecificSkillProps;
    skill2Group?: PrimitiveOverrideProps<FlexProps>;
    SpecificSkill1792031?: SpecificSkillProps;
    skill3Group?: PrimitiveOverrideProps<FlexProps>;
    SpecificSkill1792091?: SpecificSkillProps;
    skill4Group?: PrimitiveOverrideProps<FlexProps>;
    SpecificSkill1792175?: SpecificSkillProps;
    skill5Group?: PrimitiveOverrideProps<FlexProps>;
    SpecificSkill1792283?: SpecificSkillProps;
} & EscapeHatchProps;
export declare type SkillsGraphProps = React.PropsWithChildren<Partial<FlexProps> & {
    skill1Group?: React.ReactNode;
    skill2Group?: React.ReactNode;
    skill3Group?: React.ReactNode;
    skill4Group?: React.ReactNode;
    skill5Group?: React.ReactNode;
} & {
    overrides?: SkillsGraphOverridesProps | undefined | null;
}>;
export default function SkillsGraph(props: SkillsGraphProps): React.ReactElement;
