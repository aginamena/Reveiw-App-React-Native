import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from 'react-native';
import Home from "./screens/Home";
import * as Font from 'expo-font';
import Navigator from "./routes/drawer"

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  useEffect(
    () => {
      const getFont = async () => {
        await Font.loadAsync({
          "Roboto-regular": require("./assets/fonts/Roboto-Regular.ttf"),
          "Roboto-bold": require("./assets/fonts/Roboto-Bold.ttf")
        });
        setFontLoaded(true);
      }
      getFont();
    }
    , [fontLoaded])

  if (fontLoaded) {
    return (
      <Navigator />
    )
  } else {
    return (
      <View style={styles.loadingCon}><Text style={styles.loading}>Loading...</Text></View>
    )
  }
  // return (
  //   <view><Text>sdf</Text></view>
  // )

}


const styles = StyleSheet.create({
  container: {

  },
  loadingCon: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  loading: {
    fontSize: 18,
    fontWeight: "bold",

  }
});

