/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import MobileSkillsText from "./MobileSkillsText";
import { Flex } from "@aws-amplify/ui-react";
export default function MobileSkills(props) {
  const { mobileSkillsGraphGroup, overrides, ...rest } = props;
  return (
    <Flex
      gap="70px"
      direction="column"
      width="480px"
      height="590px"
      justifyContent="space-between"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="70px 0px 70px 0px"
      backgroundColor="rgba(229,233,237,1)"
      {...getOverrideProps(overrides, "MobileSkills")}
      {...rest}
    >
      <MobileSkillsText
        display="flex"
        gap="12.5px"
        direction="column"
        width="275px"
        height="190px"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "MobileSkillsText")}
      ></MobileSkillsText>
      <Flex
        padding="0px 0px 0px 0px"
        width="275px"
        height="190px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        children={mobileSkillsGraphGroup}
        {...getOverrideProps(overrides, "MobileSkillsGraphGroup")}
      ></Flex>
    </Flex>
  );
}
