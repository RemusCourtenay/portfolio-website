import '@aws-amplify/ui-react/styles.css';
import '@fontsource/inter/variable.css';
import './App.css';
import { Header, TextLink } from './ui-components';
import ResponsiveTextLink from './logic-components/ResponsiveTextLink';
 

function App() {
  return (
    <ResponsiveTextLink 
      content='Hello World 2'
      focus='True'
    />
  );
}

export default App;
