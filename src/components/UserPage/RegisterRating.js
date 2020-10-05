import React, { Component } from "react"
import axios from 'axios';
import { Button, Form, Alert } from 'react-bootstrap';
import { Redirect } from "react-router-dom";
import StarRating from './StarRating'


export default class RegisterRating extends Component {

    constructor(props) {
        super(props);
        console.log("this is the props inside constructor", props)
        this.loggedIn = props.loggedIn;
        this.setLoggedIn = props.setLoggedIn;
        this.onChangeRating = this.onChangeRating.bind(this);
        this.onChangeComment = this.onChangeComment.bind(this);
        this.onChangeService = this.onChangeService.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.error = false

        //if the service array is empty set service initial state as empty string
        //if there are already services set the state with the element zero
        let initialService;
        if (this.props.selectedUser.service.length >= 1) {
            initialService = this.props.selectedUser.service[0].service
        } else {
            initialService = ''
        }


        this.state = {
            rating: '',
            comment: '',
            service: initialService,
            cleanerId: '',
            isRegistered: false,
            error: false
        }
    }
    //original
    onChangeRating(rating) {
        console.log("rating", rating)
        this.setState({
            rating: rating
        })
    }

    // onChangeRating(e) {
    //     console.log("e", e)
    //     this.setState({
    //         rating: e
    //     })
    // }

    onChangeComment(e) {
        this.setState({
            comment: e.target.value
        })
    }

    onChangeService(e) {
        this.setState({
            service: e.target.value
        })
    }

    onChangeCleanerId(e) {
        this.setState({
            cleanerId: e.target.value
        })
    }


    onSubmit(e) {
        e.preventDefault();

        const rating = {
            comment: this.state.comment,
            rating: this.state.rating,
            service: this.state.service,
            cleanerId: this.props.selectedUser.cleanerId
        }

        console.log(rating);

        axios.post('http://localhost:5000/users/rating', rating, {
            headers: {
                'Content-Type': 'application/json',
                'userttoken': localStorage.getItem('userToken')
            }
        })
            .then(res => {
                console.log(res.data)

                this.setState({
                    comment: '',
                    rating: '',
                    service: '',
                    cleanerId: '',
                    isRegistered: true,
                    error: false
                })
            })
            .catch(err => {
                console.log("This is the responese from catch", err);
                this.setState({
                    comment: '',
                    rating: '',
                    service: this.state.service,
                    cleanerId: '',
                    isRegistered: false,
                    error: true
                })
            });


    }


    render() {
        const isRegistered = this.state.isRegistered;
        const error = this.state.error
        if (isRegistered === true) {
            //this.setLoggedIn(true)
            //this.setCleanerLogin(true)
            return <Redirect to="/" />
        }
        //console.log("selected user:", this.props.selectedUser);

        return (
            <Form onSubmit={this.onSubmit} >
                <Form.Group controlId="formBasicComment">
                    <Form.Label>Comment</Form.Label>
                    <Form.Control as="textarea" rows="3" placeholder="Enter your comment" value={this.state.comment} onChange={this.onChangeComment} />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Service</Form.Label>
                    <Form.Control as="select" value={this.state.service} onChange={this.onChangeService}>
                        {this.props.selectedUser.service.map(item => {
                            return (
                                <option >{item.service}</option>
                            )
                        })}
                    </Form.Control>
                </Form.Group>
                {/* <Form.Group controlId="formBasicRating">
                    <Form.Label>Rating</Form.Label>
                    <Form.Control type="number" min="0" max="5" placeholder="Rating" value={this.state.rating} onChange={this.onChangeRating} />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group> */}
                <Form.Group controlId="formBasicRating">
                <Form.Label>Rating</Form.Label>
                <StarRating setRating={this.onChangeRating} stateRating={this.state.rating}></StarRating>
                </Form.Group>
                <Form.Group controlId="formCleanerId">
                    <Form.Control type="hidden" value={this.props.selectedUser.cleanerId} />
                </Form.Group>
                {error === true ?
                   <Alert variant="danger" onClose={() => this.setState({error: false})} dismissible>
                   <p>
                   Pleasefill in all field and try again!!
                   </p>
                 </Alert>
                    :
                    <p></p>
                }
                <Button variant="primary" type="submit">
                    Rate Me
                </Button>
            </Form>

        )
    }

}

