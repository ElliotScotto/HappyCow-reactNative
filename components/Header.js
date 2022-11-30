import { View, StyleSheet, Image } from "react-native";
//
export default function Header() {
  return (
    <View style={styles.headerContainer}>
      <Image
        resizeMode="contain"
        style={styles.headerHcStyle}
        source={require("../assets/happycowlogowhite.png")}
      />
    </View>
  );
}
//
//
const styles = StyleSheet.create({
  headerContainer: {
    alignSelf: "center",
  },
  headerHcStyle: {
    width: 118,
    height: 22,

    alignSelf: "center",

    // height: "100%",
  },
});
