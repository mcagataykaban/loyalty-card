import React from "react";
import { View, Text, StyleSheet,Button  } from "react-native";

const StoreProfileScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>StoreProfileScreen!</Text>
      <Button
        title="Go"
        onPress={() => props.navigation.navigate("Coupon")}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default StoreProfileScreen;
