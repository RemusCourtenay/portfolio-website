/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ViewProps } from "@aws-amplify/ui-react";
import { SkillsButtonProps } from "./SkillsButton";
import { ProjectCircleViewProps } from "./ProjectCircleView";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProjectsAllViewOverridesProps = {
    ProjectsAllView?: PrimitiveOverrideProps<ViewProps>;
    PortfolioButtonGroup?: PrimitiveOverrideProps<FlexProps>;
    SkillsButton?: SkillsButtonProps;
    Project3Group?: PrimitiveOverrideProps<ViewProps>;
    ProjectCircleView220965?: ProjectCircleViewProps;
    Project2Group?: PrimitiveOverrideProps<ViewProps>;
    ProjectCircleView220973?: ProjectCircleViewProps;
    Project1Group?: PrimitiveOverrideProps<ViewProps>;
    ProjectCircleView220981?: ProjectCircleViewProps;
} & EscapeHatchProps;
export declare type ProjectsAllViewProps = React.PropsWithChildren<Partial<ViewProps> & {
    project1Group?: React.ReactNode;
    project2Group?: React.ReactNode;
    project3Group?: React.ReactNode;
    portfolioButtonGroup?: React.ReactNode;
} & {
    overrides?: ProjectsAllViewOverridesProps | undefined | null;
}>;
export default function ProjectsAllView(props: ProjectsAllViewProps): React.ReactElement;
