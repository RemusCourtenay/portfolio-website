/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Image, View } from "@aws-amplify/ui-react";
export default function Splash(props) {
  const {
    splashTextGroup,
    faceImage,
    backgroundShapesSource,
    overrides,
    ...rest
  } = props;
  return (
    <View
      width="1920px"
      height="900px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Splash")}
      {...rest}
    >
      <View
        padding="0px 0px 0px 0px"
        width="1920px"
        height="900px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        left="0px"
        {...getOverrideProps(overrides, "Background Group")}
      >
        <Image
          width="1920px"
          height="900px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          src={backgroundShapesSource}
          {...getOverrideProps(overrides, "Background Pattern Intro")}
        ></Image>
      </View>
      <View
        padding="0px 0px 0px 0px"
        width="1320.27px"
        height="990.2px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="-0.22%"
        bottom="-9.8%"
        left="39.06%"
        right="-7.83%"
        {...getOverrideProps(overrides, "Mask Group")}
      >
        <Image
          width="100%"
          height="100%"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          transformOrigin="top left"
          transform="rotate(0deg)"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          src={faceImage}
          {...getOverrideProps(overrides, "Face")}
        ></Image>
      </View>
      <View
        padding="0px 0px 0px 0px"
        width="627px"
        height="366.14px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="277px"
        left="364px"
        children={splashTextGroup}
        {...getOverrideProps(overrides, "SplashTextGroup")}
      ></View>
    </View>
  );
}
