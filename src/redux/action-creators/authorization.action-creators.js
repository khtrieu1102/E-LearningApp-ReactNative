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

const userLoginSuccess = () => createActionCreators(actionTypes.authorization.HTTP_LOGIN_SUCCESS);

const userLoginFailure = (errorMessage) => createActionCreators(actionTypes.authorization.HTTP_LOGIN_FAILURE, null, errorMessage);

const userLogin = (email, password) => async (dispatch) => {
	dispatch({ type: actionTypes.authorization.HTTP_LOGIN });
	dispatch(setIsLoading());

	await apiMethods.authorization
		.userLogin(email, password)
		.then(result => {
			dispatch(userLoginSuccess())
			dispatch(setIsAuthenticated(true));
			dispatch(setToken(result?.data?.token));
			dispatch(setUserInfo(result?.data?.userInfo));
			helpers.FlashMessageFunc.showGlobalInfo("Welcome back!");
		})
		.catch(error => {
			console.log(error.response);
			const message = error?.response?.data?.message;
			
			dispatch(userLoginFailure(error?.response?.statusText));
			// dispatch(logError(message));
			// throw new Error("message");
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
