/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps } from "@aws-amplify/ui-react";
import { FooterLinkProps } from "./FooterLink";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FooterLinksOverridesProps = {
    FooterLinks?: PrimitiveOverrideProps<FlexProps>;
    FooterLinkGroup1?: PrimitiveOverrideProps<FlexProps>;
    FooterLink2761135?: FooterLinkProps;
    FooterLinkGroup2?: PrimitiveOverrideProps<FlexProps>;
    FooterLink2761141?: FooterLinkProps;
    FooterLinkGroup3?: PrimitiveOverrideProps<FlexProps>;
    FooterLink2761151?: FooterLinkProps;
    FooterLinkGroup4?: PrimitiveOverrideProps<FlexProps>;
    FooterLink2761165?: FooterLinkProps;
} & EscapeHatchProps;
export declare type FooterLinksProps = React.PropsWithChildren<Partial<FlexProps> & {
    footerLinkGroup1?: React.ReactNode;
    footerLinkGroup2?: React.ReactNode;
    footerLinkGroup3?: React.ReactNode;
    footerLinkGroup4?: React.ReactNode;
} & {
    overrides?: FooterLinksOverridesProps | undefined | null;
}>;
export default function FooterLinks(props: FooterLinksProps): React.ReactElement;
