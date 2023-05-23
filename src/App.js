import '@aws-amplify/ui-react/styles.css';
import '@fontsource/inter/variable.css';
import './App.css';
import { resources } from './resources/remus';
import { Footer, Introduction, Projects, ProjectsHeader, Skills, SkillsText, Tech, TechDivider, TechSquares } from './ui-components';
import ResponsiveHeader from './logic-components/ResponsiveHeader';
import ResponsiveSplash from './logic-components/ResponsiveSplash';
import ResponsiveCVButton from './logic-components/ResponsiveCVButton';  
import ResponsiveSkillsGraph from './logic-components/ResponsiveSkillsGraph';
import ResponsiveTechIcon from './logic-components/ResponsiveTechIcon';
import ResponsiveProjects from './logic-components/ResponsiveProjects';

function App() {

  const anchors = {
    'Home': 'HomeTest',
    'Skills': 'SkillsTest',
    'Project': 'ProjectTest',
    'Experience': 'ExperienceTest',
    'Contact': 'ContactTest'
  }

  return (
    <ResponsiveProjects projectResources={resources["PROJECTS"]} />
  );

  // return (
  //   <div>
  //     <Introduction 
  //       headerGroup={<ResponsiveHeader firstName={resources["PERSONAL"]["FIRST_NAME"]} anchors={anchors}/>}
  //       splashGroup={<ResponsiveSplash />}
  //     />
  //     <Skills 
  //       skillsTextGroup={<SkillsText cvButtonGroup={<ResponsiveCVButton />}/>}
  //       skillsGraphGroup={<ResponsiveSkillsGraph skills={resources["SKILLS"]}/>}
  //       backgroundShapesSource="assets/backgrounds/skills-shapes.png"  
  //     />

  //     <Tech 
  //       techSquaresGroup={<TechSquares 
  //                           techDividerGroup={<TechDivider dividerImageSource="assets/tech-divider.png"/>}
  //                           iconGroup1={<ResponsiveTechIcon techName={resources["TECH"][0]}/>}
  //                           iconGroup2={<ResponsiveTechIcon techName={resources["TECH"][1]}/>}
  //                           iconGroup3={<ResponsiveTechIcon techName={resources["TECH"][2]}/>}
  //                           iconGroup4={<ResponsiveTechIcon techName={resources["TECH"][3]}/>}
  //                           iconGroup5={<ResponsiveTechIcon techName={resources["TECH"][4]}/>}
  //                           iconGroup6={<ResponsiveTechIcon techName={resources["TECH"][5]}/>}
  //                           iconGroup7={<ResponsiveTechIcon techName={resources["TECH"][6]}/>}
  //                           iconGroup8={<ResponsiveTechIcon techName={resources["TECH"][7]}/>}
  //                           iconGroup9={<ResponsiveTechIcon techName={resources["TECH"][8]}/>}
  //                           iconGroup10={<ResponsiveTechIcon techName={resources["TECH"][9]}/>}
  //                           iconGroup11={<ResponsiveTechIcon techName={resources["TECH"][10]}/>}
  //                           iconGroup12={<ResponsiveTechIcon techName={resources["TECH"][11]}/>}
  //                         />}
      
  //     />
  //     <Projects />
  //     <Footer />
  //   </div>
  // );
}

export default App;
