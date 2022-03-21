import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { createTheme } from '@mui/material/styles';
import MenuLayout from './MenuLayout';

import { FaBitcoin } from 'react-icons/fa';
const MainNavigation = () => {
    const appBarStyle = { background: '#666' };
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar style={{ appBarStyle }} position={'static'}>
                <Toolbar>
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                        <Link style={{ textDecoration: 'none', color: 'white' }} to={'/'}>
                            <FaBitcoin style={{ marginRight: '10px' }} />
                            Crypto Tracker
                        </Link>
                    </Typography>

                    <MenuLayout />
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default MainNavigation;
