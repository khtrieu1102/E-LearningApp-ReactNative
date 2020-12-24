import axios from 'axios';
import { authHeader } from './auth-header';

// heroku no-cors url and API url
const CORS_URL = 'https://sleepy-river-85284.herokuapp.com/';
const API_URL = 'http://api.dev.letstudy.org'

// config interceptors
const httpClient = axios.create();

httpClient.defaults.baseURL = `${API_URL}`;
httpClient.defaults.headers.post['Content-Type'] = 'application/json';
httpClient.interceptors.request.use(function (config) {
    config.headers.Authorization = authHeader().Authorization;
    return config;
});

// httpClient.interceptors.response.use(
//     function (response) {
//         if (response.status === 200 && response.data && response.data.message) {
//             // toastr.success(response.data.message);
//         }
//         return response;
//     },
//     function (error) {
//         let errorResponse = error.response;

//         if (errorResponse.status === 401) {
//             // toastr.error(errorResponse.data.message);
//         }

//         if (errorResponse.status === 400) {
//             // toastr.error(errorResponse.data.message);
//         }

//         if (errorResponse.status === 403) {
//             // toastr.error(errorResponse.data.message);
//         }

//         return Promise.reject(error);
//     },
// );

export default httpClient;
