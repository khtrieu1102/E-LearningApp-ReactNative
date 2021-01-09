import httpClient from '../config/http-client';

const httpGetNewCourses = (limit = 10, page = 1) => {
    return httpClient
        .post("/course/top-new", {
            limit: limit,
            page: page
        })
        .then((result) => {
            return Promise.resolve(result);
        })
        .catch((err) => Promise.reject(err));
}

const httpGetTopRateCourses = (limit = 10, page = 1) => {
    return httpClient
        .post("/course/top-rate", {
            limit: limit,
            page: page
        })
        .then((result) => {
            return Promise.resolve(result);
        })
        .catch((err) => Promise.reject(err));
}

const httpGetTopSellCourses = (limit = 10, page = 1) => {
    return httpClient
        .post("/course/top-sell", {
            limit: limit,
            page: page
        })
        .then((result) => {
            return Promise.resolve(result);
        })
        .catch((err) => Promise.reject(err));
}

const httpGetCourseFullDetail = (courseId) => {
    return httpClient
        .get(`/course/get-course-detail/${courseId}/null`)
        .then((result) => {
            return Promise.resolve(result);
        })
        .catch((err) => Promise.reject(err));
}

const httpGetFavoriteCourses = () => {
    return httpClient
        .get("/user/get-favorite-courses")
        .then((result) => {
            return Promise.resolve(result);
        })
        .catch((err) => Promise.reject(err));
}

const httpLikeCourse = (id) => {
    return httpClient
        .post("/user/like-course", { courseId: id })
        .then((result) => {
            return Promise.resolve(result);
        })
        .catch((err) => Promise.reject(err));
}

export default {
    httpGetNewCourses,
    httpGetTopRateCourses,
    httpGetTopSellCourses,
    httpGetCourseFullDetail,
    httpGetFavoriteCourses,
    httpLikeCourse
};
