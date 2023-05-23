/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function SpecificSkill(props) {
  const {
    personalGroup,
    educationGroup,
    commercialGroup,
    skillName,
    overrides,
    ...rest
  } = props;
  return (
    <Flex
      gap="120px"
      direction="row"
      width="550px"
      height="40px"
      justifyContent="space-between"
      alignItems="center"
      position="relative"
      padding="0px 40px 0px 0px"
      {...getOverrideProps(overrides, "SpecificSkill")}
      {...rest}
    >
      <Text
        fontFamily="Raleway"
        fontSize="16px"
        fontWeight="500"
        color="rgba(45,45,45,1)"
        lineHeight="18.784000396728516px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0.17px"
        width="100px"
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
      <Flex
        gap="110px"
        direction="row"
        width="340px"
        height="unset"
        justifyContent="space-between"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Icons")}
      >
        <Flex
          padding="0px 0px 0px 0px"
          width="40px"
          height="40px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          children={personalGroup}
          {...getOverrideProps(overrides, "PersonalGroup")}
        ></Flex>
        <Flex
          padding="0px 0px 0px 0px"
          width="40px"
          height="40px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          children={educationGroup}
          {...getOverrideProps(overrides, "EducationGroup")}
        ></Flex>
        <Flex
          padding="0px 0px 0px 0px"
          width="40px"
          height="40px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          children={commercialGroup}
          {...getOverrideProps(overrides, "CommercialGroup")}
        ></Flex>
      </Flex>
    </Flex>
  );
}
