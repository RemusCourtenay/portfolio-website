/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
import { ProjectLinksProps } from "./ProjectLinks";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProjectsHeaderOverridesProps = {
    ProjectsHeader?: PrimitiveOverrideProps<FlexProps>;
    Projects?: PrimitiveOverrideProps<TextProps>;
    ProjectLinks?: ProjectLinksProps;
} & EscapeHatchProps;
export declare type ProjectsHeaderProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: ProjectsHeaderOverridesProps | undefined | null;
}>;
export default function ProjectsHeader(props: ProjectsHeaderProps): React.ReactElement;
