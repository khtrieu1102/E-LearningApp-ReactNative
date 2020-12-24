import httpClient from '../config/http-client';

const userRegister = (username, password, email, phone) => {
    return httpClient
        .post('/user/register', { username, password, email, phone })
        .then((result) => {
            return Promise.resolve(result);
        })
        .catch((err) => Promise.reject(err));
};

const userLogin = (email, password) => {
    return httpClient
        .post('/user/login', { email, password })
        .then((result) => {
            return Promise.resolve(result);
        })
        .catch((err) => Promise.reject(err));
};

const getRegisterCode = (email) => {
    return httpClient
        .post('/user/send-activate-email', { email })
        .then((result) => {
            return Promise.resolve(result);
        })
        .catch((err) => Promise.reject(err));
};

export default {
    userRegister,
    userLogin,
    getRegisterCode
};