import React from "react"
import "../styles/Content.scss";
/* import MapSource from './MapSource' */
import UserMap from './UserMap'
import CleanerProfileTabs from './UserPage/CleanerProfileTabs'
import LoginUser from "./UserPage/LoginUser"
import RegisterUser from "./UserPage/RegisterUser"
import LoginCleaner from "./CleanerPage/LoginCleaner"
import RegisterCleaner from "./CleanerPage/RegisterCleaner"
import {Switch, Route, Link} from 'react-router-dom'



export default function Content(){

    return(
        
        <main className="appointment__card appointment__card--show">
        <Switch>
        <>
            <section className="appointment__card-left">
                <section className="content-container">

                <Route path="/" exact>
                <h1 className="text--regular" style={{textAlign: "center"}}>Welcome To The Home Page</h1>
                <div style={{marginTop: "5%"}}></div>
                <div className="row">
                    <CleanerProfileTabs />
                    <CleanerProfileTabs />
                    <CleanerProfileTabs />
                </div>
                </Route>
                <Route path="/users/register" exact>
                <h1 className="text--regular" style={{textAlign: "center"}}>User Registration Page</h1>
                    <RegisterUser/>
                </Route>
                <Route path="/users/login" exact>
                <h1 className="text--regular" style={{textAlign: "center"}}>Welcome User</h1>
                    <LoginUser/>
                    <div style={{marginTop: "5%"}}>
                    <h2>If you are not yet a user please click <strong> <Link to={'/users/register'}> here </Link> </strong></h2>
                    </div>
                </Route>

                <Route path="/cleaners/register" exact>
                <h1 className="text--regular" style={{textAlign: "center"}}>CleanPreneur Registration Page</h1>
                    <RegisterCleaner/>
                </Route>
                <Route path="/cleaners/login" exact>
                <h1 className="text--regular" style={{textAlign: "center"}}>Welcome CleanPreneur</h1>
                    <LoginCleaner/>
                    <div style={{marginTop: "5%"}}>
                    <h2>If you are not yet a cleaner please click <strong> <Link to={'/cleaners/register'}> here </Link> </strong></h2>
                    </div>
                </Route>
                    
                </section>
            </section>
            
            <section className="appointment__card-right">
                {/* <MapSource /> */}
                <UserMap />
            </section>
        </>    
        </Switch>
       
        </main>
    )
} 