import { FooterLinks } from "../ui-components";
import ResponsiveFooterLink from "./ResponsiveFooterLink";

function ResponsiveFooterLinks(props) {

    const contactLinkData = props.contactLinkData;

    function goToLinkDestination(url) {
        // TODO..
    }

    const footerLinks = []

    for (const contactLink in contactLinkData) {
        footerLinks.push(
            <ResponsiveFooterLink 
                linkName={contactLink["NAME"]}
                clickHandler={goToLinkDestination.bind(null, contactLink["URL"])}
            />
        )
    }

    return(
        <FooterLinks 
            link1Group={footerLinks[0]}
            link2Group={footerLinks[1]}
            link3Group={footerLinks[2]}
            link4Group={footerLinks[3]}
        />
    );
}

ResponsiveFooterLinks.propTypes = {
    contactLinkData: PropTypes.arrayOf(PropTypes.shape())
}