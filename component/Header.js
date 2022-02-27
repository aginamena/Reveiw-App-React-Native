import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Entypo } from '@expo/vector-icons';

export default function Header({ navigation }) {
    return (
        <View style={styles.container}>
            <Entypo name="menu"
                size={30} color="black"
                style={styles.menu}
                onPress={() => navigation.openDrawer()} />
            <Text style={styles.heading}>Home</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "center",
        position: "relative"
    },
    heading: {
        fontSize: 20,
        letterSpacing: 1.5

    },
    menu: {
        position: "absolute",
        left: 0
    }
})