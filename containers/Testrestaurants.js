{
  /* {restaurants.slice(0, 50).map((restaurant, index) => {
        return (
          <View
            key={index}
            flexDirection={"row"}
            style={[styles.borderStyle2, styles.restaurant]}
          >
            <View flex={1} style={[styles.borderStyle, styles.imgRestaurant]}>
              <Image
                width={95}
                height={95}
                resizeMode={"cover"}
                source={{ uri: restaurant.thumbnail }}
              />
            </View>
            <View flex={3} height={"100%"} style={styles.borderStyle4}>
              <View
                flex={0.7}
                flexDirection={"row"}
                style={[styles.borderStyle, styles.titleAndType]}
              >
                <View flex={0.9} borderColor={"black"} borderWidth={1}>
                  <Text numberOfLines={1} style={styles.textName}>
                    {restaurant.name}
                  </Text>
                </View>
                <View>
                  <Text>Type</Text>
                </View>
              </View>
              <View
                flex={0.7}
                flexDirection={"row"}
                style={[styles.borderStyle, styles.ratingAndDistance]}
              >
                <View alignItems={"center"}>
                  <Text>{GenerateStars(restaurant.rating)}</Text>
                </View>
                <View>
                  <Text>Distance</Text>
                </View>
              </View>
              <View
                flex={0.7}
                flexDirection={"row"}
                style={[styles.borderStyle, styles.schedulesAndPrice]}
              >
                <View>
                  <Text>Horaires </Text>
                </View>
                <View>
                  <Text>Prix</Text>
                </View>
              </View>
              <View
                flex={1.3}
                style={[styles.borderStyle, styles.descriptionRestaurant]}
              >
                <Text numberOfLines={2}>{restaurant.description}</Text>
              </View>
            </View>
          </View>
        );
      })} */
}
