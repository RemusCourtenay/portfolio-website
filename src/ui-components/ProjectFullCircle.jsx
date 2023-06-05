/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text, View } from "@aws-amplify/ui-react";
export default function ProjectFullCircle(props) {
  const {
    projectImageSource,
    projectTitle,
    projectBodyText,
    overrides,
    ...rest
  } = props;
  return (
    <View
      width="1145px"
      height="1145px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "ProjectFullCircle")}
      {...rest}
    >
      <Image
        width="1145px"
        height="1145px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={projectImageSource}
        {...getOverrideProps(overrides, "ProjectImage")}
      ></Image>
      <Flex
        gap="23px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="66px"
        left="203px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "TextGroup")}
      >
        <Text
          fontFamily="Raleway"
          fontSize="64px"
          fontWeight="700"
          color="rgba(255,255,255,1)"
          lineHeight="75.13600158691406px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="600px"
          height="150px"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={projectTitle}
          {...getOverrideProps(overrides, "ProjectTitle")}
        ></Text>
        <Text
          fontFamily="Raleway"
          fontSize="28px"
          fontWeight="500"
          color="rgba(255,255,255,1)"
          lineHeight="32.87200164794922px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="793px"
          height="763px"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={projectBodyText}
          {...getOverrideProps(overrides, "ProjectBody")}
        ></Text>
      </Flex>
    </View>
  );
}
