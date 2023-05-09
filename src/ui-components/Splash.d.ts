/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ImageProps, ViewProps } from "@aws-amplify/ui-react";
import { SplashTextProps } from "./SplashText";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SplashOverridesProps = {
    Splash?: PrimitiveOverrideProps<ViewProps>;
    "Background Group"?: PrimitiveOverrideProps<ViewProps>;
    "Background Pattern Intro"?: PrimitiveOverrideProps<ImageProps>;
    "Mask Group"?: PrimitiveOverrideProps<ViewProps>;
    Face?: PrimitiveOverrideProps<ImageProps>;
    SplashTextGroup?: PrimitiveOverrideProps<ViewProps>;
    SplashText?: SplashTextProps;
} & EscapeHatchProps;
export declare type SplashProps = React.PropsWithChildren<Partial<ViewProps> & {
    splashTextGroup?: React.ReactNode;
    faceImage?: String;
    backgroundShapesSource?: String;
} & {
    overrides?: SplashOverridesProps | undefined | null;
}>;
export default function Splash(props: SplashProps): React.ReactElement;
