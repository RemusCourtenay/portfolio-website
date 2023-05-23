/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, View } from "@aws-amplify/ui-react";
export default function ProjectsExpandedView(props) {
  const {
    projectFullCircleGroup,
    leftSwapButtonGroup,
    rightSwapButtonGroup,
    backgroundGroup,
    overrides,
    ...rest
  } = props;
  return (
    <View
      width="1920px"
      height="1250px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "ProjectsExpandedView")}
      {...rest}
    >
      <Flex
        gap="66px"
        direction="row"
        width="1920px"
        height="1250px"
        justifyContent="space-between"
        alignItems="center"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 100px 0px 100px"
        {...getOverrideProps(overrides, "ExpandedViewGroup")}
      >
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
          children={leftSwapButtonGroup}
          {...getOverrideProps(overrides, "LeftSwapButtonGroup")}
        ></Flex>
        <Flex
          gap="0"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          children={projectFullCircleGroup}
          {...getOverrideProps(overrides, "ProjectFullCircleGroup")}
        ></Flex>
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
          children={rightSwapButtonGroup}
          {...getOverrideProps(overrides, "RightSwapButtonGroup")}
        ></Flex>
      </Flex>
      <View
        padding="0px 0px 0px 0px"
        width="1920px"
        height="1250px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        left="0px"
        children={backgroundGroup}
        {...getOverrideProps(overrides, "BackgroundGroup")}
      ></View>
    </View>
  );
}
