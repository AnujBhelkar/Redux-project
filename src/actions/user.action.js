import { registration, userLogin } from '../services/user.services';
import { userConstant } from '../user.constants';

export const userActions = {
    login,
    register,
    logout
}

function register(user) {
    return dispatch => {
        dispatch(request(user));
        registration(user)
            .then(
                user => {
                    dispatch(success(user))
                },
                error => {
                    dispatch(failure(error.toString()))
                }
            )
    };
    function request(user) {
        return{
            type : userConstant.REGISTER_REQUEST,user
        }
    }

    function success(user) {
        return{
            type : userConstant.REGISTER_SUCCESS,user
        }
    }

    function failure(user) {
        return{
            type : userConstant.REGISTER_FAILURE,user
        }
    }
}

function login(user) {
    return dispatch => {
        dispatch(request(user));
        userLogin(user)
            .then(
                user => {
                    localStorage.setItem('user',JSON.stringify(user))
                    dispatch(success(user))
                },
                error => {
                    dispatch(failure(error.toString()))
                }
            )
    };
    function request(user) {
        return{
            type : userConstant.LOGIN_REQUEST,user
        }
    }

    function success(user) {
        return{
            type : userConstant.LOGIN_SUCCESS,user
        }
    }

    function failure(user) {
        return{
            type : userConstant.LOGIN_FAILURE,user
        }
    }
}
function logout(){
    logout();
    return{
        type : userConstant.LOGOUT
    }
}