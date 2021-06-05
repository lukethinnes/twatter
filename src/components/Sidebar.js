import React from 'react'
import './styles/Sidebar.css'
import SidebarOption from './SidebarOption'
import HomeIcon from '@material-ui/icons/Home';
import NotificationsNone from '@material-ui/icons/NotificationsNone'
import SearchIcon from '@material-ui/icons/Search';
import TwitterIcon from '@material-ui/icons/Twitter';
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder'
import ListAltIcon from '@material-ui/icons/ListAlt'
import PermIdentityIcon from '@material-ui/icons/PermIdentity'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'

function Sidebar() {
    return (
        <div className='sidebar'>
            <TwitterIcon />
            <SidebarOption active Icon={HomeIcon} text='Home' />
            <SidebarOption Icon={SearchIcon} text='Explore' />
            <SidebarOption Icon={NotificationsNone} text='Notifications' />
            <SidebarOption Icon={MailOutlineIcon} text='Messages' />
            <SidebarOption Icon={BookmarkBorderIcon} text='Saved' />
            <SidebarOption Icon={ListAltIcon} text='Lists' />
            <SidebarOption Icon={PermIdentityIcon} text='Profile' />
            <SidebarOption Icon={MoreHorizIcon} text='More' />
            

            {/* Twat Button */}
        </div>
    )
}

export default Sidebar;
