import { Foundation } from "@expo/vector-icons";
const GenerateStars = (ratingValue) => {
  const starsArray = [];
  for (let i = 0; i < 5; i++) {
    if (i < ratingValue) {
      starsArray.push(
        <Foundation name="star" size={16} color="#DAA520" key={i} />
      );
    } else {
      starsArray.push(
        <Foundation name="star" size={16} color="grey" key={i} />
      );
    }
  }

  return starsArray;
};
export default GenerateStars;
