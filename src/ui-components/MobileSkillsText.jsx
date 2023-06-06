/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
import MobileSkillsButton from "./MobileSkillsButton";
export default function MobileSkillsText(props) {
  const { skillsBlurbText, overrides, ...rest } = props;
  return (
    <Flex
      gap="12.5px"
      direction="column"
      width="275px"
      height="190px"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "MobileSkillsText")}
      {...rest}
    >
      <Flex
        gap="7.5px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "SkillsTextGroup")}
      >
        <Text
          fontFamily="Raleway"
          fontSize="24px"
          fontWeight="700"
          color="rgba(45,45,45,1)"
          textTransform="capitalize"
          lineHeight="28.176000595092773px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="-0.09px"
          width="unset"
          height="30px"
          gap="unset"
          alignItems="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Why Hire Me?"
          {...getOverrideProps(overrides, "Why Hire Me?")}
        ></Text>
        <Text
          fontFamily="Lato"
          fontSize="8px"
          fontWeight="400"
          color="rgba(146,146,146,1)"
          lineHeight="14.814531326293945px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={skillsBlurbText}
          {...getOverrideProps(
            overrides,
            "Yellow, black. Yellow, black. Yellow, black. Yellow, black. Ooh, black and yellow! Let's shake it up a little. Barry! Breakfast is ready! Coming! Hang on a second. Hello? - Barry? - Adam? - Can you believe this is happening? - I can't. I'll pick you up. Looking sharp. Use the stairs. Your father paid good money for those. Sorry. I'm excited. Here's the graduate. We're very proud of you, son. A perfect report card, all B's. Very proud."
          )}
        ></Text>
      </Flex>
      <MobileSkillsButton
        display="flex"
        gap="0"
        direction="row"
        width="98px"
        height="27.5px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(45,45,45,1)"
        {...getOverrideProps(overrides, "MobileSkillsButton")}
      ></MobileSkillsButton>
    </Flex>
  );
}
