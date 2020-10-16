

/// THIS IS A COPY AND REFACTORED VERSION OF CONTENT WHEN BOTH CLEANER AND USER ARE LOGGED OFF 



import React, {useState, useEffect} from 'react';
import "../styles/Content.scss";
/* import MapSource from './MapSource' */
import LoginUser from "./UserPage/LoginUser"
import RegisterUser from "./UserPage/RegisterUser"
import LoginCleaner from "./CleanerPage/LoginCleaner"
import RegisterCleaner from "./CleanerPage/RegisterCleaner"
import CarouselSlide from "./CarouselSlide"
import {Route, useHistory} from 'react-router-dom'
import axios from 'axios'
import FrontPageContent from './FrontPageContent';



export default function ContentIndex(props){

    const {loggedIn, setLoggedIn, cleanerLogin, setCleanerLogin} = props; // This is to be used later to set the state of if logged in or not 


    const [isloading, setLoading] = useState(true)
    const [registeredUser, setRegisteredUser] = useState([])

    let history = useHistory();

    /////// This is where get user is coming from and pass down to maps

    /////// original before deployment /////////////////////
    /* useEffect(()=>{
       axios({
           method: 'GET',
           url:'http://localhost:5000/cleaners/services'})
        .then(res => {
            setRegisteredUser(res.data)
            setLoading(false)
            console.log("this is response", res)
        })
        .catch(err => console.log(err))
    }, []) */

    useEffect(()=>{
        axios({
            method: 'GET',
            url:'https://cleaneast.herokuapp.com/cleaners/services'})
         .then(res => {
             setRegisteredUser(res.data)
             setLoading(false)
             console.log("this is response", res)
         })
         .catch(err => console.log(err))
     }, []) 




    if (isloading) {
        history.push('/')
        return <div>Loading...</div>;
    }

    return(
        <main className="appointment__card appointment__card--show">
        
            <section className="appointment__card-left">
                <section className="content-container">
                <Route path="/"  registeredUser={registeredUser} exact>
                <h1 className="text--regular" style={{textAlign: "center"}}>Welcome To Cleaneast</h1>
                {/* <div style={{marginTop: "5%"}}></div> */}
                <hr/>
                <div className="Carousel">
                    <CarouselSlide />
                </div>
                <hr/>
                
                
                <FrontPageContent />
                
                </Route>
                <Route path="/users/register" exact>
                <h1 className="text--regular" style={{textAlign: "center"}}>User Registration Page</h1>
                    <RegisterUser loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
                </Route>
                <Route path="/cleaners/register" exact>
                <h1 className="text--regular" style={{textAlign: "center"}}>CleanPreneur Registration Page</h1>
                    <RegisterCleaner cleanerLogin={cleanerLogin} setCleanerLogin={setCleanerLogin}/>
                </Route>
                <Route path="/users/login" exact>
                    <LoginUser loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
                </Route>
                <Route path="/cleaners/login" exact>
                    <LoginCleaner cleanerLogin={cleanerLogin} setCleanerLogin={setCleanerLogin}/>
                </Route>   
                </section>
            </section>
        </main>
    )
} 