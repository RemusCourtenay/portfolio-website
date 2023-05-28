import PropTypes from "prop-types"
import { FooterLinks } from "../ui-components";
import ResponsiveFooterLink from "./ResponsiveFooterLink";
import { footerIconNames } from "../resources/shared.js"

function ResponsiveFooterLinks(props) {

    const contactLinkData = props.contactLinkData;

    const footerLinks = []

    for (const [linkName, linkData] in contactLinkData ) {
        footerLinks.push(
            <ResponsiveFooterLink 
                linkName = {linkName}
                linkData = {linkData}
            />
        )
    };

    return(
        <FooterLinks 
            link1Group={footerLinks[0]}
            link2Group={footerLinks[1]}
            link3Group={footerLinks[2]}
            link4Group={footerLinks[3]}
        />
    );
}

export default ResponsiveFooterLinks;