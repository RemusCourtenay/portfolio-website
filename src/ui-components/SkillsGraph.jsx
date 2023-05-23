/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function SkillsGraph(props) {
  const {
    skill1Group,
    skill2Group,
    skill3Group,
    skill4Group,
    skill5Group,
    overrides,
    ...rest
  } = props;
  return (
    <Flex
      gap="25px"
      direction="column"
      width="550px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "SkillsGraph")}
      {...rest}
    >
      <Text
        fontFamily="Raleway"
        fontSize="48px"
        fontWeight="700"
        color="rgba(45,45,45,1)"
        textTransform="capitalize"
        lineHeight="56.35200119018555px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="-0.33px"
        width="unset"
        height="60px"
        gap="unset"
        alignItems="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="My Skills"
        {...getOverrideProps(overrides, "My Skills")}
      ></Text>
      <Flex
        gap="15px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-end"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "SkillsGroup")}
      >
        <Flex
          gap="0"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="space-between"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 10px 0px 0px"
          {...getOverrideProps(overrides, "LabelTextGroup")}
        >
          <Text
            fontFamily="Raleway"
            fontSize="16px"
            fontWeight="500"
            color="rgba(45,45,45,1)"
            lineHeight="18.784000396728516px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.17px"
            width="100px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Python"
            {...getOverrideProps(overrides, "HiddenPaddingText")}
          ></Text>
          <Flex
            gap="47px"
            direction="row"
            width="399.08px"
            height="unset"
            justifyContent="space-between"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "ExperienceTitles")}
          >
            <Text
              fontFamily="Raleway"
              fontSize="16px"
              fontWeight="500"
              color="rgba(0,0,0,1)"
              lineHeight="18.784000396728516px"
              textAlign="center"
              display="block"
              direction="column"
              justifyContent="unset"
              letterSpacing="0.17px"
              width="101.69px"
              height="20px"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Personal"
              {...getOverrideProps(overrides, "Personal")}
            ></Text>
            <Text
              fontFamily="Raleway"
              fontSize="16px"
              fontWeight="500"
              color="rgba(0,0,0,1)"
              lineHeight="18.784000396728516px"
              textAlign="center"
              display="block"
              direction="column"
              justifyContent="unset"
              letterSpacing="0.17px"
              width="101.69px"
              height="20px"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Educational"
              {...getOverrideProps(overrides, "Educational")}
            ></Text>
            <Text
              fontFamily="Raleway"
              fontSize="16px"
              fontWeight="500"
              color="rgba(0,0,0,1)"
              lineHeight="18.784000396728516px"
              textAlign="center"
              display="block"
              direction="column"
              justifyContent="unset"
              letterSpacing="0.17px"
              width="101.69px"
              height="20px"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Commercial"
              {...getOverrideProps(overrides, "Commercial")}
            ></Text>
          </Flex>
        </Flex>
        <Flex
          padding="0px 0px 0px 0px"
          width="550px"
          height="40px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          children={skill1Group}
          {...getOverrideProps(overrides, "skill1Group")}
        ></Flex>
        <Flex
          padding="0px 0px 0px 0px"
          width="550px"
          height="40px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          children={skill2Group}
          {...getOverrideProps(overrides, "skill2Group")}
        ></Flex>
        <Flex
          padding="0px 0px 0px 0px"
          width="550px"
          height="40px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          children={skill3Group}
          {...getOverrideProps(overrides, "skill3Group")}
        ></Flex>
        <Flex
          padding="0px 0px 0px 0px"
          width="550px"
          height="40px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          children={skill4Group}
          {...getOverrideProps(overrides, "skill4Group")}
        ></Flex>
        <Flex
          padding="0px 0px 0px 0px"
          width="550px"
          height="40px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          children={skill5Group}
          {...getOverrideProps(overrides, "skill5Group")}
        ></Flex>
      </Flex>
    </Flex>
  );
}
