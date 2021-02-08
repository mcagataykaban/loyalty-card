import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from '@expo/vector-icons';

const SideButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onClick} styles={styles.sideButton}>
      <View style={{...props.style,...styles.customButton}}>
      {props.children}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  sideButton: {
    width: 66,
    height: 36,
    borderRadius: 8,
  },
  customButton: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
  },
  title: {
    color: "white",
  },
});

export default SideButton;
