import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, StyleSheet, Button,Screen, Keyboard,TouchableWithoutFeedback } from "react-native";

import Search from "../components/Stores/Search";
import StoreCard from '../components/Stores/StoreCard'


const StoresScreen = (props) => {
  return (
    <TouchableWithoutFeedback  onPress={()=>{Keyboard.dismiss()}}>
    <View navigation={props.navigation} style={styles.container}>
      <Search/>
      <StoreCard/>
      <Text>StoresScreen!</Text>
      <Button
        title="Go"
        onPress={() => props.navigation.navigate('StoreProfile')}
      />
    </View></TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#cfcfcf",
    alignItems: "center",
    paddingTop:'15%',
    // justifyContent: "center",
  },
  statusBar:{
    height: 20
  }
});

export default StoresScreen;
