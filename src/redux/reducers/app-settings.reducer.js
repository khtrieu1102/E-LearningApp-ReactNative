import actionTypes from "../action-types";
import theme from "../../common/theme.data"

const initialName = "light";
const initialState = {
	themeName: initialName,
	theme: theme[initialName],
};

const authorizationReducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case actionTypes.appSettings.SET_THEME: {
			var name;
			switch (payload) {
				case 1: name = "light"; break;
				case 2: name = "dark"; break;
				default:
			}
			return {
				...state,
				themeName: name,
				theme: theme[name],
			};
		}
		default:
			return state;
	}
};

export default authorizationReducer;
