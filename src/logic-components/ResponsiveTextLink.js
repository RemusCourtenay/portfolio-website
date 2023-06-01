import { useState } from "react";
import { TextLink } from "../ui-components";

function ResponsiveTextLink(props) {

    const content = props.content
    const focus = props.focus
    const anchor = props.anchor

    const [hover, setHover] = useState('False')

    function clickHandler() {
        const anchorElement = document.getElementById(anchor)
        // anchorElement.scrollIntoView({behaviour: "smooth"})
        anchorPosition = anchorElement.current.getBoundingClientRect().top + window.scrollY
        window.scroll({
            top: anchorPosition,
            behaviour: "smooth"
        })
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