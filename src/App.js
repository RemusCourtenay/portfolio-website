import '@aws-amplify/ui-react/styles.css';
import '@fontsource/inter/variable.css';
import './App.css';
import ResponsiveNavigationLinks from './logic-components/ResponsiveNavigationLinks';
import { ContactButton, Header, HeaderName, Introduction, Splash, SplashText } from './ui-components';
 

function App() {

  const anchors = {
    'Home': 'HomeTest',
    'Skills': 'SkillsTest',
    'Project': 'ProjectTest',
    'Experience': 'ExperienceTest',
    'Contact': 'ContactTest'
  }

  return (
    <Introduction 
      headerGroup={<Header 
                    nameGroup={<HeaderName />}
                    navigationLinksGroup={<ResponsiveNavigationLinks 
                                            anchors={anchors}
                                          />}
                  />}
      splashGroup={<Splash
                    splashTextGroup={<SplashText 
                                        contactButtonGroup={<ContactButton 
                                                               state='Click'
                                                               bold='False' 
                                                            />}
                                    />} 
                    faceImage="resources/face.png"
                  />}
    />


  );
}

export default App;
