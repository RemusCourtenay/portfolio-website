/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
import { MobileSpecificSkillProps } from "./MobileSpecificSkill";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MobileSkillsGraphOverridesProps = {
    MobileSkillsGraph?: PrimitiveOverrideProps<FlexProps>;
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
    Skill1Group?: PrimitiveOverrideProps<FlexProps>;
    MobileSpecificSkill1?: MobileSpecificSkillProps;
    Skill2Group?: PrimitiveOverrideProps<FlexProps>;
    MobileSpecificSkill2?: MobileSpecificSkillProps;
    Skill3Group?: PrimitiveOverrideProps<FlexProps>;
    MobileSpecificSkill3?: MobileSpecificSkillProps;
    Skill4Group?: PrimitiveOverrideProps<FlexProps>;
    MobileSpecificSkill4?: MobileSpecificSkillProps;
    Skill5Group?: PrimitiveOverrideProps<FlexProps>;
    MobileSpecificSkill5?: MobileSpecificSkillProps;
} & EscapeHatchProps;
export declare type MobileSkillsGraphProps = React.PropsWithChildren<Partial<FlexProps> & {
    skill1Group?: React.ReactNode;
    skill2Group?: React.ReactNode;
    skill3Group?: React.ReactNode;
    skill4Group?: React.ReactNode;
    skill5Group?: React.ReactNode;
} & {
    overrides?: MobileSkillsGraphOverridesProps | undefined | null;
}>;
export default function MobileSkillsGraph(props: MobileSkillsGraphProps): React.ReactElement;
