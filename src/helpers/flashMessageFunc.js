import React from "react";
import { showMessage, hideMessage } from "react-native-flash-message";
import { useDispatch } from "react-redux";

const CustomMessageTemplate = ({ messageToShow }) => {
    const dispatch = useDispatch();
    
    return <span style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: 0 }}>
        <span style={{color: "white"}}>{messageToShow}</span>
        <button 
            style={{ border: "none", borderRadius: 20 }}
            onClick={() => { 
                dispatch({type: "RESET_ERROR_MESSAGE"}); 
                hideMessage();} 
            }>
            Dismiss
        </button>
    </span>
}

const showGlobalError = (value) => {
	const messageToShow = (typeof value == "string") ? value : "Something's wrong! Try again!";
    showMessage({
		hideOnPress: false,
		description: <CustomMessageTemplate messageToShow={messageToShow} />,
		message: "ERROR!",
		type: "danger",
		icon: "danger",
	});
}

const showSimpleError = (value) => {
	showMessage({
		hideOnPress: true,
		autoHide: true,
		description: value,
		message: "ERROR!",
		type: "danger",
		icon: "danger",
	});
}

const showGlobalInfo = (value) => {
	if (typeof value == "string")
		showMessage({
			autoHide: true,
			duration: 2000,
			onPress: () => {
				console.log("Close!");
			},
			message: "IT'S COOL!",
			description: 
				<span style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: 0 }}>
					<span style={{color: "white"}}>{value}</span>
				</span>,
			// description: "Something went wrong",
			type: "info",
			icon: "info",
		});
}

export default { showGlobalError, showGlobalInfo, showSimpleError };