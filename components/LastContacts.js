import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Feather, FontAwesome5, Ionicons } from "@expo/vector-icons";
//
import Schedules from "./Schedules";
//
const heightScreen = Dimensions.get("window").height;
const widthScreen = Dimensions.get("window").width;
//
export default function LastContacts({
  phone,
  description,
  website,
  facebook,
}) {
  return (
    <View style={styles.allContacts}>
      <View style={styles.contact}>
        <View style={styles.iconContact}>
          <Feather name="clock" size={20} color="#533382" />
        </View>
        <View flex={0.97} style={styles.contactInfo}>
          <Text style={styles.fontContact}>Heures d'ouverture</Text>
          <Text numberOfLines={1}>{Schedules(description)}</Text>
        </View>
      </View>
      <View style={styles.contact}>
        <View style={styles.iconContact}>
          <Feather name="phone" size={20} color="#533382" />
        </View>
        <View style={styles.contactInfo}>
          <Text style={styles.fontContact}>Appeler</Text>
          <Text>{phone}</Text>
        </View>
      </View>
      <View style={styles.contact}>
        <View style={styles.iconContact}>
          <Feather name="link" size={20} color="#533382" />
        </View>
        <View flex={0.95} style={styles.contactInfo}>
          <Text style={styles.fontContact}>Site web</Text>
          <Text numberOfLines={1}>{website}</Text>
        </View>
      </View>
      <View style={styles.contact}>
        <View style={styles.iconContact}>
          <FontAwesome5 name="facebook" size={20} color="#533382" />
        </View>
        <View style={styles.contactInfo} flex={0.95}>
          <Text style={styles.fontContact}>Facebook</Text>
          <Text numberOfLines={1}>{facebook}</Text>
        </View>
      </View>
      {/* <View style={styles.contact}>
        <View style={styles.iconContact}>
          <FontAwesome5 name="instagram" size={20} color="#533382" />
        </View>
        <View style={styles.contactInfo}>
          <Text style={styles.fontContact}>Instagram</Text>
        </View>
      </View> */}
      <View style={styles.contact}>
        <View style={styles.iconContact}>
          <Ionicons name="trail-sign-outline" size={20} color="#533382" />
        </View>
        <View style={styles.contactInfo}>
          <Text style={styles.fontContact}>Itinéraire</Text>
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
  fontContact: { color: "#533382" },
  contactInfo: {
    // borderWidth: 1, borderColor: "black"
  },
});
