import React from 'react'
import {View, Text,StyleSheet} from 'react-native'

const MyCouponsScreen = (props) => {
    return (
        <View style={styles.container}>
            <Text>MyCouponsScreen!</Text>
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
  
export default MyCouponsScreen
