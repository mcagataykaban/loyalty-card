import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from '@expo/vector-icons';
import { BoxShadow } from "react-native-shadow";

const SideButton = (props) => {

  return (
    <TouchableOpacity onPress={props.onClick} styles={styles.sideButton}>
      <View style={{...props.style,...styles.customButton,...styles.shadow3}}>
      {props.children}
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
  sideButton: {
    width: 66,
    height: 36,
    borderRadius: 8,
  },
  customButton: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    elevation: 3
  },
  title: {
    color: "white",
  },
});

export default SideButton;
