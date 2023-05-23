/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps } from "@aws-amplify/ui-react";
import { ProjectLinkProps } from "./ProjectLink";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProjectLinksOverridesProps = {
    ProjectLinks?: PrimitiveOverrideProps<FlexProps>;
    AllLinkGroup?: PrimitiveOverrideProps<FlexProps>;
    ProjectLink132811?: ProjectLinkProps;
    Project1LinkGroup?: PrimitiveOverrideProps<FlexProps>;
    ProjectLink74823?: ProjectLinkProps;
    Project2LinkGroup?: PrimitiveOverrideProps<FlexProps>;
    ProjectLink2212309?: ProjectLinkProps;
    Project3LinkGroup?: PrimitiveOverrideProps<FlexProps>;
    ProjectLink74829?: ProjectLinkProps;
} & EscapeHatchProps;
export declare type ProjectLinksProps = React.PropsWithChildren<Partial<FlexProps> & {
    allLinkGroup?: React.ReactNode;
    project1LinkGroup?: React.ReactNode;
    project3LinkGroup?: React.ReactNode;
    project2LinkGroup?: React.ReactNode;
} & {
    overrides?: ProjectLinksOverridesProps | undefined | null;
}>;
export default function ProjectLinks(props: ProjectLinksProps): React.ReactElement;
