/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps, ViewProps } from "@aws-amplify/ui-react";
import { MobileTechIconProps } from "./MobileTechIcon";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MobileTechSquaresOverridesProps = {
    MobileTechSquares?: PrimitiveOverrideProps<ViewProps>;
    MobileTechDividerGroup?: PrimitiveOverrideProps<ViewProps>;
    MobileTechDivider?: PrimitiveOverrideProps<ImageProps>;
    TechIconGroup?: PrimitiveOverrideProps<FlexProps>;
    LeftColumnGroup?: PrimitiveOverrideProps<FlexProps>;
    IconGroup1?: PrimitiveOverrideProps<FlexProps>;
    MobileTechIcon3801690?: MobileTechIconProps;
    IconGroup2?: PrimitiveOverrideProps<FlexProps>;
    MobileTechIcon3801696?: MobileTechIconProps;
    IconGroup3?: PrimitiveOverrideProps<FlexProps>;
    MobileTechIcon3801702?: MobileTechIconProps;
    IconGroup4?: PrimitiveOverrideProps<FlexProps>;
    MobileTechIcon3801708?: MobileTechIconProps;
    MiddleColumnGroup?: PrimitiveOverrideProps<FlexProps>;
    IconGroup5?: PrimitiveOverrideProps<FlexProps>;
    MobileTechIcon3801692?: MobileTechIconProps;
    IconGroup6?: PrimitiveOverrideProps<FlexProps>;
    MobileTechIcon3801698?: MobileTechIconProps;
    IconGroup7?: PrimitiveOverrideProps<FlexProps>;
    MobileTechIcon3801704?: MobileTechIconProps;
    IconGroup8?: PrimitiveOverrideProps<FlexProps>;
    MobileTechIcon3801710?: MobileTechIconProps;
    RightColumnGroup?: PrimitiveOverrideProps<FlexProps>;
    IconGroup9?: PrimitiveOverrideProps<FlexProps>;
    MobileTechIcon3801694?: MobileTechIconProps;
    IconGroup10?: PrimitiveOverrideProps<FlexProps>;
    MobileTechIcon3801700?: MobileTechIconProps;
    IconGroup11?: PrimitiveOverrideProps<FlexProps>;
    MobileTechIcon3801706?: MobileTechIconProps;
    IconGroup12?: PrimitiveOverrideProps<FlexProps>;
    MobileTechIcon3801712?: MobileTechIconProps;
} & EscapeHatchProps;
export declare type MobileTechSquaresProps = React.PropsWithChildren<Partial<ViewProps> & {
    dividerImageSource?: String;
    iconGroup1?: React.ReactNode;
    iconGroup2?: React.ReactNode;
    iconGroup3?: React.ReactNode;
    iconGroup4?: React.ReactNode;
    iconGroup5?: React.ReactNode;
    iconGroup6?: React.ReactNode;
    iconGroup7?: React.ReactNode;
    iconGroup8?: React.ReactNode;
    iconGroup9?: React.ReactNode;
    iconGroup10?: React.ReactNode;
    iconGroup11?: React.ReactNode;
    iconGroup12?: React.ReactNode;
} & {
    overrides?: MobileTechSquaresOverridesProps | undefined | null;
}>;
export default function MobileTechSquares(props: MobileTechSquaresProps): React.ReactElement;
