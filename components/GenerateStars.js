import { FontAwesome } from "@expo/vector-icons";
const GenerateStars = (ratingValue) => {
  const starsArray = [];

  // let NumTronc = Math.trunc(ratingValue);

  // if (ratingValue === NumTronc) {
  for (let i = 0; i < ratingValue; i++) {
    starsArray.push(
      <FontAwesome name="star" size={16} color="#DAA520" key={i} />
    );
  }
  // }

  return starsArray;
};

export default GenerateStars;
