import { useState } from "react";
import { ContactButton } from "../ui-components";

function ResponsiveContactButton(props) {

    const bold = props.bold
    const contactLink = props.contactLink

    const [state, setState] = useState('Default')

    function contactInteractionHandler(url) {
        window.location.href = url;
        setState('Hover')
    }

    function clickHandler() {
        setState('Click')
        setTimeout(() => contactInteractionHandler(contactLink), 100)
    }

    function mouseEnterHandler() {
        setState('Hover')
    }

    function mouseExitHandler() {
        setState('Default')
    }


    return (
        <ContactButton
            state={state}
            bold={bold}
            
            onClick={clickHandler}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseExitHandler}
        />
    );
}


export default ResponsiveContactButton;