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
		case actionTypes.authorization.LOG_ERROR: {
			return {
				...state,
				isLoading: false,
				error: payload,
			};
		}
		default:
			return state;
	}
};

export default authorizationReducer;
