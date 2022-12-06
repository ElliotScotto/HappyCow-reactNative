import { FontAwesome } from "@expo/vector-icons";
const GenerateStars = (ratingValue) => {
  const starsArray = [];

  for (let i = 0; i < ratingValue; i++) {
    starsArray.push(
      <FontAwesome name="star" size={16} color="#DAA520" key={i} />
    );
    if (i > ratingValue - 1) {
      starsArray.pop();
      starsArray.push(
        <FontAwesome name="star-half" size={16} color="#DAA520" key={i} />
      );
    }
  }
  return starsArray;
};

export default GenerateStars;
