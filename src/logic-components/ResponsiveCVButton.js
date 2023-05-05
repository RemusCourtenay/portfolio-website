import { useState } from "react";
import { SkillsButton } from "../ui-components";

function ResponsiveCVButton(props) {

    const [state, setState] = useState('Default')

    function contactInteractionHandler() {
        setState('Hover')
    }

    function clickHandler() {
        setState('Click')
        setTimeout(contactInteractionHandler, 100)
    }

    function mouseEnterHandler() {
        setState('Hover')
    }

    function mouseExitHandler() {
        setState('Default')
    }


    return (
        <SkillsButton
            state={state}
            
            onClick={clickHandler}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseExitHandler}
        />
    );
}


export default ResponsiveCVButton;