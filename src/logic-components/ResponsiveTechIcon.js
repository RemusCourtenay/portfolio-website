import PropTypes from "prop-types";
import { useState } from "react";
import { TechIcon } from "../ui-components";
import { techs } from "../resources/images";
function ResponsiveTechIcon(props) {

    const [hover, setHover] = useState(false)
    const techName = props.techName
    const imageSources = techs[techName.toUpperCase()]
    const imageSource = imageSources["DEFAULT"]
    const imageHoverSource = imageSources["FOCUS"]

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

ResponsiveTechIcon.propTypes={
    techName: PropTypes.string.isRequired
}

export default ResponsiveTechIcon;