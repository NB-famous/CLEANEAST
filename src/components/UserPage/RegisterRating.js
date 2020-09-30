import React, {Component} from "react"
import axios from 'axios';
import { Button, Form } from 'react-bootstrap';
import { Redirect } from "react-router-dom";


export default class RegisterRating extends Component{

    constructor(props) {
        super(props);
        console.log("this is the props inside constructor",props.loggedIn)
        this.loggedIn = props.loggedIn;
        this.setLoggedIn = props.setLoggedIn;
        this.onChangeRating = this.onChangeRating.bind(this);
        this.onChangeComment = this.onChangeComment.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        

        this.state = {
          rating: '',
          comment:'',
          //password:'',
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

    // onChangePassword(e) {
    //     this.setState({
    //         password: e.target.value
    //     })
    // }


    onSubmit(e) {
        e.preventDefault();
    
        const comment = {
          comment: this.state.comment,
          rating: this.state.rating,
        //   password: this.state.password
        }
    
        console.log(comment);
    
        axios.post('http://localhost:5000/users/rating', comment, {
            headers: {
                'Content-Type': 'application/json',
                'cleanerttoken': localStorage.getItem('userToken')
            }
        })
            .then(res => {
                console.log(res.data)

                this.setState({
                    comment: '',
                    rating: '',
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
            this.setLoggedIn(true)
            return <Redirect to="/users/ratings"/>
        }

        return (
            <Form onSubmit={this.onSubmit} >
                <Form.Group controlId="formBasicComment">
                    <Form.Label>Comment</Form.Label>
                    <Form.Control as="textarea" rows="3"  placeholder="Enter comment" value={this.state.comment} onChange={this.onChangeComment} />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicRating">
                    <Form.Label>Rating</Form.Label>
                    <Form.Control type="number" min="0" max="5" placeholder="rating" value={this.state.rating} onChange={this.onChangeRating}/>
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
        )
    }

}
