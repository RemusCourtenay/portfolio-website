/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProjectFullCircleOverridesProps = {
    ProjectFullCircle?: PrimitiveOverrideProps<ViewProps>;
    ProjectImage?: PrimitiveOverrideProps<ImageProps>;
    TextGroup?: PrimitiveOverrideProps<FlexProps>;
    ProjectTitle?: PrimitiveOverrideProps<TextProps>;
    ProjectBody?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ProjectFullCircleProps = React.PropsWithChildren<Partial<ViewProps> & {
    projectImageSource?: String;
    projectTitle?: String;
    projectBodyText?: String;
} & {
    overrides?: ProjectFullCircleOverridesProps | undefined | null;
}>;
export default function ProjectFullCircle(props: ProjectFullCircleProps): React.ReactElement;
