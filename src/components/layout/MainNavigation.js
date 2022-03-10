import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './MainNavigation.module.css';

const MainNavigation = () => {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <Link style={{ textDecoration: 'none' }} to={'/'}>
                    Logo
                </Link>
            </div>
            <div className={styles.nav}>
                <ul>
                    <li>
                        <NavLink
                            to={'/list'}
                            className={(navMain) => (navMain.isActive ? styles.active : '')}
                        >
                            Crypto list
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={'/trending'}
                            className={(navMain) => (navMain.isActive ? styles.active : '')}
                        >
                            Trending List
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default MainNavigation;
