/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { MobileTextLinkProps } from "./MobileTextLink";
import { FlexProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MobileNavigationLinksOverridesProps = {
    MobileNavigationLinks?: PrimitiveOverrideProps<FlexProps>;
    Group1?: PrimitiveOverrideProps<FlexProps>;
    MobileTextLink3551418?: MobileTextLinkProps;
    Group2?: PrimitiveOverrideProps<FlexProps>;
    MobileTextLink3551420?: MobileTextLinkProps;
    Group3?: PrimitiveOverrideProps<FlexProps>;
    MobileTextLink3551422?: MobileTextLinkProps;
    Group4?: PrimitiveOverrideProps<FlexProps>;
    MobileTextLink3551424?: MobileTextLinkProps;
    Group5?: PrimitiveOverrideProps<FlexProps>;
    MobileTextLink3551426?: MobileTextLinkProps;
} & EscapeHatchProps;
export declare type MobileNavigationLinksProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: MobileNavigationLinksOverridesProps | undefined | null;
}>;
export default function MobileNavigationLinks(props: MobileNavigationLinksProps): React.ReactElement;
