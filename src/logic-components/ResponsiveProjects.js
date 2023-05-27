import { useState, useTransition } from "react";
import ResponsiveProjectsHeader from "./ResponsiveProjectsHeader";
import ResponsiveProjectsInner from "./ResponsiveProjectsInner";
import { Projects, ProjectsBackground } from "../ui-components";
import { backgrounds } from "../resources/images";

function ResponsiveProjects(props) {

    const [activeProjectIndex, setActiveProjectIndex] = useState(0)

    const [isLoading, setIsLoading] = useState(false)
    const [isPendingProjectChange, startProjectTransition] = useTransition();

    const projects = props.projectResources
    const clickHandlers = []

    // Wrapping the state change in a useTransition hook means that the UI will remain responsive
    // while the state changes in the background. It also allows for the state change to be interrupted 
    // if a new input is recieved while the state change is ongoing.
    function changeActiveProject(newActiveProjectIndex) {
        startProjectTransition(() => {
            setIsLoading(true)
            setActiveProjectIndex(newActiveProjectIndex);
        });
    }
    
    // Adding four clickHandler functions, each of which simply call setActiveProjectIndex with a different integer input
    for (let i = 0; i < projects.length; i++) {
        // .bind() returns a function wrapping the original function where the first arg is set to be the value of 'this'
        // and the remaining args are simply passed as args to the underlying function. 
        // We don't use 'this' so we set it to null.
        // Thus clickHandlers is an array of functions that set the active project to all of it's possible values 
        clickHandlers.push(changeActiveProject.bind(null, i))
    }

    return(
        <Projects
            projectsHeaderGroup={
                <ResponsiveProjectsHeader
                    projects={projects}  
                    clickHandlers={clickHandlers}
                    activeProjectIndex={activeProjectIndex}
                    isPendingProjectChange={isPendingProjectChange}
                />
            }
            projectsInnerGroup={
                <ResponsiveProjectsInner 
                    projects={projects}
                    clickHandlers={clickHandlers}
                    activeProjectIndex={activeProjectIndex}
                    isLoading={isLoading}
                    onLoad={setIsLoading.bind(null, false)}
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