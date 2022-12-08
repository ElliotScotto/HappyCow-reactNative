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
//

//
export default function Filters({ filter, setFilter }) {
  const [colorVegan, setColorVegan] = useState("#ffffff");
  const [colorVegetarian, setColorVegetarian] = useState("#ffffff");
  const [colorVegOptions, setColorVegOptions] = useState("#ffffff");
  const [colorFilter, setColorFilter] = useState("#ffffff");
  const [colorTextVegan, setColorTextVegan] = useState("black");
  const [colorTextVegetarian, setColorTextVegetarian] = useState("black");
  const [colorTextVegOptions, setColorTextVegOptions] = useState("black");
  return (
    <View style={[styles.filters, styles.shadowFilter]}>
      <View
        backgroundColor={colorVegan}
        style={[styles.btnFilters, styles.shadowFilter]}
      >
        <TouchableOpacity
          onPress={() => {
            if (filter === "vegan") {
              setFilter("");
              setColorVegan("#ffffff");
              setColorTextVegan("black");
            } else if (!filter) {
              setFilter("vegan");
              setColorVegan("#43A047");
              setColorTextVegan("#ffffff");
            }
          }}
        >
          <View marginBottom={4} alignItems={"center"}>
            <Image
              style={styles.iconType}
              source={require("../assets/Icons/png/vegan.png")}
            />
          </View>
          <View>
            <Text style={[styles.textFilter, { color: colorTextVegan }]}>
              Vegan
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View
        backgroundColor={colorVegetarian}
        style={[styles.btnFilters, styles.shadowFilter]}
      >
        <TouchableOpacity
          style={[styles.btnFilters, styles.shadowFilter]}
          onPress={() => {
            if (filter === "vegetarian") {
              setFilter("");
              setColorVegetarian("#ffffff");
              setColorTextVegetarian("black");
            } else if (!filter) {
              setFilter("vegetarian");
              setColorVegetarian("#9C4EA1");
              setColorTextVegetarian("#ffffff");
            }
          }}
        >
          <View marginBottom={4} alignItems={"center"}>
            <Image
              style={styles.iconType}
              source={require("../assets/Icons/png/vegetarian.png")}
            />
          </View>
          <View>
            <Text style={[styles.textFilter, { color: colorTextVegetarian }]}>
              Vegetarian
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View
        backgroundColor={colorVegOptions}
        style={[styles.btnFilters, styles.shadowFilter]}
      >
        <TouchableOpacity
          style={[styles.btnFilters, styles.shadowFilter]}
          onPress={() => {
            if (filter === "veg-options") {
              setFilter("");
              setColorVegOptions("#ffffff");
              setColorTextVegOptions("black");
            } else if (!filter) {
              setFilter("veg-options");
              setColorVegOptions("#E17878");
              setColorTextVegOptions("#ffffff");
            }
          }}
        >
          <View marginBottom={4} alignItems={"center"}>
            <Image
              style={styles.iconType}
              source={require("../assets/Icons/png/veg-options.png")}
            />
          </View>
          <View>
            <Text
              numberOfLines={1}
              style={[styles.textFilter, { color: colorTextVegOptions }]}
            >
              Veg-options
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View
        backgroundColor={colorFilter}
        style={[styles.btnFilters, styles.shadowFilter]}
      >
        <TouchableOpacity style={[styles.btnFilters, styles.shadowFilter]}>
          <View marginBottom={4} alignItems={"center"}>
            <Entypo name="sound-mix" size={24} color="grey" />
          </View>
          <View>
            <Text style={styles.textFilter}>Filtres</Text>
          </View>
        </TouchableOpacity>
      </View>
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
