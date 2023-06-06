/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import MobileSkillsText from "./MobileSkillsText";
import MobileSkillsGraph from "./MobileSkillsGraph";
import { Flex } from "@aws-amplify/ui-react";
export default function MobileSkillsLayered(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="70px"
      direction="column"
      width="483px"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      padding="70px 0px 70px 0px"
      backgroundColor="rgba(229,233,237,1)"
      {...getOverrideProps(overrides, "MobileSkillsLayered")}
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
        {...getOverrideProps(overrides, "MobileSkillsGraphGroup")}
      >
        <MobileSkillsGraph
          display="flex"
          gap="12.5px"
          direction="column"
          width="275px"
          height="190px"
          justifyContent="space-between"
          alignItems="flex-start"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "MobileSkillsGraph")}
        ></MobileSkillsGraph>
      </Flex>
    </Flex>
  );
}
