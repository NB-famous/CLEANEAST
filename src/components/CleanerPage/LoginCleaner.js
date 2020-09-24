
import React, { useState } from "react";
import { Button, Form } from 'react-bootstrap';
//import {ILogin, ITarget, login } from './helperUser/interfaces'
import axios from 'axios'
import {Link} from 'react-router-dom'



const LoginUser = (props) => { 
    
const [email, setEmail] = useState();
const [password, setPassword] = useState();


async function handleSubmit(event){

    event.preventDefault()

    try{
        const response = await axios.post('http://localhost:5000/cleaners/login', {
            email,
            password
        });
        if(response.data) {
            //console.log("this is response", response)
            localStorage.setItem("appToken", response.data.token) // Then object is from response we made through url attach to MongoDB
            localStorage.setItem("appEmail", response.data.cleaner.email)
            localStorage.setItem("appUser", response.data.cleaner.username)
            props.setLoggedIn(true)

        } else {
            console.log("incorrect something")
        }
    }
    catch(err){
        console.log("ERROR", err)
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
        <Button variant="primary" type="submit">
            Login CleanPreneur
        </Button>
    </Form>

    <div style={{marginTop: "5%"}}>
        <h2>If you are not yet a cleaner please click <strong> <Link to={'/cleaners/register'}> here </Link> </strong></h2>
    </div>

    </>
  )

}

export default LoginUser