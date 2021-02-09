import React from "react";
import { View, Text, StyleSheet } from "react-native";
//status-bar
import { StatusBar } from "expo-status-bar";
//screens
import CouponScreen from "../screens/CouponScreen";
import MyCouponsScreen from "../screens/MyCouponsScreen";
import QRScreen from "../screens/QRScreen";
import StoreProfileScreen from "../screens/StoreProfileScreen";
import StoresScreen from "../screens/StoresScreen";
import HomePageScreen from "../screens/HomePageScreen";
//navigator
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Colors from "../constants/Colors";

const Stack = createStackNavigator();

const LoyaltyNavigator = () => {
  const defaultOptions = {
    headerTitleAlign: "center",
    headerStyle: {
      backgroundColor: '#cfcfcf',
    },
    headerBackTitle: "",
  };
  return (
    <NavigationContainer>
        <StatusBar/>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="HomePage">
        <Stack.Screen name="HomePage" component={HomePageScreen} />
        <Stack.Screen name="Stores" component={StoresScreen} />
        <Stack.Screen name="StoreProfile" component={StoreProfileScreen} />
        <Stack.Screen name="Coupon" component={CouponScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({});
export default LoyaltyNavigator;
