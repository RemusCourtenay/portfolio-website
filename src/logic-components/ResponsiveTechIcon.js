import { useState } from "react";
import { TechIcon } from "../ui-components";

function ResponsiveTechIcon(props) {

    const [hover, setHover] = useState(false)
    const techName = props.techName
    const imageSource = "assets/icons/tech/default/" + techName + ".png"
    const imageHoverSource = "assets/icons/tech/hover/" + techName + ".png"  

    function mouseEnterHandler() {
        setHover(true)
    }

    function mouseExitHandler() {
        setHover(false)
    }

    return (
        <TechIcon 
            hover={hover}
            iconImageSource={imageSource}
            IconHoverImageSource={imageHoverSource}

            onMouseEnter={mouseEnterHandler}
            onMouseLeave={() => setTimeout(mouseExitHandler, 200)}
        />
    );
}

export default ResponsiveTechIcon;