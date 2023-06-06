/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
import { MobileSkillIconProps } from "./MobileSkillIcon";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MobileSpecificSkillOverridesProps = {
    MobileSpecificSkill?: PrimitiveOverrideProps<FlexProps>;
    SkillNameGroup?: PrimitiveOverrideProps<FlexProps>;
    SkillName?: PrimitiveOverrideProps<TextProps>;
    Icons?: PrimitiveOverrideProps<FlexProps>;
    PersonalSkillIcon?: MobileSkillIconProps;
    EducationalSkillIcon?: MobileSkillIconProps;
    CommercialSkillIcon?: MobileSkillIconProps;
} & EscapeHatchProps;
export declare type MobileSpecificSkillProps = React.PropsWithChildren<Partial<FlexProps> & {
    skillName?: String;
} & {
    overrides?: MobileSpecificSkillOverridesProps | undefined | null;
}>;
export default function MobileSpecificSkill(props: MobileSpecificSkillProps): React.ReactElement;
