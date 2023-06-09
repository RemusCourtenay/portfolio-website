import PropTypes from "prop-types";
import { footerIcons } from "../resources/images";
import { useState } from "react"
import { FooterLink } from "../ui-components"


function ResponsiveFooterLink(props) {

    const [isFocus, setIsFocus] = useState(false);
    const linkName = props.linkName;
    const linkData = props.linkData;

    function goToFooterLinkDestination(url) {
        window.location.href = url
    }


    return (
        <FooterLink
            isFocus={isFocus}
            onMouseEnter={() => setIsFocus(true)}
            onMouseLeave={() => setIsFocus(false)}

            onLogoClick={() => goToFooterLinkDestination(linkData)}
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