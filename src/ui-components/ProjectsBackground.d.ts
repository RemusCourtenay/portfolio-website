/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProjectsBackgroundOverridesProps = {
    ProjectsBackground?: PrimitiveOverrideProps<FlexProps>;
    BackgroundPattern?: PrimitiveOverrideProps<FlexProps>;
    Vector140758?: PrimitiveOverrideProps<IconProps>;
    Vector140759?: PrimitiveOverrideProps<IconProps>;
    Vector140760?: PrimitiveOverrideProps<IconProps>;
    "Ellipse 16"?: PrimitiveOverrideProps<IconProps>;
    "Ellipse 17"?: PrimitiveOverrideProps<IconProps>;
    "Ellipse 15"?: PrimitiveOverrideProps<IconProps>;
    "Ellipse 14"?: PrimitiveOverrideProps<IconProps>;
    "Polygon 2140767"?: PrimitiveOverrideProps<IconProps>;
    "Polygon 3"?: PrimitiveOverrideProps<IconProps>;
    "Polygon 2140769"?: PrimitiveOverrideProps<IconProps>;
    Vector140770?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type ProjectsBackgroundProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: ProjectsBackgroundOverridesProps | undefined | null;
}>;
export default function ProjectsBackground(props: ProjectsBackgroundProps): React.ReactElement;
