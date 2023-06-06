/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
import MobileSkillIcon from "./MobileSkillIcon";
export default function MobileSpecificSkill(props) {
  const { skillName, overrides, ...rest } = props;
  return (
    <Flex
      gap="60px"
      direction="row"
      width="275px"
      height="20px"
      justifyContent="space-between"
      alignItems="center"
      position="relative"
      padding="0px 20px 0px 0px"
      {...getOverrideProps(overrides, "MobileSpecificSkill")}
      {...rest}
    >
      <Flex
        gap="5px"
        direction="row"
        width="50px"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "SkillNameGroup")}
      >
        <Text
          fontFamily="Raleway"
          fontSize="8px"
          fontWeight="500"
          color="rgba(45,45,45,1)"
          lineHeight="9.392000198364258px"
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
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={skillName}
          {...getOverrideProps(overrides, "SkillName")}
        ></Text>
      </Flex>
      <Flex
        gap="55px"
        direction="row"
        width="170px"
        height="unset"
        justifyContent="space-between"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Icons")}
      >
        <MobileSkillIcon
          width="20px"
          height="20px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "PersonalSkillIcon")}
        ></MobileSkillIcon>
        <MobileSkillIcon
          width="20px"
          height="20px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "EducationalSkillIcon")}
        ></MobileSkillIcon>
        <MobileSkillIcon
          width="20px"
          height="20px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "CommercialSkillIcon")}
        ></MobileSkillIcon>
      </Flex>
    </Flex>
  );
}
