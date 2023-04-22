/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import Footer from "./Footer";
import Achievement from "./Achievement";
import Blogposts from "./Blogposts";
import Testimonials from "./Testimonials";
import Employment from "./Employment";
import Portfolio from "./Portfolio";
import Offerings from "./Offerings";
import Skills from "./Skills";
import { View } from "@aws-amplify/ui-react";
export default function Full(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1920px"
      height="7690px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Full")}
      {...rest}
    >
      <Footer
        width="1920px"
        height="636px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="7060px"
        left="0px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "footer")}
      ></Footer>
      <Achievement
        width="1920px"
        height="425px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="6635px"
        left="0px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "achievement")}
      ></Achievement>
      <Blogposts
        width="1192px"
        height="669px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="5816px"
        left="364px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "blog posts")}
      ></Blogposts>
      <Testimonials
        width="1548px"
        height="609.72px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="5075px"
        left="-163px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "testimonials")}
      ></Testimonials>
      <Employment
        width="1920px"
        height="915px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="4223px"
        left="0px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "employment")}
      ></Employment>
      <Portfolio
        width="1920px"
        height="1648px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="2412px"
        left="0px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "portfolio")}
      ></Portfolio>
      <Offerings
        width="1534px"
        height="583px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="1676px"
        left="193px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "offerings")}
      ></Offerings>
      <Skills
        width="1920px"
        height="629px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="898px"
        left="0px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "skills")}
      ></Skills>
      <View
        width="1920px"
        height="900px"
        {...getOverrideProps(overrides, "Home")}
      ></View>
    </View>
  );
}
