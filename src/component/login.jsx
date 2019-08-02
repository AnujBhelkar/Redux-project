import React, { Component } from 'react'
import { TextField, Card, Button,Snackbar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { userActions } from '../actions/user.action';
export class LoginComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
                email : '',
                password : '',
                openSnackbar : false,
                SnackBarMessage :''
        }
    }
    
    onChangeHandler = (e) => {
        const { name,value } = e.target
        this.setState({
            [name] : value
        })
    }

    submitHandler = () => {
        console.log("state is -->",this.state);
        const { email , password } = this.state;
        var user ={
            email : email,
            password : password
        }
        
        if(email && password){
            this.props.login(user)
            this.setState({
                openSnackbar : true,
                SnackBarMessage : 'Login Successfully.'
            })
        }
    }
    handleSnackClose = () => {
        this.setState({
            openSnackbar : false
        })
    }
    render() {
            return (
                <div className = 'registerMainDiv'>
                    <Card className = "registerCard">
                        <div className = 'registerName'>
                            Login Form
                        </div>
                        <form>
                            <div className = 'registerForm'> 
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
                                        Login
                                    </Button>
                                    <Link to = '/registration' className = 'loginLink'>
                                        Sign Up
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </Card>
                    <Snackbar
                        anchorOrigin = {{
                        vertical    : 'bottom',
                        horizontal  : 'left',
                        }}
                        open = { this.state.openSnackbar}
                        autoHideDuration = {6000}                
                        onClose = {this.handleSnackClose}
                        variant = 'error'
                        ContentProps ={{
                            "aria-describedby" : 'message-id',
                        }}
                        message = {<span id ='message-id'>{this.state.SnackBarMessage}</span>}
                        action = {[
                            <div key = 'undo'>
                            <Button key = 'undo' coor ='primary' size ='small' onClick = {this.handleSnackClose}>
                                Undo
                            </Button>
                            </div>
                        ]}
                    />
                </div>
            )  
    }
}

function mapState(state) {
    console.log("map state of login is -->",state);
    
    const { loggedIn } = state;
    return { loggedIn }
}
const actionCreator = {
    login : userActions.login,
    logout : userActions.logout
}

export default connect(mapState,actionCreator)(LoginComponent)
