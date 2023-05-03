import '@aws-amplify/ui-react/styles.css';
import '@fontsource/inter/variable.css';
import './App.css';
import { Header, NavigationLinks, TextLink } from './ui-components';
import ResponsiveTextLink from './logic-components/ResponsiveTextLink';
 

function App() {
  return (
    <NavigationLinks 
      link1={<ResponsiveTextLink 
              content='Home'
              focus='True'
            />}
      link2={<ResponsiveTextLink 
              content='Skills'
              focus='False'
            />}
      link3={<ResponsiveTextLink 
              content='Project'
              focus='False'
            />}
      link4={<ResponsiveTextLink 
              content='Experience'
              focus='False'
            />}
      link5={<ResponsiveTextLink 
              content='Contact'
              focus='False'
            />}
    />
  );
}

export default App;
