/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import TextLink from "./TextLink";
import { Flex } from "@aws-amplify/ui-react";
export default function NavigationLinks(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "NavigationLinks")}
      {...rest}
    >
      <TextLink
        display="flex"
        gap="10px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="10px 10px 10px 10px"
        hover="False"
        focus="True"
        {...getOverrideProps(overrides, "Home")}
      ></TextLink>
      <TextLink
        display="flex"
        gap="10px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="10px 10px 10px 10px"
        hover="False"
        focus="False"
        {...getOverrideProps(overrides, "Skills")}
      ></TextLink>
      <TextLink
        display="flex"
        gap="10px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="10px 10px 10px 10px"
        hover="False"
        focus="False"
        {...getOverrideProps(overrides, "Projects")}
      ></TextLink>
      <TextLink
        display="flex"
        gap="10px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="10px 10px 10px 10px"
        hover="False"
        focus="False"
        {...getOverrideProps(overrides, "Experience")}
      ></TextLink>
      <TextLink
        display="flex"
        gap="10px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="10px 10px 10px 10px"
        hover="False"
        focus="False"
        {...getOverrideProps(overrides, "Contact")}
      ></TextLink>
    </Flex>
  );
}
