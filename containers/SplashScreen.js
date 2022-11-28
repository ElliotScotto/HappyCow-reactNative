import {
  ActivityIndicator,
  StyleSheet,
  View,
  Image,
  Dimensions,
} from "react-native";
//import
//
//
const SplashScreen = () => {
  return (
    <>
      <ActivityIndicator color={"#7C49C7"} style={styles.loading} />
      <View style={styles.mainContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/happycowlogosplash.png")}
        />
      </View>
    </>
  );
};
export default SplashScreen;
//
//
// const heightScreen = Dimensions.get("window").height;
//
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#569D01",
  },
  loading: { backgroundColor: "#569D01", paddingTop: 50 },
  logo: { width: 200, height: 200 },
});
