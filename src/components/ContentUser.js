
////////// THIS IS A COPY AND REFACTORED VERSION OF CONTENT//////



import React, {useState} from 'react';
import "../styles/Content.scss";
/* import MapSource from './MapSource' */
import UserMap from './UserMap'
import CleanerProfileTabs from './UserPage/CleanerProfileTabs'
import {Route, useHistory, Switch} from 'react-router-dom'
import axios from 'axios'
import CleanerProfile from './CleanerPage/CleanerProfile'




export default function ContentUser(props){

    const {isLoading, setLoading, registeredUser, setRegisteredUser} = props; // This is to be used later to set the state of if logged in or not 


    const [activeUser, setActiveUser] = useState(null);
    //const [isloading, setLoading] = useState(true)
    //const [registeredUser, setRegisteredUser] = useState([])
    const [chosenProfile, setChosenProfile] = useState({})

    let history = useHistory()

    /////// This is where get user is coming from and pass down to maps
    /* useEffect(()=>{
       axios({
           method: 'GET',
           url:'http://localhost:5000/cleaners'})
        .then(res => {
            setRegisteredUser(res.data)
            setLoading(false)
        })
        .catch(err => console.log(err))
    }, []) */



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
                    <h1 className="text--regular" style={{textAlign: "center"}}> <strong> Welcome {localStorage.getItem("appUser")} !!!</strong></h1>
                    <div style={{marginTop: "5%"}}></div>
                    <div className="row">
                        <CleanerProfileTabs 
                            registeredUser={registeredUser} setCurrentUser={setChosenProfile}
                        />
                    </div>
                    </section>
                </section>

                <section className="appointment__card-right">
                    {/* <MapSource /> */}
                    <UserMap 
                        activeUser={activeUser}
                        setActiveUser={setActiveUser}
                        isLoading={isLoading}
                        setLoading={setLoading}
                        registeredUser={registeredUser}
                        setRegisteredUser={setRegisteredUser}
                    />
                </section>
            </Route>
            <Switch>
                <Route path={`/users/cleanerProfile/:id`} exact>
                    <section className="appointment__card-left">
                        <section className="content-container">
                        <h1 className="text--regular" style={{textAlign: "center"}}> <strong> Welcome {localStorage.getItem("appUser")} !!!</strong></h1>
                        <div style={{marginTop: "5%"}}></div>
                        <div className="row">
                            <CleanerProfile 
                                selectedUser={chosenProfile} 
                            />
                        </div>
                        </section>
                    </section>
                </Route>
            </Switch>
        </main>
)

} 