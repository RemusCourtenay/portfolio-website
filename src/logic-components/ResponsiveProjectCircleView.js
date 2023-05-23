import { ProjectCircleView } from "../ui-components";
import { useState } from "react"

function ResponsiveProjectCircleView(props) {

    const [state, setState] = useState("Default")

    const project = props.project

    function circleViewClickHandler() {

    }

    return (
        <ProjectCircleView 
            state = {state}

            projectTitle={project["CircleViewProjectTitle"]}
            // TODO... add image
            circleViewBorderSource={"assets/backgrounds/circle-view-border.png"}
            projectImageSource={project["CircleViewImageSource"]}
            circleViewClickHandler={circleViewClickHandler}
        />
    )
}