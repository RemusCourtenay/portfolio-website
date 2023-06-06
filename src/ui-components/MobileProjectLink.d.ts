/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MobileProjectLinkOverridesProps = {
    MobileProjectLink?: PrimitiveOverrideProps<FlexProps>;
    Honours?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type MobileProjectLinkProps = React.PropsWithChildren<Partial<FlexProps> & {
    focus?: "False" | "True";
    state?: "Default" | "Hover";
} & {
    overrides?: MobileProjectLinkOverridesProps | undefined | null;
}>;
export default function MobileProjectLink(props: MobileProjectLinkProps): React.ReactElement;
