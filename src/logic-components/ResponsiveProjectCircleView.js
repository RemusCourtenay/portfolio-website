import { ProjectCircleView } from "../ui-components";
import { useState } from "react"
import { backgrounds, projectImages } from "../resources/images";
import { Loader } from "@aws-amplify/ui-react"
import { useAutoAnimate } from "@formkit/auto-animate/react"

const customCSSClassNames = {
    ProjectTitle: {
        Default:    "circle-view-title-default",
        Hover:      "circle-view-title-hover",
        Click:      "circle-view-title-click"
    }
}

function ResponsiveProjectCircleView(props) {

    const [state, setState] = useState("Default");
    const [isLoading, setIsLoading] = useState(true)

    const [parent, enableAnimations] = useAutoAnimate()

    const project = props.project;
    const clickHandler = props.clickHandler;

    function circleViewClickHandler() {
        // TODO.. figure out how to do animations
        setState("Click");
        // TODO... remove this unnecessary wait
        setTimeout(clickHandler, 100);
    };

    function loadProjectCircleView() {
        return (
            <ProjectCircleView 
                state={state}
                onMouseEnter={() => setState("Hover")}
                onMouseLeave={() => setState("Default")}

                projectTitle={project["CircleViewTitle"]}
                circleViewBorderSource={backgrounds["CIRCLE_VIEW_BORDER"]}
                projectImageSource={projectImages[project["Name"].toUpperCase()]["CIRCLE"]}
                circleViewClickHandler={circleViewClickHandler}

                overrides={
                    {
                        ProjectTitle: {className: customCSSClassNames["ProjectTitle"][state]},
                        ProjectImage: {onLoad: () => setIsLoading(false)},
                        LinkArrow: {ref: parent}
                    }
                }
            />
        )
    }

    const loadedProjectCircleView = loadProjectCircleView();

    if (isLoading) {
        // TODO... replace with something
        return <Loader />
    } else {
        return loadedProjectCircleView;
    }
}

export default ResponsiveProjectCircleView;