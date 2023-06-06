/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
import { MobileSkillsButtonProps } from "./MobileSkillsButton";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MobileSkillsTextOverridesProps = {
    MobileSkillsText?: PrimitiveOverrideProps<FlexProps>;
    SkillsTextGroup?: PrimitiveOverrideProps<FlexProps>;
    "Why Hire Me?"?: PrimitiveOverrideProps<TextProps>;
    "Yellow, black. Yellow, black. Yellow, black. Yellow, black. Ooh, black and yellow! Let's shake it up a little. Barry! Breakfast is ready! Coming! Hang on a second. Hello? - Barry? - Adam? - Can you believe this is happening? - I can't. I'll pick you up. Looking sharp. Use the stairs. Your father paid good money for those. Sorry. I'm excited. Here's the graduate. We're very proud of you, son. A perfect report card, all B's. Very proud."?: PrimitiveOverrideProps<TextProps>;
    MobileSkillsButton?: MobileSkillsButtonProps;
} & EscapeHatchProps;
export declare type MobileSkillsTextProps = React.PropsWithChildren<Partial<FlexProps> & {
    skillsBlurbText?: String;
} & {
    overrides?: MobileSkillsTextOverridesProps | undefined | null;
}>;
export default function MobileSkillsText(props: MobileSkillsTextProps): React.ReactElement;
