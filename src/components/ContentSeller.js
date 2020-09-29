

//// THIS IS A COPY AND REFACTORED VERSION OF CONTENT CLEANER COMPONENT 


import React, {useState, useEffect} from 'react';
import "../styles/Content.scss";
/* import MapSource from './MapSource' */
import {Route, useHistory, Switch} from 'react-router-dom'
import CleanerProfileForm from './CleanerPage/CleanerProfileForm'
import axios from 'axios'
import Chat from '../ChatComponents/messagecomponents/Chat'


export default function ContentSeller(props){

    //const {loggedIn, setLoggedIn, cleanerLogin, setCleanerLogin} = props; // This is to be used later to set the state of if logged in or not 

    const [chosenProfile, setChosenProfile] = useState({})
    const [isLoading, setLoading] = useState(true)
    const [registeredUser, setRegisteredUser] = useState([])

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



    let history = useHistory()

    if (isLoading) {
        history.push('/');
        return <div>Loading...</div>;
    }



    //history.push('/'); // this will redirect to home page if user is logged in
    return(
        <main className="appointment__card appointment__card--show">
        <Route path="/" exact>
            <section className="appointment__card-left">
                <section className="content-container">
                <h1 className="text--regular" style={{textAlign: "center"}}> <strong> Welcome {localStorage.getItem("cleanerUser")} !!!</strong></h1>
                <div style={{marginTop: "5%"}}></div>
                <CleanerProfileForm selectedUser={chosenProfile} setCurrentUser={setChosenProfile} registeredUser={registeredUser}/>   
                <div className="row">
                    <h1> I am cleaner Dashboard profile </h1>
                </div>
                </section>
            </section>
        </Route>
        <Switch>
        <Route path={'/cleaners/chatroom'} exact>
                    <section className="appointment__card-left">
                        <section className="content-container">
                        <h1 className="text--regular" style={{textAlign: "center"}}> <strong> Welcome {localStorage.getItem("appUser")} !!!</strong></h1>
                        <div style={{marginTop: "5%"}}></div>
                        <div className="row">
                            <Chat />
                        </div>
                        </section>
                    </section>
                </Route>
        </Switch>
        </main>
    )
} 