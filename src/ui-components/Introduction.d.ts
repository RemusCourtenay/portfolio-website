/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ViewProps } from "@aws-amplify/ui-react";
import { SplashProps } from "./Splash";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type IntroductionOverridesProps = {
    Introduction?: PrimitiveOverrideProps<ViewProps>;
    SplashGroup?: PrimitiveOverrideProps<ViewProps>;
    Splash?: SplashProps;
} & EscapeHatchProps;
export declare type IntroductionProps = React.PropsWithChildren<Partial<ViewProps> & {
    splashGroup?: React.ReactNode;
    headerGroup?: React.ReactNode;
} & {
    overrides?: IntroductionOverridesProps | undefined | null;
}>;
export default function Introduction(props: IntroductionProps): React.ReactElement;
