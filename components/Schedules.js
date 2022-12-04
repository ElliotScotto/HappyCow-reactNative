import { View, Text } from "react-native";
//
export default function Schedules(schedule) {
  //   const schedules = restaurants.description;
  if (schedule === null || schedule === "null") {
    <View>
      <Text>Cet établissement ne possède pas de description.</Text>
    </View>;
  } else {
    console.log("CONSOLE.LOG DE schedule ===>", schedule);
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
    // console.log(newTab);

    return newTab === undefined ? (
      <View>
        <Text>Cet établissement ne possède pas de description.</Text>
      </View>
    ) : (
      newTab
    );
  }
}
