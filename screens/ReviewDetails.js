import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

export default function ReviewDetails({ navigation }) {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{
                    uri: navigation.getParam("uri")
                }}
            />
            <View style={styles.movieHeading}>
                <Text style={styles.title}>{navigation.getParam("title")}</Text>
                <Text style={styles.producer}>By {navigation.getParam("producer")}</Text>
            </View>
            <View style={styles.rating}>
                {
                    Array.from({ length: navigation.getParam("rating") }).map((item, index) => (<FontAwesome name="star" size={30} color="black" key={index} />))
                }
            </View>

            <Text style={styles.description}>{navigation.getParam("description")}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 18,
        marginLeft: 10,
        marginRight: 10
    },
    movieHeading: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 30
    },
    title: {
        fontSize: 20,
        fontWeight: "bold"
    },
    image: {
        width: "90%",
        marginLeft: "auto",
        marginRight: "auto",
        height: 200,
        borderRadius: 10,
    },
    description: {
        fontSize: 16
    },
    producer: {
        fontSize: 16
    },
    rating: {
        flexDirection: "row",
        marginTop: 20,
        marginBottom: 20
    }
})