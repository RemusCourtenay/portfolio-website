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
export default function MobileProjectLink(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      variantValues: { state: "Default", focus: "True" },
      overrides: { Honours: {}, MobileProjectLink: {} },
    },
    {
      variantValues: { state: "Hover", focus: "True" },
      overrides: {
        Honours: { width: "unset", textDecoration: "underline" },
        MobileProjectLink: { gap: "5px" },
      },
    },
    {
      variantValues: { state: "Default", focus: "False" },
      overrides: {
        Honours: { color: "rgba(182,182,182,1)", width: "unset" },
        MobileProjectLink: { gap: "5px" },
      },
    },
    {
      variantValues: { state: "Hover", focus: "False" },
      overrides: {
        Honours: {
          color: "rgba(182,182,182,1)",
          width: "unset",
          textDecoration: "underline",
        },
        MobileProjectLink: { gap: "5px" },
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
      width="50px"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      display="flex"
      {...getOverrideProps(overrides, "MobileProjectLink")}
      {...rest}
    >
      <Text
        fontFamily="Raleway"
        fontSize="10px"
        fontWeight="400"
        color="rgba(83,83,83,1)"
        lineHeight="11.739999771118164px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0px"
        width="40px"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Honours"
        {...getOverrideProps(overrides, "Honours")}
      ></Text>
    </Flex>
  );
}
