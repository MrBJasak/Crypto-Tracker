import React from 'react';
import styles from './Layout.module.css';
import MainNavigation from './MainNavigation';

const Layout = (props) => {
    return (
        <>
            <MainNavigation />
            <div>{props.children}</div>
        </>
    );
};

export default Layout;
