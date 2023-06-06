/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import MobileProjectCircleView from "./MobileProjectCircleView";
import { Flex, Text, View } from "@aws-amplify/ui-react";
import MobileProjectsHeader from "./MobileProjectsHeader";
export default function MobileProjectsLayered(props) {
  const { overrides, ...rest } = props;
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
      {...getOverrideProps(overrides, "MobileProjectsLayered")}
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
        {...getOverrideProps(overrides, "ProjectsInnerGroup")}
      >
        <Flex
          gap="5px"
          direction="column"
          width="360px"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          position="absolute"
          top="0px"
          left="0px"
          right="0px"
          padding="5px 10px 5px 10px"
          {...getOverrideProps(overrides, "ProjectsAllView")}
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
              padding="0px 0px 0px 0px"
              width="unset"
              height="300px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              {...getOverrideProps(overrides, "Project1Group")}
            >
              <MobileProjectCircleView
                width="340px"
                height="300px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="0px"
                left="0px"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(
                  overrides,
                  "MobileProjectCircleView3851840"
                )}
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
                {...getOverrideProps(
                  overrides,
                  "MobileProjectCircleView3851842"
                )}
              ></MobileProjectCircleView>
            </Flex>
            <Flex
              gap="0"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="center"
              alignItems="flex-start"
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
                {...getOverrideProps(
                  overrides,
                  "MobileProjectCircleView3851844"
                )}
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
            <Flex
              gap="5px"
              direction="column"
              width="98px"
              height="27.5px"
              justifyContent="flex-end"
              alignItems="flex-end"
              overflow="hidden"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "SkillsButton")}
            >
              <Flex
                gap="5px"
                direction="row"
                width="98px"
                height="27.5px"
                justifyContent="center"
                alignItems="center"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                backgroundColor="rgba(45,45,45,1)"
                {...getOverrideProps(overrides, "ButtonGroup")}
              >
                <Text
                  fontFamily="Raleway"
                  fontSize="8px"
                  fontWeight="500"
                  color="rgba(229,233,237,1)"
                  textTransform="uppercase"
                  lineHeight="9.392000198364258px"
                  textAlign="left"
                  display="block"
                  direction="column"
                  justifyContent="unset"
                  letterSpacing="0.09px"
                  width="unset"
                  height="unset"
                  gap="unset"
                  alignItems="unset"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children="Download CV"
                  {...getOverrideProps(overrides, "SkillsButtonText")}
                ></Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </View>
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
        {...getOverrideProps(overrides, "ProjectsHeaderGroup")}
      >
        <MobileProjectsHeader
          display="flex"
          gap="10px"
          direction="column"
          width="360px"
          height="55px"
          justifyContent="space-between"
          alignItems="center"
          position="absolute"
          top="0px"
          left="0px"
          right="0px"
          padding="5px 0px 5px 0px"
          {...getOverrideProps(overrides, "MobileProjectsHeader")}
        ></MobileProjectsHeader>
      </View>
    </View>
  );
}
