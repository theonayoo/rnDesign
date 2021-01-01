import React, { Component } from 'react'
import { Text, View ,StyleSheet,TouchableOpacity,ToastAndroid} from 'react-native'

export default profileScreen=({navigation})=> {
    return (
        <View style={styles.container}>
            <Text> profileScreen </Text>
            <TouchableOpacity style={styles.btnlogout} onPress={()=>{
                navigation.navigate('Splash')
                ToastAndroid.show('Logout Success!',ToastAndroid.LONG)
                }}>
                <Text style={{fontWeight:'bold',fontSize:14,color:'#fff'}}>Logout</Text>
            </TouchableOpacity>
        </View>
    )

}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    btnlogout:{
        paddingHorizontal:50,
        backgroundColor:'green',
        paddingVertical:10,
        marginTop:20,
        borderRadius:50,
        shadowColor:'#000',
        shadowOffset:{width:0,height:10},
        elevation:5,
        
    }
})
