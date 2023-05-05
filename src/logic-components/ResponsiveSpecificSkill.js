import { SkillIcon, SpecificSkill } from "../ui-components";

function ResponsiveSpecificSkill(props) {

    const skillName = props.skill["SKILL_NAME"]
    const focusValues = props.skill["FOCUS_VALUES"]

    return(
        <SpecificSkill 
            skillName={skillName}
            personalGroup={<SkillIcon focus={focusValues["Personal"]} iconSource="assets/icons/personal-icon.png" focusIconSource="assets/icons/personal-icon-red.png"/>}
            educationGroup={<SkillIcon focus={focusValues["Education"]} iconSource="assets/icons/education-icon.png" focusIconSource="assets/icons/education-icon-red.png"/>}
            commercialGroup={<SkillIcon focus={focusValues["Commercial"]} iconSource="assets/icons/commercial-icon.png" focusIconSource="assets/icons/commercial-icon-red.png"/>}
        />
    );
}

export default ResponsiveSpecificSkill