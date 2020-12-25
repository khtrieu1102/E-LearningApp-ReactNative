import React, { Fragment } from "react";
import { showMessage, hideMessage } from "react-native-flash-message";

const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const showGlobalError = (value) => {
	const messageToShow = (typeof value == "string") ? value : "Something's wrong! Try again!";
    showMessage({
		hideOnPress: false,
		description: 
			<span style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: 0 }}>
				<span style={{color: "white"}}>{messageToShow}</span>
				<button style={{ border: "none", borderRadius: 20 }}>Dismiss</button>
			</span>,
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

export default { validateEmail, showGlobalError, showGlobalInfo };