import { ProjectExpandedBackground, ProjectFullCircle, ProjectSwapButton, ProjectsExpandedView } from "../ui-components";
import ResponsiveProjectSwapButton from "./ResponsiveProjectSwapButton";

function ResponsiveProjectsExpandedView(props) {

    const projects = props.projects;
    const clickHandlers = props.clickHandlers;
    const activeProjectIndex = props.activeProjectIndex;
    const activeProject = projects[activeProjectIndex]

    const leftClickHandler = clickHandlers[(activeProjectIndex - 1) % projects.length()];
    const rightClickHandler = clickHandlers[(activeProjectIndex + 1) % projects.length()];


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
                    direction={"Left"} 
                    clickHandler={leftClickHandler}
                />
            }

            rightSwapButtonGroup={
                <ResponsiveProjectSwapButton 
                    direction={"Right"} 
                    clickHandler={rightClickHandler}
                />
            }
            // TODO... actually add this image
            backgroundGroup={
                <ProjectExpandedBackground 
                    projectExpandedBackgroundSource={"assets/background/project-expanded.png"}
                />
            }
        />
    );
}

export default ResponsiveProjectsExpandedView;