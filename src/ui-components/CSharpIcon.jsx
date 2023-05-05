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
import { Flex, Image } from "@aws-amplify/ui-react";
export default function CSharpIcon(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      variantValues: { focus: "False" },
      overrides: { ColorIcon: {}, CSharpIcon: {} },
    },
    {
      variantValues: { focus: "True" },
      overrides: { ColorIcon: {}, CSharpIcon: {} },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="0"
      direction="column"
      width="240px"
      height="240px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      display="flex"
      {...getOverrideProps(overrides, "CSharpIcon")}
      {...rest}
    >
      <Image
        width="100px"
        height="100px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "ColorIcon")}
      ></Image>
    </Flex>
  );
}
