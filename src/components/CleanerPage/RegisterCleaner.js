import React, {Component} from "react"
import axios from 'axios';
import { Button, Form } from 'react-bootstrap';

export default class RegisterCleaner extends Component{

    constructor(props) {
        super(props);
    
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
          username: '',
          email:'',
          password:'',
          latitude: '',
          longitude: ''
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
    
        axios.post('http://localhost:5000/cleaners/register', user)
          .then(res => console.log(res.data));
    
        this.setState({
          username: '',
          email: '',
          password: ''

        })
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

    
    render(){

        const { latitude, longitude } = this.state

        return (

            <Form onSubmit={this.onSubmit}>

                <Form.Group controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter username" value={this.state.username} onChange={this.onChangeUsername} />
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

