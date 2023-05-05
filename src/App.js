import '@aws-amplify/ui-react/styles.css';
import '@fontsource/inter/variable.css';
import './App.css';
import { resources } from './resources/remus';
import { Introduction, Skills, SkillsText } from './ui-components';
import ResponsiveHeader from './logic-components/ResponsiveHeader'
import ResponsiveSplash from './logic-components/ResponsiveSplash'
import ResponsiveCVButton from './logic-components/ResponsiveCVButton'  
import ResponsiveSkillsGraph from './logic-components/ResponsiveSkillsGraph';

function App() {

  const anchors = {
    'Home': 'HomeTest',
    'Skills': 'SkillsTest',
    'Project': 'ProjectTest',
    'Experience': 'ExperienceTest',
    'Contact': 'ContactTest'
  }

  return (
    <div>
      <Introduction 
        headerGroup={<ResponsiveHeader firstName={resources["PERSONAL"]["FIRST_NAME"]} anchors={anchors}/>}
        splashGroup={<ResponsiveSplash />}
      />
      <Skills 
        skillsTextGroup={<SkillsText cvButtonGroup={<ResponsiveCVButton />}/>}
        skillsGraphGroup={<ResponsiveSkillsGraph skills={resources["SKILLS"]}/>}  
      />
    </div>
  );
}

export default App;
