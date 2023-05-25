import { ProjectExpandedBackground, ProjectFullCircle, ProjectsExpandedView } from "../ui-components";
import ResponsiveProjectSwapButton from "./ResponsiveProjectSwapButton";

function ResponsiveProjectsExpandedView(props) {

    const projects = props.projects;
    const clickHandlers = props.clickHandlers;
    const activeProjectIndex = props.activeProjectIndex;
    const activeProject = projects[activeProjectIndex]

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
                <ProjectFullCircle
                    // TODO... add all this data to the resources json
                    projectImageSource={activeProject["ExpandedViewImageSource"]}
                    projectTitle={activeProject["ExpandedViewTitle"]}
                    projectBodyText={activeProject["ExpandedViewBodyText"]}
                />
            }

            leftSwapButtonGroup={
                <ResponsiveProjectSwapButton 
                    arrowsrc={"assets/icons/arrow-left.png"} 
                    clickHandler={leftClickHandler}
                />
            }

            rightSwapButtonGroup={
                <ResponsiveProjectSwapButton
                    arrowsrc={"assets/icons/arrow-right.png"}
                    clickHandler={rightClickHandler}
                />
            }

            backgroundGroup={
                <ProjectExpandedBackground 
                    projectExpandedBackgroundSource={"assets/backgrounds/project-expanded.png"}
                />
            }
        />
    );
}

export default ResponsiveProjectsExpandedView;