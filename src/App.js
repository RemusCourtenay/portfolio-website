import '@aws-amplify/ui-react/styles.css';
import '@fontsource/inter/variable.css';
import logo from './logo.svg';
import './App.css';
import { NavBar } from './ui-components';
 

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello Mum
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
