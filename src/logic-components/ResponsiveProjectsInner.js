import { ProjectsAllView } from "../ui-components";
import ResponsiveProjectsExpandedView from "./ResponsiveProjectsExpandedView";
import ResponsiveCVButton from "./ResponsiveCVButton"
import ResponsiveProjectCircleView from "./ResponsiveProjectCircleView"

function ResponsiveProjectsInner(props) {

    const projects = props.projects 
    const clickHandlers = props.clickHandlers
    const activeProjectIndex = props.activeProjectIndex

    // Replace with direct False check to seem big brain?
    if (activeProjectIndex === 0) {
        return (
            <ProjectsAllView 
                project1group={
                    <ResponsiveProjectCircleView 
                        project={projects[1]}
                        clickHandler={clickHandlers[1]}
                    />
                }
                project2group={
                    <ResponsiveProjectCircleView 
                        project={projects[2]}
                        clickHandler={clickHandlers[2]}
                    />
                }
                project3group={
                    <ResponsiveProjectCircleView 
                        project={projects[3]}
                        clickHandler={clickHandlers[3]}
                    />
                }

                portfolioButtonGroup={
                    <ResponsiveCVButton 
                        buttonText="VIEW PORTFOLIO" 
                        clickHandler={clickHandlers[1]}
                    />}
            />
        )
    } else {
        return (
            // Probably don't need to pass all the projects to the expanded view but w/e
            <ResponsiveProjectsExpandedView 
                projects={projects}
                clickHandlers={clickHandlers}
                activeProjectIndex={activeProjectIndex}
            />
        )
    }
}

export default ResponsiveProjectsInner;