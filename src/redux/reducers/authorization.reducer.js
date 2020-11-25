import actionTypes from "../action-types";

const initialState = {
	tokens: {
		accessToken: "",
		refreshToken: "",
	},
	role: "",
	isAuthenticated: true,
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
			};
		}
		default:
			return state;
	}
};

export default authorizationReducer;
