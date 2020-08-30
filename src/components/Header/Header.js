import React from 'react';
import './Header.css';
import NavItem from './NavItem/NavItem';
import DropdownMenu from './DropdownMenu/DropdownMenu';

// icons
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
// import AddIcon from '@material-ui/icons/Add';
// import ForumIcon from '@material-ui/icons/Forum';
// import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar } from '@material-ui/core'
// import { IconButton } from '@material-ui/core'

import { ReactComponent as BellIcon } from '../../img/icons/bell.svg';
import { ReactComponent as MessengerIcon } from '../../img/icons/messenger.svg';
import { ReactComponent as CaretIcon } from '../../img/icons/caret.svg';
import { ReactComponent as PlusIcon } from '../../img/icons/plus.svg';

// image
import fbLogo from '../../img/fbLogo.webp'

// context api
import { useStateValue } from '../../state/Provider'

const Header = () => {
    const [{ user }, dispatch] = useStateValue();

    return (
        <div className="header">
            <div className="headerLeft">
                <img src={fbLogo} alt="fbLogo"/>
                <div className="headerInput">
                    <SearchIcon />
                    <input type="text" placeholder="Search Facebook" />
                </div>
            </div>

            <div className="headerCenter">
                <div className="headerOption headerOptionActive">
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
                    <Avatar src={user.photoURL} />
                    <h4>{user.displayName}</h4>
                </div>

                {/* <IconButton>
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
                </IconButton> */}
                <nav className="navbar">
                    <ul className="navbar-nav">
                        <NavItem icon={<PlusIcon />} />
                        <NavItem icon={<MessengerIcon />} />
                        <NavItem icon={<BellIcon />} />

                        <NavItem icon={<CaretIcon />}>
                        <DropdownMenu></DropdownMenu>
                        </NavItem>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header;
