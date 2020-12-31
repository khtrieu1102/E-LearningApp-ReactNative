import actionTypes from "../action-types";

const initialState = {
	token: "",
	userInfo: {
		id: "",
		avatar: "",
		email: "",
		favoriteCategories: [],
		isActivated: false,
		isDeleted: false,
		name: null,
		phone: "",
		point: 0,
		type: "",
		updatedAt: "",
		createdAt: "",
	},
	isAuthenticated: false,
	isLoading: false,
	error: false,
};

const authorizationReducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case actionTypes.authorization.SET_IS_AUTHENTICATED: {
			return {
				...state,
				isAuthenticated: payload,
				isLoading: false,
			};
		}
		case actionTypes.authorization.SET_TOKEN: {
			return {
				...state,
				token: payload,
				isLoading: false,
			};
		}
		case actionTypes.authorization.SET_USER_INFO: {
			return {
				...state,
				userInfo: payload,
				isLoading: false,
			};
		}		
		case actionTypes.authorization.SET_IS_LOADING: {
			return {
				...state,
				isLoading: true,
			}
		}
		case actionTypes.authorization.HTTP_LOGIN: {
			return {
				...state,
			};
		}
		case actionTypes.authorization.HTTP_LOGIN_SUCCESS: {
			return {
				...state,
				isLoading: false,
			}
		}		
		case actionTypes.authorization.HTTP_LOGIN_FAILURE: {
			return {
				...state,
				isLoading: false,
			}
		}		
		case actionTypes.authorization.HTTP_REGISTER: {
			return {
				...state,
			};
		}
		case actionTypes.authorization.HTTP_REGISTER_SUCCESS: {
			return {
				...state,
				isLoading: false,
			}
		}		
		case actionTypes.authorization.HTTP_REGISTER_FAILURE: {
			return {
				...state,
				isLoading: false,
			}
		}		
		case actionTypes.authorization.EMAIL_FORGOT_PASSWORD: {
			return {
				...state,
			};
		}
		case actionTypes.authorization.EMAIL_FORGOT_PASSWORD_SUCCESS: {
			return {
				...state,
				isLoading: false,
			}
		}		
		case actionTypes.authorization.EMAIL_FORGOT_PASSWORD_FAILURE: {
			return {
				...state,
				isLoading: false,
			}
		}
		case actionTypes.authorization.EMAIL_SEND_ACTIVATE_ACCOUNT: {
			return {
				...state,
			};
		}
		case actionTypes.authorization.EMAIL_SEND_ACTIVATE_ACCOUNT_SUCCESS: {
			return {
				...state,
				isLoading: false,
			}
		}		
		case actionTypes.authorization.EMAIL_SEND_ACTIVATE_ACCOUNT_FAILURE: {
			return {
				...state,
				isLoading: false,
			}
		}
		default:
			return state;
	}
};

export default authorizationReducer;
