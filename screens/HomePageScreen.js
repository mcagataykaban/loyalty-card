import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import SideButton from "../components/HomePage/SideButton";
import Gravatar from '../components/HomePage/Gravatar'
import Colors from '../constants/Colors'
import { Ionicons } from '@expo/vector-icons';
import HomeCoupon from '../components/HomePage/HomeCoupon'
import MainButton from '../components/HomePage/MainButton'


const HomePageScreen = (props) => {
  return (
    <View style={styles.screen}>
      <StatusBar />
      <View style={styles.topGroup}>
          <SideButton style={styles.leftSideButton} onPress={()=>{}}><Ionicons name="home" size={29} color="white" /></SideButton>
          <Gravatar/>
          <SideButton style={styles.rigthSideButton}><Ionicons name="navigate" size={29} color="white" /></SideButton>
      </View>
      <View style={styles.midGroup}>
        <HomeCoupon onSelectC={()=>{props.navigation.navigate("Coupon")}}/>
                <HomeCoupon onSelectC={()=>{props.navigation.navigate("Coupon")}} style={styles.homeCoupon} />
                <HomeCoupon onSelectC={()=>{props.navigation.navigate("Coupon")}} style={styles.addCouponButton}><Ionicons name="add" size={50} color="white" /></HomeCoupon>
      </View>
      <View style={styles.bottomGroup}>
        <Button title="Stores" onPress={() => props.navigation.navigate("Stores")}></Button>
        <MainButton onPress={() => {
          navigation.navigate("Stores")}}><Text style={styles.linkTitle}>Rewards</Text></MainButton>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    width: "100%",
    height: "100%",
    flex: 1,
    backgroundColor: "#cfcfcf",
  },
  topGroup: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    flexDirection: "row",
    flex: 1,
  },
  midGroup: {
    flexDirection: "row",
    flex: 1,
    backgroundColor: "red",
    justifyContent: 'center',
    backgroundColor: "#cfcfcf"
  },
  bottomGroup: {
    flex: 1,
    flexDirection : 'row',
    backgroundColor: "#cfcfcf",
    justifyContent: 'space-around'
  },
  leftSideButton:{
    borderTopEndRadius: 10,
    borderBottomEndRadius: 10,
    backgroundColor: Colors.primaryColor
  },
  rigthSideButton:{
    borderBottomLeftRadius: 10,
    borderTopStartRadius: 10,
    backgroundColor: '#fd1174'
  },
  addCouponButton:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  linkTitle:{
    fontSize:22,
    color: 'white',
    
  }
});
export default HomePageScreen;
