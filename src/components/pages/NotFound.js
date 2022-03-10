import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className={'centered'}>
            <div className="four_zero_four_bg">
                <h1 className="text-center ">404</h1>
                <img
                    src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
                    alt=""
                />
                <Link className={'centered-btn btn'} to={'/'}>
                    Move to main Page
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
