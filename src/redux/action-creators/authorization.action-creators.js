import actionTypes from "../action-types";
import apiMethods from "../../http-client/api-methods"
import helpers from "../../helpers";
import { createActionCreators } from "./utilities";
import AsyncStorage from '@react-native-async-storage/async-storage';

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
			AsyncStorage.setItem("token", result?.data?.token);
			helpers.FlashMessageFunc.showGlobalInfo("Welcome back!");
		})
		.catch(error => {
			dispatch(userLoginFailure(error?.response?.data?.message || "Something's wrong, please try again!"));
		});
}

const userRegisterSuccess = () => createActionCreators(actionTypes.authorization.HTTP_REGISTER_SUCCESS);

const userRegisterFailure = (errorMessage) => createActionCreators(actionTypes.authorization.HTTP_REGISTER_FAILURE, null, errorMessage);

const userRegister = (username, password, email, phone) => async (dispatch) => {
	dispatch({ type: actionTypes.authorization.HTTP_REGISTER });
	dispatch(setIsLoading());

	await apiMethods.authorization
		.userRegister(username, password, email, phone)
		.then(result => {
			dispatch(userRegisterSuccess());
			helpers.FlashMessageFunc.showGlobalInfo("Register successfully! Check your email to activate!");
		})
		.catch(error => {
			dispatch(userRegisterFailure(error?.response?.data?.message || "Something's wrong, please try again!"));
		});
}

const emailForgotPasswordSuccess = () => createActionCreators(actionTypes.authorization.EMAIL_FORGOT_PASSWORD_SUCCESS);

const emailForgotPasswordFailure = (errorMessage) => createActionCreators(actionTypes.authorization.EMAIL_FORGOT_PASSWORD_FAILURE, null, errorMessage);

const emailResetPassword = (email) => async (dispatch) => {
	dispatch({ type: actionTypes.authorization.EMAIL_FORGOT_PASSWORD });
	dispatch(setIsLoading());

	await apiMethods.email
		.sendResetPasswordLink(email)
		.then(result => {
			dispatch(emailForgotPasswordSuccess());
			helpers.FlashMessageFunc.showGlobalInfo("Register successfully! Check your email to activate!");
		})
		.catch(error => {
			dispatch(emailForgotPasswordFailure(error?.response?.data?.message || "Something's wrong, please try again!"));
		});
}

const getUserAndVerifyTokenSuccess = () => createActionCreators(actionTypes.authorization.HTTP_GET_USER_VERIFY_TOKEN_SUCCESS);

const getUserAndVerifyTokenFailure = (errorMessage) => createActionCreators(actionTypes.authorization.HTTP_GET_USER_VERIFY_TOKEN_FAILURE, null, errorMessage);

const getUserAndVerifyToken = (token) => async (dispatch) => {
	dispatch({ type: actionTypes.authorization.HTTP_GET_USER_VERIFY_TOKEN });
	dispatch(setIsLoading());

	await apiMethods.authorization
		.getUserAndVerifyToken(token)
		.then(result => {
			dispatch(getUserAndVerifyTokenSuccess())
			dispatch(setIsAuthenticated(true));
			dispatch(setToken(token));
			dispatch(setUserInfo(result?.data?.payload));
		})
		.catch(error => {
			dispatch(getUserAndVerifyTokenFailure(error?.response?.data?.message || "Something's wrong, please try again!"));
			dispatch(userLogout());
		});
}

const userLogout = () => (dispatch) => {
	dispatch(setIsLoading());
	dispatch(setIsAuthenticated(false));
	dispatch(setToken(""));
	dispatch(setUserInfo({}));	
	AsyncStorage.removeItem("token");
}

export default {
	setIsAuthenticated,
	setToken,
	setUserInfo,
	setIsLoading,
	userLogin,
	userLogout,
	logError,
	emailResetPassword,
	userRegister,
	getUserAndVerifyToken,
};
