import ResponsiveProjectsExpandedView from "./ResponsiveProjectsExpandedView";
import ResponsiveProjectsAllView from "./ResponsiveProjectsAllView"

function ResponsiveProjectsInner(props) {

    const projects = props.projects 
    const clickHandlers = props.clickHandlers
    const activeProjectIndex = props.activeProjectIndex

    // Replace with direct False check to seem big brain?
    if (activeProjectIndex === 0) {
        return (
            <ResponsiveProjectsAllView
                projects={projects}
                clickHandlers={clickHandlers}
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