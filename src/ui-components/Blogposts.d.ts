/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BlogpostsOverridesProps = {
    Blogposts?: PrimitiveOverrideProps<ViewProps>;
    "read all blogs btn"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 100"?: PrimitiveOverrideProps<ViewProps>;
    "Read All Blogs"?: PrimitiveOverrideProps<TextProps>;
    "Why should we invest more in branding first?"?: PrimitiveOverrideProps<TextProps>;
    "Top 100 most beautiful t-shirt print design"?: PrimitiveOverrideProps<TextProps>;
    "Best rules to follow for achieving business goals"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 97"?: PrimitiveOverrideProps<ImageProps>;
    "Rectangle 98"?: PrimitiveOverrideProps<ImageProps>;
    "Rectangle 99"?: PrimitiveOverrideProps<ImageProps>;
    "Things that I can do for my clients. Just make your good trust I love to provide quality works."?: PrimitiveOverrideProps<TextProps>;
    "Blog Posts"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type BlogpostsProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: BlogpostsOverridesProps | undefined | null;
}>;
export default function Blogposts(props: BlogpostsProps): React.ReactElement;
