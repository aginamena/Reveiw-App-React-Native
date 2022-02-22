import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from "react-native"
import { FontAwesome } from '@expo/vector-icons';
import globalStyles from '../styles/globalStyles';
export default function Movie({ movieDescription }) {

    return (
        <View style={styles.movieContainer}>
            <Image
                style={styles.image}
                source={{
                    uri: movieDescription.uri
                }}
            />
            <View style={styles.movieDetialsContainer}>
                <View style={{ justifyContent: "space-between" }}>
                    <Text style={globalStyles.text}>{movieDescription.title}</Text>
                </View>

                <View style={styles.rating}>
                    <View style={{ flexDirection: "row" }}>
                        {
                            Array.from({ length: movieDescription.rating }).map((item, index) => (<FontAwesome name="star" size={30} color="white" />))
                        }
                    </View>
                    <Text style={globalStyles.text}>{movieDescription.producer}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    movieContainer: {
        position: "relative",
        marginTop: 20
    },
    movieDetialsContainer: {
        position: "absolute",
        bottom: 20,
        left: 50,
        width: "70%",
    },
    image: {
        width: "90%",
        marginLeft: "auto",
        marginRight: "auto",
        height: 200,
        borderRadius: 10,

    },
    rating: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20
    },

})