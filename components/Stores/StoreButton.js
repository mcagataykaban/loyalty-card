import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const StoreButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onSelect}>
      <View style={styles.linkContainer}>
        <Text style={styles.buttonText}>Keşfet</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  linkContainer: {
    width: "auto",
    height: "auto",
    justifyContent: "center",
    textAlign: "center",
    paddingHorizontal: 12,
    marginHorizontal: 12,
    paddingVertical: 5,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.primaryColor,
    borderRadius: 8
  },
  buttonText: {
    color: "white",
    fontFamily: "open-sans-bold",
  },
});
export default StoreButton;
