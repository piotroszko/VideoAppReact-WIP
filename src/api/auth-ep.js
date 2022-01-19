const url = "http://localhost:4000/api/v1/"
const ep = {
    login: url + "authentication/login",
    register: url + "authentication/register",
    me: url + "authentication/me?application=api-jwt",
}