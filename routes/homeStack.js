import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Home from "../screens/Home";
import ReviewDetails from "../screens/ReviewDetails";

const screens = {
    // home is the default screen, at the top of the stack
    // when the app loads
    Home: {
        screen: Home
    },
    ReviewDetails: {
        screen: ReviewDetails
    }
}

const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);