/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, View } from "@aws-amplify/ui-react";
export default function ProjectCircleView(props) {
  const {
    backgroundImageSource,
    circleViewClickHandler,
    smallCircleGroup,
    overrides,
    ...rest
  } = props;
  return (
    <View
      width="600px"
      height="600px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      onClick={circleViewClickHandler}
      {...getOverrideProps(overrides, "ProjectCircleView")}
      {...rest}
    >
      <Flex
        gap="0"
        direction="column"
        width="600px"
        height="600px"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "BackgroundGroup")}
      >
        <Image
          width="600px"
          height="600px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          src={backgroundImageSource}
          {...getOverrideProps(overrides, "RedBorderCircle")}
        ></Image>
      </Flex>
      <Flex
        gap="0"
        direction="row"
        width="600px"
        height="600px"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        children={smallCircleGroup}
        {...getOverrideProps(overrides, "SmallCircleGroup")}
      ></Flex>
    </View>
  );
}
