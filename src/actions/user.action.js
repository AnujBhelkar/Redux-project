import { registration } from '../services/user.services';
import { userConstant } from '../user.constants';

export const userActions = {
    register
}

function register(user) {
    return dispatch => {
        dispatch(request(user));
        registration(user)
            .then(
                user => {
                    dispatch(success())
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