import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function ReviewDetails({ navigation }) {
    // console.log(navigation.state);
    // console.log("*****************************************")
    return (
        <View>
            <Text>Welcome to Review Details</Text>
            <Text>{navigation.getParam("description")}</Text>
        </View>
    )
}