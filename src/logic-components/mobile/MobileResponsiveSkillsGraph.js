import { MobileSkillsGraph } from "../../ui-components";
import MobileResponsiveSpecificSkill from "./MobileResponsiveSpecificSkill";

function MobileResponsiveSkillsGraph(props) {

    const skills = props.skills

    return (
        <MobileSkillsGraph 
            skill1Group={<MobileResponsiveSpecificSkill skill={skills[0]} />}
            skill2Group={<MobileResponsiveSpecificSkill skill={skills[1]} />}
            skill3Group={<MobileResponsiveSpecificSkill skill={skills[2]} />}
            skill4Group={<MobileResponsiveSpecificSkill skill={skills[3]} />}
            skill5Group={<MobileResponsiveSpecificSkill skill={skills[4]} />}
        />
    );
}

export default MobileResponsiveSkillsGraph;