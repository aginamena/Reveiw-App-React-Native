import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default function AboutHeader({ navigation, title }) {
    // console.log(navigation);
    return (
        <View style={styles.container}>
            <Ionicons
                name="arrow-back"
                size={30}
                color="black"
                style={styles.btn}
                onPress={() => navigation.navigate("Home")}
            />
            <Text style={styles.heading}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "center"
    },

    heading: {
        fontSize: 18,
        fontWeight: "bold"
    },
    btn: {
        position: "absolute",
        left: 0
    }
})