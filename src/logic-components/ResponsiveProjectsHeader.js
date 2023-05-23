import { ProjectLink, ProjectLinks, ProjectsHeader } from "../ui-components";
import ResponsiveProjectLink from "./ResponsiveProjectLink";

function ResponsiveProjectsHeader(props) {

    const projects = props.projects 

    return(      
        <ProjectsHeader 
            projectLinksGroup = {<ProjectLinks 
                                    allLinkGroup      = {<ResponsiveProjectLink project={projects[0]} />}
                                    project1LinkGroup = {<ResponsiveProjectLink project={projects[1]} />}
                                    project2LinkGroup = {<ResponsiveProjectLink project={projects[2]} />}
                                    project3LinkGroup = {<ResponsiveProjectLink project={projects[3]} />}
                                    />}
        />
    )
}

export default ResponsiveProjectsHeader;