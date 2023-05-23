/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
import SkillsButton from "./SkillsButton";
export default function SkillsText(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="25px"
      direction="column"
      width="550px"
      height="380px"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "SkillsText")}
      {...rest}
    >
      <Flex
        gap="15px"
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
          fontSize="48px"
          fontWeight="700"
          color="rgba(45,45,45,1)"
          textTransform="capitalize"
          lineHeight="56.35200119018555px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="-0.33px"
          width="unset"
          height="60px"
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
          fontSize="16px"
          fontWeight="400"
          color="rgba(146,146,146,1)"
          lineHeight="29.62906265258789px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.01px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dapib eu placerat at nisl posuere aliquet amet pharetra malesuada. Spendisse nisl ac at tortor. Sit faucibus suspendisse risus. Vulputate pulvinar cursus suspendisse risus vulputate  enim pharetra eu. Tetur adipiscing elit eu placera."
          {...getOverrideProps(
            overrides,
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dapib eu placerat at nisl posuere aliquet amet pharetra malesuada. Spendisse nisl ac at tortor. Sit faucibus suspendisse risus. Vulputate pulvinar cursus suspendisse risus vulputate enim pharetra eu. Tetur adipiscing elit eu placera."
          )}
        ></Text>
      </Flex>
      <Flex
        padding="0px 0px 0px 0px"
        width="196px"
        height="55px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        {...getOverrideProps(overrides, "CvButtonGroup")}
      >
        <SkillsButton
          display="flex"
          gap="10px"
          direction="column"
          width="196px"
          height="55px"
          justifyContent="flex-end"
          alignItems="flex-end"
          overflow="hidden"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          state="Default"
          {...getOverrideProps(overrides, "SkillsButton")}
        ></SkillsButton>
      </Flex>
    </Flex>
  );
}
