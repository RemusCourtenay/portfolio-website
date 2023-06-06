import { layout } from "../../resources/images";
import { MobileTechSquares } from "../../ui-components";
import MobileResponsiveTechIcon from "./MobileResponsiveTechIcon";


function MobileResponsiveTechSquares(props) {

    const techs = props.techs
    const techIcons = techs.map(techName => <MobileResponsiveTechIcon techName={techName} />)

    return (
        <MobileTechSquares 
            position="absolute"
            top="0px"
            left="0px"
            
            dividerImageSource={layout["TECH_DIVIDER"]["MOBILE"]}
            iconGroup1={techIcons[0]}
            iconGroup2={techIcons[1]}
            iconGroup3={techIcons[2]}
            iconGroup4={techIcons[3]}
            iconGroup5={techIcons[4]}
            iconGroup6={techIcons[5]}
            iconGroup7={techIcons[6]}
            iconGroup8={techIcons[7]}
            iconGroup9={techIcons[8]}
            iconGroup10={techIcons[9]}
            iconGroup11={techIcons[10]}
            iconGroup12={techIcons[11]}
        />
    );
};

export default MobileResponsiveTechSquares;