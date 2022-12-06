import { StatusBar } from "expo-status-bar";
import { useIsFocused } from "@react-navigation/native";
import { useEffect, useState } from "react";
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
import { TouchableOpacity } from "react-native";
//icons TabBarBottom
import { Feather, Ionicons } from "@expo/vector-icons";
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
//import Components
import Header from "./components/Header";
//
//
export default function App() {
  const [userToken, setUserToken] = useState(null);
  const [userId, setUserId] = useState(null);

  //
  const setToken = async (token) => {
    if (token) {
      await AsyncStorage.setItem("userToken", token);
      setUserToken(token);
    } else {
      await AsyncStorage.removeItem("userToken");
      setUserToken(null);
    }
    setUserToken(token);
  };

  const setId = async (id) => {
    if (id) {
      await AsyncStorage.setItem("userId", id);
      setUserId(id);
    } else {
      await AsyncStorage.removeItem("userId");
      setUserId(null);
    }
    setUserId(id);
  };
  //
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
                  headerTitleAlign: "center",
                  headerTitle: () => <Header name="HappyCowLogo" />,
                  headerStyle: {
                    backgroundColor: "#7C49C7",
                  },
                }}
              />
              <Stack.Screen
                name="Restaurant"
                component={RestaurantScreen}
                options={{
                  headerStyle: {
                    backgroundColor: "",
                  },
                  headerBackTitleVisible: "false",
                  // headerTitle: "Restaurants",
                  headerTitle: "",
                }}
                screenOptions={{}}
              />
              <Stack.Screen
                name="Map"
                component={MapScreen}
                options={{
                  headerTitleAlign: "center",
                  headerTitle: () => <Header name="HappyCowLogo" />,
                  headerStyle: { backgroundColor: "#7C49C7" },
                  headerTintColor: "#fff",
                }}
              />

              <Stack.Screen
                name="SignUp"
                options={{
                  headerTitleAlign: "left",
                  headerTintColor: "#fff",
                  headerTitleStyle: { fontWeight: "bold" },
                  headerTitle: "",
                }}
              >
                {() => (
                  <SignupScreen
                    setToken={setToken}
                    setId={setId}
                    userId={userId}
                  />
                )}
              </Stack.Screen>

              <Stack.Screen
                name="Login"
                options={{
                  headerTitleAlign: "left",
                  headerTintColor: "#fff",
                  headerTitleStyle: { fontWeight: "bold" },
                  headerTitle: "",
                }}
              >
                {(props) => (
                  <LoginScreen {...props} setToken={setToken} setId={setId} />
                )}
              </Stack.Screen>
              <Stack.Screen
                name="Favoris"
                options={{
                  headerTitleAlign: "center",
                  headerTitle: () => <Header name="HappyCowLogo" />,
                  headerStyle: { backgroundColor: "#7C49C7" },
                }}
              >
                {(props) => (
                  <FavoritesScreen
                    {...props}
                    setToken={setToken}
                    setId={setId}
                    userToken={userToken}
                  />
                )}
              </Stack.Screen>
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
                options={{
                  headerTitleAlign: "center",
                  headerTitle: () => <Header name="HappyCowLogo" />,
                  headerStyle: { backgroundColor: "#7C49C7" },
                }}
              >
                {(props) => (
                  <FavoritesScreen
                    {...props}
                    setToken={setToken}
                    setId={setId}
                    userToken={userToken}
                    userId={userId}
                  />
                )}
              </Stack.Screen>
              <Stack.Screen
                name="SignUp"
                options={{
                  headerTitleAlign: "left",
                  headerTintColor: "#fff",
                  headerTitleStyle: { fontWeight: "bold" },
                  headerTitle: "",
                }}
              >
                {() => (
                  <SignupScreen
                    setToken={setToken}
                    setId={setId}
                    userId={userId}
                  />
                )}
              </Stack.Screen>

              <Stack.Screen
                name="Login"
                options={{
                  headerTitleAlign: "left",
                  headerTintColor: "#fff",
                  headerTitleStyle: { fontWeight: "bold" },
                  headerTitle: "",
                }}
              >
                {() => <LoginScreen setToken={setToken} setId={setId} />}
              </Stack.Screen>
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
