/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { MobileSkillsTextProps } from "./MobileSkillsText";
import { FlexProps } from "@aws-amplify/ui-react";
import { MobileSkillsGraphProps } from "./MobileSkillsGraph";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MobileSkillsOverridesProps = {
    MobileSkills?: PrimitiveOverrideProps<FlexProps>;
    MobileSkillsText?: MobileSkillsTextProps;
    MobileSkillsGraphGroup?: PrimitiveOverrideProps<FlexProps>;
    MobileSkillsGraph?: MobileSkillsGraphProps;
} & EscapeHatchProps;
export declare type MobileSkillsProps = React.PropsWithChildren<Partial<FlexProps> & {
    mobileSkillsGraphGroup?: React.ReactNode;
} & {
    overrides?: MobileSkillsOverridesProps | undefined | null;
}>;
export default function MobileSkills(props: MobileSkillsProps): React.ReactElement;
