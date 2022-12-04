import { View, Text } from "react-native";
//
// console.log(restaurants[0].description);
let dayNameNow = new Date().getUTCDay();
let openDay = "Ouvert";
//

export default function Schedules(schedule) {
  //   const schedules = restaurants.description;

  const arraySchedulesWord = schedule.split(" ");
  // console.log("arraySchedulesWord ===>", arraySchedulesWord);
  // console.log("arraySchedulesWord.length ===>", arraySchedulesWord.length);

  const open = arraySchedulesWord.findIndex((element) => element === "Open");
  const closed = arraySchedulesWord.findIndex(
    (element) => element === "Closed"
  );
  // console.log("open ===> ", open);
  // console.log("closed ===> ", closed);
  const OpeningDays = open + 1;
  // console.log("OpeningDays ===> ", OpeningDays);
  const openTab1 = arraySchedulesWord.slice(OpeningDays, closed);
  // console.log("openTab1 ===> ", openTab1);
  const newTab = openTab1.join(" ");
  console.log(newTab);

  return schedule === undefined ? (
    <View>
      <Text>Pas d'horaires fournis</Text>
    </View>
  ) : (
    newTab
  );
}
