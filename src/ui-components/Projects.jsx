/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, View } from "@aws-amplify/ui-react";
export default function Projects(props) {
  const {
    projectsHeaderGroup,
    projectsInnerGroup,
    projectsBackgroundGroup,
    overrides,
    ...rest
  } = props;
  return (
    <View
      width="1920px"
      height="1400px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Projects")}
      {...rest}
    >
      <View
        padding="0px 0px 0px 0px"
        width="1920px"
        height="1400px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        left="0px"
        children={projectsBackgroundGroup}
        {...getOverrideProps(overrides, "ProjectsBackgroundGroup")}
      ></View>
      <Flex
        gap="0"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "ProjectsMainGroup")}
      >
        <Flex
          padding="0px 0px 0px 0px"
          width="1920px"
          height="150px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          children={projectsHeaderGroup}
          {...getOverrideProps(overrides, "ProjectsHeaderGroup")}
        ></Flex>
        <Flex
          padding="0px 0px 0px 0px"
          width="0px"
          height="0px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          children={projectsInnerGroup}
          {...getOverrideProps(overrides, "ProjectsInnerGroup")}
        ></Flex>
      </Flex>
    </View>
  );
}
