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
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Border: {
          border: "2px SOLID rgba(74,73,73,1)",
          boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.6000000238418579)",
        },
        "Get In Touch": { color: "rgba(34,34,34,1)" },
        ContactButton: {},
      },
      variantValues: { state: "Hover", bold: "False" },
    },
    {
      overrides: { Border: {}, "Get In Touch": {}, ContactButton: {} },
      variantValues: { state: "Default", bold: "False" },
    },
    {
      overrides: {
        Border: { border: "2px SOLID rgba(90,90,90,1)" },
        "Get In Touch": {},
        ContactButton: {},
      },
      variantValues: { state: "Default", bold: "True" },
    },
    {
      overrides: {
        Border: {
          border: "2px SOLID rgba(0,0,0,1)",
          boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.6000000238418579)",
        },
        "Get In Touch": {},
        ContactButton: {},
      },
      variantValues: { state: "Hover", bold: "True" },
    },
    {
      overrides: {
        Border: { border: "2px SOLID rgba(50,50,50,1)" },
        "Get In Touch": {},
        ContactButton: {},
      },
      variantValues: { state: "Click", bold: "False" },
    },
    {
      overrides: {
        Border: { bottom: "1.39%", border: "2px SOLID rgba(0,0,0,1)" },
        "Get In Touch": { top: "33.95%", bottom: "35.34%" },
        ContactButton: { height: "62px" },
      },
      variantValues: { state: "Click", bold: "True" },
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
        boxShadow="2px 2px 4px rgba(0, 0, 0, 0.25)"
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
