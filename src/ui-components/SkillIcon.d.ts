/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ImageProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SkillIconOverridesProps = {
    SkillIcon?: PrimitiveOverrideProps<ViewProps>;
    icon?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type SkillIconProps = React.PropsWithChildren<Partial<ViewProps> & {
    focus?: Boolean;
    iconSource?: String;
    focusIconSource?: String;
} & {
    overrides?: SkillIconOverridesProps | undefined | null;
}>;
export default function SkillIcon(props: SkillIconProps): React.ReactElement;
