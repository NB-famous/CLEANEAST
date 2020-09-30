import React, {Component} from "react"
import axios from 'axios';
import { Button, Form } from 'react-bootstrap';
import { Redirect } from "react-router-dom";


export default class RegisterUser extends Component{

    constructor(props) {
        super(props);
        console.log("this is the props inside constructor",props.loggedIn)
        this.loggedIn = props.loggedIn;
        this.setLoggedIn = props.setLoggedIn;
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        

        this.state = {
          username: '',
          email:'',
          password:'',
          isRegistered: false
        }
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        })
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        })
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        })
    }


    onSubmit(e) {
        e.preventDefault();
    
        const user = {
          username: this.state.username,
          email: this.state.email,
          password: this.state.password
        }
    
        console.log(user);
    
        axios.post('http://localhost:5000/users/register', user)
          .then(res => {
            localStorage.setItem("userToken", res.data.token) // Then object is from response we made through url attach to MongoDB
            localStorage.setItem("userEmail", res.data.user.email)
            localStorage.setItem("userUser", res.data.user.username)
            console.log("This is the responese from then", res.data)
            
            this.setState({
                username: '',
                email: '',
                password: '',
                isRegistered:true,
            })
        })
        .catch(err => {
            console.log("This is the responese from catch", err);
        });

     
    }

    
    render(){
        const isRegistered = this.state.isRegistered;
        if(isRegistered === true) {
            this.setLoggedIn(true)
            return <Redirect to="/"/>
        }

        return (
            <Form onSubmit={this.onSubmit} >
                <Form.Group controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter username" value={this.state.username} onChange={this.onChangeUsername} />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={this.state.email} onChange={this.onChangeEmail}/>
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={this.state.password} onChange={this.onChangePassword}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
        )
    }

}

