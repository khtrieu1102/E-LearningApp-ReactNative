import actionTypes from "../action-types";
import theme from "../../common/theme.data"

const initialName = "light";
const initialLanguage = "vietnamese";
const initialState = {
	themeName: initialName,
	theme: theme[initialName],
	languageName: initialLanguage,
	language: initialLanguage,
};

const authorizationReducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case actionTypes.appSettings.SET_THEME: {
			var name;
			switch (payload) {
				case "light": name = "light"; break;
				case "dark": name = "dark"; break;
				default: name = "light";
			}
			return {
				...state,
				themeName: name,
				theme: theme[name],
			};
		}
		case actionTypes.appSettings.SET_LANGUAGE: {
			var name;
			switch (payload) {
				case "vietnamese": name = "vietnamese"; break;
				case "english": name = "english"; break;
				default: name = "vietnamese";
			}
			return {
				...state,
				languageName: name,
				language: name,
			};
		}
		default:
			return state;
	}
};

export default authorizationReducer;
