
import { createStackNavigator } from "react-navigation-stack";
import Header from "../component/Header";
import Home from "../screens/Home";
import ReviewDetails from "../screens/ReviewDetails";
import globalStyles from "../styles/globalStyles";
import React from "react"
const screens = {
    // home is the default screen, at the top of the stack
    // when the app loads
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} />
            }
        }
    },
    ReviewDetails: {
        screen: ReviewDetails,
        navigationOptions: {
            title: "Review Details",
        }
    }
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: "#444",
        headerStyle: globalStyles.headerStyle
    }
});
// export default createAppContainer(HomeStack);
export default HomeStack