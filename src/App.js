import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navigation from "./components/Navigation"
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3000'


function App() {
  
  return (
    <div className="App">
      <Navigation />
    </div>
  );
}

export default App;
