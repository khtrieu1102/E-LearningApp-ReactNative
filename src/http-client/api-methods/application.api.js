import httpClient from '../config/http-client';

const httpGetNewCourses = () => {
    return httpClient
        .post("/course/top-new", {
            limit: 10,
            page: 1
        })
        .then((result) => {
            return Promise.resolve(result);
        })
        .catch((err) => Promise.reject(err));
}

export default {
    httpGetNewCourses
};
