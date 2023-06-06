/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function MobileSkillsGraph(props) {
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
      gap="12.5px"
      direction="column"
      width="275px"
      height="190px"
      justifyContent="space-between"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "MobileSkillsGraph")}
      {...rest}
    >
      <Text
        fontFamily="Raleway"
        fontSize="24px"
        fontWeight="700"
        color="rgba(45,45,45,1)"
        textTransform="capitalize"
        lineHeight="28.176000595092773px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="-0.09px"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="My Skills"
        {...getOverrideProps(overrides, "My Skills")}
      ></Text>
      <Flex
        gap="7.5px"
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
          justifyContent="flex-end"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 5px 0px 0px"
          {...getOverrideProps(overrides, "LabelTextGroup")}
        >
          <Flex
            gap="23.5px"
            direction="row"
            width="200px"
            height="unset"
            justifyContent="space-between"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "ExperienceTitles")}
          >
            <Flex
              gap="5px"
              direction="row"
              width="50px"
              height="9.5px"
              justifyContent="center"
              alignItems="center"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Header1Group")}
            >
              <Text
                fontFamily="Raleway"
                fontSize="8px"
                fontWeight="500"
                color="rgba(0,0,0,1)"
                lineHeight="9.392000198364258px"
                textAlign="center"
                display="block"
                direction="column"
                justifyContent="unset"
                letterSpacing="0.01px"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Personal"
                {...getOverrideProps(overrides, "Personal")}
              ></Text>
            </Flex>
            <Flex
              gap="5px"
              direction="row"
              width="50px"
              height="unset"
              justifyContent="center"
              alignItems="center"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Header2Group")}
            >
              <Text
                fontFamily="Raleway"
                fontSize="8px"
                fontWeight="500"
                color="rgba(0,0,0,1)"
                lineHeight="9.392000198364258px"
                textAlign="center"
                display="block"
                direction="column"
                justifyContent="unset"
                letterSpacing="0.01px"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Educational"
                {...getOverrideProps(overrides, "Educational")}
              ></Text>
            </Flex>
            <Flex
              gap="5px"
              direction="row"
              width="50px"
              height="unset"
              justifyContent="center"
              alignItems="center"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Header3Group")}
            >
              <Text
                fontFamily="Raleway"
                fontSize="8px"
                fontWeight="500"
                color="rgba(0,0,0,1)"
                lineHeight="9.392000198364258px"
                textAlign="center"
                display="block"
                direction="column"
                justifyContent="unset"
                letterSpacing="0.01px"
                width="unset"
                height="unset"
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
        </Flex>
        <Flex
          padding="0px 0px 0px 0px"
          width="275px"
          height="20px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          children={skill1Group}
          {...getOverrideProps(overrides, "Skill1Group")}
        ></Flex>
        <Flex
          padding="0px 0px 0px 0px"
          width="275px"
          height="20px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          children={skill2Group}
          {...getOverrideProps(overrides, "Skill2Group")}
        ></Flex>
        <Flex
          padding="0px 0px 0px 0px"
          width="275px"
          height="20px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          children={skill3Group}
          {...getOverrideProps(overrides, "Skill3Group")}
        ></Flex>
        <Flex
          padding="0px 0px 0px 0px"
          width="275px"
          height="20px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          children={skill4Group}
          {...getOverrideProps(overrides, "Skill4Group")}
        ></Flex>
        <Flex
          padding="0px 0px 0px 0px"
          width="275px"
          height="20px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          children={skill5Group}
          {...getOverrideProps(overrides, "Skill5Group")}
        ></Flex>
      </Flex>
    </Flex>
  );
}
