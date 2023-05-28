import { ProjectExpandedBackground, ProjectFullCircle, ProjectsExpandedView } from "../ui-components";
import { projectImages, icons, backgrounds } from "../resources/images";
import ResponsiveProjectSwapButton from "./ResponsiveProjectSwapButton";
import { useState } from "react"
import { Loader } from "@aws-amplify/ui-react";

function ResponsiveProjectsExpandedView(props) {

    const [isLoading, setIsLoading] = useState(true)

    const projects = props.projects;
    const clickHandlers = props.clickHandlers;
    const activeProjectIndex = props.activeProjectIndex;

    const activeProject = projects[activeProjectIndex]
    const projectImageData = projectImages[activeProject["Name"].toUpperCase()]

    // Maps {1,2,3} to {0,1,2}
    const activeRealProjectIndex = activeProjectIndex - 1

    // Maps {0,1,2} to {-1,0,1,2,3} to {2,3,4,5,6} to {0,1,2}
    const leftProjectIndex = ((activeRealProjectIndex - 1) + 3) % 3
    const rightProjectIndex = ((activeRealProjectIndex + 1) + 3) % 3 

    // Maps {0,1,2} to {1,2,3}
    const leftClickHandler = clickHandlers[leftProjectIndex + 1];
    const rightClickHandler = clickHandlers[rightProjectIndex + 1];

    return (
        <ProjectsExpandedView 
            projectFullCircleGroup={
                <>  
                    <Loader 
                        display={isLoading? "block": "none"}
                    />
                    <ProjectFullCircle
                        display={isLoading? "none": "block"}
                        projectImageSource={projectImageData["EXPANDED"]}
                        projectTitle={activeProject["ExpandedViewTitle"]}
                        projectBodyText={activeProject["ExpandedViewBodyText"]}
                        overrides={
                            {
                                ProjectImage: {onLoad: () => setIsLoading(false)}
                            }
                        }
                    />
                </>

            }

            leftSwapButtonGroup={
                <ResponsiveProjectSwapButton 
                    arrowsrc={icons["LEFT_ARROW"]} 
                    clickHandler={leftClickHandler}
                />
            }

            rightSwapButtonGroup={
                <ResponsiveProjectSwapButton
                    arrowsrc={icons["RIGHT_ARROW"]}
                    clickHandler={rightClickHandler}
                />
            }

            backgroundGroup={
                <ProjectExpandedBackground 
                    projectExpandedBackgroundSource={backgrounds["EXPANDED_VIEW_BORDER"]}
                />
            }
        />
    )
}

export default ResponsiveProjectsExpandedView;