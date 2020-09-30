//////////// THIS IS THE REFACTORED VERSION OF NAVIGATION //////////////////

import React, {useState} from "react";
import "../styles/Navigation.scss";
import "../styles/ButtonList.scss"
import ContentUser from "./ContentUser"
import ContentSeller from "./ContentSeller"
import ContentIndex from "./ContentIndex"
import {BrowserRouter, Switch} from 'react-router-dom'
import NavBar from "./NavBar";


export default function Application(props) {

    const [loggedIn, setLoggedIn] = useState(
        Boolean(localStorage.getItem("userToken"))
      )
    const [cleanerLogin, setCleanerLogin] = useState(
        Boolean(localStorage.getItem("cleanerToken"))
    )

    
    const renderContext =()=> {
        if (loggedIn) return( 
        <ContentUser />
        )
        if (cleanerLogin) return <ContentSeller />
        return(
            <ContentIndex 
                loggedIn={loggedIn}
                setLoggedIn={setLoggedIn} 
                cleanerLogin={cleanerLogin} 
                setCleanerLogin={setCleanerLogin}
            />  
        )
    }

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
            {renderContext()}
            </section>
        </main>
        </Switch>
        </BrowserRouter>
    );
}