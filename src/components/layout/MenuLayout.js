import React, { useState, useContext } from 'react';
import AuthContext from '../store/store';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const MenuLayout = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const authCtx = useContext(AuthContext);

    const userIsLoggedIn = authCtx.isLoggedIn;
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <IconButton
                size="large"
                edge={'start'}
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                d="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <MenuIcon fontSize={'medium'} />
            </IconButton>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose}>
                    <Link style={{ textDecoration: 'none', color: 'inherit' }} to={'/auth'}>
                        Login
                    </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                {userIsLoggedIn && <MenuItem onClick={handleClose}>xD</MenuItem>}
                {userIsLoggedIn && <MenuItem onClick={handleClose}>chuj</MenuItem>}

                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
        </>
    );
};

export default MenuLayout;
