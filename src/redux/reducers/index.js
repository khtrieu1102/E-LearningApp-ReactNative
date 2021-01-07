import { combineReducers } from "redux";
import authorizationReducer from "./authorization.reducer";
import appSettingsReducer from "./app-settings.reducer"
import applicationReducer from "./application.reducer"
import helpers from "../../helpers"

const errorMessage = (state = null, action) => {
	const { type, error } = action;
  
	if (type === "RESET_ERROR_MESSAGE") {
	  	return null;
	} else if (error) {
		helpers.FlashMessageFunc.showGlobalError(error);
	  	return error;
	}
  
	return state;
  }

export default combineReducers({
	authorizationReducer,
	appSettingsReducer,
	applicationReducer,
	errorMessage,
});
