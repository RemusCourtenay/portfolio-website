/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TextLinkProps } from "./TextLink";
import { FlexProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NavigationLinksOverridesProps = {
    NavigationLinks?: PrimitiveOverrideProps<FlexProps>;
    Home?: TextLinkProps;
    Skills?: TextLinkProps;
    Projects?: TextLinkProps;
    Experience?: TextLinkProps;
    Contact?: TextLinkProps;
} & EscapeHatchProps;
export declare type NavigationLinksProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: NavigationLinksOverridesProps | undefined | null;
}>;
export default function NavigationLinks(props: NavigationLinksProps): React.ReactElement;
