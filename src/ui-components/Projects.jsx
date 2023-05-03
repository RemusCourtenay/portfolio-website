/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import ProjectsHeader from "./ProjectsHeader";
import ProjectSwapButton from "./ProjectSwapButton";
import PortfolioInner from "./PortfolioInner";
import { Flex } from "@aws-amplify/ui-react";
export default function Projects(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="59px"
      direction="column"
      width="1920px"
      height="1400px"
      justifyContent="space-between"
      alignItems="center"
      position="relative"
      padding="50px 0px 150px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Projects")}
      {...rest}
    >
      <ProjectsHeader
        display="flex"
        gap="20px"
        direction="column"
        width="unset"
        height="150px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "ProjectsHeader")}
      ></ProjectsHeader>
      <Flex
        gap="0"
        direction="row"
        width="unset"
        height="1000px"
        justifyContent="space-between"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 50px 0px 50px"
        {...getOverrideProps(overrides, "ProjectsMain")}
      >
        <ProjectSwapButton
          width="100px"
          height="100px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          state="Default"
          direction="Left"
          {...getOverrideProps(overrides, "ProjectSwapButton131727")}
        ></ProjectSwapButton>
        <PortfolioInner
          display="flex"
          gap="0"
          direction="column"
          width="1620px"
          height="1000px"
          justifyContent="space-between"
          alignItems="center"
          overflow="hidden"
          shrink="0"
          position="relative"
          border="1px SOLID rgba(0,0,0,1)"
          borderRadius="10px"
          padding="99px 99px 99px 99px"
          backgroundColor="rgba(239,239,239,1)"
          {...getOverrideProps(overrides, "PortfolioInner")}
        ></PortfolioInner>
        <ProjectSwapButton
          width="100px"
          height="100px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          state="Default"
          direction="Right"
          {...getOverrideProps(overrides, "ProjectSwapButton131729")}
        ></ProjectSwapButton>
      </Flex>
    </Flex>
  );
}
