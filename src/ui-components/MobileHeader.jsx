/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import MobileHeaderName from "./MobileHeaderName";
import { Flex, View } from "@aws-amplify/ui-react";
import MobileNavigationLinks from "./MobileNavigationLinks";
export default function MobileHeader(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="481px"
      height="26px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      border="1px SOLID rgba(0,0,0,0.1)"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(249,249,249,0.5)"
      {...getOverrideProps(overrides, "MobileHeader")}
      {...rest}
    >
      <Flex
        gap="10px"
        direction="column"
        width="unset"
        height="25px"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="calc(50% - 12.5px - 0px)"
        left="0px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "HeaderNameGroup")}
      >
        <MobileHeaderName
          display="flex"
          gap="5px"
          direction="row"
          width="62.5px"
          height="12.5px"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "MobileHeaderName")}
        ></MobileHeaderName>
      </Flex>
      <Flex
        gap="10px"
        direction="column"
        width="unset"
        height="25px"
        justifyContent="space-between"
        alignItems="center"
        position="absolute"
        top="calc(50% - 12.5px - 0px)"
        right="0px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "NavigationLinksGroup")}
      >
        <MobileNavigationLinks
          display="flex"
          gap="0"
          direction="row"
          width="125px"
          height="25px"
          justifyContent="space-between"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "MobileNavigationLinks")}
        ></MobileNavigationLinks>
      </Flex>
    </View>
  );
}
