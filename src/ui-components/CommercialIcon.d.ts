/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ImageProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CommercialIconOverridesProps = {
    CommercialIcon?: PrimitiveOverrideProps<ViewProps>;
    "paid-work-icon"?: PrimitiveOverrideProps<ImageProps>;
    "paid-work-icon-red"?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type CommercialIconProps = React.PropsWithChildren<Partial<ViewProps> & {
    iconSource?: String;
    focusIconSource?: String;
} & {
    focus?: "False" | "True";
} & {
    overrides?: CommercialIconOverridesProps | undefined | null;
}>;
export default function CommercialIcon(props: CommercialIconProps): React.ReactElement;
