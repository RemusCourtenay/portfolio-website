import { ProjectCircleView } from "../ui-components";
import { useState } from "react"

function ResponsiveProjectCircleView(props) {

    const [state, setState] = useState("Default");

    const project = props.project;
    const clickHandler = props.clickHandler;

    function circleViewClickHandler() {
        // TODO.. figure out how to do animations
        setState("Click");
        clickHandler();
    };

    return (
        <ProjectCircleView 
            state={state}
            onMouseEnter={() => setState("Hover")}
            onMouseExit={() => setState("Default")}

            projectTitle={project["CircleViewProjectTitle"]}
            // TODO... add image
            circleViewBorderSource={"assets/backgrounds/circle-view-border.png"}
            projectImageSource={project["CircleViewImageSource"]}
            circleViewClickHandler={circleViewClickHandler}
        />
    );
}

export default ResponsiveProjectCircleView;