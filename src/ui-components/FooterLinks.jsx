/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import FacebookFooterLink from "./FacebookFooterLink";
import LinkedInFooterLink from "./LinkedInFooterLink";
import GmailFooterLink from "./GmailFooterLink";
import PhoneFooterLink from "./PhoneFooterLink";
import { Flex } from "@aws-amplify/ui-react";
export default function FooterLinks(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="50px"
      direction="row"
      width="200px"
      height="25px"
      justifyContent="space-between"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "FooterLinks")}
      {...rest}
    >
      <FacebookFooterLink
        width="15px"
        height="15px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        state="Default"
        {...getOverrideProps(overrides, "FacebookFooterLink")}
      ></FacebookFooterLink>
      <LinkedInFooterLink
        width="15px"
        height="15px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        state="Default"
        {...getOverrideProps(overrides, "LinkedInFooterLink")}
      ></LinkedInFooterLink>
      <GmailFooterLink
        width="15px"
        height="15px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        state="Default"
        {...getOverrideProps(overrides, "GmailFooterLink")}
      ></GmailFooterLink>
      <PhoneFooterLink
        width="15px"
        height="15px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        state="Default"
        {...getOverrideProps(overrides, "PhoneFooterLink")}
      ></PhoneFooterLink>
    </Flex>
  );
}
