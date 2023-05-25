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
            onMouseLeave={() => setState("Default")}

            projectTitle={project["CircleViewTitle"]}
            circleViewBorderSource={"assets/backgrounds/project-circle.png"}
            projectImageSource={project["CircleViewImageSource"]}
            circleViewClickHandler={circleViewClickHandler}

            overrides={{ProjectTitle: {className: "circle-view-title"}}}
        />
    );
}

export default ResponsiveProjectCircleView;