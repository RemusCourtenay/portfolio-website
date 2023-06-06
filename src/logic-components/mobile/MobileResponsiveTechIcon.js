import { useState } from "react";
import { MobileTechIcon } from "../../ui-components";
import { techs } from "../../resources/images";

function MobileResponsiveTechIcon(props) {

    const [focus, setFocus] = useState(false)
    const techName = props.techName
    const imageSources = techs[techName.toUpperCase()]
    const imageSource = imageSources["DEFAULT"]
    const imageFocusSource = imageSources["FOCUS"]

    return (
        <MobileTechIcon 
            focus={focus}
            imageSource={imageSource}
            focusImageSource={imageFocusSource}

            onMouseEnter={() => setFocus(true)}
            onMouseLeave={() => setFocus(false)}

            title={techName}
        />
    );
}

export default MobileResponsiveTechIcon;