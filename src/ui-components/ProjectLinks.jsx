/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import ProjectLink from "./ProjectLink";
import { Flex } from "@aws-amplify/ui-react";
export default function ProjectLinks(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="row"
      width="300px"
      height="25px"
      justifyContent="space-between"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "ProjectLinks")}
      {...rest}
    >
      <ProjectLink
        display="flex"
        gap="10px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        state="Default"
        focus="True"
        {...getOverrideProps(overrides, "ProjectLink132811")}
      ></ProjectLink>
      <ProjectLink
        display="flex"
        gap="10px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        state="Default"
        focus="False"
        {...getOverrideProps(overrides, "ProjectLink74823")}
      ></ProjectLink>
      <ProjectLink
        display="flex"
        gap="10px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        state="Default"
        focus="False"
        {...getOverrideProps(overrides, "ProjectLink74827")}
      ></ProjectLink>
      <ProjectLink
        display="flex"
        gap="10px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        state="Default"
        focus="False"
        {...getOverrideProps(overrides, "ProjectLink74829")}
      ></ProjectLink>
    </Flex>
  );
}
