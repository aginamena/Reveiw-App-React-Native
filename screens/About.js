import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function About() {
    return (
        <View style={{ marginTop: 18, marginLeft: 10 }}>
            <Text style={{ fontSize: 18 }}>There are currently 5 movies in the store for review. Each movie description
                has the date of production, producers and a summary of the movie.
            </Text>
        </View>
    )
}
