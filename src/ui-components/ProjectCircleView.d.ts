/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { SyntheticEvent } from "react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProjectCircleViewOverridesProps = {
    ProjectCircleView?: PrimitiveOverrideProps<ViewProps>;
    BackgroundGroup?: PrimitiveOverrideProps<FlexProps>;
    RedBorderCircle?: PrimitiveOverrideProps<ImageProps>;
    ImageGroup?: PrimitiveOverrideProps<FlexProps>;
    ProjectImage?: PrimitiveOverrideProps<ImageProps>;
    MaskGroup?: PrimitiveOverrideProps<FlexProps>;
    EllipseMask?: PrimitiveOverrideProps<IconProps>;
    ReadMore?: PrimitiveOverrideProps<TextProps>;
    ProjectTitle?: PrimitiveOverrideProps<TextProps>;
    LinkArrow?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type ProjectCircleViewProps = React.PropsWithChildren<Partial<ViewProps> & {
    projectTitle?: String;
    projectImageSource?: String;
    circleViewClickHandler?: (event: SyntheticEvent) => void;
    backgroundGroup?: React.ReactNode;
    backgroundImageSource?: String;
} & {
    state?: "Click" | "Default" | "Hover";
} & {
    overrides?: ProjectCircleViewOverridesProps | undefined | null;
}>;
export default function ProjectCircleView(props: ProjectCircleViewProps): React.ReactElement;
