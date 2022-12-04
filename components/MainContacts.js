import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Dimensions,
} from "react-native";
import {
  Feather,
  FontAwesome5,
  MaterialCommunityIcons,
  Entypo,
} from "@expo/vector-icons";
//
const heightScreen = Dimensions.get("window").height;
const widthScreen = Dimensions.get("window").width;
//
export default function MainContacts() {
  return (
    <View
      style={{
        justifyContent: "space-evenly",
        width: widthScreen,
        flexDirection: "row",
      }}
    >
      <TouchableOpacity style={styles.shareLink}>
        <View style={styles.iconShareLink}>
          <Text>
            <Feather name="link" size={24} color="#533382" />
          </Text>
        </View>
        <View style={styles.nameShareLink}>
          <Text style={styles.textShareLink}>Site web</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.shareLink}>
        <View style={styles.iconShareLink}>
          <Text>
            <FontAwesome5 name="pen" size={24} color="#533382" />
          </Text>
        </View>
        <View style={styles.nameShareLink}>
          <Text style={styles.textShareLink}>Ajouter un avis</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.shareLink}>
        <View style={styles.iconShareLink}>
          <Text>
            <MaterialCommunityIcons
              name="camera-plus"
              size={28}
              color="#533382"
            />
          </Text>
        </View>
        <View style={styles.nameShareLink}>
          <Text style={styles.textShareLink}>Ajouter une photo</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.shareLink}>
        <View style={styles.iconShareLink}>
          <Text>
            <Entypo name="share" size={24} color="#533382" />
          </Text>
        </View>
        <View style={styles.nameShareLink}>
          <Text style={styles.textShareLink}>Partager</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
//
//
const styles = StyleSheet.create({
  shareLink: {
    alignItems: "center",
    height: 100,
    width: 70,
  },
  iconShareLink: {
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E6E6FA",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  nameShareLink: { marginTop: 10 },
  textShareLink: {
    fontSize: 14,
    color: "grey",
    textAlign: "center",
    fontWeight: "bold",
  },
});
