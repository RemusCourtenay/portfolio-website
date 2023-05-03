/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex } from "@aws-amplify/ui-react";
export default function NavigationLinks(props) {
  const { link1, link2, link3, link4, link5, overrides, ...rest } = props;
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
      <Flex
        padding="0px 0px 0px 0px"
        width="78px"
        height="43px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        children={link1}
        {...getOverrideProps(overrides, "Group1")}
      ></Flex>
      <Flex
        padding="0px 0px 0px 0px"
        width="72px"
        height="43px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        children={link2}
        {...getOverrideProps(overrides, "Group2")}
      ></Flex>
      <Flex
        padding="0px 0px 0px 0px"
        width="99px"
        height="43px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        children={link3}
        {...getOverrideProps(overrides, "Group3")}
      ></Flex>
      <Flex
        padding="0px 0px 0px 0px"
        width="128px"
        height="43px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        children={link4}
        {...getOverrideProps(overrides, "Group4")}
      ></Flex>
      <Flex
        padding="0px 0px 0px 0px"
        width="96px"
        height="43px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        children={link5}
        {...getOverrideProps(overrides, "Group5")}
      ></Flex>
    </Flex>
  );
}
