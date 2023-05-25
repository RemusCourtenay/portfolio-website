/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProjectFullCircleOverridesProps = {
    ProjectFullCircle?: PrimitiveOverrideProps<ViewProps>;
    ProjectImage?: PrimitiveOverrideProps<ImageProps>;
    TextGroup?: PrimitiveOverrideProps<FlexProps>;
    "NASA\u2019s Kibo \u2028Robot Challenge"?: PrimitiveOverrideProps<TextProps>;
    "Consequuntur et nulla blanditiis odit illo ut quo magnam. Laboriosam aut repellendus quis molestiae cumque eveniet officia. Aliquid eveniet iure cum doloremque dolores. Voluptatibus quas et impedit omnis quas. Laborum alias nihil porro. Perferendis aliquam tenetur natus temporibus exercitationem soluta nisi. Ut molestiae ullam eaque maiores assumenda. Quos tenetur dicta eaque et placeat et adipisci. Quisquam qui magni maxime velit assumenda. Non libero voluptate qui et debitis enim sed. Neque distinctio ducimus aliquam inventore qui magni aliquid. In tempore repudiandae praesentium. Omnis saepe laudantium alias sunt alias incidunt excepturi. Assumenda tempore sit illo maiores dolores quasi iure. Impedit eaque sed eveniet voluptatibus dolores occaecati. Suscipit molestiae repellendus voluptatum voluptate velit totam."?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ProjectFullCircleProps = React.PropsWithChildren<Partial<ViewProps> & {
    projectImageSource?: String;
    projectTitle?: String;
    projectBodyText?: String;
} & {
    overrides?: ProjectFullCircleOverridesProps | undefined | null;
}>;
export default function ProjectFullCircle(props: ProjectFullCircleProps): React.ReactElement;
