import restaurants from "../assets/data/restaurants.json";
import { useIsFocused } from "@react-navigation/native";
import { useState, useEffect } from "react";
import * as Location from "expo-location";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import {
  Text,
  View,
  Dimensions,
  StatusBar,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
//
const widthScreen = Dimensions.get("window").width;
//
export default function MapScreen() {
  //
  const [coords, setCoords] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);
  //
  // latitude: 48.856691361362294,
  // longitude: 2.3524536761574564,
  //
  useEffect(() => {
    const askPermission = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status === "granted") {
        let location = await Location.getCurrentPositionAsync({});
        //console.log("location =>", location); // console.log permettant de visualiser l'objet obtenu
        const obj = {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        };
        setCoords(obj);
        // console.log("CONSOLE.LOG de obj ===>  ", obj);
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
  //
  const miniMap = restaurants.slice(0, 40); //On affiche que les 40 premiers restaurants quand on arrive sur la page.
  //
  //
  // console.log("2ieme CONSOLE.LOG de coords ===>  ", coords);
  const typeRestaurant = (type) => {
    const tabType = [];
    for (let i = 0; i < miniMap.length; i++) {
      tabType.push(miniMap[i].type);
    }
    return tabType;
  };
  // console.log("CONSOLE.LOG de miniMap.type ====> ", miniMap[0].type);
  // console.log("CONSOLE.LOG de typeRestaurant() ====> ", typeRestaurant());
  // console.log("CONSOLE.LOG de miniMap.length ===> ", miniMap.length);
  // console.log(
  //   "CONSOLE.LOG de miniMap[0].location.lat ===> ",
  // miniMap[0].location.lat
  // );
  // console.log(
  //   "CONSOLE.LOG de miniMap[0].location.lng ===> ",
  // miniMap[0].location.lng
  // );
  return isLoading ? ( // step 1
    <Text>Chargement...</Text> // step 2
  ) : error ? ( // step 3
    <Text>Permission refusée</Text> // step 4
  ) : (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <FocusAwareStatusBar barStyle="light-content" backgroundColor="#533382" />
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 48.856614,
          longitude: 2.3522219,
          latitudeDelta: 0.15,
          longitudeDelta: 0.15,
        }}
        showsUserLocation={true}
        provider={PROVIDER_GOOGLE}
      >
        {miniMap.map((marker, index) => {
          return (
            <Marker
              key={index}
              coordinate={{
                latitude: marker.location.lat,
                longitude: marker.location.lng,
              }}
              title={marker.name}
            >
              <View style={styles.iconMarker} />
            </Marker>
          );
        })}
      </MapView>
    </View>
  );
}
//
//
const styles = StyleSheet.create({
  map: {
    height: "100%",
    width: widthScreen,
  },
  iconMarker: {
    height: 18,
    width: 18,
    backgroundColor: "#7C49C7",
    borderColor: "black",
    borderWidth: 1,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  iconMarker2: {
    height: 18,
    width: 18,
    backgroundColor: "blue",
    borderColor: "black",
    borderWidth: 1,
  },
});
