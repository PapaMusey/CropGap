import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingScreen from "../screens/LandingScreen";
import LogIn from "../screens/LogIn";
import CreateAccountScreen from "../screens/CreateAccountScreen";
import FarmListScreen from "../screens/FarmListScreen";
import AddFarm from "../screens/AddFarm";
import FarmManagement from "../screens/FarmManagement";
import CalendarScreen from "../screens/CalendarScreen";
import Settings from "../screens/Settings";

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="LandingScreen">
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
    </Stack.Navigator>
  );
}
