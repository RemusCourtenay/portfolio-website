/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Text } from "@aws-amplify/ui-react";
export default function MobileHeaderName(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="5px"
      direction="row"
      width="62.5px"
      height="12.5px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "MobileHeaderName")}
      {...rest}
    >
      <Flex
        gap="1px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="flex-end"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "BottomAlignedGroup")}
      >
        <Text
          fontFamily="Raleway"
          fontSize="9.5px"
          fontWeight="700"
          color="rgba(45,45,45,1)"
          lineHeight="11.152999877929688px"
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
          children="Remus"
          {...getOverrideProps(overrides, "HeaderNameText")}
        ></Text>
        <Icon
          width="2px"
          height="2px"
          viewBox={{ minX: 0, minY: 0, width: 2, height: 2 }}
          paths={[
            {
              d: "M1 2C1.55228 2 2 1.55228 2 1C2 0.447715 1.55228 0 1 0C0.447715 0 0 0.447715 0 1C0 1.55228 0.447715 2 1 2Z",
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
          {...getOverrideProps(overrides, "RedCircle")}
        ></Icon>
      </Flex>
    </Flex>
  );
}
