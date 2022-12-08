import { StyleSheet, Image, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
//
const MainPicture = (thumbnail) => {
  return !thumbnail ||
    thumbnail === "https://www.happycow.net/img/no-image.jpg" ? (
    <View alignItems={"center"}>
      <Ionicons name="restaurant-outline" size={40} color="#7C49C7" />
      <Text>No Image</Text>
    </View>
  ) : (
    <View>
      <Image
        style={styles.imgResto}
        resizeMode={"cover"}
        source={{ uri: thumbnail }}
      />
    </View>
  );
};
//
export default MainPicture;
//
const styles = StyleSheet.create({
  imgResto: {
    width: 95,
    height: 95,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
});
