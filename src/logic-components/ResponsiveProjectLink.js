import { useState } from "react";
import { ProjectLink } from "../ui-components";

function ResponsiveProjectLink(props) {

    const [state, setState] = useState("Default");

    const project = props.project;
    const clickHandler = props.clickHandler;
    const focus = props.focus;


    return(      
        <ProjectLink 
            state={state}
            onMouseEnter={() => setState("Hover")}
            onMouseLeave={() => setState("Default")}

            focus={focus}
            projectName={project["Name"]}
            projectLinkClickHandler={clickHandler}
        />
    )
}

export default ResponsiveProjectLink;