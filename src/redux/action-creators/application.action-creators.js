import actionTypes from "../action-types";
import apiMethods from "../../http-client/api-methods"
import helpers from "../../helpers";
import { createActionCreators } from "./utilities";
import AsyncStorage from '@react-native-async-storage/async-storage';

const setIsLoading = () => 
	createActionCreators(actionTypes.application.SET_IS_LOADING_APPLICATION);

const setTopNewCourses = (courses) => 
	createActionCreators(actionTypes.application.SET_TOP_NEW_COURSES, courses);

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

export default {
	httpGetNewCourses,
};
