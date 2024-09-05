import { Navigate } from "react-router-dom";
import SignUpUser from "../Components/signUpUser";
import LoginUser from "../Components/LoginUser";
import ForgotPassword from "../Components/ForgotPassword";
import ResetPassword from "../Components/ResetPassword";
import Index from "../Components/Index";

const AppRoutes = [
    {
        path: '/loginUser',
        element: <LoginUser/>
    },
    {
        path: '/signUpUser',
        element: <SignUpUser/>
    },
    {
        path: '/forgotPassword',
        element: <ForgotPassword/>
    },
    {
        path: '/resetPassword/:token',
        element: <ResetPassword/>
    },
    {
        path: '/index',
        element: <Index/>
    },
    {
        path: '*',
        element: <Navigate to = '/loginUser'/>
    }
]

export default AppRoutes