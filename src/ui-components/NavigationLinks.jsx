/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
import TextLink from "./TextLink";
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
      <Flex
        gap="10px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="10px 10px 10px 10px"
        {...getOverrideProps(overrides, "Home")}
      >
        <Text
          fontFamily="Raleway"
          fontSize="20px"
          fontWeight="700"
          color="rgba(255,0,0,1)"
          lineHeight="23.479999542236328px"
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
          children="Home"
          {...getOverrideProps(overrides, "Link Text")}
        ></Text>
      </Flex>
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
