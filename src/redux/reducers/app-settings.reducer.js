import actionTypes from "../action-types";
import theme from "../../common/theme.data"

const initialState = {
	theme: theme["light"],
};

const authorizationReducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case actionTypes.authorization.SET_IS_AUTHENTICATED: {
			if (payload === "light" || payload === "dark")
			return {
				...state,
				theme: theme[payload],
			};
		}
		default:
			return state;
	}
};

export default authorizationReducer;
