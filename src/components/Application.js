//////////// THIS IS THE REFACTORED VERSION OF NAVIGATION //////////////////




import React, {useState, useEffect} from "react";
import "../styles/Navigation.scss";
import "../styles/ButtonList.scss"
import ContentUser from "./ContentUser"
import ContentSeller from "./ContentSeller"
import ContentIndex from "./ContentIndex"
import {BrowserRouter, Switch} from 'react-router-dom'
import NavBar from "./NavBar";
import axios from "axios";
//import Switch from "react-bootstrap/esm/Switch";



export default function Application(props) {

    const [loggedIn, setLoggedIn] = useState(
        Boolean(localStorage.getItem("appToken"))
      )
    const [cleanerLogin, setCleanerLogin] = useState(
        Boolean(localStorage.getItem("cleanerToken"))
    )

    const [registeredUser, setRegisteredUser] = useState([])
    const [isLoading, setLoading] = useState(true)

    //const {loggedIn, setLoggedIn, cleanerLogin, setCleanerLogin} = props;

    const getAxiosData = () => {
        axios({
            method: 'GET',
            url:'http://localhost:5000/cleaners'})
         .then(res => {
             console.log("THIS IS RES", res)
             setRegisteredUser(res.data)
             setLoading(false)
         })
         .then(()=> console.log(registeredUser, isLoading))
         .catch(err => console.log(err))
        
        }

    if(registeredUser.length === 0){
        return getAxiosData()
    }


    const renderContext =()=> {

        if (loggedIn){ 
        
        return(<ContentUser 
            registeredUser={registeredUser}
            setRegisteredUser={setRegisteredUser}
            isLoading={isLoading}
            setLoading={setLoading}
        />)
        }
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
        <>
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
        </>
        </Switch>
        </BrowserRouter>
    );
}