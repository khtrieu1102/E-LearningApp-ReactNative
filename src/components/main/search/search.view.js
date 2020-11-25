import React, { useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux"

import SearchedResult from "./comps/searched-result"

const Search = () => {
	const appSettingsReducer = useSelector((state) => state.appSettingsReducer);
	const { theme } = appSettingsReducer;
	const [searchText, setSearchText] = useState("");

	return (
		<View
			style={{
				height: "100%",
			}}
		>

            {/* --- SEARCH INPUT + BUTTON --- */}
			<View style={{flexDirection: "row", height: 50}}>
				<TextInput 
					style={{
						borderColor: "gray",
						borderWidth: 2,
						padding: 10,
						borderRadius: 10,
						width: "100%",
						height: "100%",
						color: theme.primaryTextColor
					}}
					placeholder="Search something..."
					value={searchText}
					onChange={(event) => {
						setSearchText(event.target.value);
					}}
				/>
			</View>


            {/* --- TAB VIEW FOR SEARCHED RESULTS --- */}
			<SearchedResult />
		</View>
	);
};

export default Search;
