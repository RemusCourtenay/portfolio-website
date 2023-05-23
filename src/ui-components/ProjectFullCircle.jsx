/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function ProjectFullCircle(props) {
  const {
    projectImageSource,
    projectTitle,
    projectBodyText,
    overrides,
    ...rest
  } = props;
  return (
    <View
      width="1145px"
      height="1145px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "ProjectFullCircle")}
      {...rest}
    >
      <View
        padding="0px 0px 0px 0px"
        width="1145px"
        height="1145px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        left="0px"
        {...getOverrideProps(overrides, "CircleImageGroup")}
      >
        <Icon
          width="1145px"
          height="1145px"
          viewBox={{ minX: 0, minY: 0, width: 1145, height: 1145 }}
          paths={[
            {
              d: "M1145 572.5C1145 888.683 888.683 1145 572.5 1145C256.317 1145 0 888.683 0 572.5C0 256.317 256.317 0 572.5 0C888.683 0 1145 256.317 1145 572.5Z",
              fill: "rgba(217,217,217,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          {...getOverrideProps(overrides, "EllipseMask")}
        ></Icon>
        <Image
          width="115.77%"
          height="100.02%"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0%"
          bottom="-0.02%"
          left="-7.92%"
          right="-7.85%"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          src={projectImageSource}
          {...getOverrideProps(overrides, "ProjectImage")}
        ></Image>
      </View>
      <Flex
        gap="23px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="66px"
        left="203px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "TextGroup")}
      >
        <Text
          fontFamily="Raleway"
          fontSize="64px"
          fontWeight="700"
          color="rgba(255,255,255,1)"
          lineHeight="75.13600158691406px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="600px"
          height="150px"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={projectTitle}
          {...getOverrideProps(
            overrides,
            "NASA\u2019s Kibo \u2028Robot Challenge"
          )}
        ></Text>
        <Text
          fontFamily="Raleway"
          fontSize="32px"
          fontWeight="500"
          color="rgba(255,255,255,1)"
          lineHeight="37.56800079345703px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="793px"
          height="763px"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={projectBodyText}
          {...getOverrideProps(
            overrides,
            "Consequuntur et nulla blanditiis odit illo ut quo magnam. Laboriosam aut repellendus quis molestiae cumque eveniet officia. Aliquid eveniet iure cum doloremque dolores. Voluptatibus quas et impedit omnis quas. Laborum alias nihil porro. Perferendis aliquam tenetur natus temporibus exercitationem soluta nisi. Ut molestiae ullam eaque maiores assumenda. Quos tenetur dicta eaque et placeat et adipisci. Quisquam qui magni maxime velit assumenda. Non libero voluptate qui et debitis enim sed. Neque distinctio ducimus aliquam inventore qui magni aliquid. In tempore repudiandae praesentium. Omnis saepe laudantium alias sunt alias incidunt excepturi. Assumenda tempore sit illo maiores dolores quasi iure. Impedit eaque sed eveniet voluptatibus dolores occaecati. Suscipit molestiae repellendus voluptatum voluptate velit totam."
          )}
        ></Text>
      </Flex>
    </View>
  );
}