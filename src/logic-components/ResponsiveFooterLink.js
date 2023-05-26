import PropTypes from "prop-types"
import { footerIcons } from "../resources/images";
import { useState } from "react"

function ResponsiveFooterLink(props) {

    const [state, setState] = useState("Default");
    const linkName = props.linkName;
    const clickHandler = props.clickHandler;


    return (
        <FooterLink 
            state={state}
            onMouseEnter={() => setState("Hover")}
            onMouseLeave={() => setState("Default")}

            clickHandler={clickHandler}
            iconSource={footerIcons[linkName]["DEFAULT"]}
            iconFocusSource={footerIcons[linkName]["FOCUS"]}
        />
    );
}

ResponsiveFooterLink.propTypes={
    linkName: PropTypes.string.isRequired,
    clickHandler: PropTypes.func
}

export default ResponsiveFooterLink;