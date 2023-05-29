import '@aws-amplify/ui-react/styles.css';
import '@fontsource/inter/variable.css';
import './App.css';
import { Image } from '@aws-amplify/ui-react';
import { resources } from './resources/remus';
import { backgrounds, layout } from './resources/images';
import { Footer, Introduction, Skills, SkillsText, Tech, TechDivider, TechSquares } from './ui-components';
import ResponsiveHeader from './logic-components/ResponsiveHeader';
import ResponsiveSplash from './logic-components/ResponsiveSplash';
import ResponsiveCVButton from './logic-components/ResponsiveCVButton'; 
import ResponsiveContactButton from './logic-components/ResponsiveContactButton'; 
import ResponsiveSkillsGraph from './logic-components/ResponsiveSkillsGraph';
import ResponsiveTechIcon from './logic-components/ResponsiveTechIcon';
import ResponsiveProjects from './logic-components/ResponsiveProjects';
import ResponsiveFooterLinks from './logic-components/ResponsiveFooterLinks';

import { Storage } from "aws-amplify"

function App() {

  const anchors = {
    Home: 'introductionSection',
    Skills: 'skillsSection',
    Experience: 'techSection',
    Projects: 'projectSection',
    Contact: 'footerSection'
  }

  // Stolen from https://docs.amplify.aws/lib/storage/download/q/platform/react-native/#file-download-option
  function downloadBlob(blob, filename) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename || 'download';
    const clickHandler = () => {
      setTimeout(() => {
        URL.revokeObjectURL(url);
        a.removeEventListener('click', clickHandler);
      }, 150);
    };
    a.addEventListener('click', clickHandler, false);
    a.click();
    return a;
  }

  async function downloadFileFromS3(fileResourcesKey) {
    const fileKey = resources["PERSONAL"][fileResourcesKey]["FILE_URI"];
    const result = await Storage.get(fileKey, {download: true});
    console.log(result);
    downloadBlob(result.Body, resources["PERSONAL"][fileResourcesKey]["FILE_NAME"])
  }



  return (
    <>
      <Introduction 
        id={anchors['Home']}
        headerGroup={<ResponsiveHeader firstName={resources["PERSONAL"]["FIRST_NAME"]} anchors={anchors}/>}
        splashGroup={<ResponsiveSplash />}
      />
      <Skills
        id={anchors['Skills']} 
        skillsTextGroup={
          <SkillsText 
            cvButtonGroup={
              <ResponsiveCVButton 
                buttonText="Download CV" 
                clickhandler={() => downloadFileFromS3("CV")}
              />
            }
          />
        }
        skillsGraphGroup={<ResponsiveSkillsGraph skills={resources["SKILLS"]}/>}
        backgroundShapesSource={backgrounds["SKILLS"]}  
      />

      <Tech
        id={anchors['Experience']} 
        techSquaresGroup={<TechSquares 
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
                          />}
      
      />
      <ResponsiveProjects id={anchors['Project']} projectResources={resources["PROJECTS"]} />

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
          />
        }
        footerBackgroundGroup = {
          <Image src={backgrounds["FOOTER"]}/>
      }
    />
  </>
  );


}

export default App;
