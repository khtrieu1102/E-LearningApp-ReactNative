const AuthorizationActionTypes = {
	SET_IS_AUTHENTICATED: "SET_IS_AUTHENTICATED",
	SET_TOKEN: "SET_TOKEN",
	SET_USER_INFO: "SET_USER_INFO",
	SET_IS_LOADING: "SET_IS_LOADING",
	HTTP_LOGIN: "HTTP_LOGIN",
	HTTP_LOGIN_SUCCESS: "HTTP_LOGIN_SUCCESS",
	HTTP_LOGIN_FAILURE: "HTTP_LOGIN_FAILURE",
	HTTP_REGISTER: "HTTP_REGISTER",
	HTTP_REGISTER_SUCCESS: "HTTP_REGISTER_SUCCESS",
	HTTP_REGISTER_FAILURE: "HTTP_REGISTER_FAILURE",
	EMAIL_FORGOT_PASSWORD: "EMAIL_FORGOT_PASSWORD",
	EMAIL_FORGOT_PASSWORD_SUCCESS: "EMAIL_FORGOT_PASSWORD_SUCCESS",
	EMAIL_FORGOT_PASSWORD_FAILURE: "EMAIL_FORGOT_PASSWORD_FAILURE",
	EMAIL_SEND_ACTIVATE_ACCOUNT: "EMAIL_SEND_ACTIVATE_ACCOUNT",
	EMAIL_SEND_ACTIVATE_ACCOUNT_SUCCESS: "EMAIL_SEND_ACTIVATE_ACCOUNT_SUCCESS",
	EMAIL_SEND_ACTIVATE_ACCOUNT_FAILURE: "EMAIL_SEND_ACTIVATE_ACCOUNT_FAILURE",
	HTTP_GET_USER_VERIFY_TOKEN: "HTTP_GET_USER_VERIFY_TOKEN",
	HTTP_GET_USER_VERIFY_TOKEN_SUCCESS: "HTTP_GET_USER_VERIFY_TOKEN_SUCCESS",
	HTTP_GET_USER_VERIFY_TOKEN_FAILURE: "HTTP_GET_USER_VERIFY_TOKEN_FAILURE",
	HTTP_UPDATE_ME_BASIC_INFO: "HTTP_UPDATE_ME_BASIC_INFO",
	HTTP_UPDATE_ME_BASIC_INFO_SUCCESS: "HTTP_UPDATE_ME_BASIC_INFO_SUCCESS",
	HTTP_UPDATE_ME_BASIC_INFO_FAILURE: "HTTP_UPDATE_ME_BASIC_INFO_FAILURE",
};

export default AuthorizationActionTypes;
