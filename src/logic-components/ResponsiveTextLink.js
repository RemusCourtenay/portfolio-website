import { useState } from "react";
import { TextLink } from "../ui-components";

function ResponsiveTextLink(props) {

    const content = props.content
    const focus = props.focus
    // const anchor

    const [hover, setHover] = useState('False')

    function clickHandler() {
        window.alert("click handled")
    }

    function mouseEnterHandler() {
        setHover('True')
    }

    function mouseExitHandler() {
        setHover('False')
    }


    return (
        <TextLink
            TextContent={content} 
            hover={hover}
            focus={focus}
            
            onClickHandler={clickHandler}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseExitHandler}
        />
    )
}


export default ResponsiveTextLink;