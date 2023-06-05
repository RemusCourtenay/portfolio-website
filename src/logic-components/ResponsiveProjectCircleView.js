import { ProjectCircleView, ProjectSmallCircle } from "../ui-components";
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
        setState("Click");
        clickHandler()
    };

    return (
        <>


            <ProjectCircleView
                backgroundImageSource={backgrounds["CIRCLE_VIEW_BORDER"]}
                circleViewClickHandler={circleViewClickHandler}

                smallCircleGroup={
                    <>
                        <Loader 
                            display={isLoading? "block": "none"}
                            size="large"
                            filledColor="#E63946"
                            width="300px"
                        />
                        <ProjectSmallCircle
                            state={state}
                            display={isLoading? "none": "block"}
                            onMouseEnter={() => setState("Hover")}
                            onMouseLeave={() => setState("Default")}

                            projectTitle={project["CircleViewTitle"]}
                            projectImageSource={projectImages[project["Name"].toUpperCase()]["CIRCLE"]}
                            

                            overrides={
                                {
                                    ProjectTitle: {className: customCSSClassNames["ProjectTitle"][state]},
                                    ProjectImage: {onLoad: () => setIsLoading(false)}
                                }
                            }
                        />

                    </>
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