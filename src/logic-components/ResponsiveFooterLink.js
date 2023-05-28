import PropTypes from "prop-types";
import { footerIcons } from "../resources/images";
import { useState } from "react"
import { FooterLink } from "../ui-components"


function ResponsiveFooterLink(props) {

    const [isFocus, setIsFocus] = useState(false);
    const linkName = props.linkName;
    const linkData = props.linkData;

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
            iconSource={footerIcons[linkName.toUpperCase()]["DEFAULT"]}
            iconFocusSource={footerIcons[linkName.toUpperCase()]["FOCUS"]}
        />
    );
}

ResponsiveFooterLink.propTypes={
    linkName: PropTypes.string.isRequired,
    clickHandler: PropTypes.func
}

export default ResponsiveFooterLink;