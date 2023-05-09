import { SkillsGraph } from "../ui-components";
import ResponsiveSpecificSkill from "./ResponsiveSpecificSkill";

function ResponsiveSkillsGraph(props) {

    const skills = props.skills

    return (
        <SkillsGraph 
            skill1Group={<ResponsiveSpecificSkill skill={skills[0]} />}
            skill2Group={<ResponsiveSpecificSkill skill={skills[1]} />}
            skill3Group={<ResponsiveSpecificSkill skill={skills[2]} />}
            skill4Group={<ResponsiveSpecificSkill skill={skills[3]} />}
            skill5Group={<ResponsiveSpecificSkill skill={skills[4]} />}
        />
    );
}

export default ResponsiveSkillsGraph;