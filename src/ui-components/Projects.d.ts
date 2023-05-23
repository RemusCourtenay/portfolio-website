/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ViewProps } from "@aws-amplify/ui-react";
import { ProjectsBackgroundProps } from "./ProjectsBackground";
import { ProjectsHeaderProps } from "./ProjectsHeader";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProjectsOverridesProps = {
    Projects?: PrimitiveOverrideProps<ViewProps>;
    ProjectsBackgroundGroup?: PrimitiveOverrideProps<ViewProps>;
    ProjectsBackground?: ProjectsBackgroundProps;
    ProjectsMainGroup?: PrimitiveOverrideProps<FlexProps>;
    ProjectsHeaderGroup?: PrimitiveOverrideProps<FlexProps>;
    ProjectsHeader?: ProjectsHeaderProps;
    ProjectsInnerGroup?: PrimitiveOverrideProps<FlexProps>;
} & EscapeHatchProps;
export declare type ProjectsProps = React.PropsWithChildren<Partial<ViewProps> & {
    projectsHeaderGroup?: React.ReactNode;
    projectsInnerGroup?: React.ReactNode;
    projectsBackgroundGroup?: React.ReactNode;
} & {
    overrides?: ProjectsOverridesProps | undefined | null;
}>;
export default function Projects(props: ProjectsProps): React.ReactElement;
