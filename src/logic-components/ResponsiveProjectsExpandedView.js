import { ProjectExpandedBackground, ProjectFullCircle, ProjectsExpandedView } from "../ui-components";
import ResponsiveProjectSwapButton from "./ResponsiveProjectSwapButton";

function ResponsiveProjectsExpandedView(props) {

    const projects = props.projects;
    const clickHandlers = props.clickHandlers;
    const activeProjectIndex = props.activeProjectIndex;
    const activeProject = projects[activeProjectIndex]

    const leftClickHandler = clickHandlers[(activeProjectIndex - 1) % projects.length];
    const rightClickHandler = clickHandlers[(activeProjectIndex + 1) % projects.length];


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