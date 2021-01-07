import actionTypes from "../action-types";

const initialState = {
	isLoading: false,
	topNewCourses: [],
};

const ApplicationReducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case actionTypes.application.SET_TOP_NEW_COURSES: {
			return {
				...state,
				topNewCourses: payload,
			};
		}
		case actionTypes.application.SET_IS_LOADING_APPLICATION: {
			return {
				...state,
				isLoading: true,
			}
		}
		case actionTypes.application.HTTP_GET_NEW_COURSES: {
			return {
				...state,
			};
		}
		case actionTypes.application.HTTP_GET_NEW_COURSES_SUCCESS: {
			return {
				...state,
				isLoading: false,
			}
		}
		case actionTypes.application.HTTP_GET_NEW_COURSES_FAILURE: {
			return {
				...state,
				isLoading: false,
			}
		}
		default:
			return state;
	}
};

export default ApplicationReducer;