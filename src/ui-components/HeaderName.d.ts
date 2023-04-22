/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HeaderNameOverridesProps = {
    HeaderName?: PrimitiveOverrideProps<FlexProps>;
    HeaderNameText?: PrimitiveOverrideProps<TextProps>;
    "Red Dot"?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type HeaderNameProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: HeaderNameOverridesProps | undefined | null;
}>;
export default function HeaderName(props: HeaderNameProps): React.ReactElement;
