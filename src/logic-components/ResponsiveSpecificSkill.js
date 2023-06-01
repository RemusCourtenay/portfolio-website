import { SkillIcon, SpecificSkill } from "../ui-components";
import { experiences } from "../resources/images";

function ResponsiveSpecificSkill(props) {

    const skillName = props.skill["SKILL_NAME"]
    const focusValues = props.skill["FOCUS_VALUES"]

    return (
        <SpecificSkill 
            skillName={skillName}
            personalGroup={
                <SkillIcon 
                    focus={focusValues["PERSONAL"]}
                    iconSource={experiences["PERSONAL"]["DEFAULT"]}
                    focusIconSource={experiences["PERSONAL"]["FOCUS"]}
                />
            }
            educationGroup={
                <SkillIcon 
                    focus={focusValues["EDUCATION"]}
                    iconSource={experiences["EDUCATION"]["DEFAULT"]}
                    focusIconSource={experiences["EDUCATION"]["FOCUS"]}
                />
            }
            commercialGroup={
                <SkillIcon 
                    focus={focusValues["COMMERCIAL"]}
                    iconSource={experiences["COMMERCIAL"]["DEFAULT"]}
                    focusIconSource={experiences["COMMERCIAL"]["FOCUS"]}
                />
            }
            overrides={
                {SpecificSkill: {gap: "47px"}}
            }
        />
    );
}

export default ResponsiveSpecificSkill;