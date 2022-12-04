import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Feather, FontAwesome5, Ionicons } from "@expo/vector-icons";
//
const heightScreen = Dimensions.get("window").height;
const widthScreen = Dimensions.get("window").width;
//
export default function LastContacts({ phone }) {
  return (
    <View style={styles.allContacts}>
      <View style={styles.contact}>
        <View style={styles.iconContact}>
          <Feather name="clock" size={20} color="#533382" />
        </View>
        <View style={styles.contactInfo}>
          <Text>Heures d'ouverture</Text>
        </View>
      </View>
      <View style={styles.contact}>
        <View style={styles.iconContact}>
          <Feather name="phone" size={20} color="#533382" />
        </View>
        <View style={styles.contactInfo}>
          <Text>Appeler {phone}</Text>
        </View>
      </View>
      <View style={styles.contact}>
        <View style={styles.iconContact}>
          <Feather name="link" size={20} color="#533382" />
        </View>
        <View style={styles.contactInfo}>
          <Text>Site web</Text>
        </View>
      </View>
      <View style={styles.contact}>
        <View style={styles.iconContact}>
          <FontAwesome5 name="facebook" size={20} color="#533382" />
        </View>
        <View style={styles.contactInfo}>
          <Text>Facebook</Text>
        </View>
      </View>
      <View style={styles.contact}>
        <View style={styles.iconContact}>
          <FontAwesome5 name="instagram" size={20} color="#533382" />
        </View>
        <View style={styles.contactInfo}>
          <Text>Instagram</Text>
        </View>
      </View>
      <View style={styles.contact}>
        <View style={styles.iconContact}>
          <Ionicons name="trail-sign-outline" size={20} color="#533382" />
        </View>
        <View style={styles.contactInfo}>
          <Text>Itinéraire</Text>
        </View>
      </View>
    </View>
  );
}
//
//
const styles = StyleSheet.create({
  allContacts: {
    paddingHorizontal: 10,
  },
  contact: {
    borderTopColor: "lightgrey",
    borderTopWidth: 1,
    height: 60,
    alignItems: "center",
    flexDirection: "row",
  },
  iconContact: {
    // borderWidth: 1,
    // borderColor: "black",
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  contactInfo: {
    // borderWidth: 1, borderColor: "black"
  },
});
