import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const StoresScreen = (props) => {
  return (
    <View navigation={props.navigation} style={styles.container}>
      <Text>StoresScreen!</Text>
      <Button
        title="Go"
        onPress={() => props.navigation.navigate('StoreProfile')}
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

export default StoresScreen;
