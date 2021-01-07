import actionTypes from "../action-types";
import apiMethods from "../../http-client/api-methods"
import helpers from "../../helpers";
import { createActionCreators } from "./utilities";
import AsyncStorage from '@react-native-async-storage/async-storage';

const setIsLoading = () => 
	createActionCreators(actionTypes.application.SET_IS_LOADING_APPLICATION);

const setTopNewCourses = (courses) => 
	createActionCreators(actionTypes.application.SET_TOP_NEW_COURSES, courses);

const setTopRateCourses = (courses) => 
	createActionCreators(actionTypes.application.SET_TOP_RATE_COURSES, courses);
	
const setTopSellCourses = (courses) => 
createActionCreators(actionTypes.application.SET_TOP_SELL_COURSES, courses);

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

export default {
	httpGetNewCourses,
	httpGetTopRateCourses,
	httpGetTopSellCourses,
};
