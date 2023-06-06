/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function MobileProjectCircleView(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="300px"
      height="300px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "MobileProjectCircleView")}
      {...rest}
    >
      <Flex
        gap="0"
        direction="column"
        width="300px"
        height="300px"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "BackgroundGroup")}
      >
        <Image
          width="300px"
          height="300px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          {...getOverrideProps(overrides, "RedBorderCircle")}
        ></Image>
      </Flex>
      <Flex
        gap="0"
        direction="row"
        width="300px"
        height="300px"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "SmallCircleGroup")}
      >
        <View
          width="300px"
          height="300px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "ProjectSmallCircle")}
        >
          <Flex
            gap="0"
            direction="row"
            width="300px"
            height="300px"
            justifyContent="center"
            alignItems="center"
            position="absolute"
            top="0px"
            left="0px"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "ImageGroup")}
          >
            <Image
              width="278.5px"
              height="278.5px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              objectFit="cover"
              {...getOverrideProps(overrides, "ProjectImage")}
            ></Image>
          </Flex>
          <Flex
            gap="0"
            direction="row"
            width="300px"
            height="300px"
            justifyContent="center"
            alignItems="center"
            position="absolute"
            top="0px"
            left="0px"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "MaskGroup")}
          >
            <Icon
              width="278.57px"
              height="278.57px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 278.5712890625,
                height: 278.5714111328125,
              }}
              paths={[]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              shrink="0"
              position="relative"
              {...getOverrideProps(overrides, "EllipseMask")}
            ></Icon>
          </Flex>
          <Text
            fontFamily="Raleway"
            fontSize="24px"
            fontWeight="700"
            color="rgba(255,255,255,1)"
            lineHeight="28.176000595092773px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="192px"
            height="88px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="127.5px"
            left="54px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Kibo Robot &#xA;Challenge"
            {...getOverrideProps(overrides, "ProjectTitle")}
          ></Text>
          <Icon
            width="15px"
            height="7.5px"
            viewBox={{ minX: 0, minY: 0, width: 15, height: 7.5 }}
            paths={[
              {
                d: "M0.5 3.24076L0 3.24076L0 4.25923L0.5 4.25923L0.5 3.24076ZM14.8535 4.11008C15.0488 3.91121 15.0488 3.58878 14.8535 3.38991L11.6715 0.149152C11.4763 -0.0497173 11.1597 -0.0497173 10.9644 0.149152C10.7692 0.348023 10.7692 0.670451 10.9644 0.869323L13.7929 3.75L10.9644 6.6307C10.7692 6.82955 10.7692 7.15195 10.9644 7.35086C11.1597 7.54971 11.4763 7.54971 11.6715 7.35086L14.8535 4.11008ZM0.5 4.25923L14.5 4.25923L14.5 3.24076L0.5 3.24076L0.5 4.25923Z",
                fill: "rgba(255,255,255,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="65.33%"
            bottom="32.17%"
            left="19.17%"
            right="75.83%"
            {...getOverrideProps(overrides, "LinkArrow")}
          ></Icon>
        </View>
      </Flex>
    </View>
  );
}
