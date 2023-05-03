/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ProjectLinkProps } from "./ProjectLink";
import { FlexProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProjectLinksOverridesProps = {
    ProjectLinks?: PrimitiveOverrideProps<FlexProps>;
    ProjectLink132811?: ProjectLinkProps;
    ProjectLink74823?: ProjectLinkProps;
    ProjectLink74827?: ProjectLinkProps;
    ProjectLink74829?: ProjectLinkProps;
} & EscapeHatchProps;
export declare type ProjectLinksProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: ProjectLinksOverridesProps | undefined | null;
}>;
export default function ProjectLinks(props: ProjectLinksProps): React.ReactElement;
