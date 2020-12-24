import actionTypes from "../action-types";
import apiMethods from "../../http-client/api-methods"
import { createActionCreators } from "./utilities";
import { showMessage, hideMessage } from "react-native-flash-message";

const setIsAuthenticated = (value) =>
	createActionCreators(actionTypes.authorization.SET_IS_AUTHENTICATED, value);

const setToken = (value) => 
	createActionCreators(actionTypes.authorization.SET_TOKEN, value);

const setUserInfo = (value) => 
	createActionCreators(actionTypes.authorization.SET_USER_INFO, value);

const setIsLoading = () => 
	createActionCreators(actionTypes.authorization.SET_IS_LOADING);

const logError = (value) => 
	createActionCreators(actionTypes.authorization.LOG_ERROR, value);

const userLogin = (email, password) => async (dispatch) => {
	dispatch(setIsLoading());

	await apiMethods.authorization
		.userLogin(email, password)
		.then(result => {
			dispatch(setIsAuthenticated(true));
			dispatch(setToken(result?.data?.token));
			dispatch(setUserInfo(result?.data?.userInfo));	
		})
		.catch(error => {
			dispatch(logError(error?.response?.data));
			showMessage({
				message: "ERROR!",
				description: error?.response?.data?.message || "Something's wrong! Try again!",
				type: "danger",
			});
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
};
