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
export default function ProjectLink(props) {
  const {
    projectName,
    projectLinkClickHandler,
    overrides: overridesProp,
    ...rest
  } = props;
  const variants = [
    {
      variantValues: { state: "Default", focus: "True" },
      overrides: { Honours: {}, ProjectLink: {} },
    },
    {
      variantValues: { state: "Hover", focus: "True" },
      overrides: { Honours: { textDecoration: "underline" }, ProjectLink: {} },
    },
    {
      variantValues: { state: "Default", focus: "False" },
      overrides: { Honours: { color: "rgba(182,182,182,1)" }, ProjectLink: {} },
    },
    {
      variantValues: { state: "Hover", focus: "False" },
      overrides: {
        Honours: { color: "rgba(182,182,182,1)", textDecoration: "underline" },
        ProjectLink: {},
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
      width="100px"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      display="flex"
      onClick={projectLinkClickHandler}
      {...getOverrideProps(overrides, "ProjectLink")}
      {...rest}
    >
      <Text
        fontFamily="Raleway"
        fontSize="20px"
        fontWeight="400"
        color="rgba(83,83,83,1)"
        lineHeight="23.479999542236328px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0.05px"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={projectName}
        {...getOverrideProps(overrides, "Honours")}
      ></Text>
    </Flex>
  );
}
