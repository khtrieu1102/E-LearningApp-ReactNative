import httpClient from '../config/http-client';

const sendActivateEmail = (email) => {
    return httpClient
        .post('/user/send-activate-email', { email })
        .then((result) => {
            return Promise.resolve(result);
        })
        .catch((err) => Promise.reject(err));
};

const sendResetPasswordLink = (email) => {
    return httpClient
        .post('/user/forget-pass/send-email', { email })
        .then((result) => {
            return Promise.resolve(result);
        })
        .catch((err) => Promise.reject(err));
};

export default {
    sendActivateEmail,
    sendResetPasswordLink
};
