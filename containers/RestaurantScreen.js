import Swiper from "react-native-swiper";
import * as Location from "expo-location";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { useState, useEffect } from "react";
import { useIsFocused } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/core";
import { Ionicons, Feather, FontAwesome5 } from "@expo/vector-icons";
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
} from "react-native";
//Components
import GenerateStars from "../components/GenerateStars";
import GenerateDollars from "../components/GenerateDollars";
//

//
const heightScreen = Dimensions.get("window").height;
const widthScreen = Dimensions.get("window").width;
//
export default function RestaurantScreen({ route }) {
  const navigation = useNavigation();
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
  //
  const [coords, setCoords] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);
  //
  //
  useEffect(() => {
    const askPermission = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status === "granted") {
        let location = await Location.getCurrentPositionAsync({});
        //console.log("location =>", location); // console.log permettant de visualiser l'objet obtenu
        const obj = {
          latitude: location.latitude,
          longitude: location.longitude,
        };
        setCoords(obj);
        setIsLoading(false);
      } else {
        setError(true);
      }
    };
    askPermission();
  }, []);
  //
  //StatusBar
  function FocusAwareStatusBar(props) {
    const isFocused = useIsFocused();
    return isFocused ? <StatusBar {...props} hidden={false} /> : null;
  }
  //
  //
  const markers = [
    {
      id: 1,
      latitude: 48.8564449,
      longitude: 2.4002913,
      title: "Le Reacteur",
      description: "La formation des champion·ne·s !",
    },
  ];
  //
  //
  return isLoading ? ( // step 1
    <Text>Chargement...</Text> // step 2
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
        {Platform.OS === "android" ? (
          <FocusAwareStatusBar
            barStyle="light-content"
            backgroundColor="#533382"
          />
        ) : (
          <FocusAwareStatusBar barStyle="dark-content" />
        )}

        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: widthScreen,
            height: heightScreen * 0.25,
            borderBottomWidth: 8,
            borderBottomColor: "orange",
          }}
        >
          <View flex={1}>
            {!pictures[0] ||
            pictures[0] === "https://www.happycow.net/img/no-image.jpg" ? (
              <View alignItems={"center"}>
                <Ionicons name="restaurant-outline" size={40} color="#7C49C7" />
                <Text>No Image</Text>
              </View>
            ) : (
              <View>
                <Image
                  resizeMode={"cover"}
                  style={styles.mainPicture}
                  source={{ uri: pictures[0] }}
                />
              </View>
            )}
          </View>
        </View>
        <View
          style={{
            paddingHorizontal: 10,
            alignItems: "center",
            justifyContent: "center",
            width: widthScreen,
            height: heightScreen * 0.4,
          }}
        >
          <Text>{name}</Text>
          <Text>{type}</Text>
          <Text>{GenerateStars(rating)}</Text>
          <Text>{GenerateDollars(price)}</Text>
          <Text>{description}</Text>
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "space-evenly",
            width: widthScreen,
            height: heightScreen * 0.2,
            borderTopWidth: 1,
            borderTopColor: "lightgrey",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity style={styles.shareLink}>
            <View style={styles.iconShareLink}>
              <Text>Icone</Text>
            </View>
            <View style={styles.nameShareLink}>
              <Text style={styles.textShareLink}>Site web</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.shareLink}>
            <View style={styles.iconShareLink}>
              <Text>Icone</Text>
            </View>
            <View style={styles.nameShareLink}>
              <Text style={styles.textShareLink}>Ajouter un avis</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.shareLink}>
            <View style={styles.iconShareLink}>
              <Text>Icone</Text>
            </View>
            <View style={styles.nameShareLink}>
              <Text style={styles.textShareLink}>Ajouter une photo</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.shareLink}>
            <View style={styles.iconShareLink}>
              <Text>Icone</Text>
            </View>
            <View style={styles.nameShareLink}>
              <Text style={styles.textShareLink}>Partager</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <MapView
            // La MapView doit obligatoirement avoir des dimensions
            style={styles.map}
            initialRegion={{
              latitude: 48.856614,
              longitude: 2.3522219,
              latitudeDelta: 0.3,
              longitudeDelta: 0.3,
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
          <View style={styles.allContacts}>
            <View style={styles.contact}>
              <View style={styles.iconContact}>
                <Feather name="clock" size={24} color="#533382" />
              </View>
              <View style={styles.contactInfo}>
                <Text>Heures d'ouverture</Text>
              </View>
            </View>
            <View style={styles.contact}>
              <View style={styles.iconContact}>
                <Feather name="phone" size={24} color="#533382" />
              </View>
              <View style={styles.contactInfo}>
                <Text>Appeler {phone}</Text>
              </View>
            </View>
            <View style={styles.contact}>
              <View style={styles.iconContact}>
                <Feather name="link" size={24} color="#533382" />
              </View>
              <View style={styles.contactInfo}>
                <Text>Site web</Text>
              </View>
            </View>
            <View style={styles.contact}>
              <View style={styles.iconContact}>
                <FontAwesome5 name="facebook" size={24} color="#533382" />
              </View>
              <View style={styles.contactInfo}>
                <Text>Facebook</Text>
              </View>
            </View>
            <View style={styles.contact}>
              <View style={styles.iconContact}>
                <FontAwesome5 name="instagram" size={24} color="#533382" />
              </View>
              <View style={styles.contactInfo}>
                <Text>Instagram</Text>
              </View>
            </View>
            <View style={styles.contact}>
              <View style={styles.iconContact}>
                <Ionicons name="trail-sign-outline" size={24} color="#533382" />
              </View>
              <View style={styles.contactInfo}>
                <Text>Itinéraire</Text>
              </View>
            </View>
          </View>
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
  },
  shareLink: {
    borderColor: "purple",
    borderWidth: 1,
    alignItems: "center",
    height: 100,
    width: 70,
    justifyContent: "space-between",
  },
  iconShareLink: {
    borderColor: "blue",
    borderWidth: 1,
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  nameShareLink: {},
  textShareLink: { fontSize: 14, color: "grey" },
  map: {
    marginTop: 20,
    height: heightScreen * 0.25,
    width: widthScreen,
    paddingHorizontal: 10,
  },
  addressStyle: {
    backgroundColor: "lightgrey",
    height: 60,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  allContacts: {
    paddingHorizontal: 10,
  },
  contact: {
    borderTopColor: "grey",
    borderTopWidth: 1,
    height: 60,
    alignItems: "center",
    flexDirection: "row",
  },
  iconContact: {
    borderWidth: 1,
    borderColor: "black",
    width: 50,
    height: 50,
    marginRight: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  contactInfo: { borderWidth: 1, borderColor: "black" },
});
