/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps, ViewProps } from "@aws-amplify/ui-react";
import { ProjectSmallCircleProps } from "./ProjectSmallCircle";
import { SyntheticEvent } from "react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProjectCircleViewOverridesProps = {
    ProjectCircleView?: PrimitiveOverrideProps<ViewProps>;
    BackgroundGroup?: PrimitiveOverrideProps<FlexProps>;
    RedBorderCircle?: PrimitiveOverrideProps<ImageProps>;
    SmallCircleGroup?: PrimitiveOverrideProps<FlexProps>;
    ProjectSmallCircle?: ProjectSmallCircleProps;
} & EscapeHatchProps;
export declare type ProjectCircleViewProps = React.PropsWithChildren<Partial<ViewProps> & {
    backgroundImageSource?: String;
    circleViewClickHandler?: (event: SyntheticEvent) => void;
    smallCircleGroup?: React.ReactNode;
} & {
    overrides?: ProjectCircleViewOverridesProps | undefined | null;
}>;
export default function ProjectCircleView(props: ProjectCircleViewProps): React.ReactElement;
