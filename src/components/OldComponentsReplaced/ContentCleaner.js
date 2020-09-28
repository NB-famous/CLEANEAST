import React from 'react';
import "../styles/Content.scss";
/* import MapSource from './MapSource' */
import LoginUser from "../UserPage/LoginUser"
import RegisterUser from "../UserPage/RegisterUser"
import LoginCleaner from "../CleanerPage/LoginCleaner"
import RegisterCleaner from "../CleanerPage/RegisterCleaner"
import {Switch, Route, useHistory} from 'react-router-dom'




export default function ContentCleaner(props){

    const {loggedIn, setLoggedIn, cleanerLogin, setCleanerLogin} = props; // This is to be used later to set the state of if logged in or not 


    let history = useHistory()


    if(cleanerLogin){

        history.push('/'); // this will redirect to home page if user is logged in
        return(
            
            <main className="appointment__card appointment__card--show">
            <Switch>
            <>
                <section className="appointment__card-left">
                    <section className="content-container">
                    <Route path="/" exact>
                    <h1 className="text--regular" style={{textAlign: "center"}}> <strong> Welcome {localStorage.getItem("cleanerUser")} !!!</strong></h1>
                    <div style={{marginTop: "5%"}}></div>
                    <div className="row">
                        <h1> I am cleaner Dashboard profile </h1>
                    </div>
                    </Route>
                    </section>
                </section>
                </>    
            </Switch>
            </main>
        )
    } else {

    return(
        
        <main className="appointment__card appointment__card--show">
        <Switch>
        <>
            <section className="appointment__card-left">
                <section className="content-container">

                <Route path="/" exact>
                <h1 className="text--regular" style={{textAlign: "center"}}>Welcome To The Home Page</h1>
                <div style={{marginTop: "5%"}}></div>
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
                <h1 className="text--regular" style={{textAlign: "center"}}>User Registration Page</h1>
                    <RegisterUser/>
                </Route>
                <Route path="/users/login" exact>
                    <LoginUser loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
                </Route>
                <Route path="/cleaners/register" exact>
                <h1 className="text--regular" style={{textAlign: "center"}}>CleanPreneur Registration Page</h1>
                    <RegisterCleaner history={history}/>
                </Route>
                <Route path="/cleaners/login" exact>
                    <LoginCleaner cleanerLogin={cleanerLogin} setCleanerLogin={setCleanerLogin} history={history}/>
                </Route>
                    
                </section>
            </section>
            
        </>    
        </Switch>
       
        </main>
      )
    }
} 