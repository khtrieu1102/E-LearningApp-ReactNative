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

const httpGetProcessCourses = () => {
    return httpClient
        .get("/user/get-process-courses")
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

const httpGetAllCategories = () => {
    return httpClient
        .get("/category/all")
        .then((result) => {
            return Promise.resolve(result);
        })
        .catch((err) => Promise.reject(err));
}

const httpGetCoursesFromCategory = (categoryId) => {
    return httpClient
        .post(`/course/search`, {
            keyword: "",
            limit:12,
            offset: 0,
            opt: {
                category: [categoryId]
            }
        })
        .then((result) => {
            return Promise.resolve(result);
        })
        .catch((err) => Promise.reject(err));
}

const httpGetCourseFavoriteStatus = (courseId) => {
    return httpClient
        .get(`/user/get-course-like-status/${courseId}`)
        .then((result) => {
            return Promise.resolve(result);
        })
        .catch((err) => Promise.reject(err));
}

const httpSearchV2 = (token, keyword) => {
    return httpClient
        .post(`/course/searchV2`, {
            token: token,
            keyword: keyword,
        })
        .then((result) => {
            return Promise.resolve(result);
        })
        .catch((err) => Promise.reject(err));
}

const httpGetSearchHistory = () => {
    return httpClient
        .get(`/course/search-history`)
        .then((result) => {
            return Promise.resolve(result);
        })
        .catch((err) => Promise.reject(err));
}

const httpGetAllInstructors = () => {
    return httpClient
        .get(`/instructor`)
        .then((result) => {
            return Promise.resolve(result);
        })
        .catch((err) => Promise.reject(err));
}

const httpGetSpecificInstructor = (instructorId) => {
    return httpClient
        .get(`/instructor/detail/${instructorId}`)
        .then((result) => {
            return Promise.resolve(result);
        })
        .catch((err) => Promise.reject(err));
}

const httpDeleteSearchHistory = (searchResultId) => {
    return httpClient
        .delete(`/course/delete-search-history/${searchResultId}`)
        .then((result) => {
            return Promise.resolve(result);
        })
        .catch((err) => Promise.reject(err));
}

const httpRegisterFreeCourse = (courseId) => {
    return httpClient
        .post(`/payment/get-free-courses`, { courseId: courseId })
        .then((result) => {
            return Promise.resolve(result);
        })
        .catch((err) => Promise.reject(err));
}

const httpRateAndReviewCourse = (courseId, content, formalityPoint, presentationPoint, contentPoint) => {
    return httpClient
        .post(`/course/rating-course`, {
            courseId: courseId,
            content: content,
            formalityPoint: Number.parseFloat(formalityPoint),
            presentationPoint: Number.parseFloat(presentationPoint),
            contentPoint: Number.parseFloat(contentPoint)
        })
        .then((result) => {
            return Promise.resolve(result);
        })
        .catch((err) => Promise.reject(err));
}

const httpGetLessonDetail = (courseId, lessonId) => {
    return httpClient
        .get(`/lesson/detail/${courseId}/${lessonId}`)
        .then((result) => {
            return Promise.resolve(result);
        })
        .catch((err) => Promise.reject(err));
}

const httpGetLessonVideoAndLastSeenTime = (courseId, lessonId) => {
    return httpClient
        .get(`/lesson/video/${courseId}/${lessonId}`)
        .then((result) => {
            return Promise.resolve(result);
        })
        .catch((err) => Promise.reject(err));
}

const httpGetLastSeenLessonOfCourse = (courseId) => {
    return httpClient
        .get(`/course/last-watched-lesson/${courseId}`)
        .then((result) => {
            return Promise.resolve(result);
        })
        .catch((err) => Promise.reject(err));
}

export default {
    httpGetProcessCourses,
    httpGetNewCourses,
    httpGetTopRateCourses,
    httpGetTopSellCourses,
    httpGetCourseFullDetail,
    httpGetFavoriteCourses,
    httpLikeCourse,
    httpGetAllCategories,
    httpGetCoursesFromCategory,
    httpGetCourseFavoriteStatus,
    httpSearchV2,
    httpGetAllInstructors,
    httpGetSearchHistory,
    httpGetSpecificInstructor,
    httpDeleteSearchHistory,
    httpRegisterFreeCourse,
    httpRateAndReviewCourse,
    httpGetLessonDetail,
    httpGetLessonVideoAndLastSeenTime,
    httpGetLastSeenLessonOfCourse,
};
