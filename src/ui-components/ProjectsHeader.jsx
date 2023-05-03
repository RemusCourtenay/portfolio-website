/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
import ProjectLinks from "./ProjectLinks";
export default function ProjectsHeader(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="20px"
      direction="column"
      width="1920px"
      height="150px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "ProjectsHeader")}
      {...rest}
    >
      <Text
        fontFamily="Raleway"
        fontSize="48px"
        fontWeight="700"
        color="rgba(45,45,45,1)"
        textTransform="capitalize"
        lineHeight="56.35200119018555px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="-0.33px"
        width="195px"
        height="54.37px"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Projects"
        {...getOverrideProps(overrides, "Projects")}
      ></Text>
      <ProjectLinks
        display="flex"
        gap="10px"
        direction="row"
        width="300px"
        height="25px"
        justifyContent="space-between"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "ProjectLinks")}
      ></ProjectLinks>
    </Flex>
  );
}
