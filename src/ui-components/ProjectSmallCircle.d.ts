/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProjectSmallCircleOverridesProps = {
    ProjectSmallCircle?: PrimitiveOverrideProps<ViewProps>;
    ImageGroup?: PrimitiveOverrideProps<FlexProps>;
    ProjectImage?: PrimitiveOverrideProps<ImageProps>;
    MaskGroup?: PrimitiveOverrideProps<FlexProps>;
    EllipseMask?: PrimitiveOverrideProps<IconProps>;
    ReadMore?: PrimitiveOverrideProps<TextProps>;
    ProjectTitle?: PrimitiveOverrideProps<TextProps>;
    LinkArrow?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type ProjectSmallCircleProps = React.PropsWithChildren<Partial<ViewProps> & {
    imageGroup?: React.ReactNode;
    projectImageSource?: String;
    projectTitle?: String;
} & {
    state?: "Click" | "Default" | "Hover";
} & {
    overrides?: ProjectSmallCircleOverridesProps | undefined | null;
}>;
export default function ProjectSmallCircle(props: ProjectSmallCircleProps): React.ReactElement;
