import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
//import Navigation from "./components/Navigation"
import Application from "./components/Application"
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3000'


function App() {

  return (
    
    <div className="App">
      {/* <Navigation 
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
        cleanerLogin={cleanerLogin}
        setCleanerLogin={setCleanerLogin}
      /> */}
      <Application/>  
    </div>
  );
}

export default App;
