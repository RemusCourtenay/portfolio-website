import { ProjectsAllView, ProjectsExpandedView } from "../ui-components";

function ResponsiveProjectsInner(props) {

    const projects = props.projects 
    const clickHandlers = props.clickHandlers
    const activeProjectIndex = props.activeProjectIndex

    if (activeProjectIndex === 0) {
        return (<ProjectsAllView />)
    } else {
        return (<ProjectsExpandedView />)
    }
}

export default ResponsiveProjectsInner;