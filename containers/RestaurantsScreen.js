import restaurants from "../assets/data/restaurants.json";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/core";
//Components
import GenerateStars from "../components/GenerateStars";
import GenerateDollars from "../components/GenerateDollars";
import SearchBar from "../components/SearchBar";
import Schedules from "../components/Schedules";
// import DateNow from "../components/DateNow";
// import Schedules from "../components/Schedules";
import IconType from "../components/IconType";
import MainPicture from "../components/MainPicture";
import Filters from "../components/Filters";
//
import { Ionicons } from "@expo/vector-icons";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  FlatList,
  StatusBar,
  TouchableOpacity,
} from "react-native";

//
//
export default function RestaurantsScreen() {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [filter, setFilter] = useState("");
  //
  //
  //
  //Header go to MapScreen
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate("Map")}>
          <Ionicons name="map-sharp" size={24} color="white" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
  //
  //
  const newRegexp = new RegExp(searchText, "i");

  const restaurantsFiltered = restaurants.filter((obj) => {
    if (filter) {
      if (filter === "vegan" && obj.type.match("vegan")) {
        return true;
      } else if (filter === "vegetarian" && obj.type.match("vegetarian")) {
        return true;
      } else if (filter === "veg-options" && obj.type.match("veg-options")) {
        return true;
      } else {
        return false;
      }
    } else {
      if (
        obj.name.match(newRegexp) ||
        (obj.description && obj.description.match(newRegexp)) ||
        obj.type.match(newRegexp)
      ) {
        return true;
      } else {
        return false;
      }
    }
  });
  //
  //
  //
  return (
    <View style={styles.mainContainerRestaurants}>
      <StatusBar barStyle="light-content" backgroundColor="#533382" />
      <SearchBar searchText={searchText} setSearchText={setSearchText} />
      <Filters filter={filter} setFilter={setFilter} />
      {console.log("console.log du state filter ===> ", filter)}
      <FlatList
        data={restaurantsFiltered}
        keyExtractor={(item) => String(item.placeId)}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Restaurant", {
                  id: item.placeId,
                  name: item.name,
                  address: item.address,
                  phone: item.phone,
                  type: item.type,
                  price: item.price,
                  rating: item.rating,
                  pictures: item.pictures,
                  description: item.description,
                  latitude: item.location.lat,
                  longitude: item.location.lng,
                  website: item.website,
                  facebook: item.facebook,
                });
              }}
            >
              <View
                flexDirection={"row"}
                style={[styles.borderStyle2, styles.restaurant]}
              >
                <View flex={1} style={styles.imgRestaurant}>
                  <Text>{MainPicture(item.thumbnail)}</Text>
                </View>
                <View flex={3} height={"100%"} style={styles.borderStyle4}>
                  <View
                    flex={0.8}
                    flexDirection={"row"}
                    style={styles.titleAndType}
                  >
                    <View flex={0.65}>
                      <Text numberOfLines={1} style={styles.textName}>
                        {item.name}
                      </Text>
                    </View>

                    <View alignItems={"center"}>
                      <Text>{IconType(item.type)}</Text>
                    </View>
                  </View>
                  <View
                    flex={0.6}
                    flexDirection={"row"}
                    style={styles.ratingAndDistance}
                  >
                    <View alignItems={"center"}>
                      <Text>{GenerateStars(item.rating)}</Text>
                    </View>
                    <View>
                      <Text>Distance</Text>
                    </View>
                  </View>
                  <View
                    flex={0.7}
                    flexDirection={"row"}
                    style={styles.schedulesAndPrice}
                  >
                    <View flex={0.8} style={styles.schedulesStyle}>
                      {item.description ? (
                        <Text numberOfLines={1}>
                          {Schedules(restaurants[index].description)}
                        </Text>
                      ) : (
                        <Text numberOfLines={1}>Horaires inconnus</Text>
                      )}
                    </View>
                    <View flex={0.2} style={styles.priceStyle}>
                      <Text>{GenerateDollars(item.price)}</Text>
                    </View>
                  </View>
                  <View flex={1.3} style={styles.descriptionRestaurant}>
                    {item.description ? (
                      <Text numberOfLines={2}>{item.description}</Text>
                    ) : (
                      <Text numberOfLines={2}>
                        Cet établissement ne possède pas de description.
                      </Text>
                    )}
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
  //
  //
  //
}
//
const heightScreen = Dimensions.get("window").height;
const widthScreen = Dimensions.get("window").width;
//
const styles = StyleSheet.create({
  mainContainerRestaurants: {
    width: widthScreen,
    backgroundColor: "#ffffff",
  },
  restaurant: {
    height: heightScreen / 7, //on affiche 7 annonces par page avant de scroller, (6 en comptant le header)
    alignItems: "center",
    justifyContent: "center",
    height: 100,
  },
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
  borderStyle2: {
    marginTop: 7,
    marginLeft: 7,
    marginRight: 7,
  },
  imgRestaurant: {
    width: 100,
    height: 100,
    marginLeft: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  borderStyle4: {
    height: "100%",
  },
  titleAndType: {
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 7,
    paddingRight: 7,
  },
  ratingAndDistance: {
    justifyContent: "space-between",
    paddingLeft: 7,
    paddingRight: 7,
  },
  schedulesAndPrice: {
    paddingLeft: 7,
    paddingRight: 5,
  },
  schedulesStyle: {},
  priceStyle: {
    alignItems: "center",
  },
  descriptionRestaurant: {
    paddingLeft: 7,
    paddingRight: 7,
  },

  textName: { fontWeight: "bold", fontSize: 16 },
  typeRestaurant: {},
  ratingRestaurant: {},
  distanceRestaurant: {},
  schedulesRestaurant: {},
  priceRestaurant: {},
});
