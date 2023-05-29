
import { ProjectCircleView } from "../ui-components";
import { useState } from "react";
import { backgrounds, projectImages } from "../resources/images";
import { Loader } from "@aws-amplify/ui-react";

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

    const project = props.project;
    const clickHandler = props.clickHandler;

    function circleViewClickHandler() {
        // TODO.. figure out how to do animations
        setState("Click");
        // TODO... remove this unnecessary wait
        setTimeout(clickHandler, 100);
    };

    return (
        <>
            <Loader display={isLoading? "block": "none"}/>
            <ProjectCircleView 
                state={state}
                display={isLoading? "none": "block"}
                onMouseEnter={() => setState("Hover")}
                onMouseLeave={() => setState("Default")}

                projectTitle={project["CircleViewTitle"]}
                projectImageSource={projectImages[project["Name"].toUpperCase()]["CIRCLE"]}
                circleViewClickHandler={circleViewClickHandler}

                backgroundImageSource={backgrounds["CIRCLE_VIEW_BORDER"]}

                overrides={
                    {
                        ProjectTitle: {className: customCSSClassNames["ProjectTitle"][state]},
                        ProjectImage: {onLoad: setIsLoading.bind(null, false)}
                    }
                }
            />
        </>
    )
}

export default ResponsiveProjectCircleView;



{/* <div>
<svg
   width="600mm"
   height="600mm"
   viewBox="0 0 600 600"
>
    <g>
    <circle
       style="fill:#000000;fill-opacity:0;stroke:#e63946;stroke-width:8;stroke-dasharray:16;stroke-dashoffset:0;stroke-opacity:1"
       cx="299.99969"
       cy="299.98288"
       r="296" />
    </g>

</svg>
</div> */}