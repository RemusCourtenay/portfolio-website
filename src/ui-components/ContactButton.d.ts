/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
import { SyntheticEvent } from "react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ContactButtonOverridesProps = {
    ContactButton?: PrimitiveOverrideProps<ViewProps>;
    Border?: PrimitiveOverrideProps<ViewProps>;
    "Get In Touch"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ContactButtonProps = React.PropsWithChildren<Partial<ViewProps> & {
    onClickHandler?: (event: SyntheticEvent) => void;
} & {
    hover?: "False" | "True";
} & {
    overrides?: ContactButtonOverridesProps | undefined | null;
}>;
export default function ContactButton(props: ContactButtonProps): React.ReactElement;
