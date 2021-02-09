import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeCoupon = (props) => {
  return (
    <TouchableOpacity onPress={props.onSelectC}>
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
const styles = StyleSheet.create({
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
