//////////// THIS IS THE REFACTORED VERSION OF NAVIGATION //////////////////




import React, {useState} from "react";
import "../styles/Navigation.scss";
import "../styles/ButtonList.scss"
import ContentUser from "./ContentUser"
import ContentSeller from "./ContentSeller"
import ContentIndex from "./ContentIndex"
import {BrowserRouter, Switch} from 'react-router-dom'
import NavBar from "./NavBar";
//import Switch from "react-bootstrap/esm/Switch";



export default function Application(props) {

    const [loggedIn, setLoggedIn] = useState(
        Boolean(localStorage.getItem("appToken"))
      )
      const [cleanerLogin, setCleanerLogin] = useState(
        Boolean(localStorage.getItem("cleanerToken"))
      )

    //const {loggedIn, setLoggedIn, cleanerLogin, setCleanerLogin} = props;

    return (
        <BrowserRouter>
        <Switch>
        <main className="layout">
            <NavBar 
            loggedIn={loggedIn}
            setLoggedIn={setLoggedIn} 
            cleanerLogin={cleanerLogin} 
            setCleanerLogin={setCleanerLogin}
            />
            <section className="content-body" >
            {
                loggedIn ?
                <ContentUser />
                : cleanerLogin ?
                <ContentSeller /> 
                : <ContentIndex 
                    loggedIn={loggedIn}
                    setLoggedIn={setLoggedIn} 
                    cleanerLogin={cleanerLogin} 
                    setCleanerLogin={setCleanerLogin}
                    />  
            }
            </section>
        </main>
        </Switch>
        </BrowserRouter>
    );
}