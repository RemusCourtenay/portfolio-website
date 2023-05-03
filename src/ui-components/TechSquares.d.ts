/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TechDividerProps } from "./TechDivider";
import { JavaIconProps } from "./JavaIcon";
import { AngularIconProps } from "./AngularIcon";
import { VueIconProps } from "./VueIcon";
import { TSIconProps } from "./TSIcon";
import { CSharpIconProps } from "./CSharpIcon";
import { GitIconProps } from "./GitIcon";
import { FlexProps, ViewProps } from "@aws-amplify/ui-react";
import { PythonIconProps } from "./PythonIcon";
import { ReactIconProps } from "./ReactIcon";
import { RubyIconProps } from "./RubyIcon";
import { GithubIconProps } from "./GithubIcon";
import { JSIconProps } from "./JSIcon";
import { TerraformIconProps } from "./TerraformIcon";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TechSquaresOverridesProps = {
    TechSquares?: PrimitiveOverrideProps<ViewProps>;
    TechDivider?: TechDividerProps;
    IconSquares?: PrimitiveOverrideProps<FlexProps>;
    TopSquares?: PrimitiveOverrideProps<FlexProps>;
    JavaIcon?: JavaIconProps;
    AngularIcon?: AngularIconProps;
    VueIcon?: VueIconProps;
    TSIcon?: TSIconProps;
    CSharpIcon?: CSharpIconProps;
    GitIcon?: GitIconProps;
    BottomSquares?: PrimitiveOverrideProps<FlexProps>;
    PythonIcon?: PythonIconProps;
    ReactIcon?: ReactIconProps;
    RubyIcon?: RubyIconProps;
    GithubIcon?: GithubIconProps;
    JSIcon?: JSIconProps;
    TerraformIcon?: TerraformIconProps;
} & EscapeHatchProps;
export declare type TechSquaresProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: TechSquaresOverridesProps | undefined | null;
}>;
export default function TechSquares(props: TechSquaresProps): React.ReactElement;
