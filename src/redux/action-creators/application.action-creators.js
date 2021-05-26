import actionTypes from "../action-types";
import apiMethods from "../../http-client/api-methods"
import helpers from "../../helpers";
import { createActionCreators } from "./utilities";
import Course from "../../models/course.model"
import AsyncStorage from '@react-native-async-storage/async-storage';

const setIsLoading = () => 
	createActionCreators(actionTypes.application.SET_IS_LOADING_APPLICATION);

const setTopNewCourses = (courses) => 
	createActionCreators(actionTypes.application.SET_TOP_NEW_COURSES, courses);

const setTopRateCourses = (courses) => 
	createActionCreators(actionTypes.application.SET_TOP_RATE_COURSES, courses);
	
const setProcessCourses = (courses) => 
	createActionCreators(actionTypes.application.SET_PROCESS_COURSES, courses);
	
const setTopSellCourses = (courses) => 
	createActionCreators(actionTypes.application.SET_TOP_SELL_COURSES, courses);

const setFavoriteCourses = (courses) => 
	createActionCreators(actionTypes.application.SET_FAVORITE_COURSES, courses);

const httpGetNewCoursesSuccess = () => createActionCreators(actionTypes.application.HTTP_GET_NEW_COURSES_SUCCESS);

const httpGetNewCoursesFailure = (errorMessage) => createActionCreators(actionTypes.application.HTTP_GET_NEW_COURSES_FAILURE, null, errorMessage);

const httpGetNewCourses = () => async (dispatch) => {
	dispatch({ type: actionTypes.application.HTTP_GET_NEW_COURSES });
	dispatch(setIsLoading());

	await apiMethods.application
		.httpGetNewCourses()
		.then(result => result?.data?.payload)
		.then(result => {
			dispatch(setTopNewCourses(result));
			dispatch(httpGetNewCoursesSuccess());
		})
		.catch(error => {
			dispatch(httpGetNewCoursesFailure(error?.response?.data?.message || "Something's wrong, please try again!"));
		});
}

const httpGetTopRateCoursesSuccess = () => createActionCreators(actionTypes.application.HTTP_GET_TOP_RATE_COURSES_SUCCESS);

const httpGetTopRateCoursesFailure = (errorMessage) => createActionCreators(actionTypes.application.HTTP_GET_TOP_RATE_COURSES_FAILURE, null, errorMessage);

const httpGetTopRateCourses = () => async (dispatch) => {
	dispatch({ type: actionTypes.application.HTTP_GET_TOP_RATE_COURSES });
	dispatch(setIsLoading());

	await apiMethods.application
		.httpGetTopRateCourses()
		.then(result => result?.data?.payload)
		.then(result => {
			dispatch(setTopRateCourses(result));
			dispatch(httpGetTopRateCoursesSuccess());
		})
		.catch(error => {
			dispatch(httpGetTopRateCoursesFailure(error?.response?.data?.message || "Something's wrong, please try again!"));
		});
}

const httpGetTopSellCoursesSuccess = () => createActionCreators(actionTypes.application.HTTP_GET_TOP_SELL_COURSES_SUCCESS);

const httpGetTopSellCoursesFailure = (errorMessage) => createActionCreators(actionTypes.application.HTTP_GET_TOP_SELL_COURSES_FAILURE, null, errorMessage);

const httpGetTopSellCourses = () => async (dispatch) => {
	dispatch({ type: actionTypes.application.HTTP_GET_TOP_SELL_COURSES });
	dispatch(setIsLoading());

	await apiMethods.application
		.httpGetTopSellCourses()
		.then(result => result?.data?.payload)
		.then(result => {
			dispatch(setTopSellCourses(result));
			dispatch(httpGetTopSellCoursesSuccess());
		})
		.catch(error => {
			dispatch(httpGetTopSellCoursesFailure(error?.response?.data?.message || "Something's wrong, please try again!"));
		});
}

const httpGetFavoriteCoursesSuccess = () => createActionCreators(actionTypes.application.HTTP_GET_FAVORITE_COURSES_SUCCESS);

const httpGetFavoriteCoursesFailure = (errorMessage) => createActionCreators(actionTypes.application.HTTP_GET_FAVORITE_COURSES_FAILURE, null, errorMessage);

const httpGetFavoriteCourses = () => async (dispatch) => {
	dispatch({ type: actionTypes.application.HTTP_GET_FAVORITE_COURSES });
	dispatch(setIsLoading());

	await apiMethods.application
		.httpGetFavoriteCourses()
		.then(result => result?.data?.payload)
		.then(result => {
			dispatch(setFavoriteCourses(result));
			dispatch(httpGetFavoriteCoursesSuccess());
		})
		.catch(error => {
			dispatch(httpGetFavoriteCoursesFailure(error?.response?.data?.message || "Something's wrong, please try again!"));
		});
}

const httpGetProcessCoursesSuccess = () => createActionCreators(actionTypes.application.HTTP_GET_PROCESS_COURSES_SUCCESS);

const httpGetProcessCoursesFailure = (errorMessage) => createActionCreators(actionTypes.application.HTTP_GET_PROCESS_COURSES_FAILURE, null, errorMessage);

const httpGetProcessCourses = () => async (dispatch) => {
	dispatch({ type: actionTypes.application.HTTP_GET_PROCESS_COURSES });
	dispatch(setIsLoading());

	await apiMethods.application
		.httpGetProcessCourses()
		.then(result => result?.data?.payload)
		.then(result => {
			const data = result.map((item, index) => {
				return new Course({
					...item,
					title: item.courseTitle,
					imageUrl: item.courseImage,
					"instructor.user.name": item.instructorName,
					process: item.process,
					learnLesson: item.learnLesson,
					total: item.total,			
				});
			});
			console.log(data);
			dispatch(setProcessCourses(data));
			dispatch(httpGetProcessCoursesSuccess());
		})
		.catch(error => {
			dispatch(httpGetProcessCoursesFailure(error?.response?.data?.message || "Something's wrong, please try again!"));
		});
}

export default {
	httpGetNewCourses,
	httpGetTopRateCourses,
	httpGetTopSellCourses,
	httpGetProcessCourses,
	httpGetFavoriteCourses,
};
