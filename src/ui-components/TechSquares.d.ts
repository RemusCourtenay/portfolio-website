/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ViewProps } from "@aws-amplify/ui-react";
import { TechDividerProps } from "./TechDivider";
import { JavaIconProps } from "./JavaIcon";
import { AngularIconProps } from "./AngularIcon";
import { VueIconProps } from "./VueIcon";
import { TSIconProps } from "./TSIcon";
import { CSharpIconProps } from "./CSharpIcon";
import { GitIconProps } from "./GitIcon";
import { PythonIconProps } from "./PythonIcon";
import { ReactIconProps } from "./ReactIcon";
import { RubyIconProps } from "./RubyIcon";
import { GithubIconProps } from "./GithubIcon";
import { JSIconProps } from "./JSIcon";
import { TerraformIconProps } from "./TerraformIcon";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TechSquaresOverridesProps = {
    TechSquares?: PrimitiveOverrideProps<ViewProps>;
    TechDividerGroup?: PrimitiveOverrideProps<ViewProps>;
    TechDivider?: TechDividerProps;
    IconSquares?: PrimitiveOverrideProps<FlexProps>;
    TopSquares?: PrimitiveOverrideProps<FlexProps>;
    IconGroup1?: PrimitiveOverrideProps<FlexProps>;
    JavaIcon?: JavaIconProps;
    IconGroup2?: PrimitiveOverrideProps<FlexProps>;
    AngularIcon?: AngularIconProps;
    IconGroup3?: PrimitiveOverrideProps<FlexProps>;
    VueIcon?: VueIconProps;
    IconGroup4?: PrimitiveOverrideProps<FlexProps>;
    TSIcon?: TSIconProps;
    IconGroup5?: PrimitiveOverrideProps<FlexProps>;
    CSharpIcon?: CSharpIconProps;
    IconGroup6?: PrimitiveOverrideProps<FlexProps>;
    GitIcon?: GitIconProps;
    BottomSquares?: PrimitiveOverrideProps<FlexProps>;
    IconGroup7?: PrimitiveOverrideProps<FlexProps>;
    PythonIcon?: PythonIconProps;
    IconGroup8?: PrimitiveOverrideProps<FlexProps>;
    ReactIcon?: ReactIconProps;
    IconGroup9?: PrimitiveOverrideProps<FlexProps>;
    RubyIcon?: RubyIconProps;
    IconGroup10?: PrimitiveOverrideProps<FlexProps>;
    GithubIcon?: GithubIconProps;
    IconGroup11?: PrimitiveOverrideProps<FlexProps>;
    JSIcon?: JSIconProps;
    IconGroup12?: PrimitiveOverrideProps<FlexProps>;
    TerraformIcon?: TerraformIconProps;
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
