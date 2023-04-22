/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import HeaderName from "./HeaderName";
import NavigationLinks from "./NavigationLinks";
import { Flex } from "@aws-amplify/ui-react";
export default function Header(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="361px"
      direction="row"
      width="1920px"
      height="100px"
      justifyContent="space-between"
      alignItems="center"
      position="relative"
      border="1px SOLID rgba(0,0,0,0.1)"
      padding="13px 236px 13px 236px"
      backgroundColor="rgba(249,249,249,0.5)"
      {...getOverrideProps(overrides, "Header")}
      {...rest}
    >
      <HeaderName
        display="flex"
        gap="5px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-end"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "HeaderName")}
      ></HeaderName>
      <NavigationLinks
        display="flex"
        gap="0"
        direction="row"
        width="473px"
        height="43px"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "NavigationLinks")}
      ></NavigationLinks>
    </Flex>
  );
}
