import React from "react"


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
//import "../styles/HomePage.scss"


const FrontPageContent = () => {
  return (
      <div className="Front-container" style={{display:"flex", flexDirection:"column"}}>
    <>
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
    </>
    </div>
  )
}

export default FrontPageContent