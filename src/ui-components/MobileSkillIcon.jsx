/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Image, View } from "@aws-amplify/ui-react";
export default function MobileSkillIcon(props) {
  const { imageSource, focusImageSource, focus, overrides, ...rest } = props;
  return (
    <View
      width="20px"
      height="20px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "MobileSkillIcon")}
      {...rest}
    >
      <Image
        width="20px"
        height="20px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="calc(50% - 10px - 0px)"
        left="calc(50% - 10px - 0px)"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={focus == true ? focusImageSource : imageSource}
        {...getOverrideProps(overrides, "icon")}
      ></Image>
    </View>
  );
}
