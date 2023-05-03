/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps } from "@aws-amplify/ui-react";
import { TextLinkProps } from "./TextLink";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NavigationLinksOverridesProps = {
    NavigationLinks?: PrimitiveOverrideProps<FlexProps>;
    Group1?: PrimitiveOverrideProps<FlexProps>;
    Home?: TextLinkProps;
    Group2?: PrimitiveOverrideProps<FlexProps>;
    Skills?: TextLinkProps;
    Group3?: PrimitiveOverrideProps<FlexProps>;
    Projects?: TextLinkProps;
    Group4?: PrimitiveOverrideProps<FlexProps>;
    Experience?: TextLinkProps;
    Group5?: PrimitiveOverrideProps<FlexProps>;
    Contact?: TextLinkProps;
} & EscapeHatchProps;
export declare type NavigationLinksProps = React.PropsWithChildren<Partial<FlexProps> & {
    link1?: React.ReactNode;
    link2?: React.ReactNode;
    link3?: React.ReactNode;
    link4?: React.ReactNode;
    link5?: React.ReactNode;
} & {
    overrides?: NavigationLinksOverridesProps | undefined | null;
}>;
export default function NavigationLinks(props: NavigationLinksProps): React.ReactElement;
