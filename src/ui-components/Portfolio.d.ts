/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PortfolioOverridesProps = {
    Portfolio?: PrimitiveOverrideProps<ViewProps>;
    "view portfolio btn"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 56"?: PrimitiveOverrideProps<ViewProps>;
    "View Portfolio"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 77"?: PrimitiveOverrideProps<ImageProps>;
    "Rectangle 78"?: PrimitiveOverrideProps<ImageProps>;
    "Group 1"?: PrimitiveOverrideProps<ViewProps>;
    "Ellipse 16"?: PrimitiveOverrideProps<IconProps>;
    "Ellipse 15"?: PrimitiveOverrideProps<IconProps>;
    "\uF215"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 79"?: PrimitiveOverrideProps<ImageProps>;
    "Rectangle 89"?: PrimitiveOverrideProps<ImageProps>;
    "Rectangle 87"?: PrimitiveOverrideProps<ImageProps>;
    "Rectangle 92"?: PrimitiveOverrideProps<ImageProps>;
    "hover 2"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 104"?: PrimitiveOverrideProps<ViewProps>;
    "ultra jot Coffee"?: PrimitiveOverrideProps<TextProps>;
    "Package Design"?: PrimitiveOverrideProps<TextProps>;
    "\uF3D6"?: PrimitiveOverrideProps<TextProps>;
    "All Branding T-Shirt Package Poster"?: PrimitiveOverrideProps<TextProps>;
    Portfolio2120?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type PortfolioProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: PortfolioOverridesProps | undefined | null;
}>;
export default function Portfolio(props: PortfolioProps): React.ReactElement;
