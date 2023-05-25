import { ProjectSwapButton } from "../ui-components";
import { useState } from "react";

function ResponsiveProjectSwapButton(props) {

    const [state, setState] = useState("Default") 

    const direction = props.direction
    const clickHandler = props.clickHandler

    // Cursed
    // Also TODO... addd these images to folder
    const imageSource = direction === "Left"?"assets/left-project-swap-button.png":"assets/right-project-swap-button.png"

    function projectSwapClickHandler() {
        setState("Click")
        clickHandler()
    }

    return (
        <ProjectSwapButton 
            state={state}
            onMouseEnter={() => setState("Hover")}
            onMouseLeave={() => setState("Default")}
            projectSwapClickHandler={projectSwapClickHandler}

            direction={direction}
            arrowimgsrc={imageSource}
        />
    );
}

export default ResponsiveProjectSwapButton;