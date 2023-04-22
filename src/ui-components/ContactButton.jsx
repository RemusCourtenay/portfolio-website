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
import { Text, View } from "@aws-amplify/ui-react";
export default function ContactButton(props) {
  const { onClickHandler, overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Border: {},
        "Get In Touch": { color: "rgba(197,0,0,1)" },
        ContactButton: {},
      },
      variantValues: { hover: "True" },
    },
    {
      overrides: { Border: {}, "Get In Touch": {}, ContactButton: {} },
      variantValues: { hover: "False" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <View
      width="215px"
      height="61.14px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      onClick={onClickHandler}
      {...getOverrideProps(overrides, "ContactButton")}
      {...rest}
    >
      <View
        width="215px"
        height="61.14px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        border="2px SOLID rgba(158,158,158,1)"
        borderRadius="30.5px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Border")}
      ></View>
      <Text
        fontFamily="Raleway"
        fontSize="16px"
        fontWeight="500"
        color="rgba(45,45,45,1)"
        textTransform="uppercase"
        lineHeight="18.784000396728516px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0.33px"
        width="117px"
        height="19.04px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="34.43%"
        bottom="34.43%"
        left="22.79%"
        right="22.79%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Get In Touch"
        {...getOverrideProps(overrides, "Get In Touch")}
      ></Text>
    </View>
  );
}
