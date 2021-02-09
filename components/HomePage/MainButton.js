import React from 'react'
import {View, StyleSheet, Text} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Colors from '../../constants/Colors';

const MainButton = (props) => {
    return (
        <TouchableOpacity onPress={props.onSelect}>
        <View style={styles.linkContainer}>
            {props.children}
        </View></TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    linkContainer:{
        width: 'auto',
        height:'auto',
        justifyContent: 'center',
        textAlign: 'center',
        // backgroundColor: Colors.primaryColor,
        paddingVertical: 8,
        paddingHorizontal: 12,
        marginHorizontal:12,
        marginVertical:5,
        flexDirection: 'row',
        alignItems: 'center'
        // shadowColor: "black",
        // shadowOpacity: 0.26,
        // shadowOffset: { width: 0, height: 2 },
        // shadowRadius: 10,
        // elevation: 3,
        // borderRadius: 8,
    },
});

export default MainButton
