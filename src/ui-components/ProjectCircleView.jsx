/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function ProjectCircleView(props) {
  const {
    projectTitle,
    circleViewBorderSource,
    projectImageSource,
    circleViewClickHandler,
    overrides: overridesProp,
    ...rest
  } = props;
  const variants = [
    {
      variantValues: { state: "Default" },
      overrides: {
        ProjectImage: {},
        ImageGroup: {},
        EllipseMask: {},
        MaskGroup: {},
        ReadMore: {},
        ProjectTitle: {},
        LinkArrow: {},
        RedBorderCircle: {},
        ProjectCircleView: {},
      },
    },
    {
      variantValues: { state: "Hover" },
      overrides: {
        ProjectImage: {},
        ImageGroup: {},
        EllipseMask: {
          paths: [
            {
              d: "M557.143 278.571C557.143 432.422 432.422 557.143 278.571 557.143C124.721 557.143 0 432.422 0 278.571C0 124.721 124.721 0 278.571 0C432.422 0 557.143 124.721 557.143 278.571Z",
              fill: "rgba(0,0,0,0.2)",
              fillRule: "nonzero",
            },
          ],
        },
        MaskGroup: {},
        ReadMore: { display: "block" },
        ProjectTitle: {},
        LinkArrow: { left: "45.33%", right: "49.67%" },
        RedBorderCircle: {},
        ProjectCircleView: {},
      },
    },
    {
      variantValues: { state: "Click" },
      overrides: {
        ProjectImage: {},
        ImageGroup: {},
        EllipseMask: {
          viewBox: {
            minX: 0,
            minY: 0,
            width: 557.142578125,
            height: 557.142822265625,
          },
          paths: [
            {
              d: "M557.143 278.571C557.143 432.422 432.422 557.143 278.571 557.143C124.721 557.143 0 432.422 0 278.571C0 124.721 124.721 0 278.571 0C432.422 0 557.143 124.721 557.143 278.571Z",
              fill: "rgba(0,0,0,0.2)",
              fillRule: "nonzero",
            },
          ],
        },
        MaskGroup: {},
        ReadMore: { display: "block" },
        ProjectTitle: {},
        LinkArrow: { left: "50.83%", right: "44.17%" },
        RedBorderCircle: {},
        ProjectCircleView: {},
      },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <View
      width="600px"
      height="600px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      onClick={circleViewClickHandler}
      {...getOverrideProps(overrides, "ProjectCircleView")}
      {...rest}
    >
      <Flex
        gap="0"
        direction="row"
        width="600px"
        height="600px"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "ImageGroup")}
      >
        <Image
          width="557px"
          height="557px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          objectFit="contain"
          src={projectImageSource}
          {...getOverrideProps(overrides, "ProjectImage")}
        ></Image>
      </Flex>
      <Flex
        gap="0"
        direction="row"
        width="600px"
        height="600px"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "MaskGroup")}
      >
        <Icon
          width="557.14px"
          height="557.14px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 557.142578125,
            height: 557.1428833007812,
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
        fontSize="28px"
        fontWeight="300"
        color="rgba(255,255,255,1)"
        lineHeight="32.87200164794922px"
        textAlign="left"
        display="none"
        direction="column"
        justifyContent="unset"
        width="177px"
        height="49px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="382px"
        left="108px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Read more"
        {...getOverrideProps(overrides, "ReadMore")}
      ></Text>
      <Text
        fontFamily="Raleway"
        fontSize="48px"
        fontWeight="700"
        color="rgba(255,255,255,1)"
        lineHeight="56.35200119018555px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="384px"
        height="176px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="255px"
        left="108px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={projectTitle}
        {...getOverrideProps(overrides, "ProjectTitle")}
      ></Text>
      <Icon
        width="30px"
        height="15px"
        viewBox={{ minX: 0, minY: 0, width: 30, height: 15 }}
        paths={[
          {
            d: "M1 6.48152L0 6.48152L0 8.51847L1 8.51847L1 6.48152ZM29.7071 8.22017C30.0976 7.82242 30.0976 7.17757 29.7071 6.77982L23.3431 0.298304C22.9526 -0.0994345 22.3195 -0.0994345 21.9289 0.298304C21.5384 0.696046 21.5384 1.3409 21.9289 1.73865L27.5858 7.49999L21.9289 13.2614C21.5384 13.6591 21.5384 14.3039 21.9289 14.7017C22.3195 15.0994 22.9526 15.0994 23.3431 14.7017L29.7071 8.22017ZM1 8.51847L29 8.51847L29 6.48152L1 6.48152L1 8.51847Z",
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
      <Image
        width="600px"
        height="600px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={circleViewBorderSource}
        {...getOverrideProps(overrides, "RedBorderCircle")}
      ></Image>
    </View>
  );
}
