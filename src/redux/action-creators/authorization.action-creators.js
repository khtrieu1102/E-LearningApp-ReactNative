import actionTypes from "../action-types";
import { createActionCreators } from "./utilities";

const setIsAuthenticated = (value) =>
	createActionCreators(actionTypes.authorization.SET_IS_AUTHENTICATED, value);

export default {
	setIsAuthenticated,
};
