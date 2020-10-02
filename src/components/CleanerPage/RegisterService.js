import React, {Component} from "react"
import axios from 'axios';
import { Button, Form } from 'react-bootstrap';
import { Redirect } from "react-router-dom";


export default class RegisterService extends Component{

    constructor(props) {
        super(props);
        this.targetCleaner = props.targetCleaner;
        this.registeredUser = props.registeredUser;
        // this.cleanerLogin = props.cleanerLogin;
        // this.setCleanerLogin = props.setCleanerLogin;
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangeTypeOfService = this.onChangeTypeOfService.bind(this);
        this.onChangeDeposit = this.onChangeDeposit.bind(this);
        //this.onSubmit = this.onSubmit.bind(this);
        this.listOfServices = ["Exterior wash", "Rinse", "Poly Shine", "Underbody Sparay", "Hand dry", "Window cleaning", "Interior vacuum", "Mats cleaning" ]
    
        this.state = {
          name: '',
          price:'',
          typeofservice: this.listOfServices[0],
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
    onSubmit = (e) => {
        e.preventDefault();
    
        const service = {
          name: this.state.name,
          price: this.state.price,
          typeofservice: this.state.typeofservice,
          deposit: this.state.deposit,
        }
    
        //axios(config)
        axios.post('http://localhost:5000/cleaners/service', service, {
            headers: {
              'Content-Type': 'application/json', 
              'cleanerttoken': localStorage.getItem('cleanerToken')
            }
        })
            .then(res => {
                console.log("res.data", res.data)
            
                const tempUsers = [...this.props.registeredUser]
                const index = tempUsers.map(user => user.cleanerId).indexOf(this.props.targetCleaner.cleanerId)
                console.log("Index", index) //return the index of the cleaner eg. 19
                //const serviceIndex = tempUsers[index].service.map(s => s.service_id === this.props.targetValue.serviceId) //original
                // const serviceIndex = tempUsers[index].service.map((s, i) => {
                //     console.log("S",s)
                //     if (s.service_id === this.props.targetValue.serviceId){
                //         console.log("index of S", i)
                //         return i
                //      }})
                // console.log("serviceIndex", serviceIndex)
                tempUsers[index].service = [
                    ...tempUsers[index].service, {
                        service: this.state.name,
                        price: this.state.price*100,
                        typeofservice: this.state.typeofservice,
                        deposit: this.state.deposit,
                        service_id: res.data.id
                    }
                ]
                console.log("tempUsers", tempUsers)
                this.props.setRegisteredUser(tempUsers)
                
                this.setState({
                    name: '',
                    price:'',
                    typeofservice:'',
                    deposit:'',
                    isRegistered: true,
                })
            
            
            
            });
    
        // this.setState({
        //     name: '',
        //     price:'',
        //     typeofservice:'',
        //     deposit:'',
        //     isRegistered: false,
        // })

    }

    render(){

        const isRegistered = this.state.isRegistered;

        console.log("this.registeredUser", this.registeredUser)
        
        //const listOfServices = ["Exterior wash", "Rinse", "Poly Shine", "Underbody Sparay", "Hand dry"]
    
        if(isRegistered === true) {
            //this.setCleanerLogin(true)
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

                {/* <Form.Group controlId="formBasicTypeOfService">
                    <Form.Label>Type Of Service</Form.Label>
                    <Form.Control type="text" placeholder="Type of service" value={this.state.typeofservice} onChange={this.onChangeTypeOfService}/>
                </Form.Group> */}

                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Type of Service</Form.Label>
                    <Form.Control as="select" value={this.state.typeofservice} onChange={this.onChangeTypeOfService}>
                        { this.listOfServices.map(item => {
                            return (
                                <option >{item}</option>
                            )
                        })}
                    </Form.Control>
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

