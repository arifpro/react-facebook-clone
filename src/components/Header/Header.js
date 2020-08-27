import React from 'react';
import './Header.css';

// icons
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar, IconButton } from '@material-ui/core'

// image
import fbLogo from '../../img/fbLogo.webp'

const Header = () => {
    return (
        <div className="header">
            <div className="headerLeft">
                <img src={fbLogo} alt="fbLogo"/>
                <div className="headerInput">
                    <SearchIcon />
                    <input type="text" />
                </div>
            </div>

            <div className="headerMiddle">
                <div className="headerOption">
                    <HomeIcon fontSize="large" />
                </div>
                <div className="headerOption">
                    <FlagIcon fontSize="large" />
                </div>
                <div className="headerOption">
                    <SubscriptionsOutlinedIcon fontSize="large" />
                </div>
                <div className="headerOption">
                    <StorefrontOutlinedIcon fontSize="large" />
                </div>
                <div className="headerOption">
                    <SupervisedUserCircleIcon fontSize="large" />
                </div>
            </div>
            
            <div className="headerRight">
                <div className="headerInfo">
                    <Avatar />
                    <h4>Md Arif Hossain</h4>
                </div>

                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon />
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default Header;
