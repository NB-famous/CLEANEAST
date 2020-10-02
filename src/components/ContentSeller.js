

//// THIS IS A COPY AND REFACTORED VERSION OF CONTENT CLEANER COMPONENT 


import React, {useState, useEffect} from 'react';
import "../styles/Content.scss";
/* import MapSource from './MapSource' */
import {Route, useHistory, Switch} from 'react-router-dom'
import CleanerProfileForm from './CleanerPage/CleanerProfileForm'

import RegisterService from './CleanerPage/RegisterService'
import UpdateService from './CleanerPage/UpdateService'
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

    const deleteService = (cleanerId, serviceId) => {
        console.log("cleanerId", cleanerId)
        console.log("serviceId", serviceId)

        const service = {
            cleanerId: cleanerId,
            serviceId: serviceId
        }

        axios.post('http://localhost:5000/cleaners/service/delete', service, {
            headers: {
                'Content-Type': 'application/json',
                'cleanerttoken': localStorage.getItem('cleanerToken')
            }
        })
            .then(res => { 
                let services = {}
                //get the index of the deleted service in the array of services
                let indexServiceId = (registeredUser[cleanerId-1].service.map(function(e) { return e.service_id; }).indexOf(serviceId))
                console.log(" indexServiceId",  indexServiceId)
                //make copy of the array service
                const tempUsers = [...registeredUser]
                const index = tempUsers.map(user => user.cleanerId).indexOf(cleanerId)
                tempUsers[index].service = tempUsers[index].service.filter(s => s.service_id === serviceId ? false : true)
                setRegisteredUser(tempUsers)
            })
            .catch(err => { console.log(err) })
    }

    let targetValue = {};
    const updateService = (cleanerId, serviceId) => {
        console.log("From update service cleanerId", cleanerId)
        console.log("From update service serviceId", serviceId)
        targetValue.cleanerId = cleanerId
        targetValue.serviceId = serviceId
        return
    }
    console.log("targetValue", targetValue)

    let targetCleaner = {};
    const createService = (cleanerId) => {
        console.log("From create service cleanerId", cleanerId)
        targetCleaner.cleanerId = cleanerId
        return
    }

    //history.push('/'); // this will redirect to home page if user is logged in
    return(
        <main className="appointment__card appointment__card--show">
            <Route path="/" exact>
                <section className="appointment__card-left">
                    <section className="content-container">
                        <h1 className="text--regular" style={{ textAlign: "center" }}> <strong> Welcome {localStorage.getItem("cleanerUser")} !!!</strong></h1>
                        <div style={{ marginTop: "5%" }}></div>
                        <CleanerProfileForm selectedUser={chosenProfile} setCurrentUser={setChosenProfile} registeredUser={registeredUser} deleteService={deleteService} updateService={updateService} createService={createService}/>
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
                            <h1 className="text--regular" style={{ textAlign: "center" }}> <strong> Welcome {localStorage.getItem("cleanerUser")} !!!</strong></h1>
                            <div style={{ marginTop: "5%" }}></div>
                            <div className="row">
                                <Chat />
                            </div>
                        </section>
                    </section>
                </Route>
                <Route path={'/cleaners/services'} exact>
                    <section className="appointment__card-left">
                        <section className="content-container">
                            <h1 className="text--regular" style={{ textAlign: "center" }}> <strong> Add here your service {localStorage.getItem("appUser")} !!!</strong></h1>
                            <div style={{ marginTop: "5%" }}></div>
                            <div className="row">
                            <RegisterService selectedUser={chosenProfile} setCurrentUser={setChosenProfile} registeredUser={registeredUser} targetCleaner={targetCleaner} setRegisteredUser={setRegisteredUser}/>
                            </div>
                        </section>
                    </section>
                </Route>
                <Route path={'/cleaners/services/update'} exact>
                    <section className="appointment__card-left">
                        <section className="content-container">
                            <h1 className="text--regular" style={{ textAlign: "center" }}> <strong> Update here your service {localStorage.getItem("appUser")} !!!</strong></h1>
                            <div style={{ marginTop: "5%" }}></div>
                            <div className="row">
                            <UpdateService selectedUser={chosenProfile} setCurrentUser={setChosenProfile} registeredUser={registeredUser} targetValue={targetValue} setRegisteredUser={setRegisteredUser}/>
                            </div>
                        </section>
                    </section>
                </Route>
            </Switch>
        </main>
    )
} 