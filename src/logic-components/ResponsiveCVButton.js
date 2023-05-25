import { useState } from "react";
import { SkillsButton } from "../ui-components";

function ResponsiveCVButton(props) {

    const [state, setState] = useState('Default')
    const buttonText = props.buttonText
    const cvButtonClickHandler = props.clickHandler

    function contactInteractionHandler() {
        setState('Hover')
    }

    function clickHandler() {
        setState('Click')
        cvButtonClickHandler()
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

            buttonText={buttonText}
        />
    );
}


export default ResponsiveCVButton;