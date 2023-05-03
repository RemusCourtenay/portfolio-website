/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { HeaderNameProps } from "./HeaderName";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HeaderOverridesProps = {
    Header?: PrimitiveOverrideProps<FlexProps>;
    HeaderName?: HeaderNameProps;
    NavigationLinks?: PrimitiveOverrideProps<FlexProps>;
    Home?: PrimitiveOverrideProps<FlexProps>;
    "Link Text451209"?: PrimitiveOverrideProps<TextProps>;
    Skills?: PrimitiveOverrideProps<FlexProps>;
    "Link Text451241"?: PrimitiveOverrideProps<TextProps>;
    Projects?: PrimitiveOverrideProps<FlexProps>;
    "Link Text451273"?: PrimitiveOverrideProps<TextProps>;
    Experience?: PrimitiveOverrideProps<FlexProps>;
    "Link Text451305"?: PrimitiveOverrideProps<TextProps>;
    Contact?: PrimitiveOverrideProps<FlexProps>;
    "Link Text451337"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type HeaderProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: HeaderOverridesProps | undefined | null;
}>;
export default function Header(props: HeaderProps): React.ReactElement;
