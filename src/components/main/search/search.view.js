import React, { useState, useEffect } from "react";
import { View, ScrollView, TextInput, ActivityIndicator, TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import SearchedResult from "./comps/searched-result"
import apiMethods from "../../../http-client/api-methods"
import SimpleSkillItem from "../../cores/skill/simple-skill-item"

const Search = () => {
	const appSettingsReducer = useSelector((state) => state.appSettingsReducer);
	const authorizationReducer = useSelector((state) => state.authorizationReducer);
	const { theme, languageName } = appSettingsReducer;
	const { token } = authorizationReducer;
	const [searchText, setSearchText] = useState("");
	const [data, setData] = useState();
	const [isLoading, setIsLoading] = useState(false);
	const [searchHistoryItems, setSearchHistoryItems] = useState([]);

	const onSearch = async (text) => {
		const keywordToSearch = text || searchText;
		if (!keywordToSearch) return;
		setIsLoading(true);

		await apiMethods.application.httpSearchV2(token, keywordToSearch)
			.then(result => result?.data?.payload)
			.then(result => setData(result))
			.catch(error => console.log(error.response));
			
		setIsLoading(false);
		await _getSearchHistory();
	}

	const onDelete = async () => {
		setIsLoading(true);
		
		await apiMethods.application.httpDeleteSearchHistory(searchHistoryItems[0].id)
			.then(result => result?.data?.payload)
			.then(result => setData(result))
			.catch(error => console.log(error.response));
			
		setIsLoading(false);
		await _getSearchHistory();
	}

	const _getSearchHistory = async () => {
		setIsLoading(true);
		await apiMethods.application.httpGetSearchHistory()
			.then(result => result?.data?.payload?.data)
			.then(result => setSearchHistoryItems(result))
			.catch(error => console.log(error.response));
			
		setIsLoading(false);
	}

	useEffect(() => {
		_getSearchHistory();
	}, []);

	return (
		<View
			style={{
				height: "100%",
				flex: 1
			}}
		>

            {/* --- SEARCH INPUT + BUTTON --- */}
			<View style={{
					flexDirection: "row", 
					height: 50, 
					borderColor: "gray",
					borderWidth: 2,
					borderRadius: 10,
					justifyContent: "space-between"
				}}
			>
				<TextInput 
					style={{
							width: "90%",
							height: "100%",
							color: theme.primaryTextColor
						}}
						placeholder={ languageName == "vietnamese" ? "Tìm kiếm..." : "Search something..." }
						value={searchText}
						onChangeText={(event) => {
							setSearchText(event);
					}}
				/>
				<TouchableOpacity style={{ justifyContent: "center", paddingRight: 10 }} onPress={() => onSearch()}>
					{isLoading ? <ActivityIndicator color={theme.primaryTextColor} /> : <Ionicons name="ios-search" size={25} color={theme.primaryTextColor} />}
				</TouchableOpacity>
			</View>
			
			{ searchHistoryItems?.length > 0 && 
			<ScrollView horizontal={true} style={{maxHeight: 40}}>
				{searchHistoryItems.map((skill, index) => {
					return (<SimpleSkillItem key={index} skillDetails={skill} onPress={async () => {
						await setSearchText(skill.content);
						await onSearch(skill.content);
					}}/>)
				})}
			</ScrollView>
			}
			{ searchHistoryItems?.length > 0 && <TouchableOpacity onPress={onDelete}>
				<Text style={{ color: "blue", textDecorationLine: "underline" }}>{languageName == "vietnamese" ? "Xoá lịch sử tìm kiếm" : "Delete search history" }</Text>
			</TouchableOpacity> }


            {/* --- TAB VIEW FOR SEARCHED RESULTS --- */}
			<SearchedResult searchedResult={data} isLoading={isLoading} />
		</View>
	);
};

export default Search;
