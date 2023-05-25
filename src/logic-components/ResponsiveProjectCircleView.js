import { ProjectCircleView } from "../ui-components";
import { useState } from "react"
import { backgrounds } from "../resources/images";

const customCSSClassNames = {
    ProjectTitle: {
        Default:    "circle-view-title-default",
        Hover:      "circle-view-title-hover",
        Click:      "circle-view-title-click"
    }
}

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
            circleViewBorderSource={backgrounds["CIRCLE_VIEW_BORDER"]}
            projectImageSource={project["CircleViewImageSource"]}
            circleViewClickHandler={circleViewClickHandler}

            overrides={{ProjectTitle: {className: customCSSClassNames["ProjectTitle"][state]}}}
        />
    );
}

export default ResponsiveProjectCircleView;