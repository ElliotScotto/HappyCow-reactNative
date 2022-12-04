import restaurants from "../assets/data/restaurants.json";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/core";
import { useIsFocused } from "@react-navigation/native";
import axios from "axios";
//Components
import GenerateStars from "../components/GenerateStars";
import GenerateDollars from "../components/GenerateDollars";
import SearchBar from "../components/SearchBar";
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
  const [searchText, setSearchText] = useState("");
  const [restaurantFiltered, setRestaurantFiltered] = useState([]);
  //
  // REQUETE EN COURS DE DEV !!!!!!!!!!!!!!!!!!!!!
  const searchRestaurants = () => {
    try {
      const response = axios.get(
        "https://res.cloudinary.com/lereacteur-apollo/raw/upload/v1575242111/10w-full-stack/Scraping/restaurants.json",
        { params: { query: searchText } }
      );
      console.log("response=>>>");
      setRestaurantFiltered(response.data.restaurantFiltered);
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
  //
  return (
    <View style={styles.mainContainerRestaurants}>
      <FocusAwareStatusBar barStyle="light-content" backgroundColor="#533382" />
      <SearchBar
        searchText={searchText}
        setSearchText={setSearchText}
        onSubmit={searchRestaurants}
      />

      {/* FLATLIST PAR DEFAUT SANS FILTRES */}
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
                  latitude: item.location.lat,
                  longitude: item.location.lng,
                  website: item.website,
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
                      {item.type === "Veg Store" && (
                        <AntDesign
                          name="checkcircle"
                          size={16}
                          color="#6BA363"
                        />
                      )}
                      {item.type === "vegetarian" && (
                        <AntDesign
                          name="checkcircle"
                          size={16}
                          color="#9C4EA1"
                        />
                      )}
                      {item.type === "B&B" && (
                        <AntDesign
                          name="checkcircle"
                          size={16}
                          color="#4498B1"
                        />
                      )}
                      {item.type === "veg-options" && (
                        <AntDesign
                          name="checkcircle"
                          size={16}
                          color="#E17878"
                        />
                      )}
                      {item.type === "Catering" && (
                        <AntDesign
                          name="checkcircle"
                          size={16}
                          color="#3FBBAF"
                        />
                      )}
                      {item.type === "Health Store" && (
                        <AntDesign
                          name="checkcircle"
                          size={16}
                          color="#DCC253"
                        />
                      )}
                      {item.type === "Ice Cream" && (
                        <AntDesign
                          name="checkcircle"
                          size={16}
                          color="#F16594"
                        />
                      )}
                      {item.type === "vegan" && (
                        <AntDesign
                          name="checkcircle"
                          size={16}
                          color="#43A047"
                        />
                      )}
                      {item.type === "Delivery" && (
                        <AntDesign
                          name="checkcircle"
                          size={16}
                          color="#8DB863"
                        />
                      )}
                      {item.type === "Organization" && (
                        <AntDesign
                          name="checkcircle"
                          size={16}
                          color="#A1579C"
                        />
                      )}
                      {item.type === "Food Truck" && (
                        <AntDesign
                          name="checkcircle"
                          size={16}
                          color="#C082F6"
                        />
                      )}
                      {item.type === "Other" && (
                        <AntDesign
                          name="checkcircle"
                          size={16}
                          color="#608AC5"
                        />
                      )}
                      {item.type === "Juice Bar" && (
                        <AntDesign
                          name="checkcircle"
                          size={16}
                          color="#FBBC64"
                        />
                      )}
                      {item.type === "Professional" && (
                        <AntDesign
                          name="checkcircle"
                          size={16}
                          color="#35805C"
                        />
                      )}
                      {item.type === "Bakery" && (
                        <AntDesign
                          name="checkcircle"
                          size={16}
                          color="#AC8951"
                        />
                      )}
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
                    <View flex={0.7} style={styles.schedulesStyle}>
                      <Text numberOfLines={1}>Horaires</Text>
                    </View>
                    <View flex={0.3} style={styles.priceStyle}>
                      <Text>{GenerateDollars(item.price)}</Text>
                    </View>
                  </View>
                  <View
                    flex={1.3}
                    style={[styles.borderStyle, styles.descriptionRestaurant]}
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
