import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Security from "../screens/Security";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home">
          {() => (
            <HomeStack.Navigator>
              <HomeStack.Screen name="Home" component={SettingsScreen} />
              <HomeStack.Screen name="Company Name" component={ProfileScreen} />
              <HomeStack.Screen name="Add to Cart" component={AddToCart} />
            </HomeStack.Navigator>
          )}
        </Tab.Screen>
        <Tab.Screen name="Search">
          {() => (
            <SearchStack.Navigator>
              <SearchStackStack.Screen name="Search" component={SearchScreen} />
            </SearchStack.Navigator>
          )}
        </Tab.Screen>
        <Tab.Screen name="History">
          {() => (
            <HistoryStack.Navigator>
              <HistoryStack.Screen name="History" component={OrderHistory} />
              <HistoryStack.Screen name="History" component={MyCart} />
            </HistoryStack.Navigator>
          )}
        </Tab.Screen>
        <Tab.Screen name="Settings">
          {() => (
            <SettingsStack.Navigator>
              <SettingsStack.Screen name="Settings" component={Settings} />
              <SettingsStack.Screen name="Security" component={Security} />
              <SettingsStack.Screen name="Theme" component={Theme} />
            </SettingsStack.Navigator>
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
