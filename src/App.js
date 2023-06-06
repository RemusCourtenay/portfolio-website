// CSS Imports
import '@aws-amplify/ui-react/styles.css';
import './App.css';

// Resource Imports
import { resources } from './resources/remus';
import { experiences } from './resources/images'

// App Type Imports
import BrowserApp from './BrowserApp.js';

// Library Imports
import { isMobile } from 'react-device-detect';



import { MobileSkills, MobileTech, MobileProjects, MobileProjectsLayered, MobileSkillsLayered } from './ui-components';
import MobileResponsiveSkillsGraph from './logic-components/mobile/MobileResponsiveSkillsGraph'
import MobileResponsiveTechSquares from './logic-components/mobile/MobileResponsiveTechSquares';

function App() {

  // Links components to navigation links by ID values
  const anchors = {
    Home: 'introductionSection',
    Skills: 'skillsSection',
    Experience: 'techSection',
    Projects: 'projectSection',
    Contact: 'footerSection'
  }

  return (
    <>
      <MobileResponsiveTechSquares techs={resources["TECH"]} />
    </>
  );

}

  // return (
  //   <>
  //     <MobileSkills
  //       left="0%"
  //       right="0%"
  //       width="unset"
  //       mobileSkillsGraphGroup = {<MobileResponsiveSkillsGraph skills={resources["SKILLS"]} />}
  //       overrides={
  //         {
  //           MobileSkillsText: {
  //             skillsBlurbText: resources["PERSONAL"]["SKILLS_BLURB"], 
  //             overrides: {MobileSkillsButton: {clickHandler: test}}},
  //             display: "flex",
  //             shrink: "0"
  //         }
  //       } 
  //     />
  //     <MobileTech 
  //       left="0%"
  //       right="0%"
  //       width="unset"
  //       mobileTechSquaresGroup={<MobileResponsiveTechSquares techs={resources["TECH"]}/>}
  //     />
  //   </>
  // );


  
  // return (
  //   <>

  //   
  //   </>
  // );

  // if (isMobile) {
  //   // TODO... make MobileApp
  //   return (
  //     <BrowserApp resources={resources} anchors={anchors}/>
  //   );
  // } else {
  //   return (
  //     <BrowserApp resources={resources} anchors={anchors}/>
  //   );
  // }


export default App;
