/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image } from "@aws-amplify/ui-react";
export default function ProjectsBackground(props) {
  const { projectbackgroundimgsrc, overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="row"
      width="1920px"
      height="1400px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "ProjectsBackground")}
      {...rest}
    >
      <Flex
        gap="0"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        grow="1"
        shrink="1"
        basis="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "BackgroundPattern")}
      >
        <Image
          width="1518px"
          height="1017px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          src={projectbackgroundimgsrc}
          {...getOverrideProps(overrides, "ProjectsBackgroundPattern")}
        ></Image>
      </Flex>
    </Flex>
  );
}
