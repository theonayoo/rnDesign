import React, { Component } from 'react'
import { Text, View , StyleSheet,Image,Dimensions} from 'react-native';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default detailScreen=({route})=> {
    const { data } = route.params
    return (
        <View style={styles.container}>
            <Image source={data.image} style={styles.listImg}/>
            <Text style={styles.course}> {data.title} </Text>
            <Text style={styles.intructor}>Instructor - {data.intructor}</Text>
            <Text style={styles.description}>{data.desc}</Text>
            <Text style={styles.date}>Post - {data.dateTime}</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center'
    },
    listImg:{
        height:height/4,
        width:width-30,
        borderRadius:2,
        marginTop:20
    },
    description:{
        textAlign:'center',
        marginTop:10,
    },
    intructor:{
        marginTop:10,
        alignSelf:'flex-start',
        marginLeft:20,
        fontWeight:'bold',
        fontSize:16
    },
    course:{
        fontWeight:'bold',
        fontSize:18,
        marginTop:20,
        color:'green'
    },
    date:{
        alignSelf:'flex-end',
        marginTop:20,
        marginRight:20
    }
})
