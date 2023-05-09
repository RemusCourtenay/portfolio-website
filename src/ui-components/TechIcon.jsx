/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image } from "@aws-amplify/ui-react";
export default function TechIcon(props) {
  const { iconImageSource, IconHoverImageSource, hover, overrides, ...rest } =
    props;
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
      {...getOverrideProps(overrides, "TechIcon")}
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
        src={hover == true ? IconHoverImageSource : iconImageSource}
        {...getOverrideProps(overrides, "IconImage")}
      ></Image>
    </Flex>
  );
}
