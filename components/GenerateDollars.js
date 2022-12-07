import { Foundation } from "@expo/vector-icons";
//
const GenerateDollars = (dollarPrice) => {
  let arrayDollars = [];
  if (dollarPrice === "Inexpensive") {
    arrayDollars = [
      <Foundation name="dollar" size={18} color="#DAA520" key={1} />,
      <Foundation name="dollar" size={18} color="grey" key={2} />,
      <Foundation name="dollar" size={18} color="grey" key={3} />,
    ];
  } else if (dollarPrice === null) {
    arrayDollars = [
      <Foundation name="dollar" size={18} color="grey" key={1} />,
      <Foundation name="dollar" size={18} color="grey" key={2} />,
      <Foundation name="dollar" size={18} color="grey" key={3} />,
    ];
  }
  return arrayDollars;
};

export default GenerateDollars;
