import { FooterLinks } from "../ui-components";
import ResponsiveFooterLink from "./ResponsiveFooterLink";

function ResponsiveFooterLinks(props) {

    const contactLinkData = props.contactLinkData;

    const footerLinks = []

    for (const linkName in contactLinkData ) {
        const linkData = contactLinkData[linkName]["URL"]
        footerLinks.push(
            <ResponsiveFooterLink 
                linkName = {linkName}
                linkData = {linkData}
            />
        )
    };

    return(
        <FooterLinks 
            footerLinkGroup1={footerLinks[0]}
            footerLinkGroup2={footerLinks[1]}
            footerLinkGroup3={footerLinks[2]}
            footerLinkGroup4={footerLinks[3]}
        />
    );
}

export default ResponsiveFooterLinks;