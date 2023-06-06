/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
import MobileProjectLink from "./MobileProjectLink";
export default function MobileProjectsHeader(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="column"
      width="360px"
      height="55px"
      justifyContent="space-between"
      alignItems="center"
      position="relative"
      padding="5px 0px 5px 0px"
      {...getOverrideProps(overrides, "MobileProjectsHeader")}
      {...rest}
    >
      <Text
        fontFamily="Raleway"
        fontSize="24px"
        fontWeight="700"
        color="rgba(45,45,45,1)"
        textTransform="capitalize"
        lineHeight="28.176000595092773px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="-0.09px"
        width="97.5px"
        height="27.18px"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Projects"
        {...getOverrideProps(overrides, "Projects")}
      ></Text>
      <Flex
        gap="10px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "ProjectLinksGroup")}
      >
        <Flex
          gap="5px"
          direction="row"
          width="200px"
          height="12.5px"
          justifyContent="space-between"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "ProjectLinks")}
        >
          <Flex
            padding="0px 0px 0px 0px"
            width="50px"
            height="12px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            {...getOverrideProps(overrides, "AllLinkGroup")}
          >
            <MobileProjectLink
              display="flex"
              gap="10px"
              direction="row"
              width="50px"
              height="unset"
              justifyContent="center"
              alignItems="center"
              position="absolute"
              top="0px"
              left="0px"
              padding="0px 0px 0px 0px"
              state="Default"
              focus="True"
              {...getOverrideProps(overrides, "MobileProjectLink3851810")}
            ></MobileProjectLink>
          </Flex>
          <Flex
            padding="0px 0px 0px 0px"
            width="50px"
            height="12px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            {...getOverrideProps(overrides, "Project1LinkGroup")}
          >
            <MobileProjectLink
              display="flex"
              gap="10px"
              direction="row"
              width="50px"
              height="unset"
              justifyContent="center"
              alignItems="center"
              position="absolute"
              top="0px"
              left="0px"
              padding="0px 0px 0px 0px"
              state="Default"
              focus="True"
              {...getOverrideProps(overrides, "MobileProjectLink3851812")}
            ></MobileProjectLink>
          </Flex>
          <Flex
            padding="0px 0px 0px 0px"
            width="50px"
            height="12px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            {...getOverrideProps(overrides, "Project2LinkGroup")}
          >
            <MobileProjectLink
              display="flex"
              gap="10px"
              direction="row"
              width="50px"
              height="unset"
              justifyContent="center"
              alignItems="center"
              position="absolute"
              top="0px"
              left="0px"
              padding="0px 0px 0px 0px"
              state="Default"
              focus="True"
              {...getOverrideProps(overrides, "MobileProjectLink3851814")}
            ></MobileProjectLink>
          </Flex>
          <Flex
            padding="0px 0px 0px 0px"
            width="50px"
            height="12px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            {...getOverrideProps(overrides, "Project3LinkGroup")}
          >
            <MobileProjectLink
              display="flex"
              gap="10px"
              direction="row"
              width="50px"
              height="unset"
              justifyContent="center"
              alignItems="center"
              position="absolute"
              top="0px"
              left="0px"
              padding="0px 0px 0px 0px"
              state="Default"
              focus="True"
              {...getOverrideProps(overrides, "MobileProjectLink3851816")}
            ></MobileProjectLink>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
