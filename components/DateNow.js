import { View, Text } from "react-native";
//
//
export default function DateNow(day) {
  let hourDayNow = new Date().getHours();
  let dayNameNow = new Date().getUTCDay();
  console.log("hourDayNow de DateNow ICI ====> ", hourDayNow);
  console.log("dayNameNow de DateNow  ICI ====> ", dayNameNow);
  //
  const arrayDay = [];
  if (day === 1) {
    arrayDay.push("Mon");
  }
  if (day === 2) {
    arrayDay.push("Tue");
  }
  if (day === 3) {
    arrayDay.push("Wed");
  }
  if (day === 4) {
    arrayDay.push("Thu");
  }
  if (day === 5) {
    arrayDay.push("Fri");
  }
  if (day === 6) {
    arrayDay.push("Sat");
  }
  if (day === 0) {
    arrayDay.push("Sun");
  }
  //console.log(dayName()); // affiche bien Tue
  return (
    <View>
      {restaurants.map(() => {
        return <Text>{item.description}</Text>;
      })}
    </View>
  );
}
