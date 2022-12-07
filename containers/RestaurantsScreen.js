import restaurants from "../assets/data/restaurants.json";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/core";
import { useIsFocused } from "@react-navigation/native";
import axios from "axios";
//Components
import GenerateStars from "../components/GenerateStars";
import GenerateDollars from "../components/GenerateDollars";
import SearchBar from "../components/SearchBar";
import Schedules from "../components/Schedules";
// import DateNow from "../components/DateNow";
// import Schedules from "../components/Schedules";
import IconType from "../components/IconType";
import { Ionicons, AntDesign } from "@expo/vector-icons";
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
  TextInput,
  ActivityIndicator,
} from "react-native";
//
function FocusAwareStatusBar(props) {
  const isFocused = useIsFocused();
  return isFocused ? <StatusBar {...props} /> : null;
}
//
export default function RestaurantsScreen() {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(true);
  const [searchText, setSearchText] = useState(null);
  // const [restaurantFiltered, setRestaurantFiltered] = useState([]);
  //
  // REQUETE EN COURS DE DEV !!!!!!!!!!!!!!!!!!!!!
  const searchRestaurants = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(
        "https://res.cloudinary.com/lereacteur-apollo/raw/upload/v1575242111/10w-full-stack/Scraping/restaurants.json",
        { params: { query: searchText } }
      );
      console.log("response ====>", response);
      console.log("response.data ====>", response.data);

      setSearchText(response.data);
    } catch (error) {
      console.log("ERREUR DE LA REQUETE AXIOS ===>", error);
    }
  };
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
  //Display Schedules
  // const tabSchedules = [];
  // const descriptionToArray = restaurants.description;
  // const tab2 = descriptionToArray.split(" ");
  // const open = tab2.findIndex((element) => element === "Open");
  // const closed = tab2.findIndex((element) => element === "Closed");
  // const OpeningDays = open + 1;
  // const openTab1 = tab2.slice(OpeningDays, closed);
  // const newTab = openTab1.join(" ");
  //

  //
  return (
    <View style={styles.mainContainerRestaurants}>
      <FocusAwareStatusBar barStyle="light-content" backgroundColor="#533382" />
      <SearchBar
        searchText={searchText}
        setSearchText={setSearchText}
        // onValueChange={searchRestaurants}
      />

      <View>
        <Text>{searchText}</Text>
      </View>
      <FlatList
        data={restaurants}
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
                <View
                  flex={1}
                  style={[styles.borderStyle, styles.imgRestaurant]}
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
                    <View flex={0.65}>
                      <Text numberOfLines={1} style={styles.textName}>
                        {item.name}
                      </Text>
                    </View>

                    <View alignItems={"center"}>
                      {/* {item.type === "Veg Store" && (
                        <Image
                          style={styles.iconType}
                          source={require("../assets/Icons/png/veg-store.png")}
                        />
                      )} */}
                      <Text>{IconType(item.type)}</Text>
                      {/* {item.type === "vegetarian" && (
                        <Image
                          style={styles.iconType}
                          source={require("../assets/Icons/png/vegetarian.png")}
                        />
                      )}
                      {item.type === "B&B" && (
                        <Image
                          style={styles.iconType}
                          source={require("../assets/Icons/png/B-B.png")}
                        />
                      )}
                      {item.type === "veg-options" && (
                        <Image
                          style={styles.iconType}
                          source={require("../assets/Icons/png/veg-options.png")}
                        />
                      )}
                      {item.type === "Catering" && (
                        <Image
                          style={styles.iconType}
                          source={require("../assets/Icons/png/Catering.png")}
                        />
                      )}
                      {item.type === "Health Store" && (
                        <Image
                          style={styles.iconType}
                          source={require("../assets/Icons/png/Health-Store.png")}
                        />
                      )}
                      {item.type === "Ice Cream" && (
                        <Image
                          style={styles.iconType}
                          source={require("../assets/Icons/png/ice-cream.png")}
                        />
                      )}
                      {item.type === "vegan" && (
                        <Image
                          style={styles.iconType}
                          source={require("../assets/Icons/png/vegan.png")}
                        />
                      )}
                      {item.type === "Delivery" && (
                        <Image
                          style={styles.iconType}
                          source={require("../assets/Icons/png/Delivery.png")}
                        />
                      )}
                      {item.type === "Organization" && (
                        <Image
                          style={styles.iconType}
                          source={require("../assets/Icons/png/Organization.png")}
                        />
                      )}
                      {item.type === "Food Truck" && (
                        <Image
                          style={styles.iconType}
                          source={require("../assets/Icons/png/Food-Truck.png")}
                        />
                      )}
                      {item.type === "Other" && (
                        <Image
                          style={styles.iconType}
                          source={require("../assets/Icons/png/Other.png")}
                        />
                      )}
                      {item.type === "Juice Bar" && (
                        <Image
                          style={styles.iconType}
                          source={require("../assets/Icons/png/Juice-Bar.png")}
                        />
                      )}
                      {item.type === "Professional" && (
                        <Image
                          style={styles.iconType}
                          source={require("../assets/Icons/png/Professional.png")}
                        />
                      )}
                      {item.type === "Bakery" && (
                        <Image
                          style={styles.iconType}
                          source={require("../assets/Icons/png/Bakery.png")}
                        />
                      )} */}
                    </View>
                  </View>
                  <View
                    flex={0.6}
                    flexDirection={"row"}
                    style={[styles.borderStyle, styles.ratingAndDistance]}
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
                    style={[styles.borderStyle, styles.schedulesAndPrice]}
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
                  <View
                    flex={1.3}
                    style={[styles.borderStyle, styles.descriptionRestaurant]}
                  >
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
}
//
const heightScreen = Dimensions.get("window").height;
const widthScreen = Dimensions.get("window").width;
//
const styles = StyleSheet.create({
  mainContainerRestaurants: {
    width: widthScreen,
  },

  restaurant: {
    height: heightScreen / 7, //on affiche 7 annonces par page avant de scroller, (6 en comptant le header)
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
    width: 24,
    height: 24,
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
  schedulesStyle: {
    // borderColor: "black",
    // borderWidth: 1,
  },
  priceStyle: {
    // borderColor: "black",
    // borderWidth: 1,
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
