import React from "react";
import { showMessage, hideMessage } from "react-native-flash-message";
import { useDispatch } from "react-redux";

const CustomMessageTemplate = ({ messageToShow }) => {
    const dispatch = useDispatch();
    
    return <Text style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: 0 }}>
        <Text style={{color: "white"}}>{messageToShow}</Text>
        <button 
            style={{ border: "none", borderRadius: 20 }}
            onClick={() => { 
                dispatch({type: "RESET_ERROR_MESSAGE"}); 
                hideMessage();} 
			}
			title="Dismiss"
			>
        </button>
    </Text>
}

const showGlobalError = (value) => {
	const messageToShow = (typeof value == "string") ? value : "Something's wrong! Try again!";
    // showMessage({
	// 	hideOnPress: false,
	// 	renderCustomContent: CustomMessageTemplate,
	// 	message: "ERROR!",
	// 	type: "danger",
	// 	icon: "danger",
	// });
		console.log("value: ", messageToShow);
}

const showSimpleError = (value) => {
	// showMessage({
	// 	hideOnPress: true,
	// 	autoHide: true,
	// 	description: value,
	// 	message: "ERROR!",
	// 	type: "danger",
	// 	icon: "danger",
	// });
		console.log("value: ", value);
}

const showGlobalInfo = (value) => {
	if (typeof value == "string")
		// showMessage({
		// 	autoHide: true,
		// 	duration: 2000,
		// 	onPress: () => {
		// 	},
		// 	message: "IT'S COOL!",
		// 	description: 
		// 		<span style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: 0 }}>
		// 			<span style={{color: "white"}}>{value}</span>
		// 		</span>,
		// 	// description: "Something went wrong",
		// 	type: "info",
		// 	icon: "info",
		// });
		console.log("value: ", value);
}

export default { showGlobalError, showGlobalInfo, showSimpleError };