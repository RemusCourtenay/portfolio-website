/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { MobileProjectCircleViewProps } from "./MobileProjectCircleView";
import { FlexProps } from "@aws-amplify/ui-react";
import { MobileSkillsButtonProps } from "./MobileSkillsButton";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MobileProjectsAllViewLayeredOverridesProps = {
    MobileProjectsAllViewLayered?: PrimitiveOverrideProps<FlexProps>;
    ProjectsGroup?: PrimitiveOverrideProps<FlexProps>;
    Project1Group?: PrimitiveOverrideProps<FlexProps>;
    MobileProjectCircleView3852163?: MobileProjectCircleViewProps;
    Project2Group?: PrimitiveOverrideProps<FlexProps>;
    MobileProjectCircleView3852165?: MobileProjectCircleViewProps;
    Project3Group?: PrimitiveOverrideProps<FlexProps>;
    MobileProjectCircleView3852167?: MobileProjectCircleViewProps;
    PortfolioButtonGroup?: PrimitiveOverrideProps<FlexProps>;
    MobileSkillsButton?: MobileSkillsButtonProps;
} & EscapeHatchProps;
export declare type MobileProjectsAllViewLayeredProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: MobileProjectsAllViewLayeredOverridesProps | undefined | null;
}>;
export default function MobileProjectsAllViewLayered(props: MobileProjectsAllViewLayeredProps): React.ReactElement;
