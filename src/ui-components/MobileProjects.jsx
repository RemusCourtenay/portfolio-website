/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { View } from "@aws-amplify/ui-react";
export default function MobileProjects(props) {
  const { projectsHeaderGroup, projectsInnerGroup, overrides, ...rest } = props;
  return (
    <View
      width="360px"
      height="1020px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "MobileProjects")}
      {...rest}
    >
      <View
        padding="0px 0px 0px 0px"
        width="360px"
        height="965px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="55px"
        left="0px"
        children={projectsInnerGroup}
        {...getOverrideProps(overrides, "ProjectsInnerGroup")}
      ></View>
      <View
        padding="0px 0px 0px 0px"
        width="360px"
        height="55px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        left="0px"
        children={projectsHeaderGroup}
        {...getOverrideProps(overrides, "ProjectsHeaderGroup")}
      ></View>
    </View>
  );
}
