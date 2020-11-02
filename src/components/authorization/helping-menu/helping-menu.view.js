import React, { useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const HelpingMenu = () => {
    const textColor = "black";
    const backgroundColor = "white";
	return (
		<View
			style={{
				flexDirection: "column",
				justifyContent: "flex-start",
                alignItems: "stretch",
                width: "100%",
				height: "100%",
				marginLeft: 5,
				marginRight: 5,
			}}
		>
			<TouchableOpacity
				style={{
					flexDirection: "row",
					borderBottomWidth: 1,
					height: 50,
					alignItems: "center",
					borderColor: textColor,
					backgroundColor: backgroundColor,
				}}
			>
				<Text
					style={{
						flex: 1,
						color: textColor,
						fontSize: 15,
						paddingLeft: 5,
					}}
				>
					Forgot your password?
				</Text>
				<Ionicons
					style={{ paddingLeft: 5, paddingRight: 5 }}
					name="ios-arrow-dropright"
					size={32}
					color={textColor}
				/>
			</TouchableOpacity>
			<TouchableOpacity
				style={{
					flexDirection: "row",
					borderBottomWidth: 1,
					height: 50,
					alignItems: "center",
					borderColor: textColor,
					backgroundColor: backgroundColor,
				}}
			>
				<Text
					style={{
						flex: 1,
						color: textColor,
						alignSelf: "center",
						fontSize: 15,
						paddingLeft: 5,
					}}
				>
					Subscribe to HCMUS.
				</Text>
				<Ionicons
					style={{ paddingLeft: 5, paddingRight: 5 }}
					name="ios-arrow-dropright"
					size={32}
					color={textColor}
				/>
			</TouchableOpacity>
			<TouchableOpacity
				style={{
					flexDirection: "row",
					borderBottomWidth: 1,
					height: 50,
					alignItems: "center",
					borderColor: textColor,
					backgroundColor: backgroundColor,
				}}
			>
				<Text
					style={{
						flex: 1,
						color: textColor,
						alignSelf: "center",
						fontSize: 15,
						paddingLeft: 5,
					}}
				>
					Restore subscription with iTunes
				</Text>
				<Ionicons
					style={{ paddingLeft: 5, paddingRight: 5 }}
					name="ios-arrow-dropright"
					size={32}
					color={textColor}
				/>
			</TouchableOpacity>
			<TouchableOpacity
				style={{
					flexDirection: "row",
					borderBottomWidth: 1,
					height: 50,
					alignItems: "center",
					borderColor: textColor,
					backgroundColor: backgroundColor,
				}}
			>
				<Text
					style={{
						flex: 1,
						color: textColor,
						alignSelf: "center",
						fontSize: 15,
						paddingLeft: 5,
					}}
				>
					Contact HCMUS support
				</Text>
				<Ionicons
					style={{ paddingLeft: 5, paddingRight: 5 }}
					name="ios-arrow-dropright"
					size={32}
					color={textColor}
				/>
			</TouchableOpacity>
		</View>
	);
};

export default HelpingMenu;