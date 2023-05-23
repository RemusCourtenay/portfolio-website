import { useState } from "react";
import ResponsiveProjectsHeader from "./ResponsiveProjectsHeader";

function ResponsiveProjects(props) {

    const projectsResources = props.projectResources

    const tempProjects = [
        //create "all" project in first slot
        {
            "Name": "All",
            "Focus": "True",
        }
    ]

    // Pull remaining projects from json resources file and add a false Focus value to each
    actualProjectValues = projectsResources.map((resource) => {
        resource["Focus"] = "False"
        return resource
    })

    // Add those projects to our project array
    tempProjects.concat(actualProjectValues)

    // Set project array to state value
    const [projects, setProjects] = useState(tempProjects)

    function changeActiveProject(projectIndex) {
        
        // Using map in order to generate a completely new array as per: https://react.dev/learn/updating-arrays-in-state
        const newProjects = projects.map((project, index) => {
            //set one project focus to true and others to false based on projectIndex
            project["Focus"] = (index === projectIndex ? "True": "False")
            return project
        }) 
        // Update state variable to force component refresh
        setProjects(newProjects)
    }

    const clickHandlers = [
        changeActiveProject.bind(null, 0),
        changeActiveProject.bind(null, 1),
        changeActiveProject.bind(null, 2),
        changeActiveProject.bind(null, 3)
    ]


    return(      
        // TODO.. Add rest of projects view
        <ResponsiveProjectsHeader projects={projects} clickHandlers={clickHandlers}/>
    )
}


export default ResponsiveProjects;