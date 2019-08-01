import axios from 'axios';
export function registration(data){
    return axios.post('/registration',data)
}