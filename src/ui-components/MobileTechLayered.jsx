/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
import MobileTechSquares from "./MobileTechSquares";
export default function MobileTechLayered(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="column"
      width="480px"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="68px 0px 68px 0px"
      backgroundColor="rgba(250,250,250,1)"
      {...getOverrideProps(overrides, "MobileTechLayered")}
      {...rest}
    >
      <Flex
        gap="0"
        direction="column"
        width="320px"
        height="60px"
        justifyContent="space-between"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "TechTextGroup")}
      >
        <Text
          fontFamily="Raleway"
          fontSize="24px"
          fontWeight="700"
          color="rgba(45,45,45,1)"
          textTransform="capitalize"
          lineHeight="28.176000595092773px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="-0.09px"
          width="152px"
          height="unset"
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
          fontSize="8px"
          fontWeight="400"
          color="rgba(144,144,144,1)"
          lineHeight="14.814531326293945px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.01px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="From front-end development frameworks to robust back-end solutions, this section showcases my proficiency and adaptability in tackling various tech stacks."
          {...getOverrideProps(overrides, "TechnologiesBlurb")}
        ></Text>
      </Flex>
      <Flex
        padding="0px 0px 0px 0px"
        width="360px"
        height="480px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        {...getOverrideProps(overrides, "MobileTechSquaresGroup")}
      >
        <MobileTechSquares
          width="360px"
          height="480px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "MobileTechSquares")}
        ></MobileTechSquares>
      </Flex>
    </Flex>
  );
}
