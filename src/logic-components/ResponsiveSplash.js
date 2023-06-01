import { backgrounds } from "../resources/images";
import { Splash, SplashText } from "../ui-components";
import ResponsiveContactButton from "./ResponsiveContactButton";

function ResponsiveSplash(props){

    const contactLink = props.contactLink

    return(      
            <Splash
                splashTextGroup={
                    <SplashText 
                        contactButtonGroup={
                            <ResponsiveContactButton 
                                bold='False'
                                contactLink = {contactLink} 
                            />
                        }
                    />
                } 
                faceImage="assets/face.png"
                backgroundShapesSource={backgrounds["SPLASH"]}
            />
    )
}

export default ResponsiveSplash;