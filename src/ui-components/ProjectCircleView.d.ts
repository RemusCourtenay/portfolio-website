/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProjectCircleViewOverridesProps = {
    ProjectCircleView?: PrimitiveOverrideProps<ViewProps>;
    "Mask group"?: PrimitiveOverrideProps<ViewProps>;
    EllipseMask?: PrimitiveOverrideProps<IconProps>;
    ProjectImage?: PrimitiveOverrideProps<ImageProps>;
    BorderEllipse?: PrimitiveOverrideProps<IconProps>;
    ReadMore?: PrimitiveOverrideProps<TextProps>;
    ProjectTitle?: PrimitiveOverrideProps<TextProps>;
    LinkArrow?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type ProjectCircleViewProps = React.PropsWithChildren<Partial<ViewProps> & {
    state?: "Click" | "Default" | "Hover";
} & {
    overrides?: ProjectCircleViewOverridesProps | undefined | null;
}>;
export default function ProjectCircleView(props: ProjectCircleViewProps): React.ReactElement;
