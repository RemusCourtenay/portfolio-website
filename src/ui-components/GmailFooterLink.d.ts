/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ImageProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GmailFooterLinkOverridesProps = {
    GmailFooterLink?: PrimitiveOverrideProps<ViewProps>;
    FacebookLogo?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type GmailFooterLinkProps = React.PropsWithChildren<Partial<ViewProps> & {
    state?: "Default" | "Hover";
} & {
    overrides?: GmailFooterLinkOverridesProps | undefined | null;
}>;
export default function GmailFooterLink(props: GmailFooterLinkProps): React.ReactElement;
