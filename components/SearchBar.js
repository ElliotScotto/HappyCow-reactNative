import { StyleSheet, Text, View, TextInput, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
//
export default function SearchBar(props) {
  return (
    <View style={styles.mainSearchView}>
      <View style={styles.barSearch}>
        <View style={styles.iconSearch}>
          <Text>
            <Ionicons name="ios-compass-outline" size={24} color="grey" />
          </Text>
        </View>
        <View style={styles.inputSearch}>
          <TextInput
            placeholder="A proximité"
            autoCapitalize="none"
            value={props.searchText}
            onChangeText={(text) => props.setSearchText(text)}
            onSubmitEditing={props.onSubmit}
          />
        </View>
      </View>
    </View>
  );
}
//
//
const widthScreen = Dimensions.get("window").width;
const styles = StyleSheet.create({
  mainSearchView: {
    height: 60,
    backgroundColor: "#7C49C7",
    alignItems: "center",
    justifyContent: "center",
  },
  barSearch: {
    backgroundColor: "white",
    flexDirection: "row",
    width: widthScreen * 0.9,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  iconSearch: {
    height: 40,
    width: "10%",
    alignItems: "center",
    justifyContent: "center",

    borderTopLeftRadius: 7,
    borderBottomLeftRadius: 7,
  },
  inputSearch: {
    height: 40,
    justifyContent: "center",
    backgroundColor: "white",
    width: "90%",
    borderTopRightRadius: 7,
    borderBottomRightRadius: 7,
  },
});
