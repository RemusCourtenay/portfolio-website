/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex } from "@aws-amplify/ui-react";
export default function FooterLinks(props) {
  const {
    footerLinkGroup1,
    footerLinkGroup2,
    footerLinkGroup3,
    footerLinkGroup4,
    overrides,
    ...rest
  } = props;
  return (
    <Flex
      gap="50px"
      direction="row"
      width="200px"
      height="25px"
      justifyContent="space-between"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "FooterLinks")}
      {...rest}
    >
      <Flex
        padding="0px 0px 0px 0px"
        width="15px"
        height="15px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        children={footerLinkGroup1}
        {...getOverrideProps(overrides, "FooterLinkGroup1")}
      ></Flex>
      <Flex
        padding="0px 0px 0px 0px"
        width="15px"
        height="15px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        children={footerLinkGroup2}
        {...getOverrideProps(overrides, "FooterLinkGroup2")}
      ></Flex>
      <Flex
        padding="0px 0px 0px 0px"
        width="15px"
        height="15px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        children={footerLinkGroup3}
        {...getOverrideProps(overrides, "FooterLinkGroup3")}
      ></Flex>
      <Flex
        padding="0px 0px 0px 0px"
        width="15px"
        height="15px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        children={footerLinkGroup4}
        {...getOverrideProps(overrides, "FooterLinkGroup4")}
      ></Flex>
    </Flex>
  );
}
