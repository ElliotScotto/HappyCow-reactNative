import restaurants from "../assets/data/restaurants.json";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/core";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Feather } from "@expo/vector-icons";
import {
  StatusBar,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  StyleSheet,
  TextInput,
  Image,
  Dimensions,
  SafeAreaView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
//
//
const heightScreen = Dimensions.get("window").height;
const widthScreen = Dimensions.get("window").width;
//
//
export default function LoginScreen({ setToken, setId }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  //
  const navigation = useNavigation();
  //
  useEffect(() => {
    navigation.setOptions({
      headerStyle: { backgroundColor: "#7C49C7" },
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.navigate("Favoris")}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Feather name="arrow-left" size={24} color="white" />
            <Text style={{ color: "white", fontSize: 22, fontWeight: "bold" }}>
              HappyCow
            </Text>
          </View>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
  //
  //
  const handlePress = async (event) => {
    event.preventDefault();
    if (!username) {
      setErrorMessage("Veuillez indiquer le nom d'utilisateur");
    } else if (!password) {
      setErrorMessage("Veuillez entrer votre mot de passe");
    } else if (password.length < 6) {
      setErrorMessage("Votre mot de passe doit contenir 6 caractères minimum");
    } else {
      setErrorMessage(null);
      // console.log(response.data.token);
      // console.log(response.data.id);
      const token = "N° de Token";
      setToken(token);
      console.log("token====>", token);
      // setId(id);
      // console.log("id ==> ", id);
    }
  };
  //
  return (
    <KeyboardAwareScrollView>
      <StatusBar barStyle="light-content" backgroundColor="#533382" />
      <SafeAreaView>
        <View
          style={{
            width: widthScreen,
          }}
        >
          <View
            style={{
              alignItems: "center",
            }}
          >
            <Image
              style={styles.mainPicture}
              source={{ uri: restaurants[1].pictures[32] }}
            />
          </View>
          <View
            style={{
              alignItems: "center",
              width: widthScreen,
              marginTop: 30,
            }}
          >
            <TextInput
              style={styles.customInput}
              placeholder="Nom d'utilisateur"
              autoCapitalize="none"
              onChangeText={(username) => {
                setUsername(username);
              }}
              value={username}
            />

            <View
              style={{
                width: "90%",
                position: "relative",
                flexDirection: "row",
              }}
            >
              <View style={{ flex: 1 }}>
                <TextInput
                  style={[styles.customInput, styles.passwordInput]}
                  placeholder="Mot de passe"
                  autoCapitalize="none"
                  secureTextEntry={secureTextEntry}
                  onChangeText={(password) => {
                    setPassword(password);
                  }}
                  value={password}
                />
              </View>
              <View style={{ position: "absolute", top: 10, right: 30 }}>
                <TouchableOpacity
                  style={styles.eyeIcon}
                  onPress={() => {
                    if (secureTextEntry) {
                      setSecureTextEntry(false);
                    } else if (!secureTextEntry) {
                      setSecureTextEntry(true);
                    }
                    //
                  }}
                >
                  {secureTextEntry ? (
                    <Text>
                      <Feather name="eye-off" size={20} color="#533382" />
                    </Text>
                  ) : (
                    <Text>
                      <Feather name="eye" size={20} color="#533382" />
                    </Text>
                  )}
                </TouchableOpacity>
              </View>
            </View>

            <Text style={styles.ErrorMessageStyle}>{errorMessage}</Text>
            <TouchableHighlight
              style={styles.button}
              title="Login"
              onPress={handlePress}
            >
              <Text style={[styles.large, styles.white]}>Connexion</Text>
            </TouchableHighlight>
            <TouchableOpacity title="ForgottenPassword">
              <Text style={[styles.large, styles.grey]}>
                Mot de passe oublié ?
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
}
//
//
const styles = StyleSheet.create({
  mainPicture: {
    width: widthScreen,
    height: heightScreen * 0.2,
    resizeMode: "cover",
  },
  customInput: {
    paddingLeft: 10,
    height: 40,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    width: "90%",
    marginBottom: 20,
    fontSize: 18,
    backgroundColor: "lightgrey",
  },
  passwordInput: { position: "relative" },
  eyeIcon: { position: "absolute" },
  button: {
    height: 50,
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#7C49C7",
    borderWidth: 0,
    borderRadius: 10,
    marginBottom: 20,
  },

  white: { color: "white" },
  grey: { color: "#717171" },
  large: { fontSize: 18 },
  ErrorMessageStyle: { marginTop: 10, color: "red", marginBottom: 15 },
});
