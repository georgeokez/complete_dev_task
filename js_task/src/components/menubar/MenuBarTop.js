import React from 'react'
import './menubartop.css'
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircle from '@material-ui/icons/AccountCircle';

function MenuBarTop() {
    return (
        <div classNames="menu-top-bar">
            <div className="meun-topbar-wrapper">
                <div className="topbar-left">
                    <span className="logo">JS Task Dashboard</span>
                </div>
                <div className="topbar-right">
                    <MenuItem className="menu-item">
                        <IconButton aria-label="show 3 new mails" color="inherit">
                        <Badge badgeContent={3} color="secondary">
                            <MailIcon />
                        </Badge>
                        </IconButton>
                    </MenuItem>
                    <MenuItem className="menu-item">
                        <IconButton aria-label="show 7 new notifications" color="inherit">
                        <Badge badgeContent={7} color="secondary">
                            <NotificationsIcon />
                        </Badge>
                        </IconButton>
                    </MenuItem>
                    <MenuItem className="menu-item">
                        <IconButton
                        aria-label="account of current user"
                        aria-controls="primary-search-account-menu"
                        aria-haspopup="true"
                        color="inherit"
                        >
                        <AccountCircle />
                        </IconButton>
                    </MenuItem>
                </div>
            </div>
        </div>
    )
}

export default MenuBarTop
