
import globalStyles from "../styles/globalStyles";
import About from "../screens/About";
import { createStackNavigator } from "react-navigation-stack";
import AboutHeader from "../component/AboutHeader";
const screens = {
    // home is the default screen, at the top of the stack
    // when the app loads
    About: {
        screen: About,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <AboutHeader navigation={navigation} title="About" />
            }
        }
    }
}

const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: "#444",
        headerStyle: globalStyles.headerStyle
    }
});
// export default createAppContainer(HomeStack);
export default AboutStack