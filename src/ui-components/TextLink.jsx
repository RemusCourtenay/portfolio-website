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
export default function TextLink(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: { "Link Text": { textDecoration: "underline" }, TextLink: {} },
      variantValues: { hover: "True", focus: "False" },
    },
    {
      overrides: {
        "Link Text": { color: "rgba(255,0,0,1)", textDecoration: "underline" },
        TextLink: {},
      },
      variantValues: { hover: "True", focus: "True" },
    },
    {
      overrides: { "Link Text": {}, TextLink: {} },
      variantValues: { hover: "False", focus: "False" },
    },
    {
      overrides: { "Link Text": { color: "rgba(255,0,0,1)" }, TextLink: {} },
      variantValues: { hover: "False", focus: "True" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="10px"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="10px 10px 10px 10px"
      display="flex"
      {...getOverrideProps(overrides, "TextLink")}
      {...rest}
    >
      <Text
        fontFamily="Raleway"
        fontSize="20px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="23.479999542236328px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Link Text"
        {...getOverrideProps(overrides, "Link Text")}
      ></Text>
    </Flex>
  );
}
