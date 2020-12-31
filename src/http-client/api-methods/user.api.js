import httpClient from '../config/http-client';

const updateMeBasicInfo = (name, phone, avatar) => {
    return httpClient
        .put('/user/update-profile', { name: name, phone: phone, avatar: avatar })
        .then((result) => {
            return Promise.resolve(result);
        })
        .catch((err) => Promise.reject(err));
};

export default {
    updateMeBasicInfo,
};
