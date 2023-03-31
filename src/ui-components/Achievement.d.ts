/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AchievementOverridesProps = {
    Achievement?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 103"?: PrimitiveOverrideProps<ViewProps>;
    "720+"?: PrimitiveOverrideProps<TextProps>;
    "920+"?: PrimitiveOverrideProps<TextProps>;
    "25+"?: PrimitiveOverrideProps<TextProps>;
    "700+"?: PrimitiveOverrideProps<TextProps>;
    "Projects Completed"?: PrimitiveOverrideProps<TextProps>;
    "Products Sold"?: PrimitiveOverrideProps<TextProps>;
    "Awards Received"?: PrimitiveOverrideProps<TextProps>;
    "Happy Clients"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type AchievementProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: AchievementOverridesProps | undefined | null;
}>;
export default function Achievement(props: AchievementProps): React.ReactElement;
