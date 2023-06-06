/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MobileHeaderNameOverridesProps = {
    MobileHeaderName?: PrimitiveOverrideProps<FlexProps>;
    BottomAlignedGroup?: PrimitiveOverrideProps<FlexProps>;
    HeaderNameText?: PrimitiveOverrideProps<TextProps>;
    RedCircle?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type MobileHeaderNameProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: MobileHeaderNameOverridesProps | undefined | null;
}>;
export default function MobileHeaderName(props: MobileHeaderNameProps): React.ReactElement;
