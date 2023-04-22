/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type OfferingsOverridesProps = {
    "1"?: PrimitiveOverrideProps<ViewProps>;
    Offerings?: PrimitiveOverrideProps<ViewProps>;
    "\uF3D6"?: PrimitiveOverrideProps<TextProps>;
    "\uF3D5"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 73"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 74"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 75"?: PrimitiveOverrideProps<ViewProps>;
    "Shirt Plain"?: PrimitiveOverrideProps<ImageProps>;
    "Branding Design"?: PrimitiveOverrideProps<TextProps>;
    "T-Shirt Design"?: PrimitiveOverrideProps<TextProps>;
    "Package Design"?: PrimitiveOverrideProps<TextProps>;
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci eget mi elit cursus donec amet sed sagittis.2187"?: PrimitiveOverrideProps<TextProps>;
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci eget mi elit cursus donec amet sed sagittis.2188"?: PrimitiveOverrideProps<TextProps>;
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci eget mi elit cursus donec amet sed sagittis.2189"?: PrimitiveOverrideProps<TextProps>;
    Rectangle?: PrimitiveOverrideProps<ImageProps>;
    "Shipment Upload"?: PrimitiveOverrideProps<ImageProps>;
    "Things that I can do for my clients. Just make your good trust I love to provide quality works."?: PrimitiveOverrideProps<TextProps>;
    "What I Offer"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type OfferingsProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: OfferingsOverridesProps | undefined | null;
}>;
export default function Offerings(props: OfferingsProps): React.ReactElement;
