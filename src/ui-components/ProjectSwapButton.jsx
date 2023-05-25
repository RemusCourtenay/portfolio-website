/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "@aws-amplify/ui-react/internal";
import { Image, View } from "@aws-amplify/ui-react";
export default function ProjectSwapButton(props) {
  const {
    projectSwapClickHandler,
    arrowsrc,
    overrides: overridesProp,
    ...rest
  } = props;
  const variants = [
    {
      variantValues: { state: "Default", direction: "Left" },
      overrides: { ArrowImage: {}, ProjectSwapButton: {} },
    },
    {
      variantValues: { state: "Default", direction: "Right" },
      overrides: { ArrowImage: {}, ProjectSwapButton: {} },
    },
    {
      variantValues: { state: "Click", direction: "Right" },
      overrides: { ArrowImage: {}, ProjectSwapButton: {} },
    },
    {
      variantValues: { state: "Click", direction: "Left" },
      overrides: { ArrowImage: {}, ProjectSwapButton: {} },
    },
    {
      variantValues: { state: "Hover", direction: "Left" },
      overrides: { ArrowImage: {}, ProjectSwapButton: {} },
    },
    {
      variantValues: { state: "Hover", direction: "Right" },
      overrides: { ArrowImage: {}, ProjectSwapButton: {} },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <View
      width="75px"
      height="75px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "ProjectSwapButton")}
      {...rest}
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
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={arrowsrc}
        onClick={projectSwapClickHandler}
        {...getOverrideProps(overrides, "ArrowImage")}
      ></Image>
    </View>
  );
}
