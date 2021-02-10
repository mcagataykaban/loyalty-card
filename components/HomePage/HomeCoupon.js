import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeCoupon = (props) => {
  return (
    <TouchableOpacity onPress={props.onSelectC} style={styles.shadow3}>
      <View style={{ ...props.style, ...styles.imageContainer }}>
        {props.children ? (
          props.children
        ) : (
          <Image
            style={styles.image}
            //   source={require("../assets/success.png")}
            source={require("../../assets/images/couponOrnek.png")}
            resizeMode="cover"
          />
        )}
      </View>
    </TouchableOpacity>
  );
};
function elevationShadowStyle(elevation) {
  return {
    elevation,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0.5 * elevation },
    shadowOpacity: 0.3,
    shadowRadius: 0.8 * elevation
  };
}
const styles = StyleSheet.create({
  shadow3: elevationShadowStyle(20),
  imageContainer: {
    width: 110,
    marginHorizontal: 5,
    height: 172,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "white",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
export default HomeCoupon;
