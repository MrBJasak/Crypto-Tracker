import React, { useState } from 'react';

const AuthContext = React.createContext({
    token: '',
    refToken: '',
    isLoggedIn: false,
    login: (token) => {},
    refreshToken: (refToken) => {},
    logout: () => {},
});

export const AuthContextProvider = (props) => {
    const [token, setToken] = useState('');
    const [refreshToken, setRefreshToken] = useState('');

    const userIsLoggedIn = !!token;

    const loginHandler = (token) => {
        setToken(token);
        console.log(token);
    };
    const refreshTokenHandler = (refreshToken) => {
        setRefreshToken(refreshToken);
        console.log(refreshToken);
    };

    const logoutHandler = () => {
        setToken('');
    };

    const contextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        refreshToken: refreshTokenHandler,
        logout: logoutHandler,
    };

    return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>;
};

export default AuthContext;
