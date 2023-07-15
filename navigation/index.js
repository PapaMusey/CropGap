import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./rootStack";

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

//import UserNavigator from "./userStack";

{
  /* <NavigationContainer>
<UserNavigator />
</NavigationContainer> */
}
