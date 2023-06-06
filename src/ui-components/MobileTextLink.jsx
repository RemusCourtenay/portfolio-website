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
export default function MobileTextLink(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      variantValues: { hover: "True", focus: "False" },
      overrides: {
        "Link Text": { textDecoration: "underline" },
        MobileTextLink: { gap: "0" },
      },
    },
    {
      variantValues: { hover: "True", focus: "True" },
      overrides: {
        "Link Text": { color: "rgba(255,0,0,1)", textDecoration: "underline" },
        MobileTextLink: { gap: "0" },
      },
    },
    {
      variantValues: { hover: "False", focus: "False" },
      overrides: { "Link Text": {}, MobileTextLink: {} },
    },
    {
      variantValues: { hover: "False", focus: "True" },
      overrides: {
        "Link Text": { color: "rgba(255,0,0,1)" },
        MobileTextLink: { gap: "0" },
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
      direction="row"
      width="unset"
      height="25px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="0px 2.5px 0px 2.5px"
      display="flex"
      {...getOverrideProps(overrides, "MobileTextLink")}
      {...rest}
    >
      <Text
        fontFamily="Raleway"
        fontSize="5px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="5.869999885559082px"
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
        children="TextLink"
        {...getOverrideProps(overrides, "Link Text")}
      ></Text>
    </Flex>
  );
}
