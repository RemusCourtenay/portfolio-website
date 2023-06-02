import { backgrounds } from "../resources/images";
import { Splash, SplashText } from "../ui-components";
import ResponsiveContactButton from "./ResponsiveContactButton";

function ResponsiveSplash(props){

    const contactLink = props.contactLink;
    const splashBlurbText = props.splashBlurbText;
    const splashImageSource = props.splashImageSource;

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
                        splashBlurbText={splashBlurbText}
                    />
                } 
                faceImage={splashImageSource}
                backgroundShapesSource={backgrounds["SPLASH"]}
            />
    )
}

export default ResponsiveSplash;