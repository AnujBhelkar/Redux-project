import { userConstant } from '../user.constants';
export function registration(state = {},action) {
    switch (action.type) {
        case userConstant.REGISTER_REQUEST :
            return { registering : true }
        case userConstant.REGISTER_SUCCESS : 
            return {}
        default:
            return state
    }
    
}