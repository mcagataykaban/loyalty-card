import React from 'react'
import { View, Image, StyleSheet } from 'react-native'

const Gravatar = (props) => {
    return (
        <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          //   source={require("../assets/success.png")}
          source={{
            uri:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSStm3L2DrCCYtFIlBjpifQGLSLoJWoA4knFw&usqp=CAU",
          }}
          resizeMode="cover"
        />
      </View>
    )
}
const styles = StyleSheet.create({
    imageContainer: {
        width: 120,
        height: 120,
        borderRadius: 60,
        borderWidth: 3,
        borderColor: "black",
        overflow: "hidden",
        marginVertical: 30,
      },
      image: {
        width: "100%",
        height: "100%",
      },
});

export default Gravatar
