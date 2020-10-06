

/// THIS IS A COPY AND REFACTORED VERSION OF CONTENT WHEN BOTH CLEANER AND USER ARE LOGGED OFF 



import React, {useState, useEffect} from 'react';
import "../styles/Content.scss";
import "../styles/HomePageIndex.scss";

/* import MapSource from './MapSource' */
import LoginUser from "./UserPage/LoginUser"
import RegisterUser from "./UserPage/RegisterUser"
import LoginCleaner from "./CleanerPage/LoginCleaner"
import RegisterCleaner from "./CleanerPage/RegisterCleaner"
import CarouselSlide from "./CarouselSlide"
import {Route, useHistory} from 'react-router-dom'
import axios from 'axios'

import { FaCheckCircle } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaMapPin } from "react-icons/fa";
import { RiQuestionAnswerFill } from "react-icons/ri";
import { MdAccountCircle } from "react-icons/md";
import { MdWork } from "react-icons/md";
import { GiTakeMyMoney } from "react-icons/gi";
import { TiSocialInstagram } from "react-icons/ti";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";

export default function ContentIndex(props){

    const {loggedIn, setLoggedIn, cleanerLogin, setCleanerLogin} = props; // This is to be used later to set the state of if logged in or not 


    const [isloading, setLoading] = useState(true)
    const [registeredUser, setRegisteredUser] = useState([])

    let history = useHistory();

    /////// This is where get user is coming from and pass down to maps
    useEffect(()=>{
       axios({
           method: 'GET',
           url:'http://localhost:5000/cleaners/services'})
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
                <div>
                    <CarouselSlide />
                </div>
                <hr/>
                <div className="mid-section">
                    <div className="mid-section-message">
                        <h2>Get to know Cleaneast</h2>
                        <ul className="check-list">
                            <li><FaCheckCircle value={{ className: "check" }}/>   Find the right person for the job</li>
                            <li><FaCheckCircle value={{ className: "check" }}/>   Support local business owners</li>
                            <li><FaCheckCircle value={{ className: "check" }}/>   Help improve services in your community</li>
                        </ul>    
                    </div>
                    <div className="convo-sample">
                    </div>
                </div>
                <div className="qna-section" >
                    <h4>At Cleaneast we connect local services with the people who need them</h4>
                    <p>___________________________________________</p>
                    <ul className="qna-section-list">
                        <li>
                            <h5>Have questions?</h5>
                            <p>Easily message any service provider to discuss in detail in our chat system</p>
                            <div><RiQuestionAnswerFill size={30} color={"#44B244"} /></div>
                        </li>
                        <li>
                            <h5>Looking for the closest service to you?</h5>
                            <p>An accessible map allows you to browse the people closest to you, so you can get help fast!</p>
                            <div><FaMapPin size={30} color={"#44B244"} /></div>
                        </li>
                        <li>
                            <h5>Not sure if it's the right fit?</h5>
                            <p>Check out what other members of your community think of their work, and if you decide to hire them, feel free to leave a review for others to see!</p>
                            <div><FaStar color={"#ffc107"}/><FaStar color={"#ffc107"}/><FaStar color={"#ffc107"}/><FaStar color={"#ffc107"}/><FaStar color={"#ffc107"}/></div>
                        </li>
                        <li>
                            <p>___________________________________________</p>
                            <h4>A platform for the community by the community</h4>
                        </li>
                    </ul>
                </div>
                <div className="about-section">
                    <div className="about-header">
                        <h3>Looking to be a cleanpreneur? It's easy!</h3>
                        <p>Simply follow these steps and you'll be ready in no time</p>
                    </div>
                    <div className="about-content">
                        <div className="about-item">
                            <MdAccountCircle size={80} color={"#44B244"} />
                            <h4>Create an account</h4>
                            <p>Simply register and find your community</p>
                        </div>
                        <div className="about-item">
                            <MdWork size={80} color={"#44B244"}/>
                            <h4>Add a service</h4>
                            <p>Pick how you'd like to make money. Don't worry you can always add more!</p>
                        </div>
                        <div className="about-item">
                            <GiTakeMyMoney size={80} color={"#44B244"}/>
                            <h4>Make money!</h4>
                            <p>Stay in touch with your clients and build strong relationships to keep business booming!</p>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <div className="footer-divider"></div>
                    <div className="footer-divider"></div>
                    <div className="footer-links">
                        <h6>©2020 Cleaneast, Inc. All rights reserved.</h6>
                        <div className="footer-links-disclaimers">
                            <h6>Privacy</h6>
                            <h6>Accessibility</h6>
                            <h6>Terms</h6>
                            <TiSocialInstagram size={15} color={"#525252"} />
                            <TiSocialFacebook size={15} color={"#525252"}/>
                            <TiSocialTwitter  size={15}color={"#525252"}/>
                        </div>
                    </div>
                </div>
              
                
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