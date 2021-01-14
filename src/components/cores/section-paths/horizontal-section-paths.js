import React from "react";
import { View, ScrollView, Text, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SectionPathsHeader from "./section-paths-header";
import PathCardItem from "../path/path-card-item";
import { useSelector } from "react-redux";


const HorizontalSectionPaths = ({ header, paths, isLoading}) => {    
	const appSettingsReducer = useSelector((state) => state.appSettingsReducer);
	const { theme } = appSettingsReducer;
	const navigation = useNavigation();

	const onSeeAll = () => {
		navigation.navigate("VerticalSectionPaths", { paths: paths })
	}

	return (
		<View>
			<SectionPathsHeader header={header} onSeeAll={onSeeAll} showButtonSeeAll={true}/>

			{isLoading && <ActivityIndicator color={theme.primaryTextColor} /> }
			{!isLoading && 
				<View>
					{
						paths?.length > 0 ? 
						<ScrollView horizontal={true} >
							{paths.map((item, index) => (
								<PathCardItem
									key={index}
									pathDetails={item}
								/>
							))}
						</ScrollView> : 
						<View style={{ height: 220, justifyContent: "center", alignSelf: "center" }}>
							<Text style={{ color: theme.primaryTextColor }}>Hiện chưa có danh mục nào ở đây</Text>
						</View>
					}
				</View>
			}

		</View>
	);
};

export default HorizontalSectionPaths;
