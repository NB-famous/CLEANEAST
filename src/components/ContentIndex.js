

/// THIS IS A COPY AND REFACTORED VERSION OF CONTENT WHEN BOTH CLEANER AND USER ARE LOGGED OFF 



import React, { useState, useEffect } from 'react';
import "../styles/Content.scss";
/* import MapSource from './MapSource' */
import LoginUser from "./UserPage/LoginUser"
import RegisterUser from "./UserPage/RegisterUser"
import LoginCleaner from "./CleanerPage/LoginCleaner"
import RegisterCleaner from "./CleanerPage/RegisterCleaner"
import { Route, useHistory } from 'react-router-dom'
import axios from 'axios'
import CarouselSlide from "./CarouselSlide"




export default function ContentIndex(props) {

    const { loggedIn, setLoggedIn, cleanerLogin, setCleanerLogin } = props; // This is to be used later to set the state of if logged in or not 


    const [isloading, setLoading] = useState(true)
    const [registeredUser, setRegisteredUser] = useState([])

    let history = useHistory();

    /////// This is where get user is coming from and pass down to maps
    useEffect(() => {
        axios({
            method: 'GET',
            url: 'http://localhost:5000/cleaners/services'
        })
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

    return (
        <main className="appointment__card appointment__card--show">
            <>
                <section className="appointment__card-left">
                    <section className="content-container">
                        <Route path="/" registeredUser={registeredUser} exact>
                            <h1 className="text--regular" style={{ textAlign: "center" }}>Welcome To The Home Page</h1>
                            <div style={{ marginTop: "5%" }}></div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis debitis, quas totam soluta blanditiis
                                laboriosam repudiandae amet possimus id quibusdam explicabo itaque rerum odit adipisci facere veritatis perspiciatis in tenetur!
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa maiores autem consectetur, consequuntur nam reprehenderit voluptates
                                temporibus deserunt. Sint impedit quidem ab quos eos amet magni? Excepturi asperiores commodi deserunt!
                                Iure at, libero dolores necessitatibus laudantium id saepe officiis ducimus sequi repellat possimus nihil odio dolorum obcaecati
                                explicabo facilis doloribus ad voluptatibus adipisci. Repellendus voluptas exercitationem rem incidunt perferendis maxime!
                                Repudiandae ipsum eum itaque quos aliquam perspiciatis nostrum hic sit accusamus excepturi. Voluptatum magni ipsa amet fugiat
                                voluptas perspiciatis enim, voluptatibus itaque iure iusto dolores dolorem sunt, minus deleniti in.
                                Vero error ducimus repudiandae animi perferendis non, maiores ea, libero exercitationem saepe, ipsam sunt ipsum atque commodi.
                                Hic tenetur dolor impedit, incidunt, officia, cupiditate placeat quos soluta error nisi quisquam.
                                Quidem, labore suscipit vel quibusdam eum provident totam voluptas doloribus, necessitatibus similique nemo quaerat
                                commodi cupiditate recusandae minus asperiores quis, reprehenderit unde facere quam! Temporibus consequatur repudiandae libero labore aspernatur.
                        </p>
                        </Route>
                        <Route path="/users/register" exact>
                            <h1 className="text--regular" style={{ textAlign: "center" }}>User Registration Page</h1>
                            <RegisterUser loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
                        </Route>
                        <Route path="/cleaners/register" exact>
                            <h1 className="text--regular" style={{ textAlign: "center" }}>CleanPreneur Registration Page</h1>
                            <RegisterCleaner cleanerLogin={cleanerLogin} setCleanerLogin={setCleanerLogin} />
                        </Route>
                        <Route path="/users/login" exact>
                            <LoginUser loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
                        </Route>
                        <Route path="/cleaners/login" exact>
                            <LoginCleaner cleanerLogin={cleanerLogin} setCleanerLogin={setCleanerLogin} />
                        </Route>
                    </section>
                </section>
                <section className="appointment__card-right">
                    <section id="slide"className="content-container">
                        <section className="content-container-carosel">
                            <CarouselSlide>
                            </CarouselSlide>
                        </section>
                    </section>
                </section>
            </>
        </main>
    )
} 