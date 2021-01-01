import React, { Component } from 'react'
import { Text, View ,StyleSheet} from 'react-native'

const notiScreen =({nvaigation})=>{
    return(
        <View style={styles.container}>
            <Text style={{fontFamily:'lucida grande', fontWeight:'bold',color:'#000',fontSize:18}}>Notification</Text>
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default notiScreen;