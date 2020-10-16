import React, { Component } from "react"
import axios from 'axios';
import { Button, Form, Alert } from 'react-bootstrap';
import { Redirect } from "react-router-dom";
import "../../styles/Content.scss";


export default class RegisterUser extends Component {

    constructor(props) {
        super(props);
        console.log("this is the props inside constructor", props.loggedIn)
        this.loggedIn = props.loggedIn;
        this.setLoggedIn = props.setLoggedIn;
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.error = false 


        this.state = {
            username: '',
            email: '',
            password: '',
            latitude: '',
            longitude: '',
            isRegistered: false,
            error: false
        }

        this.getMyLocation = this.getMyLocation.bind(this)
    }

    componentDidMount() {
        this.getMyLocation()
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
            password: this.state.password,
            latitude: this.state.latitude,
            longitude: this.state.longitude
        }

        console.log(user);

        ///////////////////// BEFORE DEPLOYMENT

        /* axios.post('http://localhost:5000/users/register', user)
            .then(res => {
                localStorage.setItem("userToken", res.data.token) // Then object is from response we made through url attach to MongoDB
                localStorage.setItem("userEmail", res.data.user.email)
                localStorage.setItem("userUser", res.data.user.username)
                console.log("This is the responese from then", res.data)

                this.setState({
                    username: '',
                    email: '',
                    password: '',
                    isRegistered: true,
                })
            })
            .catch(err => {
                console.log("This is the responese from catch", err);
                this.setState({
                    username: '',
                    email: '',
                    password: '',
                    isRegistered: false,
                    error: true
                })
            }); */

            axios.post('https://cleaneast.herokuapp.com/users/register', user)
            .then(res => {
                localStorage.setItem("userToken", res.data.token) // Then object is from response we made through url attach to MongoDB
                localStorage.setItem("userEmail", res.data.user.email)
                localStorage.setItem("userUser", res.data.user.username)
                console.log("This is the responese from then", res.data)

                this.setState({
                    username: '',
                    email: '',
                    password: '',
                    isRegistered: true,
                })
            })
            .catch(err => {
                console.log("This is the responese from catch", err);
                this.setState({
                    username: '',
                    email: '',
                    password: '',
                    isRegistered: false,
                    error: true
                })
            });


    }

    getMyLocation() {
        const location = window.navigator && window.navigator.geolocation

        if (location) {
            location.getCurrentPosition((position) => {
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                })
            }, (error) => {
                this.setState({ latitude: 'err-latitude', longitude: 'err-longitude' })
            })
        }

    }


    render() {

        const error = this.state.error
        console.log("errr", error)
        const { latitude, longitude } = this.state
        const isRegistered = this.state.isRegistered;

        if (isRegistered === true) {
            this.setLoggedIn(true)
            return <Redirect to="/" />
        }

        return (
            <Form onSubmit={this.onSubmit} className="serviceForm">
                <Form.Group controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter username" value={this.state.username} onChange={this.onChangeUsername} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={this.state.email} onChange={this.onChangeEmail} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={this.state.password} onChange={this.onChangePassword} />
                </Form.Group>
                <Form.Group controlId="formLatitude">
                    <Form.Control type="hidden" value={latitude} />
                </Form.Group>
                <Form.Group controlId="formLongitude">
                    <Form.Control type="hidden" value={longitude} />
                </Form.Group>
                {error === true ?
                   <Alert variant="danger" onClose={() => this.setState({error: false})} dismissible>
                   <p>
                   Something went wrong and cannot register <strong>User</strong>. Please try again...
                   </p>
                 </Alert>
                    :
                    <p></p>
                }
                <Button variant="primary" type="submit">
                    Register
                </Button>

            </Form>
        )


    }

}

