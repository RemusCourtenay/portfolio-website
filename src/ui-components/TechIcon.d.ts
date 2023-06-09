/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TechIconOverridesProps = {
    TechIcon?: PrimitiveOverrideProps<FlexProps>;
    IconImage?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type TechIconProps = React.PropsWithChildren<Partial<FlexProps> & {
    iconImageSource?: String;
    IconHoverImageSource?: String;
    hover?: Boolean;
} & {
    overrides?: TechIconOverridesProps | undefined | null;
}>;
export default function TechIcon(props: TechIconProps): React.ReactElement;
