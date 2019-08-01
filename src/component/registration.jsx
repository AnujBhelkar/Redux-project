import React, { Component } from 'react'
import { TextField, Card, Button } from '@material-ui/core';
import { Link } from 'react-router-dom'
import { userActions } from '../actions/user.action';
import '../App.css'
import { connect } from 'react-redux';
class RegistrationComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            user : {
                firstName : '',
                lastName  : '',
                email     : '',
                password  : ''
            },
            // submitted : false 
        }
    }
    onChangeHandler = (e) => {
        const {name,value} = e.target
        const { user } = this.state
        this.setState({
            user : 
                {
                    ...user,
                    [name] : value
                }
        });
        
    }
    submitHandler = (e) => {
        e.preventDefault();

        const { user } = this.state
        this.props.register(user)
        console.log("user Details ==>",user)
    }
    
    render() {
        // const {registering} = this.props
        return (
            <div className = 'registerMainDiv'>
                <Card className = "registerCard">
                    <div className = 'registerName'>
                        Registration Form
                    </div>
                    <form>
                        <div className = 'registerForm'> 
                            <TextField
                                label="First Name"
                                type="text"
                                name="firstName"
                                margin="normal"
                                variant="outlined"
                                value = {this.state.firstName}
                                onChange = {this.onChangeHandler}
                            />
                            <TextField
                                label="Last Name"
                                type="text"
                                name="lastName"
                                margin="normal"
                                variant="outlined"
                                value = {this.state.lastName}
                                onChange = {this.onChangeHandler}
                            />
                            <TextField
                                label="Email"
                                type="email"
                                name="email"
                                margin="normal"
                                variant="outlined"
                                value = {this.state.email}
                                onChange = {this.onChangeHandler}
                            />
                            <TextField
                                label="Password"
                                type="password"
                                name="password"
                                margin="normal"
                                variant="outlined"
                                value = {this.state.password}
                                onChange = {this.onChangeHandler}
                            />
                            <div className = 'registerButton'>
                                <Button variant="contained" color="primary" onClick = {this.submitHandler}>
                                    Register
                                </Button>
                                <Link to = '/login' className = 'loginLink'>
                                    Cancel
                                </Link>
                            </div>
                        </div>
                    </form>
                </Card>
            </div>
        )
    }
}

function mapState(state) {
    const {registering}  = state;
    return {registering};
}
const actionCreator = {
    register : userActions.register
}
export default connect(mapState,actionCreator)(RegistrationComponent);

