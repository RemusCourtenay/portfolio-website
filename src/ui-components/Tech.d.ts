/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
import { TechSquaresProps } from "./TechSquares";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TechOverridesProps = {
    Tech?: PrimitiveOverrideProps<FlexProps>;
    TechTextGroup?: PrimitiveOverrideProps<FlexProps>;
    "Technologies I've Worked With"?: PrimitiveOverrideProps<TextProps>;
    TechnologiesBlurb?: PrimitiveOverrideProps<TextProps>;
    TechSquaresGroup?: PrimitiveOverrideProps<FlexProps>;
    TechSquares?: TechSquaresProps;
} & EscapeHatchProps;
export declare type TechProps = React.PropsWithChildren<Partial<FlexProps> & {
    techSquaresGroup?: React.ReactNode;
} & {
    overrides?: TechOverridesProps | undefined | null;
}>;
export default function Tech(props: TechProps): React.ReactElement;
