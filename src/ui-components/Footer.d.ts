/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FooterOverridesProps = {
    Footer?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 113"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 102"?: PrimitiveOverrideProps<ViewProps>;
    "bg pattern"?: PrimitiveOverrideProps<ViewProps>;
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
    "\u00A9 2021 Templates Jungle. All rights reserved"?: PrimitiveOverrideProps<TextProps>;
    "\uF231\uF243\uF350\uF2B1\uF22D\uF24D"?: PrimitiveOverrideProps<TextProps>;
    "Line 11"?: PrimitiveOverrideProps<IconProps>;
    "contact me btn"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 38"?: PrimitiveOverrideProps<ViewProps>;
    "Contact me"?: PrimitiveOverrideProps<TextProps>;
    "I\u2019m available for freelance work. Have any projects in your mind? Just feel free to contact me"?: PrimitiveOverrideProps<TextProps>;
    "Let\u2019s work together"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type FooterProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: FooterOverridesProps | undefined | null;
}>;
export default function Footer(props: FooterProps): React.ReactElement;
