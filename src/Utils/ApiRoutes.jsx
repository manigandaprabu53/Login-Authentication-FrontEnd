// import token from './helper.js'
// let val = token.getToken();
// console.log(val)
const ApiRoutes = {
    LoginUser: {
        path: '/users/loginUser',
        authenticate: false
    },
    SignUpUser: {
        path: '/users/createUser',
        authenticate: false
    },
    ForgotPassword: {
        path: '/users/forgotPassword',
        authenticate: false
    },
    ResetPassword: {
        path: `/users/resetPassword/${sessionStorage.getItem('token')}`,
        authenticate: false
    }
}

export default ApiRoutes