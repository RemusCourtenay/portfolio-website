/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { MobileProjectCircleViewProps } from "./MobileProjectCircleView";
import { MobileProjectsHeaderProps } from "./MobileProjectsHeader";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MobileProjectsOverridesProps = {
    MobileProjects?: PrimitiveOverrideProps<ViewProps>;
    ProjectsInnerGroup?: PrimitiveOverrideProps<ViewProps>;
    ProjectsAllView?: PrimitiveOverrideProps<FlexProps>;
    ProjectsGroup?: PrimitiveOverrideProps<FlexProps>;
    Project1Group?: PrimitiveOverrideProps<FlexProps>;
    MobileProjectCircleView3851748?: MobileProjectCircleViewProps;
    Project2Group?: PrimitiveOverrideProps<FlexProps>;
    MobileProjectCircleView3851760?: MobileProjectCircleViewProps;
    Project3Group?: PrimitiveOverrideProps<FlexProps>;
    MobileProjectCircleView3851772?: MobileProjectCircleViewProps;
    PortfolioButtonGroup?: PrimitiveOverrideProps<FlexProps>;
    SkillsButton?: PrimitiveOverrideProps<FlexProps>;
    ButtonGroup?: PrimitiveOverrideProps<FlexProps>;
    SkillsButtonText?: PrimitiveOverrideProps<TextProps>;
    ProjectsHeaderGroup?: PrimitiveOverrideProps<ViewProps>;
    MobileProjectsHeader?: MobileProjectsHeaderProps;
} & EscapeHatchProps;
export declare type MobileProjectsProps = React.PropsWithChildren<Partial<ViewProps> & {
    projectsHeaderGroup?: React.ReactNode;
    projectsInnerGroup?: React.ReactNode;
} & {
    overrides?: MobileProjectsOverridesProps | undefined | null;
}>;
export default function MobileProjects(props: MobileProjectsProps): React.ReactElement;
