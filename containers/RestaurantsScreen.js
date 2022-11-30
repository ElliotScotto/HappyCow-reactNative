import restaurants from "../assets/data/restaurants.json";
import { useState } from "react";
import { useNavigation } from "@react-navigation/core";
import { useIsFocused } from "@react-navigation/native";
//Components
import GenerateStars from "../components/GenerateStars";
import GenerateDollars from "../components/GenerateDollars";
// import DateNow from "../components/DateNow";
// import Schedules from "../components/Schedules";
// import * as Location from "expo-location";
// import Type from "../components/Type";
import { Ionicons } from "@expo/vector-icons";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  Image,
  FlatList,
  Platform,
  StatusBar,
  TouchableOpacity,
} from "react-native";
//
//ZONE TEST
// let hourDayUTC = new Date().getUTCHours();
//console.log("DateNow() de Restaurants ICI ===>", DateNow(1));
//
//
//console.log(restaurants.length); //924
// console.log(restaurants[0].thumbnail);
//
function FocusAwareStatusBar(props) {
  const isFocused = useIsFocused();
  return isFocused ? <StatusBar {...props} /> : null;
}
//
export default function RestaurantsScreen() {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(true);

  //
  //
  return (
    <View style={styles.mainContainerRestaurants}>
      <FocusAwareStatusBar barStyle="light-content" backgroundColor="#533382" />

      <FlatList
        data={restaurants}
        keyExtractor={(item) => String(item.placeId)}
        renderItem={({ item }) => {
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
                  latitude: item.location[1],
                  longitude: item.location[0],
                  website: item.website,
                });
              }}
            >
              <View
                key={item.placeId}
                flexDirection={"row"}
                style={[styles.borderStyle2, styles.restaurant]}
              >
                <View
                  flex={1}
                  style={[styles.borderStyle, styles.imgRestaurant]}
                  key={item.thumbnail}
                >
                  {!item.thumbnail ||
                  item.thumbnail ===
                    "https://www.happycow.net/img/no-image.jpg" ? (
                    <View alignItems={"center"}>
                      <Ionicons
                        name="restaurant-outline"
                        size={40}
                        color="#7C49C7"
                      />
                      <Text>No Image</Text>
                    </View>
                  ) : (
                    <View>
                      <Image
                        style={styles.imgResto}
                        resizeMode={"cover"}
                        source={{ uri: item.thumbnail }}
                      />
                    </View>
                  )}
                </View>
                <View flex={3} height={"100%"} style={styles.borderStyle4}>
                  <View
                    flex={0.8}
                    flexDirection={"row"}
                    style={[styles.borderStyle, styles.titleAndType]}
                  >
                    <View flex={0.65} key={item.name}>
                      <Text numberOfLines={1} style={styles.textName}>
                        {item.name}
                      </Text>
                    </View>

                    <View alignItems={"center"} flex={0.35} key={item.type}>
                      {/* {console.log(item.type)} */}
                      <Text>{item.type}</Text>
                    </View>
                  </View>
                  <View
                    flex={0.6}
                    flexDirection={"row"}
                    style={[styles.borderStyle, styles.ratingAndDistance]}
                  >
                    <View alignItems={"center"} key={item.rating}>
                      <Text>{GenerateStars(item.rating)}</Text>
                    </View>
                    <View key={item.location}>
                      <Text>Distance</Text>
                    </View>
                  </View>
                  <View
                    flex={0.7}
                    flexDirection={"row"}
                    style={[styles.borderStyle, styles.schedulesAndPrice]}
                  >
                    <View
                      flex={0.7}
                      style={styles.schedulesStyle}
                      key={item.nearbyPlacesIds}
                    >
                      <Text numberOfLines={1}>Horaires</Text>
                    </View>
                    <View flex={0.3} style={styles.priceStyle} key={item.price}>
                      <Text>{GenerateDollars(item.price)}</Text>
                    </View>
                  </View>
                  <View
                    flex={1.3}
                    style={[styles.borderStyle, styles.descriptionRestaurant]}
                    key={item.description}
                  >
                    <Text numberOfLines={2}>{item.description}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}
//
const heightScreen = Dimensions.get("window").height;
const widthScreen = Dimensions.get("window").width;
const styles = StyleSheet.create({
  mainContainerRestaurants: {
    width: widthScreen,
  },
  restaurant: {
    height: heightScreen / 7, //on veut afficher 7 annonces par page avant de scroller, (6 en comptant la map)
    // borderColor: "black",
    // borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 100,
  },
  borderStyle2: {
    // borderColor: "blue",
    // borderWidth: 1,
    marginTop: 7,
    marginLeft: 7,
    marginRight: 7,

    // padding: 1,
  },
  imgRestaurant: {
    // borderColor: "black",
    // borderWidth: 1,
    width: 100,
    height: 100,
    marginLeft: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  imgResto: {
    width: 95,
    height: 95,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  // borderStyle: { borderColor: "black", borderWidth: 1 },

  // borderStyle3: { borderColor: "gold", borderWidth: 1, padding: 1 },
  borderStyle4: {
    // borderColor: "green",
    // borderWidth: 1,
    // padding: 1,
    height: "100%",
  },
  titleAndType: {
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 7,
    paddingRight: 7,
  },
  iconType: {
    width: 16,
    height: 16,
  },
  ratingAndDistance: {
    justifyContent: "space-between",
    paddingLeft: 7,
    paddingRight: 7,
  },
  schedulesAndPrice: {
    justifyContent: "space-between",
    paddingLeft: 7,
    paddingRight: 7,
  },
  schedulesStyle: {
    // borderColor: "black",
    // borderWidth: 1,
  },
  priceStyle: {
    // borderColor: "black", borderWidth: 1,
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
