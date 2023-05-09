/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ImageProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TechDividerOverridesProps = {
    TechDivider?: PrimitiveOverrideProps<ViewProps>;
    "TechDivider-Background"?: PrimitiveOverrideProps<ViewProps>;
    "techdivider-transparent"?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type TechDividerProps = React.PropsWithChildren<Partial<ViewProps> & {
    dividerImageSource?: String;
} & {
    overrides?: TechDividerOverridesProps | undefined | null;
}>;
export default function TechDivider(props: TechDividerProps): React.ReactElement;
