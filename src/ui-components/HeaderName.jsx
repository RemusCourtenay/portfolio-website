/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Text } from "@aws-amplify/ui-react";
export default function HeaderName(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="5px"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-end"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "HeaderName")}
      {...rest}
    >
      <Text
        fontFamily="Raleway"
        fontSize="38px"
        fontWeight="700"
        color="rgba(45,45,45,1)"
        lineHeight="44.61199951171875px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Remus/Zoey"
        {...getOverrideProps(overrides, "HeaderNameText")}
      ></Text>
      <Icon
        width="8px"
        height="8px"
        viewBox={{ minX: 0, minY: 0, width: 8, height: 8 }}
        paths={[
          {
            d: "M8 4C8 6.20914 6.20914 8 4 8C1.79086 8 0 6.20914 0 4C0 1.79086 1.79086 0 4 0C6.20914 0 8 1.79086 8 4Z",
            fill: "rgba(230,57,70,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        {...getOverrideProps(overrides, "Red Dot")}
      ></Icon>
    </Flex>
  );
}