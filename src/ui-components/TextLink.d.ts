/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
import { SyntheticEvent } from "react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TextLinkOverridesProps = {
    TextLink?: PrimitiveOverrideProps<FlexProps>;
    "Link Text"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type TextLinkProps = React.PropsWithChildren<Partial<FlexProps> & {
    onClickHandler?: (event: SyntheticEvent) => void;
} & {
    focus?: "False" | "True";
    hover?: "False" | "True";
} & {
    overrides?: TextLinkOverridesProps | undefined | null;
}>;
export default function TextLink(props: TextLinkProps): React.ReactElement;
