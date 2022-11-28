import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
//Navigation
import {
  getFocusedRouteNameFromRoute,
  NavigationContainer,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();
//icons TabBarBottom
import { Feather } from "@expo/vector-icons";
//imports
import AsyncStorage from "@react-native-async-storage/async-storage";
//import Sreens
import SplashScreen from "./containers/SplashScreen";
import FavoritesScreen from "./containers/FavoritesScreen";
import LoginScreen from "./containers/LoginScreen";
import RestaurantScreen from "./containers/RestaurantScreen";
import MapScreen from "./containers/MapScreen";
import RestaurantsScreen from "./containers/RestaurantsScreen";
import SignupScreen from "./containers/SignupScreen";
//
//
export default function App() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName="Splash"> */}
      {/* <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ title: "" }}
        /> */}
      <Tab.Navigator
        screenOptions={({ route }) => ({
          // headerShown: false, //RETIRE LE HEADER

          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name == "TabExplorer") {
              iconName = "search";
            } else if (route.name == "TabFavoris") {
              iconName = "user";
            }
            return <Feather name={iconName} size={24} color={"grey"} />;
          },
          tabBarActiveTintColor: "#7C49C7",
          tabBarInactiveTintColor: "grey",
        })}
      >
        <Tab.Screen
          name="TabExplorer"
          options={{
            headerShown: false,
            tabBarLabel: "Explorer",
            tabBarIcon: ({ color, size }) => (
              <Feather name={"search"} size={size} color={color} />
            ),
          }}
        >
          {() => (
            <Stack.Navigator>
              <Stack.Screen
                name="Restaurants"
                component={RestaurantsScreen}
                options={{
                  headerStyle: { backgroundColor: "#7C49C7" },
                  headerTintColor: "#fff",
                  headerTitleStyle: { fontWeight: "bold" },
                }}
              />
              <Stack.Screen
                name="Restaurant"
                component={RestaurantScreen}
                options={{
                  headerStyle: { backgroundColor: "#7C49C7" },
                  headerTintColor: "#fff",
                  headerTitleStyle: { fontWeight: "bold" },
                }}
              />
              <Stack.Screen
                name="Map"
                component={MapScreen}
                options={{
                  headerStyle: { backgroundColor: "#7C49C7" },
                  headerTintColor: "#fff",
                  headerTitleStyle: { fontWeight: "bold" },
                }}
              />
            </Stack.Navigator>
          )}
        </Tab.Screen>
        <Tab.Screen
          name="TabFavoris"
          options={{
            headerShown: false,
            tabBarLabel: "Favoris",
            tabBarIcon: ({ color, size }) => (
              <Feather name={"user"} size={size} color={color} />
            ),
          }}
        >
          {() => (
            <Stack.Navigator>
              <Stack.Screen
                name="Favoris"
                component={FavoritesScreen}
                options={{
                  headerStyle: { backgroundColor: "#7C49C7" },
                  headerTintColor: "#fff",
                  headerTitleStyle: { fontWeight: "bold" },
                }}
              />
              <Stack.Screen
                name="SignUp"
                component={SignupScreen}
                options={{
                  tabBarLabel: "Sign Up",
                  headerStyle: { backgroundColor: "#7C49C7" },
                  headerTintColor: "#fff",
                  headerTitleStyle: { fontWeight: "bold" },
                }}
              />
              <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{
                  headerStyle: { backgroundColor: "#7C49C7" },
                  headerTintColor: "#fff",
                  headerTitleStyle: { fontWeight: "bold" },
                }}
              />
            </Stack.Navigator>
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
