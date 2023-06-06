/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
import { MobileTechSquaresProps } from "./MobileTechSquares";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MobileTechOverridesProps = {
    MobileTech?: PrimitiveOverrideProps<FlexProps>;
    TechTextGroup?: PrimitiveOverrideProps<FlexProps>;
    "Technologies I've Worked With"?: PrimitiveOverrideProps<TextProps>;
    TechnologiesBlurb?: PrimitiveOverrideProps<TextProps>;
    MobileTechSquaresGroup?: PrimitiveOverrideProps<FlexProps>;
    MobileTechSquares?: MobileTechSquaresProps;
} & EscapeHatchProps;
export declare type MobileTechProps = React.PropsWithChildren<Partial<FlexProps> & {
    mobileTechSquaresGroup?: React.ReactNode;
} & {
    overrides?: MobileTechOverridesProps | undefined | null;
}>;
export default function MobileTech(props: MobileTechProps): React.ReactElement;
