import { useIsFocused } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/core";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Feather } from "@expo/vector-icons";
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  TouchableHighlight,
} from "react-native";
import Checkbox from "expo-checkbox";
import { useState } from "react";
//
function FocusAwareStatusBar(props) {
  const isFocused = useIsFocused();
  return isFocused ? <StatusBar {...props} /> : null;
}
//
const heightScreen = Dimensions.get("window").height;
const widthScreen = Dimensions.get("window").width;
//
export default function SignupScreen({ setToken, setId }) {
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
    } else if (password.length <= 6) {
      setErrorMessage("Votre mot de passe doit contenir 6 caractères minimum");
    } else if (birthYear.length !== 4 || birthYear > 2022 || birthYear < 1900) {
      setErrorMessage("L'année de naissance n'est pas valide");
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
  //
  return (
    <KeyboardAwareScrollView>
      <FocusAwareStatusBar barStyle="light-content" backgroundColor="#533382" />
      <View
        style={{
          flex: 1,
          alignItems: "center",
          borderColor: "black",
          borderWidth: 1,
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
          <View style={{ position: "absolute", right: 30 }}>
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
                  <Feather name="eye-off" size={24} color="#533382" />
                </Text>
              ) : (
                <Text>
                  <Feather name="eye" size={24} color="#533382" />
                </Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
        <TextInput
          style={styles.customInputSignIn}
          placeholder="Type de végé"
          onChangeText={(vegeType) => {
            setVegeType(vegeType);
          }}
          value={vegeType}
        />
        <TextInput
          style={styles.customInputSignIn}
          placeholder="Ville d'origine"
          onChangeText={(userCity) => {
            setUserCity(userCity);
          }}
          value={userCity}
        />
        <TextInput
          style={styles.customInputSignIn}
          placeholder="Année de naissance Ex: 1989"
          autoComplete="birthdate-year"
          onChangeText={(birthYear) => {
            setBirthYear(birthYear);
          }}
          value={birthYear}
        />
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
          <Text style={[styles.grey, styles.large]}>S'inscrire</Text>
        </TouchableHighlight>
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
    borderWidth: 3,
    borderRadius: 10,
    marginBottom: 20,
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
    color: "#7C49C7",
  },
  text: {
    color: "#717171",
    fontWeight: "500",
    fontSize: 18,
  },
  grey: { color: "#717171" },
  large: { fontSize: 18 },
  ErrorMessageStyle: { marginTop: 10, color: "red", marginBottom: 15 },
});
