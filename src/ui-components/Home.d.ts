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
import { BrandsiveworkedProps } from "./Brandsiveworked";
import { PortfolioProps } from "./Portfolio";
import { WhatiofferProps } from "./Whatioffer";
import { WhyhirememyskillsProps } from "./Whyhirememyskills";
import { HeaderProps } from "./Header";
import { ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HomeOverridesProps = {
    Home?: PrimitiveOverrideProps<ViewProps>;
    footer?: FooterProps;
    achievement?: AchievementProps;
    "blog posts"?: BlogpostsProps;
    testimonials?: TestimonialsProps;
    "brands i've worked"?: BrandsiveworkedProps;
    portfolio?: PortfolioProps;
    "what i offer"?: WhatiofferProps;
    "why hire me & my skills"?: WhyhirememyskillsProps;
    header?: HeaderProps;
} & EscapeHatchProps;
export declare type HomeProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: HomeOverridesProps | undefined | null;
}>;
export default function Home(props: HomeProps): React.ReactElement;
