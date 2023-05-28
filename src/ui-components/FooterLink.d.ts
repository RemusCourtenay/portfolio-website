/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ImageProps, ViewProps } from "@aws-amplify/ui-react";
import { SyntheticEvent } from "react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FooterLinkOverridesProps = {
    FooterLink?: PrimitiveOverrideProps<ViewProps>;
    Logo?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type FooterLinkProps = React.PropsWithChildren<Partial<ViewProps> & {
    logoSource?: String;
    onLogoClick?: (event: SyntheticEvent) => void;
    logoFocusSource?: String;
    isFocus?: Boolean;
} & {
    overrides?: FooterLinkOverridesProps | undefined | null;
}>;
export default function FooterLink(props: FooterLinkProps): React.ReactElement;
