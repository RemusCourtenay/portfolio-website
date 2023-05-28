/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ViewProps } from "@aws-amplify/ui-react";
import { TechDividerProps } from "./TechDivider";
import { TechIconProps } from "./TechIcon";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TechSquaresOverridesProps = {
    TechSquares?: PrimitiveOverrideProps<ViewProps>;
    TechDividerGroup?: PrimitiveOverrideProps<ViewProps>;
    TechDivider?: TechDividerProps;
    IconSquares?: PrimitiveOverrideProps<FlexProps>;
    TopSquares?: PrimitiveOverrideProps<FlexProps>;
    IconGroup1?: PrimitiveOverrideProps<FlexProps>;
    TechIcon2871247?: TechIconProps;
    IconGroup2?: PrimitiveOverrideProps<FlexProps>;
    TechIcon2871333?: TechIconProps;
    IconGroup3?: PrimitiveOverrideProps<FlexProps>;
    TechIcon2871419?: TechIconProps;
    IconGroup4?: PrimitiveOverrideProps<FlexProps>;
    TechIcon2871648?: TechIconProps;
    IconGroup5?: PrimitiveOverrideProps<FlexProps>;
    TechIcon2871734?: TechIconProps;
    IconGroup6?: PrimitiveOverrideProps<FlexProps>;
    TechIcon2871820?: TechIconProps;
    BottomSquares?: PrimitiveOverrideProps<FlexProps>;
    IconGroup7?: PrimitiveOverrideProps<FlexProps>;
    TechIcon2871906?: TechIconProps;
    IconGroup8?: PrimitiveOverrideProps<FlexProps>;
    TechIcon2871992?: TechIconProps;
    IconGroup9?: PrimitiveOverrideProps<FlexProps>;
    TechIcon2872078?: TechIconProps;
    IconGroup10?: PrimitiveOverrideProps<FlexProps>;
    TechIcon2872164?: TechIconProps;
    IconGroup11?: PrimitiveOverrideProps<FlexProps>;
    TechIcon2872250?: TechIconProps;
    IconGroup12?: PrimitiveOverrideProps<FlexProps>;
    TechIcon2872336?: TechIconProps;
} & EscapeHatchProps;
export declare type TechSquaresProps = React.PropsWithChildren<Partial<ViewProps> & {
    techDividerGroup?: React.ReactNode;
    iconGroup1?: React.ReactNode;
    iconGroup2?: React.ReactNode;
    iconGroup3?: React.ReactNode;
    iconGroup4?: React.ReactNode;
    iconGroup5?: React.ReactNode;
    iconGroup6?: React.ReactNode;
    iconGroup7?: React.ReactNode;
    iconGroup8?: React.ReactNode;
    iconGroup9?: React.ReactNode;
    iconGroup10?: React.ReactNode;
    iconGroup11?: React.ReactNode;
    iconGroup12?: React.ReactNode;
} & {
    overrides?: TechSquaresOverridesProps | undefined | null;
}>;
export default function TechSquares(props: TechSquaresProps): React.ReactElement;
