import React from 'react';
import { 
    Add, ExpandMore, Flag, Forum, Home, NotificationsActive, Search, 
    StorefrontOutlined, SubscriptionsOutlined, SupervisedUserCircle 
} from '@material-ui/icons';
import { Avatar, IconButton } from '@material-ui/core';
import { useStateValue } from '../StateProvider';
import LogoIcon from '../Icons/logo.png';
import './Header.css';

const Header = () => {
    const [{ user }, dispatch] = useStateValue();

    return (
        <div className="header">
            <div className="header__left">
                <img src={LogoIcon} alt="uPost Logo" />
            </div>

            <div className="header__input">
                <Search />
                <input placeholder="Search uPost" type="text" />
            </div>

            <div className="header__center">
                <div className="header__option header__option--active">
                    <Home fontSize="large" />
                </div>
                <div className="header__option">
                    <Flag fontSize="large" />
                </div>
                <div className="header__option">
                    <SubscriptionsOutlined fontSize="large" />
                </div>
                <div className="header__option">
                    <StorefrontOutlined fontSize="large" />
                </div>
                <div className="header__option">
                    <SupervisedUserCircle fontSize="large" />
                </div>
            </div>

            <div className="header__right">
                <div className="header__info">
                    <Avatar src={user.photoUrl} />
                    <h4>{user.displayName}</h4>
                </div>

                <IconButton>
                    <Add />
                </IconButton>

                <IconButton>
                    <Forum />
                </IconButton>

                <IconButton>
                    <NotificationsActive />
                </IconButton>

                <IconButton>
                    <ExpandMore />
                </IconButton>    
            </div>
        </div>
    );
};

export default Header;