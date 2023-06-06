/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import MobileProjectCircleView from "./MobileProjectCircleView";
import { Flex } from "@aws-amplify/ui-react";
import MobileSkillsButton from "./MobileSkillsButton";
export default function MobileProjectsAllViewLayered(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="5px"
      direction="column"
      width="360px"
      height="965px"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      padding="5px 10px 5px 10px"
      {...getOverrideProps(overrides, "MobileProjectsAllViewLayered")}
      {...rest}
    >
      <Flex
        gap="0"
        direction="column"
        width="unset"
        height="900px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "ProjectsGroup")}
      >
        <Flex
          gap="0"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Project1Group")}
        >
          <MobileProjectCircleView
            width="340px"
            height="300px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "MobileProjectCircleView3852163")}
          ></MobileProjectCircleView>
        </Flex>
        <Flex
          gap="0"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-end"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Project2Group")}
        >
          <MobileProjectCircleView
            width="300px"
            height="300px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "MobileProjectCircleView3852165")}
          ></MobileProjectCircleView>
        </Flex>
        <Flex
          gap="0"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Project3Group")}
        >
          <MobileProjectCircleView
            width="340px"
            height="300px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "MobileProjectCircleView3852167")}
          ></MobileProjectCircleView>
        </Flex>
      </Flex>
      <Flex
        gap="0"
        direction="column"
        width="135px"
        height="50px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "PortfolioButtonGroup")}
      >
        <MobileSkillsButton
          display="flex"
          gap="0"
          direction="row"
          width="98px"
          height="27.5px"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(45,45,45,1)"
          state="Default"
          {...getOverrideProps(overrides, "MobileSkillsButton")}
        ></MobileSkillsButton>
      </Flex>
    </Flex>
  );
}
