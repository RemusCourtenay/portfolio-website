/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ViewProps } from "@aws-amplify/ui-react";
import { ProjectExpandedBackgroundProps } from "./ProjectExpandedBackground";
import { ProjectSwapButtonProps } from "./ProjectSwapButton";
import { ProjectFullCircleProps } from "./ProjectFullCircle";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProjectsExpandedViewOverridesProps = {
    ProjectsExpandedView?: PrimitiveOverrideProps<ViewProps>;
    BackgroundGroup?: PrimitiveOverrideProps<ViewProps>;
    ProjectExpandedBackground?: ProjectExpandedBackgroundProps;
    ExpandedViewGroup?: PrimitiveOverrideProps<FlexProps>;
    LeftSwapButtonGroup?: PrimitiveOverrideProps<FlexProps>;
    ProjectSwapButton2201968?: ProjectSwapButtonProps;
    ProjectFullCircleGroup?: PrimitiveOverrideProps<FlexProps>;
    ProjectFullCircle?: ProjectFullCircleProps;
    RightSwapButtonGroup?: PrimitiveOverrideProps<FlexProps>;
    ProjectSwapButton2201982?: ProjectSwapButtonProps;
} & EscapeHatchProps;
export declare type ProjectsExpandedViewProps = React.PropsWithChildren<Partial<ViewProps> & {
    projectFullCircleGroup?: React.ReactNode;
    leftSwapButtonGroup?: React.ReactNode;
    rightSwapButtonGroup?: React.ReactNode;
    backgroundGroup?: React.ReactNode;
} & {
    overrides?: ProjectsExpandedViewOverridesProps | undefined | null;
}>;
export default function ProjectsExpandedView(props: ProjectsExpandedViewProps): React.ReactElement;
