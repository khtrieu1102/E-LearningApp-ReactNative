import actionTypes from "../action-types";
import { createActionCreators } from "./utilities";

const setTheme = (value) =>
	createActionCreators(actionTypes.appSettings.SET_THEME, value);

export default {
	setTheme,
};
