import restaurants from "../assets/data/restaurants.json";
import { StyleSheet, Image, Text, View } from "react-native";
//
const arrayOfType = [
  "Veg Store",
  "vegan",
  "vegetarian",
  "Health Store",
  "Juice Bar",
  "Professional",
  "B&B",
  "veg-options",
  "Catering",
  "Ice Cream",
  "Delivery",
  "Organization",
  "Food Truck",
  "Other",
  "Bakery",
];
const tabIcon = [];
export default function IconType(type) {
  //
  if (arrayOfType.includes(type)) {
    for (let i = 0; i < 1; i++) {
      if (type === "Veg Store") {
        tabIcon.splice(0, 1);
        tabIcon.push(
          <Image
            style={styles.iconType}
            source={require("../assets/Icons/png/veg-store.png")}
          />
        );
      }
      if (type === "vegan") {
        tabIcon.splice(0, 1);
        tabIcon.push(
          <Image
            style={styles.iconType}
            source={require("../assets/Icons/png/vegan.png")}
          />
        );
      }
      if (type === "vegetarian") {
        tabIcon.splice(0, 1);
        tabIcon.push(
          <Image
            style={styles.iconType}
            source={require("../assets/Icons/png/vegetarian.png")}
          />
        );
      }
      if (type === "veg-options") {
        tabIcon.splice(0, 1);
        tabIcon.push(
          <Image
            style={styles.iconType}
            source={require("../assets/Icons/png/veg-options.png")}
          />
        );
      }
      if (type === "Catering") {
        tabIcon.splice(0, 1);
        tabIcon.push(
          <Image
            style={styles.iconType}
            source={require("../assets/Icons/png/Catering.png")}
          />
        );
      }
      if (type === "Health Store") {
        tabIcon.splice(0, 1);
        tabIcon.push(
          <Image
            style={styles.iconType}
            source={require("../assets/Icons/png/Health-Store.png")}
          />
        );
      }
      if (type === "Ice Cream") {
        tabIcon.splice(0, 1);
        tabIcon.push(
          <Image
            style={styles.iconType}
            source={require("../assets/Icons/png/ice-cream.png")}
          />
        );
      }
      if (type === "Delivery") {
        tabIcon.splice(0, 1);
        tabIcon.push(
          <Image
            style={styles.iconType}
            source={require("../assets/Icons/png/Delivery.png")}
          />
        );
      }
      if (type === "Organization") {
        tabIcon.splice(0, 1);
        tabIcon.push(
          <Image
            style={styles.iconType}
            source={require("../assets/Icons/png/Organization.png")}
          />
        );
      }
      if (type === "Food Truck") {
        tabIcon.splice(0, 1);
        tabIcon.push(
          <Image
            style={styles.iconType}
            source={require("../assets/Icons/png/Food-Truck.png")}
          />
        );
      }
      if (type === "Other") {
        tabIcon.splice(0, 1);
        tabIcon.push(
          <Image
            style={styles.iconType}
            source={require("../assets/Icons/png/Other.png")}
          />
        );
      }
      if (type === "Professional") {
        tabIcon.splice(0, 1);
        tabIcon.push(
          <Image
            style={styles.iconType}
            source={require("../assets/Icons/png/Professional.png")}
          />
        );
      }
      if (type === "Juice Bar") {
        tabIcon.splice(0, 1);
        tabIcon.push(
          <Image
            style={styles.iconType}
            source={require("../assets/Icons/png/Juice-Bar.png")}
          />
        );
      }
      if (type === "Bakery") {
        tabIcon.splice(0, 1);
        tabIcon.push(
          <Image
            style={styles.iconType}
            source={require("../assets/Icons/png/Bakery.png")}
          />
        );
      }
      if (type === "B&B") {
        tabIcon.splice(0, 1);
        tabIcon.push(
          <Image
            style={styles.iconType}
            source={require("../assets/Icons/png/B-B.png")}
          />
        );
      }
    }
  } else tabIcon.push("Unknown");

  return tabIcon;
}
//
//
const styles = StyleSheet.create({
  iconType: {
    width: 24,
    height: 24,
  },
});
