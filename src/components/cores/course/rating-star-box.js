import React from "react";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";

const RatingStarBox = ({ StarPoint }) => {
    const appSettingsReducer = useSelector(state => state.appSettingsReducer);
    const { theme } = appSettingsReducer;

    let BeautifulStarPoint = 0; 

    if (!StarPoint) BeautifulStarPoint = 0;
    else if (StarPoint > 5) {
        BeautifulStarPoint = 5;
    } else {
        BeautifulStarPoint = Math.round(StarPoint);
    }
    
    return (			
        <View style={{ flexDirection: "row" }}>
            <Ionicons style={{ paddingLeft: 5, paddingRight: 5 }}
                name={BeautifulStarPoint - 1 + 1 > 0 ? "ios-star" : "ios-star-outline" }
                size={18}
                color={BeautifulStarPoint - 1 + 1 > 0 ? "#fadb14" : theme.primaryTextColor } />
            
            <Ionicons style={{ paddingLeft: 5, paddingRight: 5 }}
                name={BeautifulStarPoint - 2 + 1 > 0 ? "ios-star" : "ios-star-outline" }
                size={18}
                color={BeautifulStarPoint - 2 + 1 > 0 ? "#fadb14" : theme.primaryTextColor } />
            
            <Ionicons style={{ paddingLeft: 5, paddingRight: 5 }}
                name={BeautifulStarPoint - 3 + 1 > 0 ? "ios-star" : "ios-star-outline" }
                size={18}
                color={BeautifulStarPoint - 3 + 1 > 0 ? "#fadb14" : theme.primaryTextColor } />
            
            <Ionicons style={{ paddingLeft: 5, paddingRight: 5 }}
                name={BeautifulStarPoint - 4 + 1 > 0 ? "ios-star" : "ios-star-outline" }
                size={18}
                color={BeautifulStarPoint - 4 + 1 > 0 ? "#fadb14" : theme.primaryTextColor } />
            
            <Ionicons style={{ paddingLeft: 5, paddingRight: 5 }}
                name={BeautifulStarPoint - 5 + 1 > 0 ? "ios-star" : "ios-star-outline" }
                size={18}
                color={BeautifulStarPoint - 5 + 1 > 0 ? "#fadb14" : theme.primaryTextColor } />
        </View>
    );
}

export default RatingStarBox;