import React, { Component } from "react"
import axios from 'axios';
import { Button, Form } from 'react-bootstrap';
import { Redirect } from "react-router-dom";


export default class RegisterCleaner extends Component {

    constructor(props) {
        super(props);
        this.cleanerLogin = props.cleanerLogin;
        this.setCleanerLogin = props.setCleanerLogin;
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangePictureUrl = this.onChangePictureUrl.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            email: '',
            password: '',
            description: '',
            address: '',
            latitude: '',
            longitude: '',
            pictureUrl: '',
            phone: '',
            isRegistered: false,
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

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        })
    }

    onChangeAddress(e) {
        this.setState({
            address: e.target.value
        })
    }

    onChangePictureUrl(e) {
        this.setState({
            pictureUrl: e.target.value
        })
    }

    onChangePhone(e) {
        this.setState({
            phone: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const user = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            description: this.state.description,
            address: this.state.address,
            latitude: this.state.latitude,
            longitude: this.state.longitude,
            pictureUrl: this.state.pictureUrl,
            phone: this.state.phone
        }

        console.log(user);

        axios.post('http://localhost:5000/cleaners/register', user)
            .then(res => {
                localStorage.setItem("cleanerToken", res.data.token) // Then object is from response we made through url attach to MongoDB
                localStorage.setItem("cleanerEmail", res.data.cleaner.email)
                localStorage.setItem("cleanerUser", res.data.cleaner.username)
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
            });


        //this.props.history.push('/cleaners/login')

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

        const { latitude, longitude } = this.state
        const isRegistered = this.state.isRegistered;

        if (isRegistered === true) {
            this.setCleanerLogin(true)
            return <Redirect to="/" />
        }

        return (
            <Form onSubmit={this.onSubmit} >

                <Form.Group controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter username" value={this.state.username} onChange={this.onChangeUsername} />
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

                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows="3" placeholder="Description" value={this.state.description} onChange={this.onChangeDescription} />
                </Form.Group>

                <Form.Group controlId="formBasicAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="Address" value={this.state.address} onChange={this.onChangeAddress} />
                </Form.Group>

                <Form.Group controlId="formBasicPicture">
                    <Form.Label>Picture url</Form.Label>
                    <Form.Control type="text" placeholder="Picture_url" value={this.state.pictureUrl} onChange={this.onChangePictureUrl} />
                </Form.Group>

                <Form.Group controlId="formBasicPhone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="text" placeholder="Phone" value={this.state.phone} onChange={this.onChangePhone} />
                </Form.Group>

                <Form.Group controlId="formLatitude">
                    <Form.Control type="hidden" value={latitude} />
                </Form.Group>

                <Form.Group controlId="formLongitude">
                    <Form.Control type="hidden" value={longitude} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
        )
    }

}

