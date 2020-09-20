
import React, { useState } from "react";
import { Button, Form } from 'react-bootstrap';
//import {ILogin, ITarget, login } from './helperUser/interfaces'
import axios from 'axios'




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
            console.log("this is response", response)
            localStorage.setItem("appToken", response.data.token) // Then object is from response we made through url attach to MongoDB
            props.setLoggedIn(true)

        } else {
            console.log("incorrect something")
        }
    }
    catch(err){
        console.log("ERROR")
    }
}

  return (

    

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
            Login
        </Button>
    </Form>
  )

}

export default LoginUser