/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { ContactButtonProps } from "./ContactButton";
import { FooterLinksProps } from "./FooterLinks";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FooterOverridesProps = {
    Footer?: PrimitiveOverrideProps<ViewProps>;
    FooterBackgroundGroup?: PrimitiveOverrideProps<FlexProps>;
    FooterBackground?: PrimitiveOverrideProps<ImageProps>;
    FooterContent?: PrimitiveOverrideProps<FlexProps>;
    FooterContentText?: PrimitiveOverrideProps<FlexProps>;
    "Let\u2019s work together"?: PrimitiveOverrideProps<TextProps>;
    "I\u2019m available for freelance work. Have any projects in your mind? Just feel free to contact me"?: PrimitiveOverrideProps<TextProps>;
    ContactButtonGroup?: PrimitiveOverrideProps<FlexProps>;
    ContactButton?: ContactButtonProps;
    FooterBottom?: PrimitiveOverrideProps<FlexProps>;
    FooterDividerLine?: PrimitiveOverrideProps<IconProps>;
    FooterContentBottom?: PrimitiveOverrideProps<FlexProps>;
    "Credit to TemplateJungle/FlatIcon"?: PrimitiveOverrideProps<TextProps>;
    FooterLinksGroup?: PrimitiveOverrideProps<FlexProps>;
    FooterLinks?: FooterLinksProps;
    "Made with Figma, AWS Amplify Studio, and React"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type FooterProps = React.PropsWithChildren<Partial<ViewProps> & {
    backgroundShapesSource?: String;
    contactButtonGroup?: React.ReactNode;
    footerLinksGroup?: React.ReactNode;
} & {
    overrides?: FooterOverridesProps | undefined | null;
}>;
export default function Footer(props: FooterProps): React.ReactElement;
