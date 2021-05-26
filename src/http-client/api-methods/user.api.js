import httpClient from '../config/http-client';

const updateMeBasicInfo = (name, phone, avatar) => {
    return httpClient
        .put('/user/update-profile', { name: name, phone: phone, avatar: avatar })
        .then((result) => {
            return Promise.resolve(result);
        })
        .catch((err) => Promise.reject(err));
};

const changePassword = (id, oldPass, newPass) => {
    return httpClient
        .post('/user/change-password', { id: id, oldPass: oldPass, newPass: newPass })
        .then((result) => {
            return Promise.resolve(result);
        })
        .catch((err) => Promise.reject(err));
};

const updateEmailInfo = (email) => {
    return httpClient
        .put('​/user​/change-user-email', { newEmail: email })
        .then((result) => {
            return Promise.resolve(result);
        })
        .catch((err) => Promise.reject(err));
};


export default {
    updateMeBasicInfo,
    changePassword,
    updateEmailInfo
};
