/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
import { SkillsButtonProps } from "./SkillsButton";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SkillsTextOverridesProps = {
    SkillsText?: PrimitiveOverrideProps<FlexProps>;
    SkillsTextGroup?: PrimitiveOverrideProps<FlexProps>;
    "Why Hire Me?"?: PrimitiveOverrideProps<TextProps>;
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dapib eu placerat at nisl posuere aliquet amet pharetra malesuada. Spendisse nisl ac at tortor. Sit faucibus suspendisse risus. Vulputate pulvinar cursus suspendisse risus vulputate enim pharetra eu. Tetur adipiscing elit eu placera."?: PrimitiveOverrideProps<TextProps>;
    CvButtonGroup?: PrimitiveOverrideProps<FlexProps>;
    SkillsButton?: SkillsButtonProps;
} & EscapeHatchProps;
export declare type SkillsTextProps = React.PropsWithChildren<Partial<FlexProps> & {
    cvButtonGroup?: React.ReactNode;
    skillsBlurbText?: String;
} & {
    overrides?: SkillsTextOverridesProps | undefined | null;
}>;
export default function SkillsText(props: SkillsTextProps): React.ReactElement;
