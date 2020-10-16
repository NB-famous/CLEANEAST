
////////// THIS IS A COPY AND REFACTORED VERSION OF CONTENT//////



import React, {useState, useEffect} from 'react';
import "../styles/Content.scss";
import "../styles/HomePage.scss"
/* import MapSource from './MapSource' */
import UserMap from './UserMap'
import CleanerProfileTabs from './UserPage/CleanerProfileTabs'
import {Route, useHistory, Switch} from 'react-router-dom'
import CleanerProfile from './CleanerPage/CleanerProfile'
import RegisterRating from './UserPage/RegisterRating'
import axios from 'axios';
import Chat from '../ChatComponents/messagecomponents/Chat'
import TextSent from './TextSent'
import ListOfAvailableCleaners  from './UserPage/ListOfAvailableCleaners'
import ListofCleanerContacts from './UserPage/ListofCleanerContacts'




export default function ContentUser(props){

    const [activeUser, setActiveUser] = useState(null);
    const [chosenProfile, setChosenProfile] = useState({})
    const [isLoading, setLoading] = useState(true)
    const [registeredUser, setRegisteredUser] = useState([])
    const [theLoggedInUser, setTheLoggedInUser] = useState([])
    const [search, setSearch] = useState('')

    let history = useHistory()


    /////// This is where get user is coming from and pass down to maps
    useEffect(()=>{
       axios({
           method: 'GET',
           url:'http://localhost:5000/cleaners/services'})
        .then(res => {
            console.log("THIS IS THE FIRST AXIOS GET REQUEST", res.data)
            setRegisteredUser(res.data)
            return axios({
                method: 'GET',
                url:'http://localhost:5000/users'})
        })
        .then(res => {
            setLoading(false)
            setTheLoggedInUser(res.data)

        })
        .catch(err => console.log(err))
    }, [])


    const filteredCleaner = registeredUser.filter(cleaner => {

        return cleaner.cleanerName.toLowerCase().includes(search.toLowerCase())
      })

    if (isLoading) {
        history.push('/');
        return <div>Loading...</div>;
    }

    return(
        <main className="appointment__card appointment__card--show">
            <Route path="/" exact>
                <section className="appointment__card-left">
                    <section className="home-content-container">
                    <h1 className="text--regular" style={{textAlign: "center"}}> Welcome To Cleaneast <strong>{localStorage.getItem("userUser")} </strong></h1>
                    <div style={{marginTop: "5%"}}></div>
                        <div class="col-lg-8 col-md-6 col-sm-12 p-0" style={{display:"flex", marginLeft: "10%", minWidth:"80%", maxWidth:"80%", border:"solid black", borderRadius:"10px"}}>
                            <input type="text" placeholder="Type To Search For Your Favourite CleanPreneur..." class="form-control" id="search" name="search" onChange={e => setSearch(e.target.value)} style={{fontSize: "40px"}}/>
                            <button class="btn btn-base" style={{borderLeft: "solid black"}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                            </button>
                        </div>
                    <div style={{marginTop: "5%"}}></div>
                    <div className="row">
                        <CleanerProfileTabs 
                            registeredUser={registeredUser} 
                            setCurrentUser={setChosenProfile}
                            filteredCleaner={filteredCleaner}
                        />
                    </div>
                    </section>
                </section>

                <section className="appointment__card-right">
                    <UserMap 
                        activeUser={activeUser}
                        setActiveUser={setActiveUser}
                        isLoading={isLoading}
                        setLoading={setLoading}
                        registeredUser={registeredUser}
                        setRegisteredUser={setRegisteredUser}
                        theLoggedInUser={theLoggedInUser}
                        setCurrentUser={setChosenProfile}
                        filteredCleaner={filteredCleaner}
                    />
                </section>
            </Route>
            <Switch>
                <Route path={`/users/cleanerProfile/:id`} exact>
                    <section className="appointment__card-left">
                        <section className="content-container">
                        <h1 className="text--regular" style={{textAlign: "center"}}>Welcome To My Profile <strong>{localStorage.getItem("userUser")}</strong></h1>
                        <div style={{marginTop: "5%"}}></div>
                        <div className="row">
                            <CleanerProfile 
                                selectedUser={chosenProfile} 
                            />
                        </div>
                        </section>
                    </section>

                    <section className="homebox__card-right">
                    <ListOfAvailableCleaners registeredUser={registeredUser} setCurrentUser={setChosenProfile}/>
                    </section>
                </Route>
                <Route path={'/cleaners/chatroom'} exact>
                    <section className="appointment__card-left">
                        <section className="content-container">
                        <h1 className="text--regular" style={{textAlign: "center"}}> Welcome To The Chat Room <strong>{localStorage.getItem("userUser")}</strong></h1>
                        <div style={{marginTop: "5%"}}></div>
                        <div className="row">
                            <Chat />
                        </div>
                        </section>
                    </section>

                    <section className="homebox__card-right">
                    <ListofCleanerContacts registeredUser={registeredUser} setCurrentUser={setChosenProfile}/>
                    </section>
                </Route>
                <Route path={'/users/ratings'} exact>
                    <section className="appointment__card-left">
                        <section className="content-container">
                            <h1 className="text--regular" style={{ textAlign: "center" }}> Add your comments here <strong>{localStorage.getItem("userUser")}</strong></h1>
                            <div style={{ marginTop: "5%" }}></div>
                            <div className="row">
                            <RegisterRating
                                registeredUser={registeredUser}
                                selectedUser={chosenProfile}
                                setRegisteredUser={setRegisteredUser}
                            />
                            </div>
                        </section>
                    </section>
                </Route>
                <Route path={'/twilio/send-text'} exact>
                    <section className="appointment__card-left">
                        <section className="content-container">
                            <h1 className="text--regular" style={{ textAlign: "center" }}> <strong> Thank you for Hiring A CleanPreneur!!!</strong></h1>
                            <div style={{ marginTop: "5%" }}></div>
                            <div className="row">
                            <TextSent/>
                            </div>
                        </section>
                    </section>
                </Route>
            </Switch>
        </main>
)

} 