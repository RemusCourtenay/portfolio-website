/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image } from "@aws-amplify/ui-react";
export default function ProjectExpandedBackground(props) {
  const { projectExpandedBackgroundSource, overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="column"
      width="1920px"
      height="1250px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "ProjectExpandedBackground")}
      {...rest}
    >
      <Image
        width="1843.2px"
        height="1200px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={projectExpandedBackgroundSource}
        {...getOverrideProps(overrides, "BackgroundImage")}
      ></Image>
    </Flex>
  );
}
