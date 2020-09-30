import React, {Component} from "react"
import axios from 'axios';
import { Button, Form } from 'react-bootstrap';
import { Redirect } from "react-router-dom";


export default class RegisterService extends Component{

    constructor(props) {
        super(props);
        this.cleanerLogin = props.cleanerLogin;
        this.setCleanerLogin = props.setCleanerLogin;
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangeTypeOfService = this.onChangeTypeOfService.bind(this);
        this.onChangeDeposit = this.onChangeDeposit.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
          name: '',
          price:'',
          typeofservice:'',
          deposit:'',
          isRegistered: false,
        }

    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        })
    }

    onChangePrice(e) {
        this.setState({
            price: e.target.value
        })
    }

    onChangeTypeOfService(e) {
        this.setState({
            typeofservice: e.target.value
        })
    }

    onChangeDeposit(e) {
        this.setState({
            deposit: e.target.value
        })
    }
//original
    onSubmit(e) {
        e.preventDefault();
    
        const service = {
          name: this.state.name,
          price: this.state.price,
          typeofservice: this.state.typeofservice,
          deposit: this.state.deposit,
        }
    

    // onSubmit(e) {
    //     e.preventDefault();

    //     const service = {
    //         data: {
    //             name: this.state.name,
    //             price: this.state.price,
    //             typeofservice: this.state.typeofservice,
    //             deposit: this.state.deposit,
    //         },
    //         options: {
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'cleanerttoken': JSON.parse(localStorage.getItem("cleanerToken:"))
    //             }
    //         }
    //     }
    
    
        //console.log("service from register service",service);
        //console.log("token from local storage", JSON.parse(localStorage.getItem("cleanerttoken:")));


        // const options = {
        //     headers: {
        //       'Content-Type': 'application/json', 
        //       'cleanerttoken': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjAsImlhdCI6MTYwMTQzMTU0NH0.9Ryqm3U63a_-NHSVagHkgrey6SqSSDM8erVK4v2VUqI'
        //     }
        // };

        // const accessTokenObj = JSON.parse(localStorage.getItem("cleanerttoken:"));

        // const options = {
        //     headers: {
        //       'Content-Type': 'application/json', 
        //       'cleanerttoken': JSON.parse(localStorage.getItem("cleanerToken:"))
        //     }
        // };
    
          

        //axios(config)
        axios.post('http://localhost:5000/cleaners/service', service, {
            headers: {
              'Content-Type': 'application/json', 
              'cleanerttoken': localStorage.getItem('cleanerToken')
            }
        })
            .then(res => {
                console.log(res.data)});
    
        this.setState({
            name: '',
            price:'',
            typeofservice:'',
            deposit:'',
            isRegistered: false,
        })

        //this.props.history.push('/cleaners/login')

    }

    render(){

        const isRegistered = this.state.isRegistered;
    
        if(isRegistered === true) {
            this.setCleanerLogin(true)
            return <Redirect to="/"/>
        }

        return (
            <Form onSubmit={this.onSubmit} >

                <Form.Group controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter service name" value={this.state.name} onChange={this.onChangeName} />
                </Form.Group>

                <Form.Group controlId="formBasicPrice">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="number" min="0" placeholder="Enter price" value={this.state.price} onChange={this.onChangePrice}/>
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicTypeOfService">
                    <Form.Label>TypeOfService</Form.Label>
                    <Form.Control type="text" placeholder="Type of service" value={this.state.typeofservice} onChange={this.onChangeTypeOfService}/>
                </Form.Group>

                <Form.Group controlId="formBasicDeposit">
                    <Form.Label>Deposit in percentage</Form.Label>
                    <Form.Control type="number" min="0" max="100" placeholder="Deposit" value={this.state.deposit} onChange={this.onChangeDeposit}/>
                </Form.Group>

                <Button variant="primary" type="submit">
                            Add 
                </Button>
            </Form>
        )
    }

}

