/**
 * @
 */
import axios from 'axios';
var baseUrl = 'http://localhost:4000'
/**
 * @description : To create Service for Registration 
 * @param {* frontend Request for registration } registrationData
 */
export function registration(registrationData){
    return axios.post(baseUrl+'/register',registrationData)
}

/**
 * @description : To create Service for Login 
 * @param {* frontend Request for Login } loginData
 */
export function userLogin(loginData){
   return axios.post(baseUrl+'/login',loginData)
       
}
export function logout(){
    localStorage.removeItem('user');
}