/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type JSIconOverridesProps = {
    JSIcon?: PrimitiveOverrideProps<FlexProps>;
    ColorIcon?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type JSIconProps = React.PropsWithChildren<Partial<FlexProps> & {
    focus?: "False" | "True";
} & {
    overrides?: JSIconOverridesProps | undefined | null;
}>;
export default function JSIcon(props: JSIconProps): React.ReactElement;
