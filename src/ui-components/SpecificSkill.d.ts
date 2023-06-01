/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
import { SkillIconProps } from "./SkillIcon";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SpecificSkillOverridesProps = {
    SpecificSkill?: PrimitiveOverrideProps<FlexProps>;
    SkillNameGroup?: PrimitiveOverrideProps<FlexProps>;
    SkillName?: PrimitiveOverrideProps<TextProps>;
    Icons?: PrimitiveOverrideProps<FlexProps>;
    PersonalGroup?: PrimitiveOverrideProps<FlexProps>;
    SkillIcon1791059?: SkillIconProps;
    EducationGroup?: PrimitiveOverrideProps<FlexProps>;
    SkillIcon1791061?: SkillIconProps;
    CommercialGroup?: PrimitiveOverrideProps<FlexProps>;
    SkillIcon1791063?: SkillIconProps;
} & EscapeHatchProps;
export declare type SpecificSkillProps = React.PropsWithChildren<Partial<FlexProps> & {
    personalGroup?: React.ReactNode;
    educationGroup?: React.ReactNode;
    commercialGroup?: React.ReactNode;
    skillName?: String;
} & {
    overrides?: SpecificSkillOverridesProps | undefined | null;
}>;
export default function SpecificSkill(props: SpecificSkillProps): React.ReactElement;
