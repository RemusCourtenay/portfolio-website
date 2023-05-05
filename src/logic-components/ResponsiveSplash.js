import { Splash, SplashText } from "../ui-components";
import ResponsiveContactButton from "./ResponsiveContactButton";

function ResponsiveSplash(props){

    return(      
            <Splash
                splashTextGroup={<SplashText contactButtonGroup={<ResponsiveContactButton bold='False' />} />} 
                faceImage="assets/face.png"
            />
    )
}

export default ResponsiveSplash;