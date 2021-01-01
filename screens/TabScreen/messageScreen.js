import React, { Component } from 'react'
import { Text, View ,StyleSheet} from 'react-native'

export default messageScreen=()=> {
    return (
        <View style={styles.container}>
            <Text> messageScreen </Text>
        </View>
    )

}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
