/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function MobileSkillsButton(props) {
  const { clickHandler, overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="row"
      width="98px"
      height="27.5px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(45,45,45,1)"
      onClick={clickHandler}
      {...getOverrideProps(overrides, "MobileSkillsButton")}
      {...rest}
    >
      <Text
        fontFamily="Raleway"
        fontSize="8px"
        fontWeight="500"
        color="rgba(229,233,237,1)"
        textTransform="uppercase"
        lineHeight="9.392000198364258px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0.09px"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Download CV"
        {...getOverrideProps(overrides, "SkillsButtonText")}
      ></Text>
    </Flex>
  );
}
