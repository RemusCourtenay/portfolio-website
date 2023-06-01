/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex } from "@aws-amplify/ui-react";
export default function ProjectLinks(props) {
  const {
    allLinkGroup,
    project1LinkGroup,
    project3LinkGroup,
    project2LinkGroup,
    overrides,
    ...rest
  } = props;
  return (
    <Flex
      gap="10px"
      direction="row"
      width="400px"
      height="25px"
      justifyContent="space-between"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "ProjectLinks")}
      {...rest}
    >
      <Flex
        padding="0px 0px 0px 0px"
        width="100px"
        height="23px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        children={allLinkGroup}
        {...getOverrideProps(overrides, "AllLinkGroup")}
      ></Flex>
      <Flex
        padding="0px 0px 0px 0px"
        width="100px"
        height="23px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        children={project1LinkGroup}
        {...getOverrideProps(overrides, "Project1LinkGroup")}
      ></Flex>
      <Flex
        padding="0px 0px 0px 0px"
        width="100px"
        height="23px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        children={project2LinkGroup}
        {...getOverrideProps(overrides, "Project2LinkGroup")}
      ></Flex>
      <Flex
        padding="0px 0px 0px 0px"
        width="100px"
        height="23px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        children={project3LinkGroup}
        {...getOverrideProps(overrides, "Project3LinkGroup")}
      ></Flex>
    </Flex>
  );
}
