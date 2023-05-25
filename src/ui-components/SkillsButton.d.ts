/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SkillsButtonOverridesProps = {
    SkillsButton?: PrimitiveOverrideProps<FlexProps>;
    ButtonGroup?: PrimitiveOverrideProps<FlexProps>;
    SkillsButtonText?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type SkillsButtonProps = React.PropsWithChildren<Partial<FlexProps> & {
    buttonText?: String;
} & {
    state?: "Click" | "Default" | "Hover";
} & {
    overrides?: SkillsButtonOverridesProps | undefined | null;
}>;
export default function SkillsButton(props: SkillsButtonProps): React.ReactElement;
