import { useState } from "react";
import ResponsiveProjectsHeader from "./ResponsiveProjectsHeader";

function ResponsiveProjects(props) {

    const [activeProjectIndex, setActiveProjectIndex] = useState(0)

    const projects = props.projectResources
    const clickHandlers = []
    
    // Adding four clickHandler functions, each of which simply call setActiveProjectIndex with a different integer input
    for (let i = 0; i < projects.length(); i++) {
        // .bind() returns a function wrapping the original function where the first arg is set to be the value of 'this'
        // and the remaining args are simply passed as args to the underlying function. 
        // We don't use 'this' so we set it to null.
        // Thus clickHandlers is an array of functions that set the active project to all of it's possible values 
        clickHandlers.push(setActiveProjectIndex.bind(null, i))
    }

    return(      
        // TODO.. Add rest of projects view
        <ResponsiveProjectsHeader
            activeProjectIndex={activeProjectIndex}
            projects={projects}  
            clickHandlers={setActiveProjectIndex}
        />
    )
}


export default ResponsiveProjects;