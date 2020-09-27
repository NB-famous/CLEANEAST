

//// THIS IS A COPY AND REFACTORED VERSION OF CONTENT CLEANER COMPONENT 


import React from 'react';
import "../styles/Content.scss";
/* import MapSource from './MapSource' */
import {Route, useHistory} from 'react-router-dom'


export default function ContentSeller(props){

    //const {loggedIn, setLoggedIn, cleanerLogin, setCleanerLogin} = props; // This is to be used later to set the state of if logged in or not 


    let history = useHistory()



    history.push('/'); // this will redirect to home page if user is logged in
    return(
        <main className="appointment__card appointment__card--show">
        <Route path="/" exact>
            <section className="appointment__card-left">
                <section className="content-container">
                <h1 className="text--regular" style={{textAlign: "center"}}> <strong> Welcome {localStorage.getItem("cleanerUser")} !!!</strong></h1>
                <div style={{marginTop: "5%"}}></div>
                <div className="row">
                    <h1> I am cleaner Dashboard profile </h1>
                </div>
                </section>
            </section>
        </Route>
        </main>
    )
} 