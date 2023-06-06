import { MobileSkillsGraph } from "../../ui-components";
import MobileResponsiveSpecificSkill from "./MobileResponsiveSpecificSkill";

function MobileResponsiveSkillsGraph(props) {

    const skills = props.skills

    return (
        <MobileSkillsGraph
            display="flex"
            direction="column"
            width="275px"
            height="190px"
            position="absolute"
            top="0px"
            left="0px"
            
            skill1Group={<MobileResponsiveSpecificSkill skill={skills[0]} />}
            skill2Group={<MobileResponsiveSpecificSkill skill={skills[1]} />}
            skill3Group={<MobileResponsiveSpecificSkill skill={skills[2]} />}
            skill4Group={<MobileResponsiveSpecificSkill skill={skills[3]} />}
            skill5Group={<MobileResponsiveSpecificSkill skill={skills[4]} />}
        />
    );
}

export default MobileResponsiveSkillsGraph;