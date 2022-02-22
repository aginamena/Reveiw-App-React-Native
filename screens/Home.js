import React, { useState } from "react";
import { StyleSheet, View, Text, Button, FlatList } from "react-native";
import Movie from "../component/Movie";
import globalStyles from "../styles/globalStyles";
import movies from "../assets/movieData.json"



export default function Home({ navigation }) {
    // const [movies, setMovies] = useState();
    // const movies = require("../assets/movieData.json")
    return (
        <View style={globalStyles.container}>
            <FlatList
                data={movies}
                renderItem={({ item }) => (<Movie movieDescription={item} />)}
            />
            {/* <Movie movies={movies} /> */}
            {/* <Button title="Review page" onPress={() => navigation .navigate("ReviewDetails")} /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    homeText: {
        fontFamily: "Roboto-bold",
        fontSize: 18,
    }
})