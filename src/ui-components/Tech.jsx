/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function Tech(props) {
  const { techSquaresGroup, overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="column"
      width="1920px"
      height="920px"
      justifyContent="flex-start"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="135px 217px 135px 217px"
      backgroundColor="rgba(250,250,250,1)"
      {...getOverrideProps(overrides, "Tech")}
      {...rest}
    >
      <Flex
        gap="0"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "TechTextGroup")}
      >
        <Text
          fontFamily="Raleway"
          fontSize="48px"
          fontWeight="700"
          color="rgba(45,45,45,1)"
          textTransform="capitalize"
          lineHeight="56.35200119018555px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="-0.33px"
          width="710px"
          height="56.31px"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Technologies"
          {...getOverrideProps(overrides, "Technologies I've Worked With")}
        ></Text>
        <Text
          fontFamily="Lato"
          fontSize="16px"
          fontWeight="400"
          color="rgba(144,144,144,1)"
          lineHeight="29.62906265258789px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.17px"
          width="615px"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="From front-end development frameworks to robust back-end solutions, this section showcases my proficiency and adaptability in tackling various tech stacks."
          {...getOverrideProps(overrides, "TechnologiesBlurb")}
        ></Text>
      </Flex>
      <Flex
        padding="0px 0px 0px 0px"
        width="1440px"
        height="480px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        children={techSquaresGroup}
        {...getOverrideProps(overrides, "TechSquaresGroup")}
      ></Flex>
    </Flex>
  );
}
