import { useState } from "react";
import { Entypo } from "@expo/vector-icons";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
export default function Filters({ filter, setFilter }) {
  return (
    <View style={[styles.filters, styles.shadowFilter]}>
      <TouchableOpacity
        style={[styles.btnFilters, styles.shadowFilter]}
        onPress={() => {
          if (filter === "vegan") {
            setFilter("");
          } else if (!filter) {
            setFilter("vegan");
          }
        }}
      >
        <View marginBottom={4}>
          <Image
            style={styles.iconType}
            source={require("../assets/Icons/png/vegan.png")}
          />
        </View>
        <View>
          <Text style={styles.textFilter}>Vegan</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.btnFilters, styles.shadowFilter]}
        onPress={() => {
          if (filter === "vegetarian") {
            setFilter("");
          } else if (!filter) {
            setFilter("vegetarian");
          }
        }}
      >
        <View marginBottom={4}>
          <Image
            style={styles.iconType}
            source={require("../assets/Icons/png/vegetarian.png")}
          />
        </View>
        <View>
          <Text style={styles.textFilter}>Vegetarian</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.btnFilters, styles.shadowFilter]}
        onPress={() => {
          if (filter === "veg-options") {
            setFilter("");
          } else if (!filter) {
            setFilter("veg-options");
          }
        }}
      >
        <View marginBottom={4}>
          <Image
            style={styles.iconType}
            source={require("../assets/Icons/png/veg-options.png")}
          />
        </View>
        <View>
          <Text numberOfLines={1} style={styles.textFilter}>
            Veg-options
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.btnFilters, styles.shadowFilter]}>
        <View marginBottom={4}>
          <Entypo name="sound-mix" size={24} color="grey" />
        </View>
        <View>
          <Text style={styles.textFilter}>Filtres</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
//
//
const widthScreen = Dimensions.get("window").width;
const styles = StyleSheet.create({
  filters: {
    flexDirection: "row",
    height: 80,
    justifyContent: "space-evenly",
    paddingTop: 6,
    paddingBottom: 10,
    // borderColor: "black",
    // borderWidth: 1,
    backgroundColor: "#f1f1f1",
    marginBottom: 5,
  },
  textFilter: { fontWeight: "500" },
  btnFilters: {
    // borderColor: "blue",
    // borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    width: widthScreen * 0.22,
    borderRadius: 10,
    backgroundColor: "#ffffff",
  },
  iconType: {
    width: 24,
    height: 24,
  },
  //ShadowProp works only for ios vvv
  shadowFilter: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
});
