/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
export default function Footer(props) {
  const {
    backgroundShapesSource,
    contactButtonGroup,
    footerLinksGroup,
    footerBackgroundGroup,
    overrides,
    ...rest
  } = props;
  return (
    <View
      width="1920px"
      height="650px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(214,217,221,1)"
      {...getOverrideProps(overrides, "Footer")}
      {...rest}
    >
      <Flex
        gap="10px"
        direction="column"
        width="1920px"
        height="650px"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        children={footerBackgroundGroup}
        {...getOverrideProps(overrides, "FooterBackgroundGroup")}
      ></Flex>
      <Flex
        gap="95px"
        direction="column"
        width="unset"
        height="650px"
        justifyContent="space-between"
        alignItems="center"
        position="absolute"
        top="0px"
        left="323px"
        padding="100px 0px 100px 0px"
        {...getOverrideProps(overrides, "FooterContent")}
      >
        <Flex
          gap="10px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "FooterContentText")}
        >
          <Text
            fontFamily="Raleway"
            fontSize="72px"
            fontWeight="700"
            color="rgba(45,45,45,1)"
            textTransform="capitalize"
            lineHeight="84.52799987792969px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.93px"
            width="710px"
            height="86.87px"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Let’s work together"
            {...getOverrideProps(overrides, "Let\u2019s work together")}
          ></Text>
          <Text
            fontFamily="Open Sans"
            fontSize="18px"
            fontWeight="400"
            color="rgba(146,146,146,1)"
            lineHeight="33.33269500732422px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.03px"
            width="463px"
            height="59.28px"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="I’m available for freelance work. Have any projects in your mind? Just feel free to contact me"
            {...getOverrideProps(
              overrides,
              "I\u2019m available for freelance work. Have any projects in your mind? Just feel free to contact me"
            )}
          ></Text>
        </Flex>
        <Flex
          padding="0px 0px 0px 0px"
          width="215px"
          height="61.14px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          children={contactButtonGroup}
          {...getOverrideProps(overrides, "ContactButtonGroup")}
        ></Flex>
        <Flex
          gap="0"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "FooterBottom")}
        >
          <Icon
            width="1274px"
            height="5px"
            viewBox={{ minX: 0, minY: 0, width: 1274, height: 5 }}
            paths={[
              {
                d: "M0 0.5L1274 0.5L1274 -0.5L0 -0.5L0 0.5Z",
                stroke: "rgba(132,132,132,1)",
                fillRule: "nonzero",
                strokeWidth: 1,
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            {...getOverrideProps(overrides, "FooterDividerLine")}
          ></Icon>
          <Flex
            gap="82px"
            direction="row"
            width="1274px"
            height="unset"
            justifyContent="space-between"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 10px 0px 10px"
            {...getOverrideProps(overrides, "FooterContentBottom")}
          >
            <Text
              fontFamily="Lato"
              fontSize="14px"
              fontWeight="400"
              color="rgba(146,146,146,1)"
              lineHeight="16.80000114440918px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="350px"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Credit to TemplateJungle/FlatIcon"
              {...getOverrideProps(
                overrides,
                "Credit to TemplateJungle/FlatIcon"
              )}
            ></Text>
            <Flex
              padding="0px 0px 0px 0px"
              width="224px"
              height="26px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              shrink="0"
              position="relative"
              children={footerLinksGroup}
              {...getOverrideProps(overrides, "FooterLinksGroup")}
            ></Flex>
            <Text
              fontFamily="Lato"
              fontSize="14px"
              fontWeight="400"
              color="rgba(146,146,146,1)"
              lineHeight="16.80000114440918px"
              textAlign="right"
              display="block"
              direction="column"
              justifyContent="unset"
              width="350px"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Made with Figma, AWS Amplify Studio, and React"
              {...getOverrideProps(
                overrides,
                "Made with Figma, AWS Amplify Studio, and React"
              )}
            ></Text>
          </Flex>
        </Flex>
      </Flex>
    </View>
  );
}
