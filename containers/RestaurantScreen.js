import Swiper from "react-native-swiper";
import * as Location from "expo-location";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { useState, useEffect } from "react";
import {
  Ionicons,
  Feather,
  FontAwesome5,
  MaterialCommunityIcons,
  Entypo,
} from "@expo/vector-icons";
import {
  Text,
  View,
  Dimensions,
  StatusBar,
  Platform,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
//Components
import GenerateStars from "../components/GenerateStars";
import Schedules from "../components/Schedules";
import OnlyDescription from "../components/OnlyDescription";
import MainContacts from "../components/MainContacts";
import LastContacts from "../components/LastContacts";
//
const heightScreen = Dimensions.get("window").height;
const widthScreen = Dimensions.get("window").width;
//
export default function RestaurantScreen({ route, navigation }) {
  //
  //valeurs récupérées de RestaurantsScreen
  const id = route.params.id;
  const price = route.params.price;
  const name = route.params.name;
  const address = route.params.address;
  const phone = route.params.phone;
  const type = route.params.type;
  const rating = route.params.rating;
  const pictures = route.params.pictures;
  const description = route.params.description;
  const latitude = route.params.latitude;
  const longitude = route.params.longitude;
  const website = route.params.website;
  const facebook = route.params.facebook;
  //
  const [coords, setCoords] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);
  //
  //
  //
  // Header go back to Restaurants
  // ALL COLORS TYPE
  const colorVegStore = "#6BA363";
  const colorVegetarian = "#9C4EA1";
  const colorVegOptions = "#E17878";
  const colorBB = "#4498B1";
  const colorCatering = "#3FBBAF";
  const colorCoffeeTea = "#CC8F3E";
  const colorDelivery = "#8DB863";
  const colorFarmersMarket = "#D3674F";
  const colorFoodTruck = "#C082F6";
  const colorIceCream = "#F16594";
  const colorJuiceBar = "#FBBC64";
  const colorMarketVendor = "#525CA8";
  const colorOrganization = "#A1579C";
  const colorOther = "#608AC5";
  const colorProfessional = "#35805C";
  const colorSpa = "#6BCCDC";
  const colorHealthStore = "#DCC253";
  const colorVeganOnly = "#43A047";
  const colorBakery = "#AC8951";
  //
  //
  //Header Style
  if (type === "Veg Store") {
    useEffect(() => {
      navigation.setOptions({
        headerStyle: { backgroundColor: colorVegStore },
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.navigate("Restaurants")}>
            <Feather name="arrow-left" size={24} color="white" />
          </TouchableOpacity>
        ),
      });
    }, [navigation]);
  }
  //
  if (type === "vegan") {
    useEffect(() => {
      navigation.setOptions({
        headerStyle: { backgroundColor: colorVeganOnly },
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.navigate("Restaurants")}>
            <Feather name="arrow-left" size={24} color="white" />
          </TouchableOpacity>
        ),
      });
    }, [navigation]);
  }
  //
  if (type === "Other") {
    useEffect(() => {
      navigation.setOptions({
        headerStyle: { backgroundColor: colorOther },
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.navigate("Restaurants")}>
            <Feather name="arrow-left" size={24} color="white" />
          </TouchableOpacity>
        ),
      });
    }, [navigation]);
  }
  //
  if (type === "Health Store") {
    useEffect(() => {
      navigation.setOptions({
        headerStyle: { backgroundColor: colorHealthStore },
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.navigate("Restaurants")}>
            <Feather name="arrow-left" size={24} color="white" />
          </TouchableOpacity>
        ),
      });
    }, [navigation]);
  }
  //
  if (type === "veg-options") {
    useEffect(() => {
      navigation.setOptions({
        headerStyle: { backgroundColor: colorVegOptions },
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.navigate("Restaurants")}>
            <Feather name="arrow-left" size={24} color="white" />
          </TouchableOpacity>
        ),
      });
    }, [navigation]);
  }
  //
  if (type === "vegetarian") {
    useEffect(() => {
      navigation.setOptions({
        headerStyle: { backgroundColor: colorVegetarian },
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.navigate("Restaurants")}>
            <Feather name="arrow-left" size={24} color="white" />
          </TouchableOpacity>
        ),
      });
    }, [navigation]);
  }
  //
  if (type === "Ice Cream") {
    useEffect(() => {
      navigation.setOptions({
        headerStyle: { backgroundColor: colorIceCream },
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.navigate("Restaurants")}>
            <Feather name="arrow-left" size={24} color="white" />
          </TouchableOpacity>
        ),
      });
    }, [navigation]);
  }
  //
  if (type === "Catering") {
    useEffect(() => {
      navigation.setOptions({
        headerStyle: { backgroundColor: colorCatering },
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.navigate("Restaurants")}>
            <Feather name="arrow-left" size={24} color="white" />
          </TouchableOpacity>
        ),
      });
    }, [navigation]);
  }
  //
  if (type === "Delivery") {
    useEffect(() => {
      navigation.setOptions({
        headerStyle: { backgroundColor: colorDelivery },
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.navigate("Restaurants")}>
            <Feather name="arrow-left" size={24} color="white" />
          </TouchableOpacity>
        ),
      });
    }, [navigation]);
  }
  //
  if (type === "Food Truck") {
    useEffect(() => {
      navigation.setOptions({
        headerStyle: { backgroundColor: colorFoodTruck },
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.navigate("Restaurants")}>
            <Feather name="arrow-left" size={24} color="white" />
          </TouchableOpacity>
        ),
      });
    }, [navigation]);
  }
  //
  if (type === "Bakery") {
    useEffect(() => {
      navigation.setOptions({
        headerStyle: { backgroundColor: colorBakery },
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.navigate("Restaurants")}>
            <Feather name="arrow-left" size={24} color="white" />
          </TouchableOpacity>
        ),
      });
    }, [navigation]);
  }
  //
  if (type === "B&B") {
    useEffect(() => {
      navigation.setOptions({
        headerStyle: { backgroundColor: colorBB },
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.navigate("Restaurants")}>
            <Feather name="arrow-left" size={24} color="white" />
          </TouchableOpacity>
        ),
      });
    }, [navigation]);
  }
  //
  if (type === "Juice Bar") {
    useEffect(() => {
      navigation.setOptions({
        headerStyle: { backgroundColor: colorJuiceBar },
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.navigate("Restaurants")}>
            <Feather name="arrow-left" size={24} color="white" />
          </TouchableOpacity>
        ),
      });
    }, [navigation]);
  }
  //
  if (type === "Organization") {
    useEffect(() => {
      navigation.setOptions({
        headerStyle: { backgroundColor: colorOrganization },
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.navigate("Restaurants")}>
            <Feather name="arrow-left" size={24} color="white" />
          </TouchableOpacity>
        ),
      });
    }, [navigation]);
  }
  //
  if (type === "Market Vendor") {
    useEffect(() => {
      navigation.setOptions({
        headerStyle: { backgroundColor: colorMarketVendor },
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.navigate("Restaurants")}>
            <Feather name="arrow-left" size={24} color="white" />
          </TouchableOpacity>
        ),
      });
    }, [navigation]);
  }
  //
  if (type === "Professional") {
    useEffect(() => {
      navigation.setOptions({
        headerStyle: { backgroundColor: colorProfessional },
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.navigate("Restaurants")}>
            <Feather name="arrow-left" size={24} color="white" />
          </TouchableOpacity>
        ),
      });
    }, [navigation]);
  }
  //
  //
  //
  //
  //
  useEffect(() => {
    const askPermission = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status === "granted") {
        let location = await Location.getCurrentPositionAsync({});
        // console.log("CONSOLE.LOG de location ===>  ", location);
        const obj = {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        };
        setCoords(obj);
        // console.log("CONSOLE.LOG de obj ===>  ", obj);
        // console.log("CONSOLE.LOG de latitude ===>  ", latitude);
        setIsLoading(false);
      } else {
        setError(true);
      }
    };
    askPermission();
  }, []);
  //

  return isLoading ? ( // step 1
    <ActivityIndicator
      color={"#7C49C7"}
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    /> // step 2
  ) : error ? ( // step 3
    <Text>Permission refusée</Text> // step 4
  ) : (
    <ScrollView>
      <SafeAreaView
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          borderWidth: 1,
          borderColor: "black",
        }}
      >
        {type === "Veg Store" && (
          <StatusBar barStyle="light-content" backgroundColor="#4b6947" />
        )}
        {type === "vegetarian" && (
          <StatusBar barStyle="light-content" backgroundColor="#6f3271" />
        )}
        {type === "veg-options" && (
          <StatusBar barStyle="light-content" backgroundColor="#8b3838" />
        )}
        {type === "B&B" && (
          <StatusBar barStyle="light-content" backgroundColor="#1e5479" />
        )}
        {type === "Catering" && (
          <StatusBar barStyle="light-content" backgroundColor="#1d787d" />
        )}
        {type === "Health Store" && (
          <StatusBar barStyle="light-content" backgroundColor="#977424" />
        )}
        {type === "Ice Cream" && (
          <StatusBar barStyle="light-content" backgroundColor="#9f3347" />
        )}
        {type === "Delivery" && (
          <StatusBar barStyle="light-content" backgroundColor="#466829" />
        )}
        {type === "Organization" && (
          <StatusBar barStyle="light-content" backgroundColor="#642456" />
        )}
        {type === "Other" && (
          <StatusBar barStyle="light-content" backgroundColor="#3d648a" />
        )}
        {type === "Food Truck" && (
          <StatusBar barStyle="light-content" backgroundColor="#67419e" />
        )}
        {type === "Juice Bar" && (
          <StatusBar barStyle="light-content" backgroundColor="#af6d2c" />
        )}
        {type === "Professional" && (
          <StatusBar barStyle="light-content" backgroundColor="#124f39" />
        )}
        {type === "Bakery" && (
          <StatusBar barStyle="light-content" backgroundColor="#69552e" />
        )}
        {type === "Market Vendor" && (
          <StatusBar barStyle="light-content" backgroundColor="#69552e" />
        )}

        <View position={"relative"}>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              width: widthScreen,
              height: 170,
            }}
          >
            <View flex={1} justifyContent={"center"}>
              {!pictures[0] ||
              pictures[0] === "https://www.happycow.net/img/no-image.jpg" ? (
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
                    style={styles.mainPicture}
                    source={{ uri: pictures[0] }}
                  />
                </View>
              )}
            </View>
          </View>
          <View style={styles.infoStyle}>
            <View backgroundColor={colorBakery} paddingHorizontal={10}>
              <View
                style={{
                  height: 36,
                  borderColor: "black",
                  borderWidth: 1,
                  justifyContent: "center",
                }}
              >
                <Text
                  numberOfLines={1}
                  style={{
                    fontSize: 20,
                    fontWeight: "500",
                    borderColor: "black",
                    borderWidth: 1,
                    width: widthScreen * 0.65,
                  }}
                >
                  {name}
                </Text>
              </View>
              <View
                style={{
                  height: 28,
                  borderColor: "black",
                  borderWidth: 1,
                  justifyContent: "center",
                }}
              >
                <Text>{GenerateStars(rating)}</Text>
              </View>

              <View
                style={{
                  height: 28,
                  flexDirection: "row",
                  borderColor: "black",
                  borderWidth: 1,
                }}
              >
                <View
                  style={{
                    flex: 0.7,
                    borderColor: "black",
                    borderWidth: 1,
                    justifyContent: "center",
                  }}
                >
                  <Text numberOfLines={1} style={{ color: "black" }}>
                    {Schedules(description)}
                  </Text>
                </View>
                <View
                  style={{
                    flex: 0.3,
                    borderColor: "black",
                    borderWidth: 1,
                    justifyContent: "center",
                  }}
                >
                  <Text>Distance</Text>
                </View>
              </View>
            </View>
          </View>
          <View position={"absolute"} right={20} top={152}>
            {type === "Veg Store" && (
              <Image
                style={styles.iconType}
                source={require("../assets/Icons/png/veg-store.png")}
              />
            )}
            {type === "vegan" && (
              <Image
                style={styles.iconType}
                source={require("../assets/Icons/png/vegan.png")}
              />
            )}
            {type === "vegetarian" && (
              <Image
                style={styles.iconType}
                source={require("../assets/Icons/png/vegetarian.png")}
              />
            )}
            {type === "veg-options" && (
              <Image
                style={styles.iconType}
                source={require("../assets/Icons/png/veg-options.png")}
              />
            )}
            {type === "B&B" && (
              <Image
                style={styles.iconType}
                source={require("../assets/Icons/png/B-B.png")}
              />
            )}
            {type === "Catering" && (
              <Image
                style={styles.iconType}
                source={require("../assets/Icons/png/Catering.png")}
              />
            )}
            {type === "Health Store" && (
              <Image
                style={styles.iconType}
                source={require("../assets/Icons/png/Health-Store.png")}
              />
            )}
            {type === "Ice Cream" && (
              <Image
                style={styles.iconType}
                source={require("../assets/Icons/png/ice-cream.png")}
              />
            )}
            {type === "Delivery" && (
              <Image
                style={styles.iconType}
                source={require("../assets/Icons/png/Delivery.png")}
              />
            )}
            {type === "Organization" && (
              <Image
                style={styles.iconType}
                source={require("../assets/Icons/png/Organization.png")}
              />
            )}
            {type === "Other" && (
              <Image
                style={styles.iconType}
                source={require("../assets/Icons/png/Other.png")}
              />
            )}
            {type === "Food Truck" && (
              <Image
                style={styles.iconType}
                source={require("../assets/Icons/png/Food-Truck.png")}
              />
            )}
            {type === "Juice Bar" && (
              <Image
                style={styles.iconType}
                source={require("../assets/Icons/png/Juice-Bar.png")}
              />
            )}
            {type === "Professional" && (
              <Image
                style={styles.iconType}
                source={require("../assets/Icons/png/Professional.png")}
              />
            )}
            {type === "Bakery" && (
              <Image
                style={styles.iconType}
                source={require("../assets/Icons/png/Bakery.png")}
              />
            )}
          </View>
        </View>

        <View
          style={{
            paddingHorizontal: 10,
            marginBottom: 20,
            alignItems: "center",
            justifyContent: "center",
            width: widthScreen,
          }}
        >
          {description !== "null" ? (
            <Text style={{ fontSize: 16, fontWeight: "500", lineHeight: 24 }}>
              {OnlyDescription(description)}
            </Text>
          ) : (
            <Text style={{ fontSize: 16, fontWeight: "500", lineHeight: 24 }}>
              Cet établissement ne possède pas de description.
            </Text>
          )}
        </View>
        <View
          style={{
            paddingTop: 20,
            alignItems: "center",
            width: widthScreen,
            height: 140,
            borderTopWidth: 1,
            borderTopColor: "lightgrey",
          }}
        >
          <MainContacts />
        </View>
        <View>
          <MapView
            // La MapView doit obligatoirement avoir des dimensions
            style={styles.map}
            initialRegion={{
              latitude: 48.856614,
              longitude: 2.3522219,
              latitudeDelta: 0.03,
              longitudeDelta: 0.03,
            }}
            showsUserLocation={true}
            provider={PROVIDER_GOOGLE}
          >
            <Marker
              coordinate={{
                latitude: latitude,
                longitude: longitude,
              }}
              title={name}
            />
          </MapView>
          <View style={styles.addressStyle}>
            <View
              style={{
                height: "100%",
                justifyContent: "center",
              }}
            >
              <Text numberOfLines={2}>{address}</Text>
            </View>
          </View>
        </View>
        <View style={styles.allContacts}>
          <LastContacts
            phone={phone}
            description={description}
            website={website}
            facebook={facebook}
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
//
//
const styles = StyleSheet.create({
  mainPicture: {
    width: widthScreen,
    height: "100%",
    resizeMode: "cover",
  },
  iconType: {
    width: 36,
    height: 36,
  },
  infoStyle: {
    width: widthScreen,
    marginBottom: 20,
  },
  bgVegStore: { backgroundColor: "#6BA363" },
  bgVegetarian: { backgroundColor: "#9C4EA1" },
  bgBB: { backgroundColor: "#4498B1" },
  bgVegOp: { backgroundColor: "#E17878" },
  bgCatering: { backgroundColor: "#3FBBAF" },
  bgHealthStore: { backgroundColor: "#DCC253" },
  bgIceCream: { backgroundColor: "#F16594" },
  bgVegan: { backgroundColor: "#43A047" },
  bgDelivery: { backgroundColor: "#8DB863" },
  bgOrganization: { backgroundColor: "#A1579C" },
  bgFoodTruck: { backgroundColor: "#C082F6" },
  bgOther: { backgroundColor: "#608AC5" },
  bgJuiceBar: { backgroundColor: "#FBBC64" },
  bgProfessional: { backgroundColor: "#35805C" },
  bgBakery: { backgroundColor: "#AC8951" },

  map: {
    marginTop: 20,
    height: heightScreen * 0.25,
    width: widthScreen * 0.95,
  },
  addressStyle: {
    backgroundColor: "lightgrey",
    height: 60,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  allContacts: {
    width: widthScreen,
  },
});
