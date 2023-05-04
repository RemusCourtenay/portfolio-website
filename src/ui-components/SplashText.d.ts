/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
import { ContactButtonProps } from "./ContactButton";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SplashTextOverridesProps = {
    SplashText?: PrimitiveOverrideProps<FlexProps>;
    Top?: PrimitiveOverrideProps<FlexProps>;
    Career?: PrimitiveOverrideProps<FlexProps>;
    "Software Engineer"?: PrimitiveOverrideProps<TextProps>;
    Greeting?: PrimitiveOverrideProps<FlexProps>;
    "Hello I\u2019m"?: PrimitiveOverrideProps<TextProps>;
    "Remus Courtenay"?: PrimitiveOverrideProps<TextProps>;
    Bottom?: PrimitiveOverrideProps<FlexProps>;
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque consequat, faucibus et, et. Non semper blandit vitae semper blandit. Tellus dignissim a dui turpis arcu, nulla ullamcorper tincidunt."?: PrimitiveOverrideProps<TextProps>;
    ContactButtonGroup?: PrimitiveOverrideProps<FlexProps>;
    ContactButton?: ContactButtonProps;
} & EscapeHatchProps;
export declare type SplashTextProps = React.PropsWithChildren<Partial<FlexProps> & {
    contactButtonGroup?: React.ReactNode;
} & {
    overrides?: SplashTextOverridesProps | undefined | null;
}>;
export default function SplashText(props: SplashTextProps): React.ReactElement;
