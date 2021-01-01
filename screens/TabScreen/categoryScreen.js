import React, { Component } from 'react'
import { Text, View ,StyleSheet} from 'react-native'

export default categoryScreen=()=> {
    return (
        <View style={styles.container}>
            <Text> categoryScreen </Text>
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
