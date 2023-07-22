import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingScreen from "../screens/LandingScreen";
import LogIn from "../screens/LogIn";
import CreateAccountScreen from "../screens/CreateAccountScreen";
import FarmListScreen from "../screens/FarmListScreen";
import AddFarm from "../screens/AddFarm";
import CompanyPage from "../screens/CompanyPage";
import Settings from "../screens/Settings";
import Weather from "../screens/Weather";
import Theme from "../screens/Theme";
import ForgotPassword from "../screens/ForgotPassword";
import ProductPage from "../screens/ProductPage";
import HamburgerMenu from "../screens/HamburgerMenu";
import ProductCard from "../screens/ProductCard";
import SignUpCompletion from "../screens/SignUpCompletion";

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="AddFarm">
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
        name="SignUpCompletion"
        component={SignUpCompletion}
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
        name="ProductCard"
        component={ProductCard}
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
        name="CompanyPage"
        component={CompanyPage}
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
        name="ProductPage"
        component={ProductPage}
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
