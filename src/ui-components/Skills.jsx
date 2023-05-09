/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, View } from "@aws-amplify/ui-react";
export default function Skills(props) {
  const {
    skillsGraphGroup,
    skillsTextGroup,
    backgroundShapesSource,
    overrides,
    ...rest
  } = props;
  return (
    <View
      width="1920px"
      height="630px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(229,233,237,1)"
      {...getOverrideProps(overrides, "Skills")}
      {...rest}
    >
      <Flex
        gap="0"
        direction="column"
        width="1920px"
        height="630px"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "BackgroundShapesGroup")}
      >
        <Image
          width="1562px"
          height="474px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          src={backgroundShapesSource}
          {...getOverrideProps(overrides, "SkillsBackgroundShapes")}
        ></Image>
      </Flex>
      <Flex
        gap="258px"
        direction="row"
        width="1920px"
        height="630px"
        justifyContent="flex-start"
        alignItems="center"
        position="absolute"
        top="0px"
        left="0px"
        padding="60px 250px 60px 250px"
        {...getOverrideProps(overrides, "SkillsSplash")}
      >
        <Flex
          padding="0px 0px 0px 0px"
          width="500px"
          height="350px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          children={skillsTextGroup}
          {...getOverrideProps(overrides, "SkillsTextGroup")}
        ></Flex>
        <Flex
          padding="0px 0px 0px 0px"
          width="500px"
          height="350px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          children={skillsGraphGroup}
          {...getOverrideProps(overrides, "SkillsGraphGroup")}
        ></Flex>
      </Flex>
    </View>
  );
}
