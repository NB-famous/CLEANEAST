
import React, { useState } from "react";
import { Button, Form, Alert } from 'react-bootstrap';
//import {ILogin, ITarget, login } from './helperUser/interfaces'
import axios from 'axios'
import {Link } from 'react-router-dom'


const LoginCleaner = (props) => { 
    
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [errLogin, setErrLogin] = useState(false);
   
    async function handleSubmit(event){

        event.preventDefault()

        try{
            const response = await axios.post('http://localhost:5000/cleaners/login', {
                email,
                password
            });
            if(response.data) {
                console.log("this is response", response)
                localStorage.setItem("cleanerToken", response.data.token) // Then object is from response we made through url attach to MongoDB
                localStorage.setItem("cleanerEmail", response.data.cleaner.email)
                localStorage.setItem("cleanerUser", response.data.cleaner.username)
                props.setCleanerLogin(true)
                setErrLogin(false)
            } else {
                console.log("incorrect something")
            }
        }
        catch(err){
            console.log("ERROR", err)
            setErrLogin(true)
        }

    }

  return (

    <>
    <h1 className="text--regular" style={{textAlign: "center"}}>Welcome CleanPreneur</h1>

    <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={event => setEmail(event.target.value)}/>
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={event => setPassword(event.target.value)}/>
        </Form.Group>
        {errLogin === true ?
                   <Alert variant="danger" onClose={() => setErrLogin(false)} dismissible>
                   <p>
                   Not logged-in. Please try again!!
                   </p>
                 </Alert>
                    :
                    <p></p>
                }
        <Button variant="primary" type="submit" style={{backgroundColor: "#44B244", borderColor: "black"}}>
            Login CleanPreneur
        </Button>
    </Form>

    <div style={{marginTop: "5%"}}>
        <h2>If you are not yet a cleaner please click <strong> <Link to={'/cleaners/register'} style={{color: "#44B244"}}> here </Link> </strong></h2>
    </div>

    </>
  )

}

export default LoginCleaner