import { useState } from "react";
import { TextLink } from "../ui-components";

function ResponsiveTextLink(focus, anchor) {

    const [hover, setHover] = useState("false")

    function clickHandler() {
        // TODO... goto anchor
    }

    function setHover() {
        // TODO... link hovering to value idk
    }


    return (
        <TextLink 
            onClickHandler={clickHandler}
            hover={hover}
            focus={focus}    
        />
    )
}


export default ResponsiveTextLink;