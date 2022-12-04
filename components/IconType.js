import restaurants from "../assets/data/restaurants.json";
import { StyleSheet, Image, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
//import icon Type
// import bb from "../assets/Icons/b-b.svg";
// import bakery from "../assets/Icons/bakery.svg";
// import catering from "../assets/Icons/catering.svg";
// import coffeeTea from "../assets/Icons/coffee-tea.svg";
// import delivery from "../assets/Icons/delivery.svg";
// import farmersMarket from "../assets/Icons/farmer-s-market.svg";
// import foodTruck from "../assets/Icons/food-truck.svg";
// import healthStore from "../assets/Icons/health-store.svg";
// import iceCream from "../assets/Icons/ice-cream.svg";
// import juiceBar from "../assets/Icons/juice-bar.svg";
// import marketVendor from "../assets/Icons/market-vendor.svg";
// import organization from "../assets/Icons/organization.svg";
// import other from "../assets/Icons/other.svg";
// import spa from "../assets/Icons/spa.svg";
// import vegOptions from "../assets/Icons/veg-options.svg";
// import VegStore from "../assets/Icons/veg-store.png";
// import vegProfessional from "../assets/Icons/vegan-professional.svg";
// import vegan from "../assets/Icons/vegan.svg";
// import vegetarian from "../assets/Icons/vegetarian.svg";
//
const tabIcon = [
  <FontAwesome name="check" size={16} color="#7C49C7" key={1} />, //standard HC //veg store
  // <FontAwesome name="check" size={16} color="#9C4EA1" key={3} />, //vegetarian
  // <FontAwesome name="check" size={16} color="#43A047" key={4} />, //vegan
];
const IconType = () => {
  return tabIcon;
};
//
export default IconType;
//
const styles = StyleSheet.create({
  iconType: {
    width: 30,
    height: 30,
  },
  //   colorVegStore: "#6BA363",
  //   colorVegetarian: "#9C4EA1",
  //   colorVegOptions: "#E17878",
  //   colorBB: "#4498B1",
  //   colorCatering: "#3FBBAF",
  //   colorCoffeeTea: "#CC8F3E",
  //   colorDelivery: "#8DB863",
  //   colorFarmersMarket: "#D3674F",
  //   colorFoodTruck: "#C082F6",
  //   colorHealthStore: "#DCC253",
  //   colorIceCream: "#F16594",
  //   colorJuiceBar: "#FBBC64",
  //   colorMarketVendor: "#525CA8",
  //   colorOrganization: "#A1579C",
  //   colorOther: "#608AC5",
  //   colorProfessional: "#35805C",
  //   colorSpa: "#6BCCDC",
  //   colorVeganOnly: "#43A047",
  //   colorBakery: "#AC8951",
});
