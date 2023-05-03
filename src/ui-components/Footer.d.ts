/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { ContactButtonProps } from "./ContactButton";
import { FooterLinksProps } from "./FooterLinks";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FooterOverridesProps = {
    Footer?: PrimitiveOverrideProps<ViewProps>;
    FooterBackground?: PrimitiveOverrideProps<ViewProps>;
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
    Vector?: PrimitiveOverrideProps<IconProps>;
    FooterContent?: PrimitiveOverrideProps<FlexProps>;
    FooterContentText?: PrimitiveOverrideProps<FlexProps>;
    "Let\u2019s work together"?: PrimitiveOverrideProps<TextProps>;
    "I\u2019m available for freelance work. Have any projects in your mind? Just feel free to contact me"?: PrimitiveOverrideProps<TextProps>;
    ContactButton?: ContactButtonProps;
    FooterBottom?: PrimitiveOverrideProps<FlexProps>;
    FooterDividerLine?: PrimitiveOverrideProps<IconProps>;
    FooterContentBottom?: PrimitiveOverrideProps<FlexProps>;
    "Credit to TemplateJungle/FlatIcon"?: PrimitiveOverrideProps<TextProps>;
    FooterLinks?: FooterLinksProps;
    "Made with Figma, AWS Amplify Studio, and React"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type FooterProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: FooterOverridesProps | undefined | null;
}>;
export default function Footer(props: FooterProps): React.ReactElement;
