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
    headerNameGroup,
    overrides,
    ...rest
  } = props;
  return (
    <Flex
      gap="361px"
      direction="row"
      width="1921px"
      height="51px"
      justifyContent="space-between"
      alignItems="center"
      position="relative"
      border="1px SOLID rgba(0,0,0,0.1)"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(249,249,249,0.5)"
      {...getOverrideProps(overrides, "Header")}
      {...rest}
    >
      <Flex
        gap="10px"
        direction="column"
        width="unset"
        height="50px"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        children={headerNameGroup}
        {...getOverrideProps(overrides, "HeaderNameGroup")}
      ></Flex>
      <Flex
        gap="10px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 50px 0px 0px"
        children={navigationLinksGroup}
        {...getOverrideProps(overrides, "NavigationLinksGroup")}
      ></Flex>
    </Flex>
  );
}
