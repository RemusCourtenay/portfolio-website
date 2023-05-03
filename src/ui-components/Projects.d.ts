/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ProjectsHeaderProps } from "./ProjectsHeader";
import { ProjectSwapButtonProps } from "./ProjectSwapButton";
import { PortfolioInnerProps } from "./PortfolioInner";
import { FlexProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProjectsOverridesProps = {
    Projects?: PrimitiveOverrideProps<FlexProps>;
    ProjectsHeader?: ProjectsHeaderProps;
    ProjectsMain?: PrimitiveOverrideProps<FlexProps>;
    ProjectSwapButton131727?: ProjectSwapButtonProps;
    PortfolioInner?: PortfolioInnerProps;
    ProjectSwapButton131729?: ProjectSwapButtonProps;
} & EscapeHatchProps;
export declare type ProjectsProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: ProjectsOverridesProps | undefined | null;
}>;
export default function Projects(props: ProjectsProps): React.ReactElement;
