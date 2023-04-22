/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FooterProps } from "./Footer";
import { AchievementProps } from "./Achievement";
import { BlogpostsProps } from "./Blogposts";
import { TestimonialsProps } from "./Testimonials";
import { EmploymentProps } from "./Employment";
import { PortfolioProps } from "./Portfolio";
import { OfferingsProps } from "./Offerings";
import { SkillsProps } from "./Skills";
import { ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FullOverridesProps = {
    Full?: PrimitiveOverrideProps<ViewProps>;
    footer?: FooterProps;
    achievement?: AchievementProps;
    "blog posts"?: BlogpostsProps;
    testimonials?: TestimonialsProps;
    employment?: EmploymentProps;
    portfolio?: PortfolioProps;
    offerings?: OfferingsProps;
    skills?: SkillsProps;
    Home?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type FullProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: FullOverridesProps | undefined | null;
}>;
export default function Full(props: FullProps): React.ReactElement;
