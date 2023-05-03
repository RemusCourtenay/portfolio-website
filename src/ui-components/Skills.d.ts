/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { SkillsTextProps } from "./SkillsText";
import { SkillsGraphProps } from "./SkillsGraph";
import { FlexProps, IconProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SkillsOverridesProps = {
    Skills?: PrimitiveOverrideProps<ViewProps>;
    SkillsSplash?: PrimitiveOverrideProps<FlexProps>;
    SkillsText?: SkillsTextProps;
    SkillsGraph?: SkillsGraphProps;
    SkillsBackground?: PrimitiveOverrideProps<ViewProps>;
    "Line 12"?: PrimitiveOverrideProps<IconProps>;
    "Line 14"?: PrimitiveOverrideProps<IconProps>;
    "Line 16"?: PrimitiveOverrideProps<IconProps>;
    "Line 18"?: PrimitiveOverrideProps<IconProps>;
    "Line 13"?: PrimitiveOverrideProps<IconProps>;
    "Line 15"?: PrimitiveOverrideProps<IconProps>;
    "Line 17"?: PrimitiveOverrideProps<IconProps>;
    "Line 19"?: PrimitiveOverrideProps<IconProps>;
    "Ellipse 13"?: PrimitiveOverrideProps<IconProps>;
    "Ellipse 14"?: PrimitiveOverrideProps<IconProps>;
    "Polygon 1"?: PrimitiveOverrideProps<IconProps>;
    "Polygon 2"?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type SkillsProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: SkillsOverridesProps | undefined | null;
}>;
export default function Skills(props: SkillsProps): React.ReactElement;
