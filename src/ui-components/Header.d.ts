/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps } from "@aws-amplify/ui-react";
import { HeaderNameProps } from "./HeaderName";
import { NavigationLinksProps } from "./NavigationLinks";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HeaderOverridesProps = {
    Header?: PrimitiveOverrideProps<FlexProps>;
    HeaderNameGroup?: PrimitiveOverrideProps<FlexProps>;
    HeaderName?: HeaderNameProps;
    NavigationLinksGroup?: PrimitiveOverrideProps<FlexProps>;
    NavigationLinks?: NavigationLinksProps;
} & EscapeHatchProps;
export declare type HeaderProps = React.PropsWithChildren<Partial<FlexProps> & {
    navigationLinks?: React.ReactNode;
    nameGroup?: React.ReactNode;
    navigationLinksGroup?: React.ReactNode;
    headerNameGroup?: React.ReactNode;
} & {
    overrides?: HeaderOverridesProps | undefined | null;
}>;
export default function Header(props: HeaderProps): React.ReactElement;
