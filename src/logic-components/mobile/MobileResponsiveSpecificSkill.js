import { MobileSpecificSkill } from "../../ui-components";
import { experiences } from "../../resources/images";

function MobileResponsiveSpecificSkill(props) {

    const skillName = props.skill["SKILL_NAME"]
    const focusValues = props.skill["FOCUS_VALUES"]

    return (
        <MobileSpecificSkill 
            skillName={skillName}

            overrides={
                {
                    PersonalSkillIcon: {
                        focus: focusValues["PERSONAL"],
                        imageSource: experiences["PERSONAL"]["DEFAULT"],
                        focusImageSource: experiences["PERSONAL"]["FOCUS"]
                    },
                    EducationalSkillIcon: {
                        focus: focusValues["EDUCATIONAL"],
                        imageSource: experiences["EDUCATIONAL"]["DEFAULT"],
                        focusImageSource: experiences["EDUCATIONAL"]["FOCUS"]
                    },
                    CommercialSkillIcon: {
                        focus: focusValues["COMMERCIAL"],
                        imageSource: experiences["COMMERCIAL"]["DEFAULT"],
                        focusImageSource: experiences["COMMERCIAL"]["FOCUS"]
                    },
                    MobileSpecificSkill: {gap: "47px"}
                }
            }
        />
    );
}

export default MobileResponsiveSpecificSkill;