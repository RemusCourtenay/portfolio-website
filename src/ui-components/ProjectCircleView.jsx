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
import { Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function ProjectCircleView(props) {
  const {
    projectTitle,
    circleViewBorderSource,
    projectImageSource,
    circleViewClickHandler,
    overrides: overridesProp,
    ...rest
  } = props;
  const variants = [
    {
      variantValues: { state: "Default" },
      overrides: {
        ProjectImage: {},
        ReadMore: {},
        ProjectTitle: {},
        LinkArrow: {},
        RedBorderCircle: {},
        ProjectCircleView: {},
      },
    },
    {
      variantValues: { state: "Hover" },
      overrides: {
        ProjectImage: {
          width: "600px",
          height: "600px",
          top: "0px",
          left: "0px",
        },
        ReadMore: { display: "block" },
        ProjectTitle: {},
        LinkArrow: { left: "272px" },
        RedBorderCircle: {},
        ProjectCircleView: {},
      },
    },
    {
      variantValues: { state: "Click" },
      overrides: {
        ProjectImage: {
          width: "600px",
          height: "600px",
          top: "0px",
          left: "0px",
        },
        ReadMore: { display: "block" },
        ProjectTitle: {},
        LinkArrow: { left: "305px" },
        RedBorderCircle: {},
        ProjectCircleView: {},
      },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
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
        objectFit="unset"
        src={projectImageSource}
        {...getOverrideProps(overrides, "ProjectImage")}
      ></Image>
      <Text
        fontFamily="Raleway"
        fontSize="28px"
        fontWeight="300"
        color="rgba(255,255,255,1)"
        lineHeight="32.87200164794922px"
        textAlign="left"
        display="none"
        direction="column"
        justifyContent="unset"
        width="177px"
        height="49px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="382px"
        left="108px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Read more"
        {...getOverrideProps(overrides, "ReadMore")}
      ></Text>
      <Text
        fontFamily="Raleway"
        fontSize="48px"
        fontWeight="700"
        color="rgba(255,255,255,1)"
        lineHeight="56.35200119018555px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="384px"
        height="176px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="255px"
        left="108px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={projectTitle}
        {...getOverrideProps(overrides, "ProjectTitle")}
      ></Text>
      <Icon
        width="28px"
        height="0px"
        viewBox={{ minX: 0, minY: 0, width: 28, height: 1 }}
        paths={[
          {
            d: "M0 -1L-1 -1L-1 1L0 1L0 -1ZM28.7071 0.707107C29.0976 0.316583 29.0976 -0.316583 28.7071 -0.707107L22.3431 -7.07107C21.9526 -7.46159 21.3195 -7.46159 20.9289 -7.07107C20.5384 -6.68054 20.5384 -6.04738 20.9289 -5.65685L26.5858 0L20.9289 5.65685C20.5384 6.04738 20.5384 6.68054 20.9289 7.07107C21.3195 7.46159 21.9526 7.46159 22.3431 7.07107L28.7071 0.707107ZM0 1L28 1L28 -1L0 -1L0 1Z",
            stroke: "rgba(255,255,255,1)",
            fillRule: "nonzero",
            strokeWidth: 2,
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="399px"
        left="115px"
        {...getOverrideProps(overrides, "LinkArrow")}
      ></Icon>
      <Image
        width="600px"
        height="600px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={circleViewBorderSource}
        {...getOverrideProps(overrides, "RedBorderCircle")}
      ></Image>
    </View>
  );
}
