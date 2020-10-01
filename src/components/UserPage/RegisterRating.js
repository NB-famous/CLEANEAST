import React, {Component} from "react"
import axios from 'axios';
import { Button, Form } from 'react-bootstrap';
import { Redirect } from "react-router-dom";


export default class RegisterRating extends Component{

    constructor(props) {
        super(props);
        console.log("this is the props inside constructor",props)
        this.loggedIn = props.loggedIn;
        this.setLoggedIn = props.setLoggedIn;
        this.onChangeRating = this.onChangeRating.bind(this);
        this.onChangeComment = this.onChangeComment.bind(this);
        this.onChangeService = this.onChangeService.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        

        this.state = {
          rating: '',
          comment:'',
          service:'',
          cleanerId:'',
          isRegistered: false
        }
    }

    onChangeRating(e) {
        this.setState({
            rating: e.target.value
        })
    }

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

    // onChangePassword(e) {
    //     this.setState({
    //         password: e.target.value
    //     })
    // }
  

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
                })
            })
            .catch(err => {
                console.log("This is the responese from catch", err);
            });

     
    }



    
    render(){
        const isRegistered = this.state.isRegistered;
        if(isRegistered === true) {
            //this.setLoggedIn(true)
            return <Redirect to="/users/ratings"/>
        }
       console.log("selected user:", this.props.selectedUser);
        return (
            <Form onSubmit={this.onSubmit} >
                <Form.Group controlId="formBasicComment">
                    <Form.Label>Comment</Form.Label>
                    <Form.Control as="textarea" rows="3"  placeholder="Enter comment" value={this.state.comment} onChange={this.onChangeComment} />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>{this.props.selectedUser.cleanerName}</Form.Label>
                    <Form.Control as="select" value={this.state.service} onChange={this.onChangeService}>
                        {this.props.selectedUser.service.map(item => {
                            return (
                                <option >{item.service}</option> 
                            )
                        })}
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="formBasicRating">
                    <Form.Label>{this.props.registeredUser.cleanerName}</Form.Label>
                    <Form.Control type="number" min="0" max="5" placeholder="rating" value={this.state.rating} onChange={this.onChangeRating}/>
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formCleanerId">
                    <Form.Control type="hidden" value={this.props.selectedUser.cleanerId} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Rate Me
                </Button>
            </Form>
        )
    }

}

