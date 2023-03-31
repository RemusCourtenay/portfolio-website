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
import Brandsiveworked from "./Brandsiveworked";
import Portfolio from "./Portfolio";
import Whatioffer from "./Whatioffer";
import Whyhirememyskills from "./Whyhirememyskills";
import Header from "./Header";
import { View } from "@aws-amplify/ui-react";
export default function Home(props) {
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
      {...getOverrideProps(overrides, "Home")}
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
      <Brandsiveworked
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
        {...getOverrideProps(overrides, "brands i've worked")}
      ></Brandsiveworked>
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
      <Whatioffer
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
        {...getOverrideProps(overrides, "what i offer")}
      ></Whatioffer>
      <Whyhirememyskills
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
        {...getOverrideProps(overrides, "why hire me & my skills")}
      ></Whyhirememyskills>
      <Header
        width="1920px"
        height="898px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "header")}
      ></Header>
    </View>
  );
}
