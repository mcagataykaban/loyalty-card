import * as React from "react";
import { View, Text, Image, SafeAreaView, StyleSheet } from "react-native";
import { Fontisto } from "@expo/vector-icons";

import { Avatar, Card, ListItem, Button, Icon } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import Colors from '../../constants/Colors'
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import StoreButton from './StoreButton'

// Note: The latest react-native-elements does not work on expo snacks
// due to an error with how it loads fonts, specifically Fontisto
// as a workaround, this demo uses v1.2.4

export default function StoreCard(props) {
  return (
    <TouchableOpacity style={styles.card} onPress={props.onSelect}>
      <View style={styles.cardHeader}>
        <Avatar
          rounded
          size="medium"
          source={{
            uri: props.storeLogo
            ? props.storeLogo
            : "https://dspncdn.com/a1/media/236x/2a/a4/74/2aa47412a6c5bd2109c9a29d7ed0e1a4.jpg",
          }}
        />
        <Text
          style={{ marginLeft: 10, fontFamily: "open-sans-bold", fontSize: 20 }}
        >
          {props.storeName ? props.storeName : "Deneme Cafe"}
        </Text>
        <View style={styles.locationArea}>
          <FontAwesomeIcon
            size={18}
            icon={faLocationArrow}
            color={Colors.primaryColor}
          />
          <Text>30km</Text>
        </View>
      </View>
      <Text style={{ marginBottom: 10 }}>
        {props.storeDescription
          ? props.storeDescription
          : "İşin aslı çoğu coffee shopun aksine biz bir coffee shopumuz olsa diye hayaller kurarak bu serüvene adım atmadık. Bizimkisi daha çok tesadüfler zinciri şeklinde gelişti."}
      </Text>
      <StoreButton />
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    justifyContent: "space-around",
  },
  card: {
    width: "90%",
    borderRadius: 8,
    borderWidth: 1,
    padding: 12,
    marginHorizontal: 5,
    borderColor: "white",
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
  },
  locationArea: {
    flexDirection: "row",
  },
});
