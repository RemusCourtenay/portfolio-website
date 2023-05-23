/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex } from "@aws-amplify/ui-react";
export default function Header(props) {
  const {
    navigationLinks,
    nameGroup,
    navigationLinksGroup,
    overrides,
    ...rest
  } = props;
  return (
    <Flex
      gap="361px"
      direction="row"
      width="1914px"
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
      <Flex
        padding="0px 0px 0px 0px"
        width="248px"
        height="30px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        children={nameGroup}
        {...getOverrideProps(overrides, "NameGroup")}
      ></Flex>
      <Flex
        padding="0px 0px 0px 0px"
        width="467px"
        height="43px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        children={navigationLinksGroup}
        {...getOverrideProps(overrides, "NavigationLinksGroup")}
      ></Flex>
    </Flex>
  );
}
