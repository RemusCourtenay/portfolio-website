/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
    "Connect with me to stay updated with my latest projects and software engineering adventures. Feel free to reach out for collaborations, discussions, or just to say hello!"?: PrimitiveOverrideProps<TextProps>;
    ContactButtonGroup?: PrimitiveOverrideProps<FlexProps>;
    ContactButton?: ContactButtonProps;
    FooterBottom?: PrimitiveOverrideProps<FlexProps>;
    FooterDividerLine?: PrimitiveOverrideProps<ImageProps>;
    FooterContentBottom?: PrimitiveOverrideProps<FlexProps>;
    "Design Credit to Chloe Marer & TemplateJungle"?: PrimitiveOverrideProps<TextProps>;
    FooterLinksGroup?: PrimitiveOverrideProps<FlexProps>;
    FooterLinks?: FooterLinksProps;
    "Made with Figma, AWS Amplify Studio, and React"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type FooterProps = React.PropsWithChildren<Partial<ViewProps> & {
    backgroundShapesSource?: String;
    contactButtonGroup?: React.ReactNode;
    footerLinksGroup?: React.ReactNode;
    footerBackgroundGroup?: React.ReactNode;
    chloeCreditLink?: String;
    footerDividerLineSource?: String;
} & {
    overrides?: FooterOverridesProps | undefined | null;
}>;
export default function Footer(props: FooterProps): React.ReactElement;
