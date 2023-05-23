import { useState } from "react";
import ResponsiveProjectsHeader from "./ResponsiveProjectsHeader";

function ResponsiveProjects(props) {

    const projectsResources = props.projectResources

    const tempProjects = []

    //create "all" project in first slot
    tempProjects.push({
        "Name": "All",
        "Focus": "True",
        "ClickHandler": changeActiveProject.bind(null, 0)
    })

    //build projects from projectsResources array
    for (const [i, projectData] of projectsResources.entries()) {

        tempProjects.push({
            "Name": projectData["Name"],
            "Focus": "False",
            // We pass to i + 1 as the "all" project is in the first slot
            "ClickHandler": changeActiveProject.bind(null, i + 1)
        })
    }

    const [projects, setProjects] = useState(tempProjects)

    function changeActiveProject(projectIndex) {

        //set one project focus to true and others to false based on projectIndex
        for (const [index, project] of projects.entries()) {
            project["Focus"] = (index === projectIndex ? "True": "False")
        } 

        // Update state variable to force component refresh
        setProjects(projects)
    }


    return(      
        // TODO.. Add rest of projects view
        <ResponsiveProjectsHeader projects={projects} />
    )
}


export default ResponsiveProjects;