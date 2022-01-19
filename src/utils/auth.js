import axios from 'axios';
import ep from '../api/auth-ep';
export async function login(email, password) {
  try {
    const res = await axios.post("http://localhost:4000/api/v1/authentication/login", {email: email , password: password, application:"api-jwt"});
    document.cookie = "videoAuthToken=Bearer " + res.data.token;
    return true;
  } 
  catch (err) {
    return false;
  }
}
export function logout() {
    document.cookie = "videoAuthToken=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
}
  