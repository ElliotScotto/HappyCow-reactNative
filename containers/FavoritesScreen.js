import { useNavigation } from "@react-navigation/core";
import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Feather } from "@expo/vector-icons";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
//
//
export default function FavoritesScreen({ token, setToken, setId }) {
  //
  const navigation = useNavigation();
  //
  useEffect(() => {
    navigation.setOptions({
      headerStyle: { backgroundColor: "#7C49C7" },
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.navigate("Restaurants")}>
          <Feather name="arrow-left" size={24} color="white" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
  //
  console.log("token de FavoritesScreen ===>", token);
  //
  return (
    <View style={styles.mainContainerFavorites}>
      <StatusBar barStyle="light-content" backgroundColor="#533382" />
      <View style={styles.welcomeSlide}>
        <Text>Slideshow</Text>
      </View>

      <View style={styles.Btns}>
        <TouchableOpacity
          style={styles.Btn}
          onPress={() => {
            navigation.navigate("SignUp");
          }}
        >
          <Text style={styles.fontBtn}>S'inscrire</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.Btn}
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text style={styles.fontBtn}>Connexion</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const heightScreen = Dimensions.get("window").height;
const widthScreen = Dimensions.get("window").width;
const styles = StyleSheet.create({
  mainContainerFavorites: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  welcomeSlide: { flex: 0.75 },
  Btns: {
    width: widthScreen * 0.9,
    flexDirection: "row",
    borderColor: "black",
    borderWidth: 1,
    justifyContent: "space-evenly",
  },
  Btn: {
    height: 50,
    width: 125,
    backgroundColor: "#7C49C7",
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  fontBtn: { color: "white", fontSize: 18 },
});
