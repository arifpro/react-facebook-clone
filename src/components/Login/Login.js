import React from 'react';
import './Login.css';

// images and icons
import fbLogo from '../../img/fbLogo.webp'
import fbTextLogo from '../../img/fbTextLogo.svg'
import { Button } from '@material-ui/core';

const Login = () => {
    const signIn = () => {
        // sign in
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
