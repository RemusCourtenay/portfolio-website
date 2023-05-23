import { useState } from "react";
import { ProjectLink } from "../ui-components";

function ResponsiveProjectLink(props) {

    const [state, setState] = useState("Default")

    const focus = props.project["Focus"]
    const projectName = props.project["Name"]
    const clickHandler = props.project["ClickHandler"]


    return(      
        <ProjectLink 
            state={state}
            onMouseEnter={() => setState("Hover")}
            onMouseLeave={() => setState("Default")}

            focus={focus}
            projectName={projectName}
            projectLinkClickHandler={clickHandler}
        />
    )
}

export default ResponsiveProjectLink;