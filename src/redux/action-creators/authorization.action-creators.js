import actionTypes from "../action-types";
import apiMethods from "../../http-client/api-methods"
import helpers from "../../helpers";
import { createActionCreators } from "./utilities";

const setIsAuthenticated = (value) =>
	createActionCreators(actionTypes.authorization.SET_IS_AUTHENTICATED, value);

const setToken = (value) => 
	createActionCreators(actionTypes.authorization.SET_TOKEN, value);

const setUserInfo = (value) => 
	createActionCreators(actionTypes.authorization.SET_USER_INFO, value);

const setIsLoading = () => 
	createActionCreators(actionTypes.authorization.SET_IS_LOADING);

const logError = (value) => {
	return createActionCreators(actionTypes.authorization.LOG_ERROR, value);
}

const userLogin = (email, password) => async (dispatch) => {
	dispatch({ type: actionTypes.authorization.HTTP_LOGIN });
	dispatch(setIsLoading());

	await apiMethods.authorization
		.userLogin(email, password)
		.then(result => {
			dispatch(setIsAuthenticated(true));
			dispatch(setToken(result?.data?.token));
			dispatch(setUserInfo(result?.data?.userInfo));
			helpers.showGlobalInfo("Welcome back!");
		})
		.catch(error => {
			const message = error?.response?.data?.message;
			dispatch(logError(message));
			helpers.showGlobalError(message);
		});
}

const emailResetPassword = (email) => async (dispatch) => {
	dispatch({ type: actionTypes.authorization.HTTP_LOGIN });
	dispatch(setIsLoading());

	await apiMethods.email
		.sendResetPasswordLink(email)
		.then(result => {
			console.log(result);
		})
		.catch(error => {
			const message = error?.response?.data?.message;
			dispatch(logError(message));
			helpers.showGlobalError(message);
		});
}

const userLogout = () => (dispatch) => {
	dispatch(setIsLoading());
	dispatch(setIsAuthenticated(false));
	dispatch(setToken(""));
	dispatch(setUserInfo({}));	
}

export default {
	setIsAuthenticated,
	setToken,
	setUserInfo,
	setIsLoading,
	userLogin,
	userLogout,
	logError,
	emailResetPassword
};
