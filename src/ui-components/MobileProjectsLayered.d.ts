/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { MobileProjectCircleViewProps } from "./MobileProjectCircleView";
import { FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { MobileProjectsHeaderProps } from "./MobileProjectsHeader";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MobileProjectsLayeredOverridesProps = {
    MobileProjectsLayered?: PrimitiveOverrideProps<ViewProps>;
    ProjectsInnerGroup?: PrimitiveOverrideProps<ViewProps>;
    ProjectsAllView?: PrimitiveOverrideProps<FlexProps>;
    ProjectsGroup?: PrimitiveOverrideProps<FlexProps>;
    Project1Group?: PrimitiveOverrideProps<FlexProps>;
    MobileProjectCircleView3851840?: MobileProjectCircleViewProps;
    Project2Group?: PrimitiveOverrideProps<FlexProps>;
    MobileProjectCircleView3851842?: MobileProjectCircleViewProps;
    Project3Group?: PrimitiveOverrideProps<FlexProps>;
    MobileProjectCircleView3851844?: MobileProjectCircleViewProps;
    PortfolioButtonGroup?: PrimitiveOverrideProps<FlexProps>;
    SkillsButton?: PrimitiveOverrideProps<FlexProps>;
    ButtonGroup?: PrimitiveOverrideProps<FlexProps>;
    SkillsButtonText?: PrimitiveOverrideProps<TextProps>;
    ProjectsHeaderGroup?: PrimitiveOverrideProps<ViewProps>;
    MobileProjectsHeader?: MobileProjectsHeaderProps;
} & EscapeHatchProps;
export declare type MobileProjectsLayeredProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: MobileProjectsLayeredOverridesProps | undefined | null;
}>;
export default function MobileProjectsLayered(props: MobileProjectsLayeredProps): React.ReactElement;
