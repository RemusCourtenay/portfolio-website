import { ProjectSwapButton } from "../ui-components";
import { useState } from "react";

function ResponsiveProjectSwapButton(props) {

    const [opacity, setOpacity] = useState("25%") 

    const imageSource = props.arrowsrc
    const clickHandler = props.clickHandler

    function projectSwapClickHandler() {
        setOpacity("75%")
        clickHandler()
    }

    return (
        <ProjectSwapButton 
            opacity={opacity}
            onMouseEnter={() => setOpacity("50%")}
            onMouseLeave={() => setOpacity("25%")}
            projectSwapClickHandler={projectSwapClickHandler}
            arrowsrc={imageSource}
        />
    );
}

export default ResponsiveProjectSwapButton;