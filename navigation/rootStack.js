import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingScreen from "../screens/LandingScreen";
import LogIn from "../screens/LogIn";
import CreateAccountScreen from "../screens/CreateAccountScreen";
import FarmListScreen from "../screens/FarmListScreen";
import AddFarm from "../screens/AddFarm";
import FarmManagement from "../screens/FarmManagement";
import CalendarScreen from "../screens/CalendarScreen";
import Settings from "../screens/Settings";
import Weather from "../screens/Weather";
import Theme from "../screens/Theme";
import ForgotPassword from "../screens/ForgotPassword";

import HamburgerMenu from "../screens/HamburgerMenu";

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Landing"
        component={LandingScreen}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="Login"
        component={LogIn}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="Signup"
        component={CreateAccountScreen}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="Home"
        component={FarmListScreen}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="AddFarm"
        component={AddFarm}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="FarmManagement"
        component={FarmManagement}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="CalendarScreen"
        component={CalendarScreen}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{
          header: () => null,
        }}
      />

      <Stack.Screen
        name="Weather"
        component={Weather}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="Theme"
        component={Theme}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="HamburgerMenu"
        component={HamburgerMenu}
        options={{
          header: () => null,
        }}
      />
    </Stack.Navigator>
  );
}
