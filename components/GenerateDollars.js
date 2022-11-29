import { Foundation } from "@expo/vector-icons";
//
const GenerateDollars = (dollarPrice) => {
  let arrayDollars = [];
  if (dollarPrice === "Inexpensive") {
    arrayDollars = [
      <Foundation name="dollar" size={16} color="#DAA520" />,
      <Foundation name="dollar" size={16} color="grey" />,
      <Foundation name="dollar" size={16} color="grey" />,
    ];
  } else if (dollarPrice === null) {
    arrayDollars = [
      <Foundation name="dollar" size={16} color="grey" />,
      <Foundation name="dollar" size={16} color="grey" />,
      <Foundation name="dollar" size={16} color="grey" />,
    ];
  }
  return arrayDollars;
};

export default GenerateDollars;
