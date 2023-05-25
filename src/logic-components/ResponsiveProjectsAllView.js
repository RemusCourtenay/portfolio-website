import { ProjectsAllView } from "../ui-components" 
import ResponsiveProjectCircleView from "./ResponsiveProjectCircleView"
import ResponsiveCVButton from "./ResponsiveCVButton"

function ResponsiveProjectsAllView(props) {

    const projects = props.projects
    const clickHandlers = props.clickHandlers

    return (
        <ProjectsAllView 
            project1Group={
                <ResponsiveProjectCircleView 
                    project={projects[1]}
                    clickHandler={clickHandlers[1]}
                />
            }
            project2Group={
                <ResponsiveProjectCircleView 
                    project={projects[2]}
                    clickHandler={clickHandlers[2]}
                />
            }
            project3Group={
                <ResponsiveProjectCircleView 
                    project={projects[3]}
                    clickHandler={clickHandlers[3]}
                />
            }
            portfolioButtonGroup={
                <ResponsiveCVButton 
                    buttonText="VIEW PORTFOLIO" 
                    clickHandler={clickHandlers[1]}
                />
            }
        />
    );
}

export default ResponsiveProjectsAllView;