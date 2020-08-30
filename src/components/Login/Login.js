import React from 'react';
import './Login.css';

// context api
import { auth, provider } from '../../firebase'
import { useStateValue } from '../../state/Provider'
import { actionTypes } from '../../state/reducer'

// images and icons
import fbLogo from '../../img/fbLogo.webp'
import fbTextLogo from '../../img/fbTextLogo.svg'
import { Button } from '@material-ui/core';

const Login = () => {
    const [state, dispatch] = useStateValue();

    const signIn = () => {
        // sign in
        auth.signInWithPopup(provider)
        .then(result => {

            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            });
            console.log(result);
        })
        .catch(error => alert(error.message))
    }

    return (
        <div className="login">
            <div className="loginLogo">
                <img src={fbLogo} alt=""/>
                <img src={fbTextLogo} alt="facebook"/>
            </div>

            <Button type="submit" onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login;
