/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { MobileHeaderNameProps } from "./MobileHeaderName";
import { FlexProps, ViewProps } from "@aws-amplify/ui-react";
import { MobileNavigationLinksProps } from "./MobileNavigationLinks";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MobileHeaderOverridesProps = {
    MobileHeader?: PrimitiveOverrideProps<ViewProps>;
    HeaderNameGroup?: PrimitiveOverrideProps<FlexProps>;
    MobileHeaderName?: MobileHeaderNameProps;
    NavigationLinksGroup?: PrimitiveOverrideProps<FlexProps>;
    MobileNavigationLinks?: MobileNavigationLinksProps;
} & EscapeHatchProps;
export declare type MobileHeaderProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: MobileHeaderOverridesProps | undefined | null;
}>;
export default function MobileHeader(props: MobileHeaderProps): React.ReactElement;
