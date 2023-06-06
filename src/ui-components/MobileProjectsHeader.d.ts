/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
import { MobileProjectLinkProps } from "./MobileProjectLink";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MobileProjectsHeaderOverridesProps = {
    MobileProjectsHeader?: PrimitiveOverrideProps<FlexProps>;
    Projects?: PrimitiveOverrideProps<TextProps>;
    ProjectLinksGroup?: PrimitiveOverrideProps<FlexProps>;
    ProjectLinks?: PrimitiveOverrideProps<FlexProps>;
    AllLinkGroup?: PrimitiveOverrideProps<FlexProps>;
    MobileProjectLink3851810?: MobileProjectLinkProps;
    Project1LinkGroup?: PrimitiveOverrideProps<FlexProps>;
    MobileProjectLink3851812?: MobileProjectLinkProps;
    Project2LinkGroup?: PrimitiveOverrideProps<FlexProps>;
    MobileProjectLink3851814?: MobileProjectLinkProps;
    Project3LinkGroup?: PrimitiveOverrideProps<FlexProps>;
    MobileProjectLink3851816?: MobileProjectLinkProps;
} & EscapeHatchProps;
export declare type MobileProjectsHeaderProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: MobileProjectsHeaderOverridesProps | undefined | null;
}>;
export default function MobileProjectsHeader(props: MobileProjectsHeaderProps): React.ReactElement;
