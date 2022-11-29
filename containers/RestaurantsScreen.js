import restaurants from "../assets/data/restaurants.json";
import { useState } from "react";
import GenerateStars from "../components/GenerateStars";
import GenerateDollars from "../components/GenerateDollars";
import { Ionicons } from "@expo/vector-icons";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  Image,
  FlatList,
} from "react-native";
//
//console.log(restaurants.length); //924
//on affiche seulement les 50 premiers résultats avant de trouver une solution pour le chargement de toutes les photos au chargement
export default function RestaurantsScreen() {
  return (
    <View style={styles.mainContainerRestaurants}>
      <FlatList
        data={restaurants}
        keyExtractor={(item) => String(item.placeId)}
        renderItem={({ item }) => (
          <View
            flexDirection={"row"}
            style={[styles.borderStyle2, styles.restaurant]}
          >
            <View flex={1} style={[styles.borderStyle, styles.imgRestaurant]}>
              {item.thumbnail ? ( //TESTER l'affichage de la photo avec un "!" devant "item.thumbnail"
                <View alignItems={"center"}>
                  <Ionicons
                    name="restaurant-outline"
                    size={40}
                    color="#7C49C7"
                  />
                  <Text>Image not loaded</Text>
                </View>
              ) : (
                <Image
                  width={95}
                  height={95}
                  resizeMode={"cover"}
                  source={{ uri: item.thumbnail }}
                />
              )}
            </View>
            <View flex={3} height={"100%"} style={styles.borderStyle4}>
              <View
                flex={0.7}
                flexDirection={"row"}
                style={[styles.borderStyle, styles.titleAndType]}
              >
                <View flex={0.9} borderColor={"black"} borderWidth={1}>
                  <Text numberOfLines={1} style={styles.textName}>
                    {item.name}
                  </Text>
                </View>
                <View>
                  <Text>Type</Text>
                </View>
              </View>
              <View
                flex={0.7}
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
                <View>
                  <Text>Horaires </Text>
                </View>
                <View>
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
        )}
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
    borderColor: "blue",
    borderWidth: 1,
    marginTop: 7,
    marginLeft: 7,
    marginRight: 7,

    // padding: 1,
  },
  imgRestaurant: {
    borderColor: "black",
    borderWidth: 1,
    width: 100,
    height: 100,
    marginLeft: 2,
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  borderStyle: { borderColor: "black", borderWidth: 1 },

  // borderStyle3: { borderColor: "gold", borderWidth: 1, padding: 1 },
  borderStyle4: {
    // borderColor: "green",
    // borderWidth: 1,
    // padding: 1,
    height: "100%",
  },
  titleAndType: {
    justifyContent: "space-between",
    paddingLeft: 7,
    paddingRight: 7,
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
