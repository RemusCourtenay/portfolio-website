import { useState } from "react";
import ResponsiveProjectsHeader from "./ResponsiveProjectsHeader";
import ResponsiveProjectsInner from "./ResponsiveProjectsInner";
import { Projects, ProjectsBackground } from "../ui-components";
import { backgrounds } from "../resources/images";

function ResponsiveProjects(props) {

    const [activeProjectIndex, setActiveProjectIndex] = useState(0)

    const [isLoading, setIsLoading] = useState(false)

    const projects = props.projectResources
    const anchorId = props.id
    const clickHandlers = []
    
    // Adding four clickHandler functions, each of which simply call setActiveProjectIndex with a different integer input
    for (let i = 0; i < projects.length; i++) {
        clickHandlers.push(() => setActiveProjectIndex(i))
    }

    return(
        <Projects
            id={anchorId}
            projectsHeaderGroup={
                <ResponsiveProjectsHeader
                    projects={projects}  
                    clickHandlers={clickHandlers}
                    activeProjectIndex={activeProjectIndex}
                />
            }
            projectsInnerGroup={
                <ResponsiveProjectsInner 
                    projects={projects}
                    clickHandlers={clickHandlers}
                    activeProjectIndex={activeProjectIndex}
                    isLoading={isLoading}
                    onLoad={() => setIsLoading(true)}
                />
            }
            projectsBackgroundGroup={
                <ProjectsBackground 
                    projectbackgroundimgsrc={backgrounds["PROJECTS"]}
                />
            }
        />

    )
}


export default ResponsiveProjects;