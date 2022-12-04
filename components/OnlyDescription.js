import { View, Text } from "react-native";
//
export default function OnlyDescription(description) {
  //   const schedules = restaurants.description;
  if (description === null || description === "null") {
    return (
      <View>
        <Text></Text>
      </View>
    );
  }
  const arrayDescription = description.split(" ");
  // console.log("arrayDescription ===>", arrayDescription);
  // console.log("arrayDescription.length ===>", arrayDescription.length);

  const open = arrayDescription.findIndex((element) => element === "Open");
  const closed = arrayDescription.findIndex((element) => element === "Closed");
  // console.log("open ===> ", open);
  // console.log("closed ===> ", closed);
  //   const OpeningDays = open + 1;
  // console.log("OpeningDays ===> ", OpeningDays);
  const openTab2 = arrayDescription.slice(0, open);
  // console.log("openTab1 ===> ", openTab2);
  const newTab2 = openTab2.join(" ");
  // console.log(newTab);

  return newTab2;
}
