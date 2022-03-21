import React, { useState, useRef, useContext } from 'react';
import AuthContext from '../store/store';
import { API_KEY, signIn, signUp } from '../lib/fireBase';
import axios from 'axios';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import {
    Grid,
    Container,
    Typography,
    Box,
    Link,
    Checkbox,
    FormControlLabel,
    TextField,
    CssBaseline,
    Button,
    Avatar,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href={'#'}>
                Bjasak
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();
console.log(theme);

const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const authCtx = useContext(AuthContext);

    const emailRef = useRef();
    const passwordRef = useRef();

    const switchAuthModeHandler = () => {
        setIsLogin((prevState) => !prevState);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredEmail = emailRef.current.value;
        const enteredPassword = passwordRef.current.value;

        setIsLoading(true);
        let url = '';
        if (isLogin) {
            url = signIn(API_KEY);
            console.log(url);
            console.log(isLogin);
        } else {
            url = signUp(API_KEY);
            console.log(url);
            console.log(isLogin);
        }
        axios({
            method: 'post',
            url: url,
            data: JSON.stringify({
                email: enteredEmail,
                password: enteredPassword,
                returnSecureToken: true,
            }),
            headers: { 'Content-Type': 'application/json' },
        })
            .then((data) => {
                authCtx.login(data.data.idToken);
                authCtx.refreshToken(data.data.idToken);
            })
            .catch((err) => {
                alert(err.message);
            });
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        {!isLoading && isLogin ? <LockOutlinedIcon /> : <LockOpenIcon />}
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        {!isLoading && isLogin ? 'Sign in' : 'Sign up'}
                    </Typography>
                    <Box component="form" onSubmit={submitHandler} noValidate sx={{ mt: 1 }}>
                        <TextField
                            inputRef={emailRef}
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            inputRef={passwordRef}
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                            {!isLoading && isLogin ? 'Sign in' : 'Sign up'}
                        </Button>
                        <Grid container>
                            <Grid item>
                                <Link
                                    style={{ cursor: 'pointer' }}
                                    onClick={switchAuthModeHandler}
                                    variant="body1"
                                >
                                    {isLogin ? `Don't have an account? Sign Up` : 'Sign In'}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    );
};

export default AuthForm;
