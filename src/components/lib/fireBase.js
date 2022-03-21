const API_KEY = `AIzaSyCXdSSMpGN3cBKa44aPW2CoxONZVKOGECs`;

const signUp = (key) => {
    return `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${key}`;
};

const signIn = (key) => {
    return `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${key}`;
};

const refreshToken = (key) => {
    return `https://securetoken.googleapis.com/v1/token?key=${key}`;
};

export { signUp, signIn, refreshToken, API_KEY };
