// Amplify Imports
import { Image } from '@aws-amplify/ui-react';
import { Footer, Introduction, Skills, SkillsText, Tech, TechDivider, TechSquares } from './ui-components';

// Resource Imports
import { backgrounds, layout } from './resources/images';

// Logic Component Imports
import ResponsiveHeader from './logic-components/ResponsiveHeader';
import ResponsiveSplash from './logic-components/ResponsiveSplash';
import ResponsiveCVButton from './logic-components/ResponsiveCVButton'; 
import ResponsiveContactButton from './logic-components/ResponsiveContactButton'; 
import ResponsiveSkillsGraph from './logic-components/ResponsiveSkillsGraph';
import ResponsiveTechIcon from './logic-components/ResponsiveTechIcon';
import ResponsiveProjects from './logic-components/ResponsiveProjects';
import ResponsiveFooterLinks from './logic-components/ResponsiveFooterLinks';

// API Imports
import downloadFileFromS3 from './api/downloadFromS3';


function BrowserApp(props) {

    const resources = props.resources;
    const anchors = props.anchors;

    return (
        <div className="all-div">
            <div className="wrap-content-div">
                <div className='header-wrap'>
                    <ResponsiveHeader firstName={resources["PERSONAL"]["FIRST_NAME"]} anchors={anchors}/>
                </div>
                <Introduction 
                    id={anchors['Home']}
                    splashGroup={
                        <ResponsiveSplash 
                        contactLink={resources["CONTACT"]["gmail"]["URL"]} 
                        splashBlurbText={resources["PERSONAL"]["SPLASH_BLURB"]} 
                        splashImageSource={resources["PERSONAL"]["FACE_IMAGE"]}/>}
                />
                <Skills
                    id={anchors['Skills']} 
                    skillsTextGroup={
                        <SkillsText 
                            cvButtonGroup={
                                <ResponsiveCVButton 
                                    buttonText="Download CV" 
                                    clickHandler={() => downloadFileFromS3(resources, "CV")}
                                />
                            }
                            skillsBlurbText={resources["PERSONAL"]["SKILLS_BLURB"]}
                        />
                    }
                    skillsGraphGroup={<ResponsiveSkillsGraph skills={resources["SKILLS"]} />}
                    backgroundShapesSource={backgrounds["SKILLS"]}  
                />
                <Tech
                    id={anchors['Experience']} 
                    techSquaresGroup={
                        <TechSquares 
                            techDividerGroup={<TechDivider dividerImageSource={layout["TECH_DIVIDER"]}/>}
                            iconGroup1={<ResponsiveTechIcon techName={resources["TECH"][0]}/>}
                            iconGroup2={<ResponsiveTechIcon techName={resources["TECH"][1]}/>}
                            iconGroup3={<ResponsiveTechIcon techName={resources["TECH"][2]}/>}
                            iconGroup4={<ResponsiveTechIcon techName={resources["TECH"][3]}/>}
                            iconGroup5={<ResponsiveTechIcon techName={resources["TECH"][4]}/>}
                            iconGroup6={<ResponsiveTechIcon techName={resources["TECH"][5]}/>}
                            iconGroup7={<ResponsiveTechIcon techName={resources["TECH"][6]}/>}
                            iconGroup8={<ResponsiveTechIcon techName={resources["TECH"][7]}/>}
                            iconGroup9={<ResponsiveTechIcon techName={resources["TECH"][8]}/>}
                            iconGroup10={<ResponsiveTechIcon techName={resources["TECH"][9]}/>}
                            iconGroup11={<ResponsiveTechIcon techName={resources["TECH"][10]}/>}
                            iconGroup12={<ResponsiveTechIcon techName={resources["TECH"][11]}/>}
                        />
                    }
                />
                <ResponsiveProjects id={anchors['Projects']} projectResources={resources["PROJECTS"]} />
                <Footer
                    id={anchors['Contact']} 
                    footerLinksGroup={
                        <ResponsiveFooterLinks 
                            contactLinkData={resources["CONTACT"]}
                        />
                    }
                    contactButtonGroup={
                        <ResponsiveContactButton 
                            bold="False"
                            contactLink={resources["CONTACT"]["gmail"]["URL"]}
                        />
                    }
                    footerBackgroundGroup={
                        <Image src={backgrounds["FOOTER"]}/>
                    }
                    footerDividerLineSource={layout["FOOTER_DIVIDER"]}
                    overrides={
                        {"Design Credit to Chloe Marer & TemplateJungle": {className: "footer-text-link"}}
                    }
                />
            </div>
        </div>
    );
}

export default BrowserApp;