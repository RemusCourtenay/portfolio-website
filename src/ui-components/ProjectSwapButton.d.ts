/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ImageProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProjectSwapButtonOverridesProps = {
    ProjectSwapButton?: PrimitiveOverrideProps<ViewProps>;
    ArrowImage?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type ProjectSwapButtonProps = React.PropsWithChildren<Partial<ViewProps> & {
    direction?: "Left" | "Right";
    state?: "Click" | "Default" | "Hover";
} & {
    overrides?: ProjectSwapButtonOverridesProps | undefined | null;
}>;
export default function ProjectSwapButton(props: ProjectSwapButtonProps): React.ReactElement;
