import { ProjectLinks, ProjectsHeader } from "../ui-components";
import ResponsiveProjectLink from "./ResponsiveProjectLink";

function ResponsiveProjectsHeader(props) {

    const projects = props.projects;
    const clickHandlers = props.clickHandlers;
    const activeProjectIndex = props.activeProjectIndex;
    const isPendingProjectChange = props.isPendingProjectChange;
    
    const projectLinks = []

    for (const [index, project] of projects.entries()) {
        const isActive = index === activeProjectIndex;
        projectLinks.push(<ResponsiveProjectLink 
            project={project} 
            clickHandler={clickHandlers[index]}
            focus={isActive?"True":"False"}
            isPending={isActive && isPendingProjectChange}
            />)
    }

    return(      
        <ProjectsHeader 
            projectLinksGroup = {<ProjectLinks 
                                    allLinkGroup      = {projectLinks[0]}
                                    project1LinkGroup = {projectLinks[1]}
                                    project2LinkGroup = {projectLinks[2]}
                                    project3LinkGroup = {projectLinks[3]}
                                />}
        />
    )
}

export default ResponsiveProjectsHeader;