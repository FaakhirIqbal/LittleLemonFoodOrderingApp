import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "./Welcom";
import Home from "./Home";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Profile from "./Profile";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {

  const [isFirstLaunch, setIsFirstLaunch] = React.useState(null);
  let routeName;

  React.useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then((value) => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });
  }, []);

  routeName = 'Home';
  return (
    <Stack.Navigator initialRouteName={routeName}
      screenOptions={{
        headerShown: false
      }}    >
      <Stack.Screen name="OnBoarding" component={WelcomeScreen} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
