/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ImageProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EducationIconOverridesProps = {
    EducationIcon?: PrimitiveOverrideProps<ViewProps>;
    "education-icon"?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type EducationIconProps = React.PropsWithChildren<Partial<ViewProps> & {
    focus?: "False" | "True";
} & {
    overrides?: EducationIconOverridesProps | undefined | null;
}>;
export default function EducationIcon(props: EducationIconProps): React.ReactElement;
