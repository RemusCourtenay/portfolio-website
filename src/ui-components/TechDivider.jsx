/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Image, View } from "@aws-amplify/ui-react";
export default function TechDivider(props) {
  const { dividerImageSource, overrides, ...rest } = props;
  return (
    <View
      width="1440px"
      height="480px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "TechDivider")}
      {...rest}
    >
      <View
        padding="0px 0px 0px 0px"
        width="1440px"
        height="480px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        left="0px"
        {...getOverrideProps(overrides, "TechDivider-Background")}
      >
        <Image
          width="1440px"
          height="480px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          src={dividerImageSource}
          {...getOverrideProps(overrides, "techdivider-transparent")}
        ></Image>
      </View>
    </View>
  );
}
