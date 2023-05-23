import { ProjectCircleView, ProjectsAllView, ProjectsExpandedView } from "../ui-components";
import ResponsiveProjectsExpandedView from "./ResponsiveProjectsExpandedView";
import ResponsiveCVButton from "./ResponsiveCVButton"

function ResponsiveProjectsInner(props) {

    const projects = props.projects 
    const clickHandlers = props.clickHandlers
    const activeProjectIndex = props.activeProjectIndex

    // Replace with direct False check to seem big brain?
    if (activeProjectIndex === 0) {
        return (
            <ProjectsAllView 
                project1group={<ProjectCircleView />}
                project2group={<ProjectCircleView />}
                project3group={<ProjectCircleView />}
                portfolioButtonGroup={<ResponsiveCVButton />}
            />
        )
    } else {
        return (
            <ResponsiveProjectsExpandedView 
                projects={projects}
                clickHandlers={clickHandlers}
                activeProjectIndex={activeProjectIndex}
            />
        )
    }
}

export default ResponsiveProjectsInner;