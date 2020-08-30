import React from 'react';
import './Login.css';
import { auth, provider } from '../../firebase'

// images and icons
import fbLogo from '../../img/fbLogo.webp'
import fbTextLogo from '../../img/fbTextLogo.svg'
import { Button } from '@material-ui/core';

const Login = () => {
    const signIn = () => {
        // sign in
        auth.signInWithPopup(provider)
        .then(result => {
            console.log(result)
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
