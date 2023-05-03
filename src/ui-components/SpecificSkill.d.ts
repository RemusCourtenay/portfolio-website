/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
import { PersonalIconProps } from "./PersonalIcon";
import { EducationIconProps } from "./EducationIcon";
import { CommercialIconProps } from "./CommercialIcon";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SpecificSkillOverridesProps = {
    SpecificSkill?: PrimitiveOverrideProps<FlexProps>;
    SkillName?: PrimitiveOverrideProps<TextProps>;
    Icons?: PrimitiveOverrideProps<FlexProps>;
    PersonalIcon?: PersonalIconProps;
    EducationIcon?: EducationIconProps;
    CommercialIcon?: CommercialIconProps;
} & EscapeHatchProps;
export declare type SpecificSkillProps = React.PropsWithChildren<Partial<FlexProps> & {
    state?: "Commercial" | "Education" | "None" | "Personal";
} & {
    overrides?: SpecificSkillOverridesProps | undefined | null;
}>;
export default function SpecificSkill(props: SpecificSkillProps): React.ReactElement;
