import actionTypes from "../action-types";
import { createActionCreators } from "./utilities";

const setTheme = (value) =>
	createActionCreators(actionTypes.appSettings.SET_THEME, value);

const setLanguage = (value) =>
	createActionCreators(actionTypes.appSettings.SET_LANGUAGE, value);

export default {
	setTheme,
	setLanguage
};
