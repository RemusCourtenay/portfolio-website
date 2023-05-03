/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProjectLinkOverridesProps = {
    ProjectLink?: PrimitiveOverrideProps<FlexProps>;
    Kibo?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ProjectLinkProps = React.PropsWithChildren<Partial<FlexProps> & {
    focus?: "False" | "True";
    state?: "Default" | "Hover";
} & {
    overrides?: ProjectLinkOverridesProps | undefined | null;
}>;
export default function ProjectLink(props: ProjectLinkProps): React.ReactElement;
