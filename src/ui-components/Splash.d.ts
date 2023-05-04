/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, ImageProps, ViewProps } from "@aws-amplify/ui-react";
import { SplashTextProps } from "./SplashText";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SplashOverridesProps = {
    Splash?: PrimitiveOverrideProps<ViewProps>;
    "Mask Group"?: PrimitiveOverrideProps<ViewProps>;
    "Background Pattern"?: PrimitiveOverrideProps<ViewProps>;
    "Line 12"?: PrimitiveOverrideProps<IconProps>;
    "Line 14"?: PrimitiveOverrideProps<IconProps>;
    "Line 16"?: PrimitiveOverrideProps<IconProps>;
    "Line 18"?: PrimitiveOverrideProps<IconProps>;
    "Line 13"?: PrimitiveOverrideProps<IconProps>;
    "Line 15"?: PrimitiveOverrideProps<IconProps>;
    "Line 17"?: PrimitiveOverrideProps<IconProps>;
    "Line 19"?: PrimitiveOverrideProps<IconProps>;
    "Ellipse 13"?: PrimitiveOverrideProps<IconProps>;
    "Ellipse 16"?: PrimitiveOverrideProps<IconProps>;
    "Ellipse 15"?: PrimitiveOverrideProps<IconProps>;
    "Ellipse 14"?: PrimitiveOverrideProps<IconProps>;
    "Polygon 1"?: PrimitiveOverrideProps<IconProps>;
    "Polygon 2"?: PrimitiveOverrideProps<IconProps>;
    "Ellipse Middle"?: PrimitiveOverrideProps<IconProps>;
    "Ellipse Top Right"?: PrimitiveOverrideProps<IconProps>;
    "Ellipse Bottom Left"?: PrimitiveOverrideProps<IconProps>;
    Face?: PrimitiveOverrideProps<ImageProps>;
    SplashTextGroup?: PrimitiveOverrideProps<ViewProps>;
    SplashText?: SplashTextProps;
} & EscapeHatchProps;
export declare type SplashProps = React.PropsWithChildren<Partial<ViewProps> & {
    splashTextGroup?: React.ReactNode;
    faceImage?: String;
} & {
    overrides?: SplashOverridesProps | undefined | null;
}>;
export default function Splash(props: SplashProps): React.ReactElement;
