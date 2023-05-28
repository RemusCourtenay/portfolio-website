import PropTypes from "prop-types";
import { footerIcons } from "../resources/images";
import { useState } from "react"
import { FooterLink } from "../ui-components"


function ResponsiveFooterLink(props) {

    const [isFocus, setIsFocus] = useState(false);
    const linkName = props.linkName;
    const linkData = props.linkData;

    console.log(footerIcons)

    function goToFooterLinkDestination(url) {
        // TODO...
        console.log(url)
    }


    return (
        <FooterLink
            isFocus={isFocus}
            onMouseEnter={() => setIsFocus(true)}
            onMouseLeave={() => setIsFocus(false)}

            onLogoClick={() => goToFooterLinkDestination(linkData["URL"])}
            logoSource={footerIcons[linkName.toUpperCase()]["DEFAULT"]}
            logoFocusSource={footerIcons[linkName.toUpperCase()]["FOCUS"]}
        />
    );
}

ResponsiveFooterLink.propTypes={
    linkName: PropTypes.string.isRequired,
    clickHandler: PropTypes.func
}

export default ResponsiveFooterLink;