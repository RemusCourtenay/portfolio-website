/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
import SpecificSkill from "./SpecificSkill";
export default function SkillsGraph(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="column"
      width="500px"
      height="350px"
      justifyContent="space-between"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "SkillsGraph")}
      {...rest}
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
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="My Skills"
        {...getOverrideProps(overrides, "My Skills")}
      ></Text>
      <Flex
        gap="0"
        direction="column"
        width="unset"
        height="265px"
        justifyContent="space-between"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "SkillsGroup")}
      >
        <SpecificSkill
          display="flex"
          gap="0"
          direction="row"
          width="500px"
          height="40px"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          state="Education"
          {...getOverrideProps(overrides, "SpecificSkill55651")}
        ></SpecificSkill>
        <SpecificSkill
          display="flex"
          gap="0"
          direction="row"
          width="500px"
          height="40px"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          state="Education"
          {...getOverrideProps(overrides, "SpecificSkill56694")}
        ></SpecificSkill>
        <SpecificSkill
          display="flex"
          gap="0"
          direction="row"
          width="500px"
          height="40px"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          state="Personal"
          {...getOverrideProps(overrides, "SpecificSkill55663")}
        ></SpecificSkill>
        <SpecificSkill
          display="flex"
          gap="0"
          direction="row"
          width="500px"
          height="40px"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          state="Commercial"
          {...getOverrideProps(overrides, "SpecificSkill55675")}
        ></SpecificSkill>
        <SpecificSkill
          display="flex"
          gap="0"
          direction="row"
          width="500px"
          height="40px"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          state="Education"
          {...getOverrideProps(overrides, "SpecificSkill55687")}
        ></SpecificSkill>
      </Flex>
    </Flex>
  );
}
