// import logo from './logo.svg';
import './App.css';
import EditUserPage from './components/EditUserPage.js'
// import EditUserPageTwo from './components/EditUserPageTwo';
import { createContext, useState } from 'react';

export const ThemeContext = createContext(null)



function App() {
  const [theme, setTheme] = useState("light")
  
  const toggleTheme = () => {
  setTheme((curr) => (curr === "light" ? "dark" : "light"));
}
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
    <div className="App" id={theme}>
    <EditUserPage darkToggle={toggleTheme} />
    </div>
    </ThemeContext.Provider>


    // <EditUserPage/>


    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
