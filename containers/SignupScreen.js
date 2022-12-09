// import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/core";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Feather } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import AsyncStorage from "@react-native-async-storage/async-storage";
//import Modals
import VegeType from "../modals/VegeType";
import CityUser from "../modals/CityUser";
import BirthYear from "../modals/BirthYear";
//
//import Components
import Authentification from "../middleware/Authentification";
//
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  TouchableHighlight,
  StatusBar,
} from "react-native";
//
import { useState, useEffect } from "react";
//
//

//
const heightScreen = Dimensions.get("window").height;
const widthScreen = Dimensions.get("window").width;
//
export default function SignupScreen({ setToken, setId, userToken }) {
  //State Input
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [vegeType, setVegeType] = useState("");
  const [userCity, setUserCity] = useState("");
  const [birthYear, setBirthYear] = useState("");
  const [newsletter, setNewsletter] = useState(false);
  const [conditions, setConditions] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  //
  const navigation = useNavigation();
  //
  useEffect(() => {
    navigation.setOptions({
      headerTitleAlign: "left",
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
    if (
      !email ||
      !username ||
      !password ||
      !vegeType ||
      !userCity ||
      !birthYear
    ) {
      setErrorMessage("Veuillez remplir tous les champs.");
    } else if (conditions === false) {
      setErrorMessage("Veuillez accepter les conditions en cochant la case");
    } else if (password.length < 6) {
      setErrorMessage("Votre mot de passe doit contenir 6 caractères minimum");
    } else if (birthYear.length !== 4 || birthYear > 2022 || birthYear < 1900) {
      setErrorMessage("L'année de naissance n'est pas valide");
    } else {
      setErrorMessage(null);
      // console.log(response.data.token);
      // console.log(response.data.id);
      // const passwordUser = password;
      // await AsyncStorage.setItem("password", passwordUser);
      if (userToken) {
        alert("Vous êtes déjà inscrit");
      } else {
        setId();
        const token = "1234567";
        setToken(token);
        const userValues = JSON.stringify({
          token: token,
          name: username,
          passwordUser: password,
          mail: email,
          city: userCity,
          date: birthYear,
          type: vegeType,
        });
        await AsyncStorage.setItem("user", userValues);
        console.log("SIGNUPSCREEN : token ====>", token);
        console.log("SIGNUPSCREEN : userValues  =====> ", userValues);
        // <Authentification password={password} />;
        alert("Votre inscription s'est bien déroulée.");
        navigation.navigate("Login");
      }
    }
  };
  //
  //
  const handleRemoveItem = async () => {
    await AsyncStorage.removeItem("user");
    alert("Vous êtes désinscrit.");
  };
  //
  //
  return (
    <KeyboardAwareScrollView>
      <StatusBar barStyle="light-content" backgroundColor="#533382" />
      <View
        style={{
          flex: 1,
          alignItems: "center",
        }}
      >
        <View style={{ marginVertical: 30 }}>
          <Text>Indiquez vos coordonnées ci-dessous</Text>
        </View>
        <TextInput
          style={styles.customInputSignIn}
          placeholder="email"
          autoCapitalize="none"
          keyboardType={"email-address"}
          onChangeText={(email) => {
            setEmail(email);
          }}
          value={email}
        />
        <TextInput
          style={styles.customInputSignIn}
          placeholder="Nom d'utilisateur"
          autoCapitalize="none"
          // textContentType="username"
          onChangeText={(username) => {
            setUsername(username);
          }}
          value={username}
        />
        <View
          style={{ width: "90%", position: "relative", flexDirection: "row" }}
        >
          <View style={{ flex: 1 }}>
            <TextInput
              style={[styles.customInputSignIn, styles.passwordInput]}
              placeholder="Mot de passe"
              autoCapitalize="none"
              // textContentType="password"
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
        <View
          style={{ width: "90%", position: "relative", flexDirection: "row" }}
        >
          <View style={{ flex: 1 }}>
            <TextInput
              style={styles.customInputSignIn}
              autoCapitalize="none"
              placeholder="Type de végé"
              onChangeText={(vegeType) => {
                setVegeType(vegeType);
              }}
              value={vegeType}
            />
          </View>
          <View style={{ position: "absolute", top: 10, right: 10 }}>
            <VegeType />
          </View>
        </View>
        <View
          style={{ width: "90%", position: "relative", flexDirection: "row" }}
        >
          <View style={{ flex: 1 }}>
            <TextInput
              style={styles.customInputSignIn}
              placeholder="Ville d'origine"
              onChangeText={(userCity) => {
                setUserCity(userCity);
              }}
              value={userCity}
            />
          </View>
          <View style={{ position: "absolute", top: 10, right: 10 }}>
            <CityUser />
          </View>
        </View>
        <View
          style={{ width: "90%", position: "relative", flexDirection: "row" }}
        >
          <View style={{ flex: 1 }}>
            <TextInput
              style={styles.customInputSignIn}
              placeholder="Année de naissance Ex: 1989"
              autoComplete="birthdate-year"
              onChangeText={(birthYear) => {
                setBirthYear(birthYear);
              }}
              value={birthYear}
            />
          </View>
          <View style={{ position: "absolute", top: 10, right: 10 }}>
            <BirthYear />
          </View>
        </View>
        <View style={styles.section}>
          <Checkbox
            // style={styles.customInputSignIn}
            value={newsletter}
            onValueChange={setNewsletter}
          />
          <Text style={styles.paragraph}>
            Recevez des mises à jour sur les nouvelles ouvertures, les produits
            végétaliens et les promotions locales près de chez vous.
          </Text>
        </View>
        <View style={styles.section}>
          <Checkbox
            // style={styles.customInputSignIn}
            value={conditions}
            onValueChange={setConditions}
          />
          <Text style={styles.paragraph}>
            J'accepte les conditions d'utilisation, la politique de
            confidentialté et les paramètres de notification par défaut. J'ai
            plus de 13 ans.*
          </Text>
        </View>
        <Text style={styles.ErrorMessageStyle}>{errorMessage}</Text>
        <TouchableHighlight
          style={styles.button}
          title="Sign up"
          onPress={handlePress}
        >
          <Text style={[styles.large, styles.fontColor]}>S'inscrire</Text>
        </TouchableHighlight>
      </View>
      <View marginTop={30} flexDirection={"row"} justifyContent={"center"}>
        <View flex={0.6}>
          <Text></Text>
        </View>
        <View flex={0.3} alignItems={"center"}>
          <TouchableOpacity
            style={styles.button2}
            title="log out"
            onPress={handleRemoveItem}
          >
            <Text style={styles.text2}>Se désincrire</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}

//
const styles = StyleSheet.create({
  customInputSignIn: {
    height: 30,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    width: "90%",
    marginBottom: 20,
    fontSize: 18,
  },
  passwordInput: { position: "relative" },
  eyeIcon: { position: "absolute" },
  button: {
    height: 60,
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#717171",
    backgroundColor: "#717171",
    borderWidth: 3,
    borderRadius: 10,
    marginBottom: 20,
  },
  button2: {
    height: 30,
    width: 130,
    borderColor: "red",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginBottom: 20,
  },

  text2: {
    color: "red",
    fontWeight: "500",
    fontSize: 16,
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    marginBottom: 20,
    fontSize: 18,
  },
  paragraph: {
    marginHorizontal: 10,
    fontSize: 15,
    color: "#533382",
  },
  text: {
    color: "#717171",
    fontWeight: "500",
    fontSize: 18,
  },
  fontColor: { color: "white" },
  grey: { color: "#717171" },
  large: { fontSize: 18 },
  ErrorMessageStyle: { marginTop: 10, color: "red", marginBottom: 15 },
});
