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
    SpecificSkill55651?: SpecificSkillProps;
    SpecificSkill56694?: SpecificSkillProps;
    SpecificSkill55663?: SpecificSkillProps;
    SpecificSkill55675?: SpecificSkillProps;
    SpecificSkill55687?: SpecificSkillProps;
} & EscapeHatchProps;
export declare type SkillsGraphProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: SkillsGraphOverridesProps | undefined | null;
}>;
export default function SkillsGraph(props: SkillsGraphProps): React.ReactElement;
