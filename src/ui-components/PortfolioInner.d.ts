/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PortfolioInnerOverridesProps = {
    PortfolioInner?: PrimitiveOverrideProps<FlexProps>;
    "Kibo Rocket Challenge"?: PrimitiveOverrideProps<TextProps>;
    MainGroup?: PrimitiveOverrideProps<FlexProps>;
    LeftTextGroup?: PrimitiveOverrideProps<FlexProps>;
    "Ma! I got a thing going here. - You got lint on your fuzz. - Ow! That's me! - Wave to us! We'll be in row 118,000. - Bye! Barry, I told you, stop flying in the house! - Hey, Adam. - Hey, Barry. - Is that fuzz gel? - A little. Special day, graduation. Never thought I'd make it. Three days grade school, three days high school. Those were awkward. Three days college. I'm glad I took a day and hitchhiked around the hive. You did come back different. - Hi, Barry. - Artie, growing a mustache? Looks good. - Hear about Frankie? - Yeah. - You going to the funeral? - No, I'm not going. Everybody knows, sting someone, you die. Don't waste it on a squirrel. Such a hothead. I guess he could have just gotten out of the way. I love this incorporating an amusement park into our day. That's why we don't need vacations. Boy, quite a bit of pomp... under the circumstances. - Well, Adam, today we are men. - We are! - Bee-men. - Amen! Hallelujah! Students, faculty, distinguished bees, please welcome Dean Buzzwell. Welcome, New Hive Oity graduating class of... ...9:15. That concludes our ceremonies. And begins your career at Honex Industries! Will we pick ourjob today?"?: PrimitiveOverrideProps<TextProps>;
    RightPictureGroup?: PrimitiveOverrideProps<FlexProps>;
    ProjectImage?: PrimitiveOverrideProps<ImageProps>;
    "Kibo on the ISS"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type PortfolioInnerProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: PortfolioInnerOverridesProps | undefined | null;
}>;
export default function PortfolioInner(props: PortfolioInnerProps): React.ReactElement;
