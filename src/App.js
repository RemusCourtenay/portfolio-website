// CSS Imports
import '@aws-amplify/ui-react/styles.css';
import './App.css';

// Resource Imports
import { resources } from './resources/remus';

// App Type Imports
import BrowserApp from './BrowserApp.js'

// Library Imports
import { isBrowser } from 'react-device-detect';

function App() {

  // Links components to navigation links by ID values
  const anchors = {
    Home: 'introductionSection',
    Skills: 'skillsSection',
    Experience: 'techSection',
    Projects: 'projectSection',
    Contact: 'footerSection'
  }

  if (isBrowser) {
    return (
      <BrowserApp resources={resources} anchors={anchors}/>
    );
  } else {
    return (
      <p>Bad! use a browser.</p>
    )
  }
}

export default App;
