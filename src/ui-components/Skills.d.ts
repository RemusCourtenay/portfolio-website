/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps, ViewProps } from "@aws-amplify/ui-react";
import { SkillsTextProps } from "./SkillsText";
import { SkillsGraphProps } from "./SkillsGraph";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SkillsOverridesProps = {
    Skills?: PrimitiveOverrideProps<ViewProps>;
    BackgroundShapesGroup?: PrimitiveOverrideProps<FlexProps>;
    SkillsBackgroundShapes?: PrimitiveOverrideProps<ImageProps>;
    SkillsSplash?: PrimitiveOverrideProps<FlexProps>;
    SkillsTextGroup?: PrimitiveOverrideProps<FlexProps>;
    SkillsText?: SkillsTextProps;
    SkillsGraphGroup?: PrimitiveOverrideProps<FlexProps>;
    SkillsGraph?: SkillsGraphProps;
} & EscapeHatchProps;
export declare type SkillsProps = React.PropsWithChildren<Partial<ViewProps> & {
    skillsGraphGroup?: React.ReactNode;
    skillsTextGroup?: React.ReactNode;
    backgroundShapesSource?: String;
} & {
    overrides?: SkillsOverridesProps | undefined | null;
}>;
export default function Skills(props: SkillsProps): React.ReactElement;
