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
export default function SkillsButton(props) {
  const { buttonText, overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      variantValues: { state: "Default" },
      overrides: { SkillsButtonText: {}, ButtonGroup: {}, SkillsButton: {} },
    },
    {
      variantValues: { state: "Hover" },
      overrides: {
        SkillsButtonText: {},
        ButtonGroup: { backgroundColor: "rgba(58,58,58,1)" },
        SkillsButton: {},
      },
    },
    {
      variantValues: { state: "Click" },
      overrides: {
        SkillsButtonText: {},
        ButtonGroup: {
          width: "191px",
          height: "50px",
          backgroundColor: "rgba(58,58,58,1)",
          boxShadow: "-5px -5px 4px rgba(0, 0, 0, 0.25)",
        },
        SkillsButton: {},
      },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="10px"
      direction="column"
      width="196px"
      height="55px"
      justifyContent="flex-end"
      alignItems="flex-end"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      display="flex"
      {...getOverrideProps(overrides, "SkillsButton")}
      {...rest}
    >
      <Flex
        gap="10px"
        direction="row"
        width="196px"
        height="55px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(45,45,45,1)"
        display="flex"
        {...getOverrideProps(overrides, "ButtonGroup")}
      >
        <Text
          fontFamily="Raleway"
          fontSize="16px"
          fontWeight="500"
          color="rgba(229,233,237,1)"
          textTransform="uppercase"
          lineHeight="18.784000396728516px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.33px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={buttonText}
          {...getOverrideProps(overrides, "SkillsButtonText")}
        ></Text>
      </Flex>
    </Flex>
  );
}
