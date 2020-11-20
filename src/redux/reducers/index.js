import { combineReducers } from "redux";
import authorizationReducer from "./authorization.reducer";
import appSettingsReducer from "./app-settings.reducer"

export default combineReducers({
	authorizationReducer,
	appSettingsReducer
});
