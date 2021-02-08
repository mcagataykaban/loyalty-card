import React from 'react'
import {View, Text,StyleSheet} from 'react-native'

const CouponScreen = (props) => {
    return (
        <View navigation={props.navigation} style={styles.container}>
            <Text>CouponScreen!</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
export default CouponScreen
