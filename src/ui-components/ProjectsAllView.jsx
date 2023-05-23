/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { View } from "@aws-amplify/ui-react";
export default function ProjectsAllView(props) {
  const {
    project1Group,
    project2Group,
    project3Group,
    portfolioButtonGroup,
    overrides,
    ...rest
  } = props;
  return (
    <View
      width="1920px"
      height="1250px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "ProjectsAllView")}
      {...rest}
    >
      <View
        padding="0px 0px 0px 0px"
        width="270px"
        height="100px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="1018px"
        left="822px"
        children={portfolioButtonGroup}
        {...getOverrideProps(overrides, "PortfolioButtonGroup")}
      ></View>
      <View
        padding="0px 0px 0px 0px"
        width="600px"
        height="600px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="494px"
        left="1196px"
        children={project3Group}
        {...getOverrideProps(overrides, "Project3Group")}
      ></View>
      <View
        padding="0px 0px 0px 0px"
        width="600px"
        height="600px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="23px"
        left="660px"
        children={project2Group}
        {...getOverrideProps(overrides, "Project2Group")}
      ></View>
      <View
        padding="0px 0px 0px 0px"
        width="600px"
        height="600px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="494px"
        left="114px"
        children={project1Group}
        {...getOverrideProps(overrides, "Project1Group")}
      ></View>
    </View>
  );
}
