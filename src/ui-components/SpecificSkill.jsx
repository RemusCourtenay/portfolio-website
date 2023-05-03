/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
import PersonalIcon from "./PersonalIcon";
import EducationIcon from "./EducationIcon";
import CommercialIcon from "./CommercialIcon";
export default function SpecificSkill(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        SkillName: {},
        PersonalIcon: {},
        EducationIcon: {},
        CommercialIcon: {},
        Icons: {},
        SpecificSkill: {},
      },
      variantValues: { state: "None" },
    },
    {
      overrides: {
        SkillName: {},
        PersonalIcon: { focus: "True" },
        EducationIcon: {},
        CommercialIcon: {},
        Icons: {},
        SpecificSkill: {},
      },
      variantValues: { state: "Personal" },
    },
    {
      overrides: {
        SkillName: { children: "Python:" },
        PersonalIcon: { focus: "True" },
        EducationIcon: { focus: "True" },
        CommercialIcon: {},
        Icons: {},
        SpecificSkill: {},
      },
      variantValues: { state: "Education" },
    },
    {
      overrides: {
        SkillName: { children: "Python:" },
        PersonalIcon: { focus: "True" },
        EducationIcon: { focus: "True" },
        CommercialIcon: { focus: "True" },
        Icons: {},
        SpecificSkill: {},
      },
      variantValues: { state: "Commercial" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="0"
      direction="row"
      width="500px"
      height="40px"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      display="flex"
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
        children="Python"
        {...getOverrideProps(overrides, "SkillName")}
      ></Text>
      <Flex
        gap="0"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="space-between"
        alignItems="center"
        grow="1"
        shrink="1"
        basis="0"
        position="relative"
        padding="0px 50px 0px 50px"
        display="flex"
        {...getOverrideProps(overrides, "Icons")}
      >
        <PersonalIcon
          width="40px"
          height="40px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          focus="False"
          {...getOverrideProps(overrides, "PersonalIcon")}
        ></PersonalIcon>
        <EducationIcon
          width="40px"
          height="40px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          focus="False"
          {...getOverrideProps(overrides, "EducationIcon")}
        ></EducationIcon>
        <CommercialIcon
          width="40px"
          height="40px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          focus="False"
          {...getOverrideProps(overrides, "CommercialIcon")}
        ></CommercialIcon>
      </Flex>
    </Flex>
  );
}
