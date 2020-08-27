import React from 'react';
import './Sidebar.css';

// component
import SidebarRow from './SidebarRow/SidebarRow';

// icons
import {
    LocalHospital,
    EmojiFlags,
    People,
    Chat,
    Storefront,
    VideoLibrary,
    ExpandMoreOutlined
} from '@material-ui/icons'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <SidebarRow src='https://proarif.com/logo/Arif.jpg' title='Md Arif Hossain' />
            <SidebarRow Icon={LocalHospital} title='COVID-19 Information Center' />
            <SidebarRow Icon={EmojiFlags} title='Pages' />
            <SidebarRow Icon={People} title='Friends' />
            <SidebarRow Icon={Chat} title='Messenger' />
            <SidebarRow Icon={Storefront} title='Marketplace' />
            <SidebarRow Icon={VideoLibrary} title='Videos' />
            <SidebarRow Icon={ExpandMoreOutlined} title='Expand More' />
        </div>
    )
}

export default Sidebar;
