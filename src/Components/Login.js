import React from "react";
import { auth, provider } from '../firebase';
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../Reducer";
import LogoIcon from '../Icons/logo.png';
import { Button } from "@material-ui/core";
import './Login.css';

const Login = () => {
    const [state, dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(result => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user
                })
            })
            .catch(error => alert(error.message));
    }
    
    return (
        <div className="login">
            <div className="login_logo">
                <img src={LogoIcon} />
            </div>
            <Button type="submit" onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login;